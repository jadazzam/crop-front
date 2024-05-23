import { z } from "zod";
import { plantSchema } from "@/interfaces/plants/plant";

const cropSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  size: z.string(),
  trefleId: z.string(),
  trefle: plantSchema,
  active: z.boolean(),
});

const putSchema = z.object({
  name: z.string().optional(),
  size: z.string().optional(),
  trefleId: z.string().optional(),
  active: z.boolean().optional(),
});

const createSchema = z.object({
  name: z.string().optional(),
  size: z.string().optional(),
  trefleId: z.string(),
});
export type cropType = z.infer<typeof cropSchema>;

export type createType = z.infer<typeof createSchema>;

export type putType = z.infer<typeof putSchema>;