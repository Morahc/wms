import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import LocationForm from "@/features/location/components/location-form";
import { cn } from "@/lib/utils";
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  Box,
  Building,
  Calendar,
  ChartColumn,
  CheckCircle,
  CheckCircle2,
  Mail,
  MapPin,
  Pencil,
  Phone,
  Trash,
  Truck,
  User,
} from "lucide-react";
import Link from "next/link";

export default async function ShipmentDetails(
  props: PageProps<"/dashboard/shipments/[shipmentId]">
) {
  // const { locationId } = await props.params;

  //   estimatedShipDate: new Date("2024-11-06T08:00:00Z"),
  //   actualShipDate: new Date("2024-11-06T09:30:00Z"),
  //   estimatedDeliveryDate: new Date("2024-11-08T17:00:00Z"),

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <Link
          href={"/dashboard/locations"}
          className={cn(buttonVariants({ variant: "link" }), "text-sm")}
        >
          <ArrowLeft /> Back to Shipments
        </Link>
      </div>
      <Card>
        <CardContent className="flex flex-col gap-4">
          <div className="flex items-center justify-between w-full">
            <h1 className="text-2xl font-semibold">SHP-2024-001</h1>
            <div className="flex gap-2">
              <Badge variant={"info"}>In Transit</Badge>
              <Badge variant={"success"}>Priority: Hign</Badge>
            </div>
          </div>
          <div className="flex items-center justify-between flex-1">
            <Badge variant={"secondary"}>Transfer Shipment</Badge>
            <div className="flex gap-2">
              <Button size="sm">
                <CheckCircle2 /> Mark as Delivered
              </Button>
              <Button size="sm" variant={"destructive"}>
                <AlertCircle /> Cancel Shipment
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="flex flex-col items-start gap-4">
            <div className="flex items-center justify-between gap-2">
              <Box />
              <h4 className="text-lg font-medium">Shipment Items (2)</h4>
            </div>
            <ul className="w-full divide-y text-sm">
              <li className="space-y-2 py-4">
                <h5 className="font-semibold">Vaseline Lotion</h5>
                <div className="text-muted-foreground">
                  <p>SKU: VAS-982</p>
                  <p>Quantity: 54</p>
                </div>
              </li>
              <li className="space-y-2 py-4">
                <h5 className="font-semibold">LG 68 inch TV</h5>
                <div className="text-muted-foreground">
                  <p>SKU: VAS-982</p>
                  <p>Quantity: 54</p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <MapPin />
              <h4 className="text-lg font-medium">Location Information</h4>
            </div>

            <ul className="w-full space-y-2 text-sm">
              <li className="flex items-start gap-4 py-2">
                <ArrowLeft className="size-6 text-muted-foreground" />
                <div className="space-y-1">
                  <p className="text-sm">Origin</p>
                  <p className="font-semibold">Central Warehouse NYC</p>
                  <p className="font-normal text-muted-foreground">
                    <Badge variant={"info"}>WH-NYC</Badge> New York, NY
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4 py-2">
                <ArrowRight className="size-6 text-muted-foreground" />
                <div className="space-y-1">
                  <p className="text-sm">Destination</p>
                  <p className="font-semibold">Los Angeles Distribution Center</p>
                  <p className="font-normal text-muted-foreground">
                    <Badge variant={"info"}>DC-LA</Badge> Los Angeles, CA
                  </p>
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <Card>
          <CardContent className="flex flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <Calendar />
              <h4 className="text-lg font-medium">Details</h4>
            </div>
            <ul className="w-full divide-y text-sm">
              <li className="space-y-1 py-2">
                <p className="text-muted-foreground">Created By</p>
                <p className="font-medium text-sm">Sarah Johnson</p>
              </li>
              <li className="space-y-1 py-2">
                <p className="text-muted-foreground">Created At</p>
                <p className="font-medium text-sm">Nov 06, 2024 at 9:00 AM</p>
              </li>
              <li className="space-y-1 py-2">
                <p className="text-muted-foreground">Updated At</p>
                <p className="font-medium text-sm">Nov 08, 2024 at 11:00 AM</p>
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex flex-col items-start gap-2">
            <h4 className="text-lg font-medium">Notes</h4>
            <ul className="w-full divide-y text-sm">
              <li className="space-y-2 py-4">
                <p className="text-muted-foreground">Customer Notes</p>
                <p className="font-medium text-sm">Urgent delivery for store restock</p>
              </li>
              <li className="space-y-2 py-4">
                <p className="text-muted-foreground">Internal Notes</p>
                <p className="font-medium text-sm"></p>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
