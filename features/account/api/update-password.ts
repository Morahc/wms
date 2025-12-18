import { z } from "zod";

export const updatePasswordInputSchema = z.object({
  currentPassword: z.string().min(8, {
    message: "Name is required",
  }),
  newPassword: z.string().min(8, {
    message: "SKU is required",
  }),
  confirmPassword: z.string()
}).refine(({ newPassword, currentPassword }) => currentPassword === newPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type UpdatePasswordInput = z.TypeOf<typeof updatePasswordInputSchema>;
