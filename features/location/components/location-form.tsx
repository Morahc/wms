"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AddLocationInput, addLocationInputSchema } from "@/features/location/api/add-location";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

type LocationFormProps = { initialData?: AddLocationInput; onSuccess?: () => void };

export default function LocationForm(props: LocationFormProps) {
  const form = useForm<AddLocationInput>({
    resolver: zodResolver(addLocationInputSchema),
    defaultValues: props.initialData
      ? props.initialData
      : {
          name: "",
          code: "",
          contactInfo: {
            email: "",
            managerName: "",
            phone: "",
          },
          address: {
            country: "",
            state: "",
            city: "",
            street: "",
            postalCode: "",
          },
          isActive: false,
        },
  });

  function onSubmit(payload: AddLocationInput) {
    console.log(payload);
    if (props.onSuccess) {
      props.onSuccess();
    }
    if (props.initialData) {
      // update
    } else {
      // create
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
        <Card>
          <CardHeader>
            <h4 className="font-medium">Basic Information</h4>
            <p className="text-sm text-muted-foreground">
              Enter the basic details for the location
            </p>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location Name</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="code"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location Code</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Location Type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a type" />
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

            <FormField
              control={form.control}
              name="isActive"
              render={({ field }) => (
                <FormItem className="col-span-2 border border-input shadow rounded-md p-6">
                  <FormLabel className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p>Active Status</p>
                      <p className="text-muted-foreground">
                        Set whether this location is currently active
                      </p>
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
          <CardHeader>
            <h4 className="font-medium">Addresses</h4>
            <p className="text-sm text-muted-foreground">Physical location address</p>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="address.street"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Street Address</FormLabel>
                  <FormControl>
                    <Input placeholder="eg., 123 Broadway Avenue" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address.city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., New York" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="address.state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., NY " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal Code</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 100001" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address.country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., United States" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h4 className="font-medium">Contact Information</h4>
            <p className="text-sm text-muted-foreground">Contact details for this location</p>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="contactInfo.managerName"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Manager Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactInfo.email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Manager Email</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., location@company.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="contactInfo.phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Manager Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., +1 (555) 123-4567" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <div className="flex items-center gap-2 justify-end">
          <Link
            href={"/dashboard/locations"}
            className={buttonVariants({ variant: "secondary", size: "sm" })}
          >
            Cancel
          </Link>
          <Button size="sm" type="submit">
            {props.initialData ? "Save Changes" : "Create Location"}
          </Button>
        </div>
      </form>
    </Form>
  );
}
