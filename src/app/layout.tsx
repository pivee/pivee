import TopNavigation from '@/components/TopNavigation';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Pivee',
  description: 'Engineer, Teacher, Entrepreneur',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="cmyk">
      <body className={inter.className}>
        <TopNavigation />
        <div className="min-h-screen bg-base-200 py-10">
          {children}
        </div>
      </body>
    </html>
  );
}
