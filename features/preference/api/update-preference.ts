import { fonts } from "@/config/fonts";
import { z } from "zod";

export const updatePreferenceInputSchema = z.object({
  font: z.enum(fonts),
  theme: z.enum(['light', 'dark', "system"]),
});

export type UpdatePreferenceInput = z.TypeOf<typeof updatePreferenceInputSchema>;
