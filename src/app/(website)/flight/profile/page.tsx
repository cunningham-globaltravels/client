'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ICategoryTabItem } from '@/types/default.type';
import CategoryProfile from './CategoryProfile';
import CheapestCategory from './category/CheapestCategory';

type TFlightProfile = {
  comingFrom: string;
  goingTo: string;
  destination: string;
  return: string;
};

const FlightProfilePage = () => {
  const router = useRouter();
  const [profile, setProfile] = useState<TFlightProfile | null>(null);

  const categoryTabs: ICategoryTabItem[] = [
    {
      value: 'cheapest',
      label: 'Cheapest',
      amount: '$1,189',
      timeline: '35h 05m',
      content: <CheapestCategory />,
    },
    {
      value: 'best',
      label: 'Best',
      amount: '$1,189',
      timeline: '25h 15m',
      // content: <RegistrationForm />,
    },
    {
      value: 'fastest',
      label: 'Fastest',
      amount: '$5,932',
      timeline: '17h 30m',
      // content: <RegistrationForm />,
    },
    {
      value: 'others',
      label: 'Other Sort',
      // content: <RegistrationForm />,
    },
  ];

  useEffect(() => {
    const stored = localStorage.getItem('flightprofile');
    if (!stored) {
      router.push('/');
      return;
    }
    setProfile(JSON.parse(stored));
  }, [router]);

  if (!profile) return null;
  return (
    <main className=' flex p-0 max-w-full transition min-h-screen'>
      <div className=' relative flex-[1_1_auto] max-w-full'>
        <CategoryProfile tabs={categoryTabs} />
      </div>
    </main>
  );
};

export default FlightProfilePage;
