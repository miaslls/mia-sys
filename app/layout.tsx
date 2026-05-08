import './globals.css';

import type { Metadata } from 'next';
import { Cormorant_Garamond, Manrope } from 'next/font/google';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
});

export const metadata: Metadata = {
  title: 'MiaSys Design System',
  description: 'Botanical Engineering for the Modern Web',
  // icons: 'TODO:'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang='en'
      className={`${manrope.variable} ${cormorantGaramond.variable}`}
    >
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
