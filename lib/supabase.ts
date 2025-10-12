import { createClient } from '@supabase/supabase-js';

// SuperBase configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';

// Check if SuperBase is configured
const isSupabaseConfigured = 
  process.env.NEXT_PUBLIC_SUPABASE_URL && 
  process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co';

// Create SuperBase client (with placeholders if not configured)
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for our newsletter subscribers
export interface NewsletterSubscriber {
  id?: string;
  email: string;
  created_at?: string;
  subscribed?: boolean;
}

// Function to add a newsletter subscriber
export async function addNewsletterSubscriber(email: string): Promise<{
  success: boolean;
  message: string;
  data?: NewsletterSubscriber;
}> {
  // Check if SuperBase is configured
  if (!isSupabaseConfigured) {
    console.warn('SuperBase not configured. Email collection disabled.');
    return {
      success: true,
      message: 'Thank you! Email collection will be enabled soon.',
    };
  }

  try {
    // Check if email already exists
    const { data: existingSubscriber, error: checkError } = await supabase
      .from('newsletter_subscribers')
      .select('email, subscribed')
      .eq('email', email)
      .single();

    if (checkError && checkError.code !== 'PGRST116') {
      // PGRST116 is "no rows returned" which is fine
      throw checkError;
    }

    // If subscriber exists
    if (existingSubscriber) {
      if (existingSubscriber.subscribed) {
        return {
          success: false,
          message: 'You are already subscribed to our newsletter!',
        };
      } else {
        // Resubscribe if previously unsubscribed
        const { data, error } = await supabase
          .from('newsletter_subscribers')
          .update({ subscribed: true })
          .eq('email', email)
          .select()
          .single();

        if (error) throw error;

        return {
          success: true,
          message: 'Welcome back! You have been resubscribed.',
          data,
        };
      }
    }

    // Add new subscriber
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email, subscribed: true }])
      .select()
      .single();

    if (error) throw error;

    return {
      success: true,
      message: 'Thank you for subscribing! Check your email for confirmation.',
      data,
    };
  } catch (error: any) {
    console.error('Error adding newsletter subscriber:', error);
    return {
      success: false,
      message: error.message || 'An error occurred. Please try again later.',
    };
  }
}

// Function to unsubscribe (for future use)
export async function unsubscribeNewsletter(email: string): Promise<{
  success: boolean;
  message: string;
}> {
  try {
    const { error } = await supabase
      .from('newsletter_subscribers')
      .update({ subscribed: false })
      .eq('email', email);

    if (error) throw error;

    return {
      success: true,
      message: 'You have been unsubscribed from our newsletter.',
    };
  } catch (error: any) {
    console.error('Error unsubscribing:', error);
    return {
      success: false,
      message: error.message || 'An error occurred. Please try again later.',
    };
  }
}

