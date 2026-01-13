import { confirmFlightPriceService } from '@/app/service/tiqwa/confirmFlightPrice.service';
import { failure, success } from '@/lib/utils/server/response.util';
import { getErrorMessage } from '@/utils/errors';
import { NextRequest } from 'next/server';

export async function GET(req: NextRequest, context: { params: Promise<{ flight_id: string }> }) {
  try {
    const params = await context.params;

    const result = await confirmFlightPriceService(params);

    return success({ result }, 'Successful retrieval');
  } catch (err) {
    const message = getErrorMessage(err);
    console.error('GET /api/tiqwa/flights/{flight_id}/confirm-price error:', message);
    return failure(message, 500);
  }
}
