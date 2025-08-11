import React from 'react';
import { FaPlaneDeparture, FaHome, FaTrain, FaCar } from 'react-icons/fa';
import { TbSocial } from 'react-icons/tb';
import FlightSession from './FlightSession';
import HeroTabPanel from './HeroTabPanel';
import HotelHomes from './HotelHomes';
//import BookingForm from '@/components/sample/BookingForm';

const ServiceInstance = () => {
  const tabs = [
    {
      value: 'flight',
      label: 'Flight',
      icon: FaPlaneDeparture,
      content: <FlightSession />,
    },
    {
      value: 'hotel_home',
      label: 'Hotels & Homes',
      icon: FaHome,
      content: <HotelHomes />,
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
      icon: TbSocial,
      content: <p>Travel extra here.</p>,
    },
  ];
  return (
    <div className='container call-action-index flex justify-center items-center'>
      <div className=' row card-wrapper'>
        <HeroTabPanel tabs={tabs} />
      </div>
    </div>
  );
};

export default ServiceInstance;
