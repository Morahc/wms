import { z } from "zod";

export const addInventoryInputSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  sku: z.string().min(1, {
    message: "SKU is required",
  }),
  description: z.string(),
  category: z.string().min(1, "Category is required"),
  size: z.string(),
  weight: z.coerce.number<number>(),
  weightUnit: z.enum(["kg", "lbs"]),
  unitCost: z.coerce.number<number>(),
  image: z
    .file()
    .max(5 * 1024 * 1024, { message: "File must be at least 5MB" })
    .optional(),
  fragile: z.boolean(),
  requiresSpecialHandling: z.boolean(),
  isActive: z.boolean(),
  dimensions: z
    .object({
      length: z.coerce.number<number>().gt(0, "Value must be greater than 0"),
      width: z.coerce.number<number>().gt(0, "Value must be greater than 0"),
      height: z.coerce.number<number>().gt(0, "Value must be greater than 0"),
      unit: z.enum(["in", "cm"]),
    })
    .optional(),
  initialStock: z
    .array(
      z.object({
        location: z.string(),
        quantity: z.coerce.number<number>(),
        reorderLevel: z.coerce.number<number>().optional(),
      })
    )
    .min(1, "At least one stock entry is required")
    .refine((stocks) => stocks.every((s) => s.location.trim().length > 0), {
      message: "Each stock entry must have a location",
    })
    .refine((stocks) => stocks.every((s) => s.quantity > 0), {
      message: "Each stock entry must have a quantity greater than 0",
    }),
});

export type AddInventoryInput = z.TypeOf<typeof addInventoryInputSchema>;
