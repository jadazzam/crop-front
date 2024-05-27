import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import Navigation from "@/components/navigation";
import { css } from "@/panda/css";
import { getSession } from "@auth0/nextjs-auth0";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Save my crop",
  description: "Protect, Preserve and Thrive",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getSession();
  return (
    <html lang="en">
      <UserProvider user={session?.user}>
        <body className={inter.className}>
          <Navigation />
          <div className={css({})}>{children}</div>
        </body>
      </UserProvider>
    </html>
  );
}