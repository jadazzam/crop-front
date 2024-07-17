import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Cormorant_Infant } from 'next/font/google';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Navigation from '@/components/navigation';
import { Claims, getSession } from '@auth0/nextjs-auth0';

const cormorant = Cormorant_Infant({ weight: ['400', '500', '700'], subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Save my crop',
  description: 'Protect, Preserve and Thrive'
};

export default async function RootLayout({
                                           children
                                         }: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  const user: Claims | undefined = session?.user;
  return (
    <html lang="en">
    <UserProvider user={user}>
      <body className={cormorant.className}>
      <Navigation user={user} />
      <div>{children}</div>
      </body>
    </UserProvider>
    </html>
  );
}