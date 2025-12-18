import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import RecentShipmentItem from "./recent-shipment-item";
import Link from "next/link";

const data = [
  {
    id: "ship_001",
    shipmentNumber: "SHP-2024-001",
    type: "transfer",
    status: "in_transit",

    itemCount: 2,

    priority: "high",
  },
  {
    id: "ship_002",
    shipmentNumber: "SHP-2024-002",
    type: "customer_order",
    status: "pending",

    itemCount: 5,

    priority: "normal",
  },
] as const;

export default function RecentShipment() {
  return (
    <Card className="col-span-1 lg:col-span-3">
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium text-lg">Recent Shipments</h3>
            <p>Latest shipment updates</p>
          </div>
          <Link href={"/dashboard/shipments"} className={buttonVariants({ variant: "ghost" })}>
            View all
          </Link>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {data.map((item) => (
          <RecentShipmentItem key={item.id} {...item} />
        ))}
      </CardContent>
    </Card>
  );
}
