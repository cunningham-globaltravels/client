import { z } from 'zod';
import { DateStringSchema, IATACodeSchema, ISODateTimeSchema } from '../../shared/travel.schema';

/**
 * ---- Traveler Price ----
 */
export const ConfirmPriceTravelerSchema = z.union([
  z.object({ adult: z.number().positive() }),
  z.object({ child: z.number().positive() }),
  z.object({ infant: z.number().positive() }),
]);

/**
 * ---- Flight Segment ----
 */
export const ConfirmPriceSegmentSchema = z.object({
  airport_from: IATACodeSchema,
  airport_to: IATACodeSchema,

  departure_time: ISODateTimeSchema,
  arrival_time: ISODateTimeSchema,

  flight_number: z.string(),
  cabin_type: z.string(),
  duration: z.number().int().positive(),

  equipment_type: z.string(),
  operating_airline: z.string(),
  marketing_airline: z.string(),

  booking_class: z.string(),
  baggage: z.string(),

  layover: z.number().nullable(),
  marriage_group: z.string().nullable(),
  overnight: z.boolean(),
});

/**
 * ---- Confirm Price Response ----
 */
export const TiqwaConfirmPriceResponseSchema = z.object({
  id: z.string(),

  amount: z.number().positive(),
  currency: z.string().length(3),

  bookable_seats: z.number().int().min(0),
  document_required: z.boolean(),

  expires_at: DateStringSchema,

  price_change: z.boolean(),

  total_duration: z.number().int().positive(),
  total_outbound_duration: z.number().int().positive(),
  total_inbound_duration: z.number().int().positive(),

  outbound_stops: z.number().int().min(0),
  inbound_stops: z.number().int().min(0),

  outbound: z.array(ConfirmPriceSegmentSchema),
  inbound: z.array(ConfirmPriceSegmentSchema),

  travelers_price: z.array(ConfirmPriceTravelerSchema),
});

/**
 * ---- Inferred Type ----
 */
export type TTiqwaConfirmPriceResponse = z.infer<typeof TiqwaConfirmPriceResponseSchema>;
