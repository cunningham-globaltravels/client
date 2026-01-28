// services/airportService.ts
//import { TTiqwaAirportListResponse } from '@/lib/schemas/server/tiqwa/utilities/airport-utility.schema';
import { TTiqwaAirportListResponse } from '@/lib/schemas/server/tiqwa/utilities/airport-utility.schema';
import { fetchJSON } from '@/lib/utils/server/response.util';

export async function searchAirportService(query: string): Promise<TTiqwaAirportListResponse> {
  if (!query) {
    query = 'nigeria';
  }

  const res = await fetchJSON<TTiqwaAirportListResponse>(
    `/api/tiqwa/utilities/airports?keyword=${encodeURIComponent(query)}`,
  );

  return res;
}
