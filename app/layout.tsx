import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Providers } from '@/components/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'TWS Innovations - Web, Mobile & Business Solutions',
  description: 'Professional web development, mobile development, UI/UX design, and business solutions by TWS Innovations.',
  keywords: ['web development', 'mobile development', 'UI/UX design', 'business solutions'],
  authors: [{ name: 'TWS Innovations' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://twsinnovations.com',
    title: 'TWS Innovations - Web, Mobile & Business Solutions',
    description: 'Professional web development, mobile development, UI/UX design, and business solutions.',
    siteName: 'TWS Innovations',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}