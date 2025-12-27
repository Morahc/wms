import {
  ArrowLeft,
  ArrowRight,
  Box,
  ChartColumn,
  Mail,
  MapPin,
  Pencil,
  Phone,
  Trash,
  Truck,
  User,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { locations } from "@/features/location/data";
import { cn } from "@/lib/utils";

export default async function LocationDetails(props: PageProps<"/locations/[locationId]">) {
  const { locationId } = await props.params;

  const item = locations.find((item) => item.id === locationId);

  if (!item) {
    return notFound();
  }
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Link href={"/locations"} className={cn(buttonVariants({ variant: "link" }), "text-sm")}>
          <ArrowLeft /> Back to Locations
        </Link>
        <div className="flex gap-2">
          <Button size={"sm"} variant={"outline"}>
            <Pencil />
            Edit
          </Button>
          <Button size={"sm"} variant={"destructive"}>
            <Trash />
            Delete
          </Button>
        </div>
      </div>
      <Card>
        <CardContent className="flex flex-col items-start gap-2">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-semibold">New York Headquarters</h1>
            <div className="flex gap-2">
              <Badge>Office</Badge>
              <Badge variant="success">Active</Badge>
            </div>
          </div>
          <span className="bg-gray-100 py-1 px-2 text-sm rounded-md">{"HQ-NYC"}</span>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="flex flex-col items-start gap-4">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center justify-between gap-2">
                <Box />
                <h4 className="text-lg font-medium">Inventory Summary</h4>
              </div>
              <Link
                href={"/locations/create"}
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "text-xs")}
              >
                View Stock <ArrowRight />
              </Link>
            </div>
            <ul className="w-full space-y-2 text-sm">
              <li className="flex justify-between items-center">
                <p>Total Items:</p>
                <p className="text-muted-foreground">1,245 items</p>
              </li>
              <li className="flex justify-between items-center">
                <p>Low Stock Items:</p>
                <p className="text-muted-foreground">12 items</p>
              </li>
              <li className="flex justify-between items-center">
                <p>Out of Stock Items:</p>
                <p className="text-muted-foreground">3 items</p>
              </li>
              <li className="flex justify-between items-center">
                <p>Total value:</p>
                <p className="text-muted-foreground">$245,890.43</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-start gap-2">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-2">
                <ChartColumn />
                <h4 className="text-lg font-medium">Recent Activity</h4>
              </div>
              <Link
                href={"/locations/create"}
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "text-xs")}
              >
                View Activity <ArrowRight />
              </Link>
            </div>

            <ul className="w-full space-y-2 text-sm">
              <li className="flex items-center gap-4 py-2">
                <Truck className="size-4.5 text-muted-foreground" />
                <div className="space-y-1">
                  <p className="font-medium">Shipment SHP-001 received from DC-CHI</p>
                  <p className="text-muted-foreground">Oct 30, 2024 at 2:30 PM </p>
                </div>
              </li>
              <li className="flex items-center gap-4 py-2">
                <Truck className="size-4.5 text-muted-foreground" />
                <div className="space-y-1">
                  <p className="font-medium">Shipment SHP-099 sent to STORE-LA</p>
                  <p className="text-muted-foreground">Oct 30, 2024 at 9:15 AM</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <MapPin />
              <h4 className="text-lg font-medium">Addresses</h4>
            </div>
            <div className="text-sm [&_p]:py-4 divide-y">
              <p className="font-medium">789 Industrial Parkway</p>
              <p>New York, 100001</p>
              <p>United States</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex flex-col items-start gap-2">
            <h4 className="text-lg font-medium">Contact Information</h4>
            <ul className="w-full divide-y text-sm">
              <li className="flex items-center gap-4 py-2">
                <User className="size-4.5 text-muted-foreground" />
                <div className="space-y-1">
                  <p className="text-muted-foreground">Manager</p>
                  <p className="font-medium">Michael Chen</p>
                </div>
              </li>
              <li className="flex items-center gap-4 py-2">
                <Phone className="size-4.5 text-muted-foreground" />
                <div className="space-y-1">
                  <p className="text-muted-foreground">Phone</p>
                  <p className="font-medium">nyc.warehouse@ance.com</p>
                </div>
              </li>
              <li className="flex items-center gap-4 py-2">
                <Mail className="size-4.5 text-muted-foreground" />
                <div className="space-y-1">
                  <p className="text-muted-foreground">Email</p>
                  <p className="font-medium">+1 (718) 555-0123</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="flex flex-col items-start gap-2">
          <h4 className="text-lg font-medium">Timeline</h4>
          <ul className="w-full divide-y text-sm">
            <li className="flex items-center gap-4 py-4">
              <p className="text-muted-foreground">Created</p>
              <p className="font-medium">January 15, 2020 at 09:00 AM</p>
            </li>
            <li className="flex items-center gap-4 py-4">
              <p className="text-muted-foreground">Last Updated</p>
              <p className="font-medium">March 15, 2024 at 11:30 AM</p>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
