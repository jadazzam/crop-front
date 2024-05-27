import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  firstname: z.string(),
  lastname: z.string(),
  email: z.string(),
  isActive: z.boolean(),
});

export type userType = z.infer<typeof userSchema>;