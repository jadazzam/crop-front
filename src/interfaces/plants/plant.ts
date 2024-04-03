import { z } from "zod";

export const plantSchema = z.object({
  id: z.number(),
  common_name: z.string().optional(),
  slug: z.string().optional(),
  scientific_name: z.string().optional(),
  year: z.number().optional(),
  bibliography: z.string().optional(),
  author: z.string().optional(),
  status: z.string().optional(),
  rank: z.string().optional(),
  family_common_name: z.array(z.string()).optional(),
  genus_id: z.number().optional(),
  image_url: z.string().optional(),
  synonyms: z.string().array().optional(),
  genus: z.string().optional(),
  family: z.string().optional(),
  links: z.object({}).optional(),
});

export type plantType = z.infer<typeof plantSchema>;