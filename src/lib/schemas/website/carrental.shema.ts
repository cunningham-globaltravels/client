import z from 'zod';

export const carRentalMenuFormSchema = z.object({
  exclusive_offers: z.array(z.string()),
  carType: z.array(z.string()),
  capacity: z.array(z.string()),
  electric_cars: z.array(z.string()),
  pickup_savetime: z.array(z.string()),
  traveller_rating: z.array(z.string()),
  payment_option: z.array(z.string()),
  total_price: z.array(z.string()),
  rental_car_company: z.array(z.string()),
  airport_pickup: z.array(z.string()),
  specifications: z.array(z.string()),
});
export const carRentalProfileFormSchema = z.object({
  brand: z.string(),
  model: z.string(),
  img_src: z.string().nullable(),
  engine_type: z.string().nullable(),
  numberForSale: z.number(),
  mileage_form: z.string().nullable(),
  evaluation: z.string().nullable(),
  main_amenitels: z.array(z.object()).nullable(),
  amenities: z.array(z.string()).nullable(),
  classImg: z.string().nullable(),
  percentage_rating: z.number(),
  review: z.string(),
  numbers_rated: z.number(),
  rental_per_day: z.number(),
  total_amount: z.number(),
  car_location: z.array(z.object()).nullable(),
});

export type TCarRentalMenuFormSchema = z.infer<typeof carRentalMenuFormSchema>;
export type TCarRentalProfileFormSchema = z.infer<typeof carRentalProfileFormSchema>;
