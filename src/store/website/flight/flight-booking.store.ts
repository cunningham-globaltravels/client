// store/flight-booking.store.ts
import { TTiqwaConfirmPriceResponse } from '@/lib/schemas/server/tiqwa/response/confirm-price-response.schema';
import { FlightSearchQuery } from '@/lib/types/flight-search/flight-search-url';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface IFlightBookingState {
  flightId: string | null;
  confirmPriceState: TTiqwaConfirmPriceResponse | null;
  flightSearchParamState: FlightSearchQuery | null;
  setConfirmPriceState: (payload: TTiqwaConfirmPriceResponse, flightId: string) => void;
  setFlightSearchParamState: (payload: FlightSearchQuery) => void;
  resetFlightBooking: () => void;
}

export const useFlightBookingStore = create<IFlightBookingState>()(
  persist(
    (set) => ({
      flightId: null,
      confirmPriceState: null,
      flightSearchParamState: null,
      setConfirmPriceState: (payload, flightId) => set({ confirmPriceState: payload, flightId }),
      setFlightSearchParamState: (payload) => set({ flightSearchParamState: payload }),
      resetFlightBooking: () => set({ flightId: null, confirmPriceState: null, flightSearchParamState: null }),
    }),
    {
      name: 'flight-booking-storage',
      version: 1,
    },
  ),
);
