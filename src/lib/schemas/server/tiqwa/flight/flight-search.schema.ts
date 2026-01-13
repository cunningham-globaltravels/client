import { z } from 'zod';
import { DateStringSchema, IATACodeSchema, ISODateTimeSchema } from '../../shared/travel.schema';
import { CabinClassSchema } from '@/lib/schemas/enums/cabin-class.enum';

export const TiqwaFlightSearchQuerySchema = z.object({
  origin: IATACodeSchema,
  destination: IATACodeSchema,
  departureDate: DateStringSchema,
  returnDate: DateStringSchema.optional(),

  adults: z.number().int().min(1).max(9),
  children: z.number().int().min(0).max(9).optional(),
  infants: z.number().int().min(0).max(9).optional(),

  cabin: CabinClassSchema.optional(),
  currency: z.string().length(3).optional(),
});

export const TiqwaFlightSegmentSchema = z.object({
  from: IATACodeSchema,
  to: IATACodeSchema,
  departure: ISODateTimeSchema, // ISO timestamp
  arrival: ISODateTimeSchema, // ISO timestamp
  airline: z.string(),
  flightNumber: z.string(),
});

export const TiqwaFlightSchema = z.object({
  id: z.string(),
  price: z.number().nonnegative(),
  currency: z.string().length(3),
  segments: z.array(TiqwaFlightSegmentSchema),
});

export type TTiqwaFlightSearchQuery = z.infer<typeof TiqwaFlightSearchQuerySchema>;
export type TTiqwaFlightSegment = z.infer<typeof TiqwaFlightSegmentSchema>;
export type TTiqwaFlight = z.infer<typeof TiqwaFlightSchema>;
