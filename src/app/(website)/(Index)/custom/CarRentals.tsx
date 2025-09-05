import TabPanelControl from '@/components/defaults/TabPanelControl';
import { ITabItem } from '@/types/default.type';
import React from 'react';
import CarTabSection from './TabContent/CarTabSection';

const CarsTab: ITabItem[] = [
  {
    value: 'car_rentals',
    label: 'Car Rental',
    content: <CarTabSection />,
  },
  {
    value: 'airport_transfer',
    label: 'Airport Transfer',
    content: <h3>Airport Transfer Section Here</h3>,
  },
];

const CarRentals = () => {
  return <TabPanelControl tabs={CarsTab} />;
};

export default CarRentals;
