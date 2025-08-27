import React from 'react';
import type { Metadata } from 'next';
import { Mulish } from 'next/font/google';
import '../globals.css';
import StoreProvider from '../StoreProvider';
import TopNavigation from '@/components/website/TopNavigation';
import FooterSection from '@/components/website/FooterSection';

const mulish = Mulish({
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Cunningham | Explore Destination',
  description: 'Explore Top Destinations',
};

interface ILayoutProps {
  children: React.ReactNode;
}

export default function WebsiteLayout({ children }: ILayoutProps) {
  return (
    <html lang='en'>
      <body className={`${mulish.className} antialiased`}>
        <StoreProvider>
          <TopNavigation />
          <main className='bg-gray-100 text-[#191E3B]'>{children}</main>
          <FooterSection />
        </StoreProvider>
      </body>
    </html>
  );
}
