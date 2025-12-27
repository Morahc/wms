"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { Switch } from "@/components/ui/switch";
import { locations } from "@/features/location/data";
import { AddUserInput, addUserInputSchema } from "@/features/user/api/add-user";
import { showSubmittedData } from "@/lib/show-submitted-data";
import { useRouter } from "next/navigation";

type UserFormProps = { initialData?: AddUserInput };

export default function UserForm(props: UserFormProps) {
  const router = useRouter();

  const form = useForm<AddUserInput>({
    resolver: zodResolver(addUserInputSchema),
    defaultValues: props.initialData ?? {
      name: "",
      email: "",
      role: "staff",
      phone: "",
      location: "",
      active: false,
    },
  });

  function onSubmit(payload: AddUserInput) {
    showSubmittedData(payload, "New user created");
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3 md:space-y-6">
        <Card>
          <CardHeader>
            <h4 className="font-medium">Basic Information</h4>
            <p className="text-sm text-muted-foreground">Enter the basic details for the user</p>
          </CardHeader>
          <CardContent className="flex flex-col md:grid md:grid-cols-2 gap-4 items-start">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g John Doe" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g johndoe@location.com" {...field} />
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
                    <Input placeholder="e.g +1 (718) 555-0123" {...field} />
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
                      <SelectItem disabled value="admin">
                        Admin
                      </SelectItem>
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
                      {locations.map((item) => (
                        <SelectItem key={item.name} value={item.id}>
                          {item.name}
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
              name="active"
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

        <div className="flex justify-end gap-x-2 md:gap-x-4">
          <Button type="button" variant="outline" onClick={() => router.back()}>
            Cancel
          </Button>
          <Button type="submit">{props.initialData ? "Save Changes" : "Create"}</Button>
        </div>
      </form>
    </Form>
  );
}
