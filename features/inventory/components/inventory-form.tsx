"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
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
import { Textarea } from "@/components/ui/textarea";
import { AddInventoryInput, addInventoryInputSchema } from "@/features/inventory/api/add-inventory";
import { locations } from "@/features/location/data";
import { DollarSignIcon, Image, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { InventoryItem } from "@/types/api";
import { showSubmittedData } from "@/lib/show-submitted-data";

type InventoryFormProps = { initialData?: InventoryItem };

export default function InventoryForm(props: InventoryFormProps) {
  const router = useRouter();

  const form = useForm<AddInventoryInput>({
    resolver: zodResolver(addInventoryInputSchema),
    defaultValues: props.initialData ?? {
      name: "",
      sku: "",
      description: "",
      category: "",
      weight: 0,
      weightUnit: "kg",
      unitCost: 0,
      fragile: false,
      requiresSpecialHandling: false,
      dimensions: {
        length: 0,
        width: 0,
        height: 0,
        unit: "cm",
      },
      initialStock: [{ location: "", quantity: 0, reorderLevel: 0 }],
      active: false,
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "initialStock",
  });

  function onSubmit(payload: AddInventoryInput) {
    showSubmittedData(payload);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-3 md:space-y-6 w-full h-fit relative"
      >
        <Card>
          <CardHeader>
            <h4 className="font-medium">Basic Information</h4>
            <p className="text-sm text-muted-foreground">Enter the basic details for the item</p>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
            <FormField
              control={form.control}
              name="sku"
              render={({ field }) => (
                <FormItem className="col-span-1">
                  <FormLabel>Sku</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., LAPTOP-PRO-15" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="col-span-1 border border-red-300">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue
                            placeholder={
                              <span className="text-xs md:text-sm">Select a category</span>
                            }
                          />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="warehouse">Warehouse</SelectItem>
                        <SelectItem value="distribution center">Distribution center</SelectItem>
                        <SelectItem value="office">Office</SelectItem>
                        <SelectItem value="store">Store</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-2">
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
              name="description"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-20"
                      placeholder="Detailed description of item..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="image"
              render={({ field: { value, onChange, ...rest } }) => (
                <FormItem className="col-span-2">
                  <Label>Image</Label>
                  <FormLabel className="border rounded-md border-input h-24 md:h-36 flex justify-center items-center">
                    <Image className="size-4" />
                    {value && <p>{value.name}</p>}
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      accept="image/*"
                      hidden
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        onChange(file);
                        e.target.value = "";
                      }}
                      {...rest}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h4 className="font-medium">Physical Properties</h4>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="weight"
                render={({ field }) => (
                  <FormItem className="grow">
                    <FormLabel>Weight</FormLabel>
                    <FormControl>
                      <Input placeholder="0.0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="weightUnit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unit</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="lbs">lbs</SelectItem>
                        <SelectItem value="kg">kg</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="size"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Size</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., Large, Medium, Small" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-4 gap-4 col-span-full">
              <h4 className="col-span-full">Dimensions</h4>

              <FormField
                control={form.control}
                name="dimensions.length"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Lenght</FormLabel>
                    <FormControl>
                      <Input placeholder="Length" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dimensions.width"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Width</FormLabel>
                    <FormControl>
                      <Input placeholder="Width" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dimensions.height"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Height</FormLabel>
                    <FormControl>
                      <Input placeholder="Height" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="dimensions.unit"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Unit</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="cm">cm</SelectItem>
                          <SelectItem value="inches">inches</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h4 className="font-medium">Pricing & Handling</h4>
          </CardHeader>
          <CardContent className="grid gap-y-3 md:gap-y-6">
            <FormField
              control={form.control}
              name="unitCost"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Unit Cost</FormLabel>
                  <FormControl>
                    <InputGroup>
                      <InputGroupInput placeholder="0.00" {...field} />
                      <InputGroupAddon>
                        <DollarSignIcon />
                      </InputGroupAddon>
                    </InputGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="fragile"
              render={({ field }) => (
                <FormItem className="border border-input shadow rounded-md p-4 md:p-6">
                  <FormLabel className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p>Fragile Item</p>
                      <p className="text-muted-foreground">Item requires careful handling</p>
                    </div>
                    <Switch onCheckedChange={field.onChange} checked={field.value} />
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="requiresSpecialHandling"
              render={({ field }) => (
                <FormItem className="border border-input shadow rounded-md p-4 md:p-6">
                  <FormLabel className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p>Special Handling Required</p>
                      <p className="text-muted-foreground">
                        Item requires special handling procedures
                      </p>
                    </div>
                    <Switch onCheckedChange={field.onChange} checked={field.value} />
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="active"
              render={({ field }) => (
                <FormItem className="border border-input shadow rounded-md p-4 md:p-6">
                  <FormLabel className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p>Active Status</p>
                      <p className="text-muted-foreground">Item is available for use</p>
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
              <h4 className="font-medium">Location Stock</h4>
              <p className="text-sm text-muted-foreground">Add item to associated locations</p>
            </div>
            <Button
              type="button"
              variant="link"
              size="sm"
              onClick={() => append({ location: "", quantity: 0 })}
            >
              + Add Location
            </Button>
          </CardHeader>
          <CardContent className="grid gap-3 md:gap-6">
            {fields.map((field, index) => (
              <div key={field.id} className="flex gap-4 items-end">
                <FormField
                  control={form.control}
                  name={`initialStock.${index}.location`}
                  render={({ field }) => (
                    <FormItem className="grow">
                      <FormLabel>Location</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select location" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {locations.map((location) => (
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
                  name={`initialStock.${index}.quantity`}
                  render={({ field }) => (
                    <FormItem className="grow">
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`initialStock.${index}.reorderLevel`}
                  render={({ field }) => (
                    <FormItem className="grow">
                      <FormLabel>Reorder Level</FormLabel>
                      <FormControl>
                        <Input placeholder="Optional" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {fields.length > 1 && (
                  <Button type="button" variant="ghost" size="icon" onClick={() => remove(index)}>
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            ))}
          </CardContent>
          {form.getFieldState("initialStock").error && (
            <p className="text-sm text-destructive px-6">
              {form.getFieldState("initialStock").error?.message}
            </p>
          )}
        </Card>

        <div className="flex justify-end gap-4">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit">{props.initialData ? "Update Item" : "Create Item"}</Button>
        </div>
      </form>
    </Form>
  );
}
