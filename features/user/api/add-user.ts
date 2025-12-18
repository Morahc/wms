import { z } from "zod";

export const addUserInputSchema = z.object({
  name: z.string().min(1, {
    message: "User name is required",
  }),
  email: z.email({ error: "Enter valid email address" }),
  phone: z.string("Phone number is required").min(10, "Enter valid phone number"),
  role: z.enum(["admin", "staff", "manager"], {
    error: "Select a valid role",
  }),
  location: z.string().min(1, "Location is required"),
  isActive: z.boolean(),
});

export type AddUserInput = z.TypeOf<typeof addUserInputSchema>;
