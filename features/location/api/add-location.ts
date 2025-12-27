import { z } from "zod";

export const addLocationInputSchema = z.object({
  name: z.string().min(1, {
    message: "Location name is required",
  }),
  code: z.string().min(1, {
    message: "Location code is required",
  }),
  type: z.enum(['warehouse', 'store', 'distribution center', 'office']),
  address: z.object({
    street: z.string(),
    city: z.string(),
    state: z.string(),
    postalCode: z.string(),
    country: z.string(),
  }),
  contactInfo: z.object({
    phone: z.string(),
    email: z.string(),
    managerName: z.string(),
  }),
  active: z.boolean(),
});

export type AddLocationInput = z.TypeOf<typeof addLocationInputSchema>;
