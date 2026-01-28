import { CabinClassSchema, FlightTypeEnum } from '@/lib/schemas/enums/flight-types.enum';
import { TFlightFormSchema } from '@/lib/hooks/website/landing-page.hook';
import { TTiqwaAirportLocationValue } from '@/lib/schemas/server/tiqwa/utilities/airport-utility.schema';

type SearchParams = {
  from?: string;
  to?: string;
  departure?: string;
  return?: string;
  cabin?: string;
  adult?: string;
  child?: string;
};

function createMinimalLocation(cityCode: string): TTiqwaAirportLocationValue {
  return {
    city: cityCode, // placeholder, can be resolved later
    city_code: cityCode,
    country: '',
  };
}

export function parseFlightSearchParams(flightType: FlightTypeEnum, params: SearchParams): Partial<TFlightFormSchema> {
  if (!params.from || !params.to || !params.departure) {
    return {};
  }

  const cabin = CabinClassSchema.options.find((c) => c === params.cabin) ?? 'economy';

  return {
    flightType,
    leavingFrom: createMinimalLocation(params.from),
    goingTo: createMinimalLocation(params.to),
    departureDate: new Date(params.departure),
    returnDate: params.return ? new Date(params.return) : undefined,
    guestNumber: {
      adult: Number(params.adult ?? 1),
      child: Number(params.child ?? 0),
      type: cabin,
      isInfant: false,
      totalGuest: Number(params.adult ?? 1) + Number(params.child ?? 0),
    },
  };
}
