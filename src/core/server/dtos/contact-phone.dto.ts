import * as z from "zod";

export const contactPhoneDTOSchema = z.object({
  id: z.string(),
  title: z.string().default(""),
  description: z.string().nullable().default(""),
  value: z.string().default(""),
});
export type ContactPhoneDTO = z.infer<typeof contactPhoneDTOSchema>;
