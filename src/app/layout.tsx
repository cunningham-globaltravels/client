import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import './globals.css';
import StoreProvider from './StoreProvider';

const mulish = Mulish({
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Cunningham Travels',
  description: 'Your Ultimate Travel & Rental Solution',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${mulish.className} antialiased`}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
