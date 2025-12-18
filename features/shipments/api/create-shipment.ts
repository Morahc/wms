import { z } from "zod";

const shipmentInputSchema = z.object({
  type: z.enum(["transfer", "customer_transfer"], {
    message: "Shipment type is required",
  }),
  originLocation: z.string().min(1, {
    message: "Origin location is required",
  }),
  estimatedShipDate: z.string().min(1, {
    message: "Estimated Ship Date is required",
  }),
  estimatedDeliveryDate: z.string().min(1, {
    message: "Estimated Delivery Date is required",
  }),
  priority: z.string(),
  notes: z.string(),
  internalNotes: z.string(),
  items: z
    .array(
      z.object({
        sku: z.string(),
        name: z.string(),
        quantity: z.coerce.number<number>(),
      })
    )
    .min(1, "At least one stock entry is required")
    .refine((items) => items.every((s) => s.quantity > 0), {
      message: "Each item entry must have a quantity greater than 0",
    }),
});

export const createTransferShipmentInputSchema = z.object({
  ...shipmentInputSchema.shape,
  destinationLocation: z.string().min(1, {
    message: "Destination location is required",
  }),
});

export const createCustomerShipmentInputSchema = z.object({
  ...shipmentInputSchema.shape,
  carrier: z.string().min(1, {
    message: "Carrier is required",
  }),
  trackingNumber: z.string().min(1, {
    message: "Tracking Number is required",
  }),
  shippingMethod: z.string().min(1, {
    message: "Shipping Method is required",
  }),
  shippingCost: z.coerce.number<number>().gt(1, {
    message: "Shipping Cost is required",
  }),
  handlingFee: z.coerce.number<number>().gt(1, {
    message: "Handling Fee is required",
  }),
  requiresSignature: z.boolean(),
  customerInfo: z.object({
    name: z.string().min(1, { message: "Customer name is required" }),
    email: z.email({ message: "Invalid email address" }),
    phone: z.string().min(1, { message: "Customer phone is required" }),
    address: z.object({
      street: z.string().min(1, { message: "Street is required" }),
      city: z.string().min(1, { message: "City is required" }),
      state: z.string().min(1, { message: "State is required" }),
      postalCode: z.string().optional(),
      country: z.string().min(1, { message: "Country is required" }),
    }),
  })
});

export type CreateTransferShipmentInput = z.TypeOf<typeof createTransferShipmentInputSchema>;
export type CreateCustomerShipmentInput = z.TypeOf<typeof createCustomerShipmentInputSchema>;
