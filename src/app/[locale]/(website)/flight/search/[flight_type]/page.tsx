// src/app/[locale]/(website)/flight/search/[flight_type]/page.tsx
import { FlightTypeEnum } from '@/lib/schemas/enums/flight-types.enum';
import React from 'react';
import FlightSearchClient from './FlightSearchClient';

export default async function FlightSerachPage({
  params,
}: {
  params: Promise<{
    locale: string;
    flight_type: string;
  }>;
}) {
  const { locale, flight_type } = await params;

  return (
    <section className='py-2'>
      <FlightSearchClient locale={locale} flightType={flight_type as FlightTypeEnum} />
    </section>
  );
  // console.log('SEARCH PARAMS:', search_info);
  // console.log('Params Details Page:', locale);

  // const renderFlightTypeContent = () => {
  //   switch (flight_type as FlightTypeEnum) {
  //     case 'one_way':
  //       return <OneWayFlightType />;
  //     case 'round_trip':
  //       return (
  //         <p>
  //           Round Trip Flight Type details: {search_info.from} traveling to {search_info.to}... {search_info.departure}{' '}
  //           ... {`Adult Numbers ${search_info.adult}`} ... {`Child Numbers ${search_info.child}`} ...{' '}
  //           {search_info.cabin}
  //         </p>
  //       );
  //     case 'multi_city':
  //       return (
  //         <p>
  //           Multi City flight type details: {search_info.from} traveling to {search_info.to}... {search_info.departure}{' '}
  //           ... {`Adult Numbers ${search_info.adult}`} ... {`Child Numbers ${search_info.child}`} ...{' '}
  //           {search_info.cabin}
  //         </p>
  //       );
  //     default:
  //       return <p>Unknown flight type selected.</p>;
  //   }
  // };

  // return (
  //   <div className='py-4 m-0'>
  //     <div className='w-full mb-12 bg-transparent'>{renderFlightTypeContent()}</div>
  //   </div>
  // );
}
