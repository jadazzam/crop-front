import { z } from "zod";

const cropSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  size: z.string(),
  trefleId: z.string(),
  trefle: z.object({}),
});

const createSchema = z.object({
  name: z.string().optional(),
  size: z.string().optional(),
  trefleId: z.string(),
});
export type cropType = z.infer<typeof cropSchema>;

export type createType = z.infer<typeof createSchema>;