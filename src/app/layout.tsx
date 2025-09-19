import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RevUp — Car Blog",
  description: "Honest car reviews, buying guides, and driving tips.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>\n        <header className="border-b border-black/10 dark:border-white/15">
          <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg">RevUp</Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/blog" className="hover:underline">Blog</Link>
            </nav>
          </div>
        </header>
        <main className="mx-auto max-w-4xl px-6 py-8">{children}</main>
        <footer className="border-t border-black/10 dark:border-white/15">
          <div className="mx-auto max-w-4xl px-6 py-6 text-sm text-black/60 dark:text-white/70">
            © {new Date().getFullYear()} RevUp. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
