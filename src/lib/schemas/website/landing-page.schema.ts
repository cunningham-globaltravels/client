import { z } from 'zod';

export const carTabSchema = z
  .object({
    location: z.object({
      pickupL: z.string(),
      dropOffL: z.string(),
    }),
    rentalDate: z.array(z.date()).min(2, 'Please pick at least two dates'),
    rentalTime: z.object({
      pickupT: z.string(),
      dropoffT: z.string(),
    }),
  })
  .refine(
    (data) => {
      if (data.rentalDate.length < 2) return true; // handled by .min
      return data.rentalDate[0] <= data.rentalDate[1];
    },
    {
      message: 'The first date cannot be after the second date',
      path: ['eventDates'], // points error to the array
    }
  )
  .refine((range) => range.rentalTime.pickupT < range.rentalTime.dropoffT, {
    message: 'Rental Time Pickup Time must be before Dropoff Time',
    path: ['range.rentalTime.dropoffT'], // attach error to the "to" field
  });

export type TCarTabSchema = z.infer<typeof carTabSchema>;
