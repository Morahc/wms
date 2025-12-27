"use client";

import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import UpdatePasswordForm from "@/features/account/components/update-password-form";
import { showSubmittedData } from "@/lib/show-submitted-data";

export default function AccountPage() {
  const [tfa, setTfa] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl md:text-3xl font-medium md:font-bold">My Account</h2>
          <p className="text-sm md:text-base text-muted-foreground">
            Manage your account information.
          </p>
        </div>
      </div>

      <Card className="gap-2">
        <CardHeader>
          <h4 className="font-medium">Profile Information</h4>
        </CardHeader>
        <CardContent className="">
          <ul className="w-full divide-y text-xs md:text-sm">
            <li className="flex justify-between items-center gap-4 py-4">
              <p className="text-muted-foreground">Name</p>
              <p className="font-semibold">Sarah Johnson</p>
            </li>
            <li className="flex justify-between items-center gap-4 py-4">
              <p className="text-muted-foreground">Email</p>
              <p className="font-semibold">sarah@ance.com</p>
            </li>
            <li className="flex justify-between items-center gap-4 py-4">
              <p className="text-muted-foreground">Phone</p>
              <p className="font-semibold">+1 (555) 123-4567</p>
            </li>
            <li className="flex justify-between items-center gap-4 py-4">
              <p className="text-muted-foreground">Role</p>
              <p className="font-semibold">Staff</p>
            </li>
            <li className="flex justify-between items-center gap-4 py-4">
              <p className="text-muted-foreground">Location</p>
              <p className="font-semibold">WH-NYC - Central Warehouse</p>
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-4">
        <Card className="gap-2">
          <CardHeader>
            <h4 className="font-medium">Security</h4>
          </CardHeader>
          <CardContent>
            <ul className="divide-y text-xs md:text-sm">
              <li className="flex items-center justify-between py-2">
                <div className="space-y-2">
                  <p className="text-muted-foreground">Password</p>
                  <p className="text-xs md:text-sm">Last changed: Oct 15, 2024</p>
                </div>
                <UpdatePasswordForm />
              </li>
              <li className="flex items-center justify-between py-2">
                <div className="space-y-2">
                  <p className="text-muted-foreground">Two-Factor Authentication</p>
                  <p className="text-xs md:text-sm">
                    Status:{" "}
                    <Badge className="ml-2" variant={"outline"}>
                      {tfa ? "Enabled" : "Disabled"}
                    </Badge>
                  </p>
                </div>
                <Button
                  onClick={() => {
                    setTfa(!tfa);
                    showSubmittedData({ twoFactorAuthentication: !tfa });
                    // toast.success("Two-factor authentication status changed successfully");
                  }}
                  size={"sm"}
                  variant={"outline"}
                >
                  Change Status
                </Button>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="gap-2">
          <CardHeader className="items-center">
            <h4 className="font-medium">Activity Logs</h4>
            <Button size={"sm"} variant={"outline"} data-slot="card-action">
              View Activity <ArrowRight />
            </Button>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-4 text-muted-foreground text-xs md:text-sm">
              <li>Today at 9:00 AM - Chrome on Windows </li>
              <li>Yesterday at 3:45 PM - Chrome on Windows</li>
              <li>Nov 4 at 10:30 AM - Safari on iPhone</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
