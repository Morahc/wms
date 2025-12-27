import { z } from "zod";

export const updatePasswordInputSchema = z.object({
  currentPassword: z.string().min(8, {
    message: "Current password is required",
  }),
  newPassword: z.string().min(8, {
    message: "New password is required",
  }),
  confirmPassword: z.string()
}).refine(({ newPassword, confirmPassword }) => confirmPassword === newPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type UpdatePasswordInput = z.TypeOf<typeof updatePasswordInputSchema>;
