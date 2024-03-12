import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import { css } from "@/panda/css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Save my crop !",
  description: "Protect, Preserve and Thrive",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <div className={css({})}>{children}</div>
      </body>
    </html>
  );
}