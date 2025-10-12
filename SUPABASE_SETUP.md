# SuperBase Email Collection Setup Guide

## Step 1: Create SuperBase Project

1. Go to [https://supabase.com](https://supabase.com) and sign up/login
2. Click "New Project"
3. Choose your organization or create one
4. Fill in project details:
   - **Name:** Bucket List Doctor
   - **Database Password:** (create a strong password - save it!)
   - **Region:** Choose closest to your users
5. Click "Create new project" and wait ~2 minutes for setup

## Step 2: Create Database Table

1. In your SuperBase dashboard, go to **Table Editor** (left sidebar)
2. Click "Create a new table"
3. Configure the table:
   - **Name:** `newsletter_subscribers`
   - **Enable Row Level Security (RLS):** ✅ (we'll configure this)

4. Add columns (SuperBase auto-creates `id` and `created_at`):
   
   | Column Name | Type | Default | Nullable | Extra |
   |------------|------|---------|----------|-------|
   | id | uuid | gen_random_uuid() | ❌ | Primary Key (auto-created) |
   | created_at | timestamptz | now() | ❌ | Auto-created |
   | email | text | - | ❌ | Unique ✅ |
   | subscribed | bool | true | ❌ | - |

5. Click "Save"

## Step 3: Configure Row Level Security (RLS)

1. Go to **Authentication > Policies** (left sidebar)
2. Find `newsletter_subscribers` table
3. Click "New Policy"
4. Create policy for **INSERT**:
   - **Policy name:** "Enable insert for everyone"
   - **Allowed operation:** INSERT
   - **Target roles:** anon, authenticated
   - **USING expression:** `true`
   - **WITH CHECK expression:** `true`
5. Click "Review" and "Save policy"

## Step 4: Get API Keys

1. Go to **Project Settings** (gear icon in left sidebar)
2. Click **API** in the left menu
3. Copy these values:
   - **Project URL:** `https://xxxxx.supabase.co`
   - **anon/public key:** `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...`

## Step 5: Configure Environment Variables

1. In your project root, create a file called `.env.local`
2. Add your SuperBase credentials:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here
```

3. Make sure `.env.local` is in your `.gitignore` (it should be by default)

## Step 6: Install SuperBase Client

Run this command in your project:

```bash
npm install @supabase/supabase-js
```

## Step 7: Test the Integration

1. Start your development server: `npm run dev`
2. Go to `http://localhost:8000`
3. Scroll to the footer newsletter signup
4. Enter a test email and click "Subscribe"
5. Check your SuperBase dashboard **Table Editor** > `newsletter_subscribers`
6. You should see your test email entry!

## Step 8: View Your Subscribers

To view all subscribers:
1. Go to **Table Editor**
2. Click on `newsletter_subscribers`
3. You'll see all email addresses with timestamps

To export subscribers:
1. Click the three dots (•••) at top right
2. Select "Export as CSV"
3. Use this list for your email campaigns

## Optional: Email Confirmation (Future Enhancement)

For production, you might want to:
1. Set up SuperBase Edge Functions for sending confirmation emails
2. Add a `confirmed` column to track email verification
3. Send a confirmation link before fully subscribing users

## Security Notes

- ✅ Row Level Security is enabled
- ✅ Only INSERT operations are allowed anonymously
- ✅ Database credentials are in `.env.local` (not committed)
- ✅ Using the `anon` key (not the `service_role` key)

## Troubleshooting

### Error: "Invalid API key"
- Double-check your `.env.local` values
- Make sure you copied the **anon/public** key, not the service_role key
- Restart your dev server after changing `.env.local`

### Error: "Row level security policy violation"
- Make sure you created the INSERT policy
- Check that the policy allows `anon` role
- Verify the policy USING expression is `true`

### Subscribers not showing up
- Check the browser console for errors
- Verify your internet connection
- Check SuperBase project status (dashboard homepage)

## Support

- SuperBase Docs: [https://supabase.com/docs](https://supabase.com/docs)
- SuperBase Discord: [https://discord.supabase.com](https://discord.supabase.com)

