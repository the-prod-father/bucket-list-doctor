import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export default async function AdminCmsRedirect() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect('/admin/login?callbackUrl=/admin/cms');
  }

  redirect('/admin/dashboard');
}

