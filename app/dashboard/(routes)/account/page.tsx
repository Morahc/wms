import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import UpdatePasswordForm from "@/features/account/components/update-password-form";
import { ArrowRight } from "lucide-react";

export default function AccountPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">My Account</h2>
          <p className="text-muted-foreground">Manage your account information.</p>
        </div>
        {/* <Link
          className={cn(buttonVariants({ variant: "outline" }))}
          href={"/dashboard/inventory/create"}
        >
          <Pencil /> Update account
        </Link> */}
      </div>

      <Card className="gap-2">
        <CardHeader>
          <h4 className="font-medium">Profile Information</h4>
        </CardHeader>
        <CardContent className="">
          <ul className="w-full divide-y text-sm">
            <li className="flex justify-between items-center gap-4 py-4">
              <p className="text-muted-foreground">Name</p>
              <p className="font-semibold">Sarah Johnson</p>
            </li>
            <li className="flex justify-between items-center gap-4 py-4">
              <p className="text-muted-foreground">Email</p>
              <p className="font-semibold">sarah@company.com</p>
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
            <ul className="divide-y text-sm">
              <li className="flex items-center justify-between py-2">
                <div className="space-y-2">
                  <p className="text-muted-foreground">Password</p>
                  <p className="text-sm">Last changed: Oct 15, 2024</p>
                </div>
                <UpdatePasswordForm />
              </li>
              <li className="flex items-center justify-between py-2">
                <div className="space-y-2">
                  <p className="text-muted-foreground">Two-Factor Authentication</p>
                  <p className="text-sm">Status: Not enabled</p>
                </div>
                <Button size={"sm"} variant={"outline"}>
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
              View All Activity <ArrowRight />
            </Button>
          </CardHeader>
          <CardContent>
            <ul className="list-disc list-inside space-y-4 text-muted-foreground">
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
