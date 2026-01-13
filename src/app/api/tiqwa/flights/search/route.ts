import { flightSearchServiceGET } from '@/app/service/tiqwa/flightSearch.service';
import { TiqwaFlightSearchQuerySchema } from '@/lib/schemas/server/tiqwa/flight/flight-search.schema';
import { failure, success } from '@/lib/utils/server/response.util';
import { getErrorMessage } from '@/utils/errors';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    const parsed = TiqwaFlightSearchQuerySchema.parse({
      origin: searchParams.get('origin'),
      destination: searchParams.get('destination'),
      departureDate: searchParams.get('departureDate'),
      returnDate: searchParams.get('returnDate'),
      adults: Number(searchParams.get('adults')),
      children: Number(searchParams.get('children')),
      infants: Number(searchParams.get('infants')),
      cabin: searchParams.get('cabinClass'),
      currency: searchParams.get('currency'),
    });
    const result = await flightSearchServiceGET(parsed);

    return success({ result }, 'Successful retrieval');
  } catch (err) {
    const message = getErrorMessage(err);
    console.error('POST /api/catalogue/categories error:', message);
    return failure(message, 500);
  }
}
