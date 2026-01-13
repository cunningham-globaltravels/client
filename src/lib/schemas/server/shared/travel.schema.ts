import { z } from 'zod';

export const IATACodeSchema = z
  .string()
  .trim()
  .length(3, 'IATA code must be exactly 3 characters')
  .regex(/^[A-Z]{3}$/, 'IATA code must be A–Z letters only')
  .transform((v) => v.toUpperCase());

/**
 * ---- Date (YYYY-MM-DD) ----
 */
export const DateStringSchema = z.string().regex(/^\d{4}-\d{2}-\d{2}$/, 'Date must be YYYY-MM-DD');

/**
 * ---- ISO DateTime ----
 */
export const ISODateTimeSchema = z.string().datetime({ offset: true });

export type TIATACode = z.infer<typeof IATACodeSchema>;
export type TDateString = z.infer<typeof DateStringSchema>;
export type TISODateTime = z.infer<typeof ISODateTimeSchema>;
