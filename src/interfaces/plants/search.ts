import { z } from 'zod';
import { plantSchema } from '@/interfaces/plants/plant';

export const searchPlantSchema = z.object({
  current_page: z.number(),
  data: z.array(plantSchema),
  from: z.number(),
  last_page: z.number(),
  per_page: z.number(),
  to: z.number(),
  total: z.number()
});

export type searchPlantType = z.infer<typeof searchPlantSchema>;