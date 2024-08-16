import './globals.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import type { Metadata } from 'next';
import { Cormorant_Infant } from 'next/font/google';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Navigation from '@/components/navigation';
import { Claims, getSession } from '@auth0/nextjs-auth0';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { StyledRoot } from './StyledRoot';

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
      <AppRouterCacheProvider>
        <StyledRoot>
          <Navigation user={user} />
          {children}
        </StyledRoot>
      </AppRouterCacheProvider>
      </body>
    </UserProvider>


    </html>
  );
}