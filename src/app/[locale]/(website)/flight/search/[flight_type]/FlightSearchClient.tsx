// src/app/[locale]/(website)/flight/search/[flight_type]/_component/FlightSerachClient.tsx

'use client';

import { useSearchParams } from 'next/navigation';
import { FlightTypeEnum } from '@/lib/schemas/enums/flight-types.enum';
import FlightSearchResults from './FlightSearchResults';
import { useGetTiqwaFlightSearch } from '@/lib/hooks/tiqwa/flight-search.hook';

type Props = {
  locale: string;
  flightType: FlightTypeEnum;
};

export default function FlightSearchClient({ locale, flightType }: Props) {
  const searchParams = useSearchParams();
  console.log('Selected Language: ', locale);

  const search = {
    from: searchParams.get('from_code'),
    to: searchParams.get('to_code'),
    departure: searchParams.get('departure'),
    return: flightType === 'round_trip' ? searchParams.get('return') : undefined,
    cabin: searchParams.get('cabin') ?? 'economy',
    adult: Number(searchParams.get('adult') ?? 1),
    child: Number(searchParams.get('child') ?? 0),
  };
  console.log('Response Search Params', search);

  const { data, isLoading, isError, error } = useGetTiqwaFlightSearch({
    origin: search.from ?? 'LHR',
    destination: search.to ?? 'JFK',
    departure_date: search.departure ?? '2026-02-10',
    return_date: search.return ?? undefined,
    adults: search.adult,
    children: search.child,
    cabin: search.cabin,
  });

  if (isLoading) {
    return <p className='text-sm'>Searching for flights…</p>;
  }

  if (isError) {
    return <p className='text-sm text-red-600'>{error.message}</p>;
  }

  // useEffect(() => {
  //   setFlights(data!);
  // }, [setFlights, data]);
  const handleSelectFlight = (flightId: string) => {
    // Navigate to booking or add to cart
    console.log('Selected:', flightId);
  };

  if (!search.from || !search.to || !search.departure) {
    return <p className='text-sm text-red-600'>Invalid search parameters</p>;
  }

  return <FlightSearchResults flights={data ?? []} onSelectFlight={handleSelectFlight} />;
}
