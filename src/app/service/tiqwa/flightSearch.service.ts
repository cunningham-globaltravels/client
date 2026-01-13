import { TTiqwaFlightSearchQuery } from '@/lib/schemas/server/tiqwa/flight/flight-search.schema';
import {
  TiqwaFlightSearchResponseSchema,
  TTiqwaFlightSearchResponse,
} from '@/lib/schemas/server/tiqwa/response/flight-search-response.schema';
import { TiqwaFetcherUtil } from '@/lib/utils/server/tiqwa-fetcher.util';

export async function flightSearchServiceGET(query: TTiqwaFlightSearchQuery): Promise<TTiqwaFlightSearchResponse> {
  const response = await TiqwaFetcherUtil('/flight/search', {
    method: 'GET',
    query,
  });

  return TiqwaFlightSearchResponseSchema.parse(response);
}
