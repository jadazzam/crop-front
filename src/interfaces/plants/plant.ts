import { z } from "zod";

export const plantSchema = z.object({
  id: z.number(),
  common_name: z.string(),
  slug: z.string(),
  scientific_name: z.string(),
  year: z.number(),
  bibliography: z.string(),
  author: z.string(),
  status: z.string(),
  rank: z.string(),
  family_common_name: z.array(z.string()),
  genus_id: z.number(),
  image_url: z.string(),
  synonyms: z.string().array(),
  genus: z.string(),
  family: z.string(),
  links: z.object({}),
});

export type plantType = z.infer<typeof plantSchema>;