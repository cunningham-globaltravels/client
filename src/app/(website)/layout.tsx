import React from 'react';
import type { Metadata } from 'next';
import TopNavigation from '@/components/website/TopNavigation';
import FooterSection from '@/components/website/FooterSection';

export const metadata: Metadata = {
  title: 'Cunningham | Explore Destination',
  description: 'Explore Top Destinations',
};

interface ILayoutProps {
  children: React.ReactNode;
}

export default function WebsiteLayout({ children }: ILayoutProps) {
  return (
    <main className=' bg-gray-100'>
      <TopNavigation />
      {children}
      <FooterSection />
    </main>
  );
}
