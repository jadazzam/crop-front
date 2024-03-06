import { z } from "zod";

const cropSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  type: z.string(),
  trefleId: z.string(),
});

export type cropType = z.infer<typeof cropSchema>;