// src/[locale]/(website)/flight-booking/[bookingId]/customer-info/page.tsx
'use client';

import { useParams, useSearchParams } from 'next/navigation';
import CustomerInfoPage from './CustomerInfoPage';
import { useFlightBookingStore } from '@/store/website/flight/flight-booking.store';
import { useEffect, useState } from 'react';

// interface ICustomerFlightBookingProps {
//   params: { flightId: string };
//   searchParams: { reqKey?: string };
// }

export default function CustomerFlightBookingPage() {
  const [isValidSession, setIsValidSession] = useState(true);

  const params = useParams();
  const searchParams = useSearchParams();
  const flightIdFromUrl = params.bookingId as string; // or params.flightId — depending on your route
  const reqKey = searchParams.get('reqKey');
  console.log('Request Key:', reqKey);

  // Get everything from the store
  const {
    flightId: storedFlightId,
    confirmPriceState,
    flightSearchParamState: flSearchParams,
  } = useFlightBookingStore();

  useEffect(() => {
    if (!confirmPriceState || !flSearchParams || !storedFlightId) {
      console.warn('Missing flight booking data in store');
      // You can decide what to do:
      // Option A: redirect back to search
      // Option B: show error message
      // Option C: just disable form / show skeleton
      setIsValidSession(false);
    }

    // Optional: verify flightId consistency
    if (storedFlightId && storedFlightId !== flightIdFromUrl) {
      console.warn('URL flightId does not match stored flightId');
    }

    console.log('Customer Booking Information', confirmPriceState);
  }, [confirmPriceState, flSearchParams, storedFlightId, flightIdFromUrl]);

  if (!isValidSession) {
    return (
      <div className='p-8 text-center text-white'>
        <h2 className='text-2xl font-bold mb-4'>Session expired or invalid</h2>
        <p className='font-light'>Please start a new flight search.</p>
        {/* You can add a button to /flight/search/... here */}
      </div>
    );
  }

  if (!confirmPriceState) {
    return <div className='p-10 font-bold text-center text-white'>Loading flight details...</div>;
  }
  return (
    <div className='flex flex-col gap-8 max-w-7xl mx-auto px-4 py-8'>
      {/* You can show summary / price info here if you want */}
      {/* <div className='bg-gray-50 p-5 rounded-lg border'>
        <h2 className='text-xl font-semibold mb-2'>Selected Flight</h2>
        <pre className='text-sm overflow-auto'>{JSON.stringify(confirmPriceState?.outbound?.[0], null, 2)}</pre>
      </div> */}
      <CustomerInfoPage flight_id={storedFlightId!} data_profile={confirmPriceState} search_param={flSearchParams!} />
    </div>
  );
}
