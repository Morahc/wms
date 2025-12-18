"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { AddUserInput, addUserInputSchema } from "@/features/user/api/add-user";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { dummyLocations } from "@/features/location/data";
import { Switch } from "@/components/ui/switch";

type UserFormProps = { initialData?: AddUserInput };

export default function UserForm(props: UserFormProps) {
  const form = useForm<AddUserInput>({
    resolver: zodResolver(addUserInputSchema),
    defaultValues: props.initialData ?? {
      name: "",
      email: "",
      role: "staff",
      phone: "",
      location: "",
      isActive: false,
    },
  });

  function onSubmit(payload: AddUserInput) {
    console.log(payload);
    if (props.initialData) {
      // update
    } else {
      // create
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <Card>
          <CardHeader>
            <h4 className="font-medium">Basic Information</h4>
            <p className="text-sm text-muted-foreground">Enter the basic details for the user</p>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-6 items-start">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., johndoe@location.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., +1 (718) 555-0123" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a role" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="admin">Admin</SelectItem>
                      <SelectItem value="manager">Manager</SelectItem>
                      <SelectItem value="staff">Staff</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a locatiom" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {dummyLocations.map((item) => (
                        <SelectItem value={item.id}>{item.name}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormDescription>Staff assigned location</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="isActive"
              render={({ field }) => (
                <FormItem className="border border-input shadow rounded-md p-6 col-span-2">
                  <FormLabel className="flex items-center justify-between">
                    <div className="space-y-2">
                      <p>Active Status</p>
                      <p className="text-muted-foreground">New users are inactive when created</p>
                    </div>
                    <Switch disabled onCheckedChange={field.onChange} checked={field.value} />
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
          </CardContent>
        </Card>

        <Button type="submit">{props.initialData ? "Save Changes" : "Create"}</Button>
      </form>
    </Form>
  );
}
