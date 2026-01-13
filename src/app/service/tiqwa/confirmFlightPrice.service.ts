import { TTiqwaConfirmPriceRequest } from '@/lib/schemas/server/tiqwa/pricing/confirm-price-request.schema';
import {
  TiqwaConfirmPriceResponseSchema,
  TTiqwaConfirmPriceResponse,
} from '@/lib/schemas/server/tiqwa/response/confirm-price-response.schema';
import { TiqwaFetcherUtil } from '@/lib/utils/server/tiqwa-fetcher.util';

export async function confirmFlightPriceService(
  params: TTiqwaConfirmPriceRequest
): Promise<TTiqwaConfirmPriceResponse> {
  const { flight_id } = params;
  const response = await TiqwaFetcherUtil(`/flight/confirm-price/${flight_id}`, {
    method: 'GET',
  });

  // Runtime validation + typing
  return TiqwaConfirmPriceResponseSchema.parse(response);
}
