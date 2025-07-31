import React from 'react';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import '../globals.css';

const mulish = Mulish({
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Login and Register',
  description: 'Cunningham Authentication page',
};

interface ILayoutProps {
  children: React.ReactNode;
}

export default function AuthenticationLayout({ children }: ILayoutProps) {
  return (
    <html lang='en'>
      <body className={`${mulish.className} antialiased`}>
        <main className='min-h-screen'>{children}</main>
      </body>
    </html>
  );
}
