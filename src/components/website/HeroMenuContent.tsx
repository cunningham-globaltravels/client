'use client';

import React, { useEffect, useRef, useState } from 'react';
import { FaBriefcase, FaCar, FaHome, FaPlaneDeparture, FaTrain } from 'react-icons/fa';
import { TbSocial } from 'react-icons/tb';
import { gsap } from 'gsap';
import { Tabs, TabsList, TabsTrigger } from '../ui/tabs';

// interface ICustomTabPanelProps {
//   tabs: ITabItem[];
// }
const tabs = [
  {
    value: 'flight',
    label: 'Flight',
    icon: FaPlaneDeparture,
    // content: <FlightSession />,
  },
  {
    value: 'hotel_home',
    label: 'Hotels & Homes',
    icon: FaHome,
    // content: <HotelHomes />,
  },
  {
    value: 'train',
    label: 'Trains',
    icon: FaTrain,
    content: <p>Book your Train ticket with us.</p>,
  },
  {
    value: 'car',
    label: 'Cars',
    icon: FaCar,
    content: <p>Board a Bus to your destination.</p>,
  },
  {
    value: 'attention',
    label: 'Attentions & Tours',
    icon: TbSocial,
    content: <p>Attention and Tours here.</p>,
  },
  {
    value: 'travel',
    label: 'Travel Extra',
    icon: FaBriefcase,
    content: <p>Travel extra here.</p>,
  },
];

const HeroMenuContent = ({ serviceType }: { serviceType: number }) => {
  const firstTabValue = tabs[serviceType - 1]?.value || '';
  const [activeTab, setActiveTab] = useState<string>(firstTabValue);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const animateIn = (key: string) => {
    const el = contentRefs.current[key];
    if (el) {
      gsap.fromTo(el, { autoAlpha: 0, y: 20 }, { duration: 1, autoAlpha: 1, y: 0 });
    }
  };
  useEffect(() => {
    animateIn(activeTab);
  }, [activeTab]);

  return (
    <div className='container flex justify-center items-center'>
      <div className='row mt-4'>
        <Tabs value={activeTab} defaultValue={firstTabValue} onValueChange={setActiveTab} className='relative w-full'>
          <TabsList className='flex space-x-4 w-full justify-start gap-2 overflow-x-auto rounded-none bg-transparent'>
            {tabs.map(({ value, label, icon: Icon }) => (
              <TabsTrigger
                key={value}
                value={value}
                className='text-base cursor-default data-[state=active]:border-b-2 data-[state=active]:border-b-white rounded-none justify-baseline flex-none focus-visible:border-none focus-visible:ring-ring/0 focus-visible:outline-none  text-[#666666] data-[state=active]:text-white overflow-hidden data-[state=active]:shadow-none data-[state=active]:bg-transparent'
              >
                <div className='flex gap-2 items-center justify-center w-full'>
                  {Icon ? <Icon className=' h-4 w-4' /> : ''}
                  <span>{label}</span>
                </div>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
};

export default HeroMenuContent;
