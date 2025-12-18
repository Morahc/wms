import { z } from "zod";

export const loginInputSchema = z.object({
  email: z.email(),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

export type LoginInput = z.TypeOf<typeof loginInputSchema>;
