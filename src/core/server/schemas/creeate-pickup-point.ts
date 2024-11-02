import * as z from "zod";

export const createPickupPointSchema = z.object({
  name: z
    .string({ message: "El nombre es requerido" })
    .min(3, "El nombre debe tener al menos 3 caracteres"),
  street: z.string().default(""),
  city: z.string().default(""),
  postalCode: z.string().default(""),
  phone: z.string().default(""),
  number: z.string().default(""),
  description: z.string().default(""),
  location: z
    .object({
      latitude: z.number().default(0),
      longitude: z.number().default(0),
    })
    .nullable()
    .default(null),
});

export type CreatePickupPointInpputDTO = z.infer<
  typeof createPickupPointSchema
>;
