'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import { ITabItem } from '@/types/default.type';
import gsap from 'gsap';
import { Card, CardContent } from '@/components/ui/card';

interface ICustomTabPanelProps {
  tabs: ITabItem[];
}

const HeroTabPanel: React.FC<ICustomTabPanelProps> = ({ tabs }) => {
  const firstTabValue = tabs[0]?.value || '';
  const [activeTab, setActiveTab] = useState<string>(firstTabValue || 'flight');
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
    <Tabs value={activeTab} defaultValue={firstTabValue} onValueChange={setActiveTab} className='relative w-full'>
      <TabsList className='bg-[#121826CC] flex flex-wrap md:flex-nowrap w-full justify-start gap-2 overflow-x-auto'>
        {tabs.map(({ value, label, icon: Icon }) => (
          <TabsTrigger
            key={value}
            value={value}
            className='text-white data-[state=active]:text-black text-base cursor-pointer'
          >
            <div className='flex gap-2 items-center justify-center w-full'>
              {Icon ? <Icon className=' h-4 w-4' /> : ''}
              <span>{label}</span>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>
      {tabs.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} ref={(el) => (contentRefs.current[tab.value] = el)}>
          <Card className='card-wrapper destination-card absolute top-[4px] left-1/2 transform -translate-x-1/2 -translate-y-[9%] w-full lg:w-[130%] max-w-[80rem] bg-white backdrop-blur-md border-white/20 text-gray-700 pointer-events-auto hover:bg-white/80 transition-all cursor-pointer group'>
            <CardContent className='px-4 box-border rounded-xl'>{tab.content}</CardContent>
          </Card>
        </TabsContent>
      ))}
    </Tabs>
  );
};

export default HeroTabPanel;
