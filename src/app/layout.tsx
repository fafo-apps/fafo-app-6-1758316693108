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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}>
        <header className="glass sticky top-0 z-40 relative">
          <div className="mx-auto max-w-4xl px-6 py-4 flex items-center justify-between">
            <Link href="/" className="font-extrabold text-lg funky-link">RevUp</Link>
            <nav className="flex items-center gap-6 text-sm">
              <Link href="/" className="funky-link">Home</Link>
              <Link href="/blog" className="funky-link">Blog</Link>
            </nav>
          </div>
          <div aria-hidden className="funky-sep" />
        </header>
        <main className="mx-auto max-w-4xl px-6 py-8">{children}</main>
        <footer className="glass">
          <div className="mx-auto max-w-4xl px-6 py-6 text-sm text-black/60 dark:text-white/70">
            © {new Date().getFullYear()} RevUp. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
