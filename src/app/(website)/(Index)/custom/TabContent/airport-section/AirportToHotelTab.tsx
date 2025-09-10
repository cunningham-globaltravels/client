import React from 'react';
import AirportTransitionForm from '../../AirportTransitionForm';

const AirportToHotelTab = () => {
  return (
    <div className='booking-content'>
      <AirportTransitionForm isAirportFirst={true} />
    </div>
  );
};

export default AirportToHotelTab;
