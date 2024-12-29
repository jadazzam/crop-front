import { z } from 'zod';
import { plantSchema } from '@/interfaces/plants/plant';

export const cropSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string(),
  size: z.number(),
  perenualId: z.number(),
  perenual: plantSchema.optional(),
  health: z.number().optional(),
  active: z.boolean().optional(),
  description: z.string().optional()
});

const putSchema = z.object({
  name: z.string().optional(),
  size: z.number().optional(),
  health: z.number().optional(),
  perenualId: z.string().optional(),
  active: z.boolean().optional()
});

const createSchema = z.object({
  name: z.string().optional(),
  size: z.number().optional(),
  health: z.number().optional(),
  perenualId: z.number()
});
export type cropType = z.infer<typeof cropSchema>;

export type createType = z.infer<typeof createSchema>;

export type putType = z.infer<typeof putSchema>;