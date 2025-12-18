import { z } from "zod";

export const addInventoryStockInputSchema = z.object({
  location: z.string().min(1, {
    message: "Location is required",
  }),
  quantity: z.coerce.number<number>().gt(1, "Quantity must be greate than zero"),
  reason: z.string().min(1, "Stock reason is required"),
  notes: z.string(),
});

export type AddInventoryStockInput = z.TypeOf<typeof addInventoryStockInputSchema>;
