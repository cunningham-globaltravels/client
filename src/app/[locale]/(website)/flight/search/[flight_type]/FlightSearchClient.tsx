'use client';

import { useSearchParams } from 'next/navigation';
import { FlightTypeEnum } from '@/lib/schemas/enums/flight-types.enum';
import OneWayFlightType from './_component/OneWayFlightType';

type Props = {
  locale: string;
  flightType: FlightTypeEnum;
};

export default function FlightSearchClient({ locale, flightType }: Props) {
  const searchParams = useSearchParams();
  console.log('Flight search: ', locale);

  const search = {
    from: searchParams.get('from'),
    to: searchParams.get('to'),
    departure: searchParams.get('departure'),
    return: searchParams.get('return'),
    cabin: searchParams.get('cabin'),
    adult: Number(searchParams.get('adult') ?? 0),
    child: Number(searchParams.get('child') ?? 0),
  };

  console.log('FLIGHT SEARCH:', search);

  if (!search.from || !search.to || !search.departure) {
    return <p className='text-sm text-red-600'>Invalid search parameters</p>;
  }

  switch (flightType) {
    case 'one_way':
      return (
        <div className='flex flex-col items-start gap-2'>
          <div className='flex gap-2'>
            <span className='text-sm text-neutral-600 leading-[150%]'>One-way:</span>
            <span className='mt-0.5 text-xs text-neutral-500 leading-[155%]'>
              {search.from} → {search.to}
            </span>
          </div>
          <OneWayFlightType />
        </div>
      );

    case 'round_trip':
      return (
        <p>
          Round-trip: {search.from} → {search.to}
        </p>
      );

    case 'multi_city':
      return <p>Multi-city search</p>;

    default:
      return <p>Unknown flight type</p>;
  }
}
