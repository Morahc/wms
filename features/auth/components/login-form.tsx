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
import { login } from "../action/login";
import { LoginInput, loginInputSchema } from "../api/login";
import { createClient } from "@/lib/supabase/client";
import { redirect } from "next/navigation";

export default function LoginForm() {
  // const supabase = createClient();
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginInputSchema),
    defaultValues: {
      email: "satnaingdev@gmail.com",
      password: "Satnaing1234",
    },
  });

  async function onSubmit(payload: LoginInput) {
    console.log(payload)
    login(payload);
    // console.log(payload)
    // const { error, data } = await supabase.auth.signUp({
    //   ...payload,
    //   options: {
    //     data: {
    //       full_name: "Sant Naing",
    //       role: "3642ee89-7df8-4e80-928b-4f2b8f54b02c",
    //       is_active: true,
    //     },
    //   },
    // });

    // const { error, data } = await supabase.auth.admin.createUser({
    //   ...payload,
    //   user_metadata: {
    //     full_name: "Sant Naing",
    //     role: "3642ee89-7df8-4e80-928b-4f2b8f54b02c",
    //     is_active: true,
    //   },
    // });
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
          <CardContent className="flex flex-col gap-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button size="sm" type="submit">
              Login
            </Button>
          </CardContent>
        </Card>

        <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
          By clicking continue, you agree to our <a href="#">Terms of Service</a> and{" "}
          <a href="#">Privacy Policy</a>.
        </div>
      </form>
    </Form>
  );
}


// USING (
//   -- allow the operation if the current user is the owner (optional, can be removed)
//   (SELECT auth.uid() = id)
//   -- OR if the current user's profile row has role = 'admin'
//   OR EXISTS (
//     SELECT 1 FROM public.profiles p
//     WHERE p.id = (SELECT auth.uid())
//       AND p.role = 'admin'
//   )
// )
// WITH CHECK (
//   -- allow updates if the current user is admin (so they can change any row),
//   -- or allow users to update their own row (optional)
//   EXISTS (
//     SELECT 1 FROM public.profiles p
//     WHERE p.id = (SELECT auth.uid())
//       AND p.role = 'admin'
//   )
//   OR id = (SELECT auth.uid())
// );