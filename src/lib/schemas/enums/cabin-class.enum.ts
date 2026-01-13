import { z } from 'zod';

export const CabinClassSchema = z.enum(['ECONOMY', 'PREMIUM_ECONOMY', 'BUSINESS', 'FIRST']);

export type CabinClassEnum = z.infer<typeof CabinClassSchema>;
