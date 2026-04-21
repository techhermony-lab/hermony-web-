import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Cairo } from 'next/font/google';
import { LanguageProvider } from '@/app/contexts/LanguageContext';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const cairo = Cairo({
  variable: '--font-cairo',
  subsets: ['arabic', 'latin'],
});

export const metadata: Metadata = {
  title: 'Hermony | هرموني',
  description:
    'Hermony — Your trusted partner in pharmaceuticals, medical supplies, and cosmetics in Yemen. هرموني — شريكك الموثوق في الأدوية والمستلزمات الطبية ومستحضرات التجميل في اليمن.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${inter.variable} ${cairo.variable}`}>
      <body>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
