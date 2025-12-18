"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  createCustomerShipmentInputSchema,
  CreateCustomerShipmentInput,
} from "@/features/shipments/api/create-shipment";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import { dummyLocations } from "@/features/location/data";
import { Switch } from "@/components/ui/switch";

type CustomerTransferShipmentProps = { initialData?: CreateCustomerShipmentInput };

export default function CustomerTransferShipment(props: CustomerTransferShipmentProps) {
  const router = useRouter();

  const form = useForm<CreateCustomerShipmentInput>({
    resolver: zodResolver(createCustomerShipmentInputSchema),
    defaultValues: props.initialData ?? {
      type: "customer_transfer",
      estimatedDeliveryDate: "",
      estimatedShipDate: "",
      internalNotes: "",
      notes: "",
      originLocation: "",
      priority: "",
      customerInfo: {
        name: "",
        email: "",
        phone: "",
        address: {
          street: "",
          city: "",
          state: "",
          postalCode: "",
          country: "",
        },
      },
      carrier: "",
      trackingNumber: "1234567",
      shippingMethod: "",
      shippingCost: 0,
      handlingFee: 0,
      requiresSignature: false,
      items: [{ sku: "", quantity: 0, name: "" }],
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "items",
  });

  function onSubmit(payload: CreateCustomerShipmentInput) {
    console.log(payload);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full h-fit">
        <Card>
          <CardHeader>
            <h4 className="font-medium">Transfer Information</h4>
          </CardHeader>
          <CardContent className="grid items-start md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="originLocation"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Origin Location</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select origin location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {dummyLocations.map((location) => (
                        <SelectItem key={location.id} value={location.id}>
                          {location.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="estimatedShipDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estimated Ship Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="estimatedDeliveryDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Estimated Delivery Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="priority"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Priority (Optional)</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="low">Low</SelectItem>
                      <SelectItem value="Normal">Normal</SelectItem>
                      <SelectItem value="High">High</SelectItem>
                      <SelectItem value="Urgent">Urgent</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Notes (Optional)</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h4 className="font-medium">Customer Information</h4>
          </CardHeader>
          <CardContent className="grid items-start md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="customerInfo.name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customerInfo.phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customerInfo.email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Customer Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customerInfo.address.country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customerInfo.address.state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customerInfo.address.city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customerInfo.address.street"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Street</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="customerInfo.address.postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal Code (Optional)</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h4 className="font-medium">Shipping Information</h4>
          </CardHeader>
          <CardContent className="grid items-start md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="trackingNumber"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Tracking Number</FormLabel>
                  <FormControl>
                    <Input disabled {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="shippingMethod"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Shipping Method</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select priority" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="low">Ground</SelectItem>
                      <SelectItem value="Normal">Express</SelectItem>
                      <SelectItem value="High">Overnight</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="carrier"
              render={({ field }) => (
                <FormItem className="relative">
                  <FormLabel>Carrier</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select carrier" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="low">FedEx</SelectItem>
                      <SelectItem value="Normal">UPS</SelectItem>
                      <SelectItem value="High">DHL</SelectItem>
                      <SelectItem value="Urgent">In House</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="shippingCost"
              render={({ field }) => (
                <FormItem className="grow">
                  <FormLabel>Shipping Cost</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="handlingFee"
              render={({ field }) => (
                <FormItem className="grow">
                  <FormLabel>Handling Fee</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="requiresSignature"
              render={({ field }) => (
                <FormItem className="relative border border-input shadow rounded-md p-6 col-span-2">
                  <FormLabel className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p>Require Signature</p>
                      <p className="text-muted-foreground">Require Signature before handover</p>
                    </div>
                    <Switch onCheckedChange={field.onChange} checked={field.value} />
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex items-center justify-between">
            <div>
              <h4 className="font-medium">Items</h4>
            </div>
            <Button
              type="button"
              variant="link"
              size="sm"
              onClick={() => append({ sku: "", quantity: 0, name: "" })}
            >
              + Add item
            </Button>
          </CardHeader>
          <CardContent className="grid gap-6">
            {fields.map((field, index) => (
              <div key={index} className="flex items-start lg:items-center gap-4">
                <div key={field.id} className="grid md:grid-cols-3 gap-4 items-end w-full">
                  <FormField
                    control={form.control}
                    name={`items.${index}.sku`}
                    render={({ field }) => (
                      <FormItem className="grow">
                        <FormLabel>SKU</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`items.${index}.name`}
                    render={({ field }) => (
                      <FormItem className="grow">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name={`items.${index}.quantity`}
                    render={({ field }) => (
                      <FormItem className="grow">
                        <FormLabel>Quantity</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                {fields.length > 1 && (
                  <Button
                    type="button"
                    className="mt-5"
                    variant="ghost"
                    size="icon"
                    onClick={() => remove(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
            <FormMessage>{form.formState.errors.items?.root?.message}</FormMessage>
          </CardContent>
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit">Create Shipment</Button>
        </div>
      </form>
    </Form>
  );
}
