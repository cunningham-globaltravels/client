// src/app/(website)/(Index)/(mobile)/_component/HeroSectionMobile

import { ITabItemMB } from '@/types/default.type';
import React from 'react';
import { FaPlaneDeparture, FaHome, FaCar } from 'react-icons/fa';
import HeroTabPanelMobile from './HeroTabPanelMobile';
import FlightSession from '../../custom/FlightSession';
import HotelHomes from '../../custom/HotelHomes';
import CarRentals from '../../custom/CarRentals';
import { TbSocial } from 'react-icons/tb';
import AttractionTabContent from '@/components/website/attraction-tours/AttractionTabContent';

const HeroSectionMobile = () => {
  const tabs: ITabItemMB[] = [
    {
      value: 'flight',
      icon: <FaPlaneDeparture />,
      content: <FlightSession />,
    },
    {
      value: 'hotel_home',
      icon: <FaHome />,
      content: <HotelHomes />,
    },
    {
      value: 'car',
      icon: <FaCar />,
      content: <CarRentals />,
    },
    {
      value: 'attention',
      icon: <TbSocial />,
      content: <AttractionTabContent />,
    },
  ];
  return (
    <section className='flex flex-col items-center w-full py-10 px-0'>
      <div className='flex flex-col py-0 px-3 items-start gap-5 w-full'>
        <HeroTabPanelMobile tabs={tabs} />
      </div>
    </section>
  );
};

export default HeroSectionMobile;
