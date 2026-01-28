import { z } from 'zod';
import { IATACityCodeSchema } from '../../shared/travel.schema';

/**********************************************************
 * ----------------- Airport Response ----------------- *
 *********************************************************/
export const TiqwaAirportUtilitySchema = z.object({
  city: z.string(),
  city_code: IATACityCodeSchema,
  country: z.string(),
  iata_code: IATACityCodeSchema,
  name: z.string(),
});

/**********************************************************
 * ----------------- Airport Location Value Response ----------------- *
 *********************************************************/
export const TiqwaAirportLocationValueSchema = z.object({
  city: z.string(),
  city_code: IATACityCodeSchema,
  country: z.string(),
});

/********************************************************************************************************
 * ------------------------------------- Airport Utility Response ------------------------------------- *
 ********************************************************************************************************/
export const TiqwaAirportListResponseSchema = z.array(TiqwaAirportUtilitySchema);

/********************************************************************************************************
 * --------------------------------------------- Response --------------------------------------------- *
 ********************************************************************************************************/
export type TTiqwaAirportUtility = z.infer<typeof TiqwaAirportUtilitySchema>;
export type TTiqwaAirportListResponse = z.infer<typeof TiqwaAirportListResponseSchema>;
export type TTiqwaAirportLocationValue = z.infer<typeof TiqwaAirportLocationValueSchema>;
