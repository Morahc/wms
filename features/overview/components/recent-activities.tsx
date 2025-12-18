import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import RecentShipmentItem from "./recent-shipment-item";
import Link from "next/link";
import { RecentActivity } from "@/types/api";

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

type RecentActivityItemProps = RecentActivity;

export default function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between">
          <div>
            <h3 className="font-medium text-lg">Recent Activities</h3>
            <p>Latest system activities</p>
          </div>
          <Link href={"/dashboard/activity-log"} className={buttonVariants({ variant: "ghost" })}>
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

function RecentActivityItem({}: RecentActivity) {
  return (
    // <div className="flex gap-4">
    //   <div className="size-10 flex items-center justify-center bg-muted rounded-full">
    //     <Box />
    //   </div>
    //   <div>
    //     <div className="flex gap-2">
    //       <h4 className="font-semibold">{shipmentNumber}</h4>
    //       <Badge variant={"outline"}>{status}</Badge>
    //     </div>
    //     <p className="text-sm">
    //       {itemCount} item(s) . Priority: {priority}
    //     </p>
    //   </div>
    // </div>
  );
}
