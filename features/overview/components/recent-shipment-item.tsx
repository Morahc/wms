import { Badge } from "@/components/ui/badge";
import { Shipment } from "@/types/api";
import { Box } from "lucide-react";

type RecentShipmentItemProps = Pick<
  Shipment,
  "id" | "shipmentNumber" | "priority" | "itemCount" | "status"
>;

export default function RecentShipmentItem({
  shipmentNumber,
  status,
  itemCount,
  priority,
}: RecentShipmentItemProps) {
  return (
    <div className="flex gap-4">
      <div className="size-10 flex items-center justify-center bg-muted rounded-full">
        <Box />
      </div>
      <div>
        <div className="flex gap-2">
          <h4 className="font-semibold">{shipmentNumber}</h4>
          <Badge variant={"outline"}>{status}</Badge>
        </div>
        <p className="text-sm">
          {itemCount} item(s) . Priority: {priority}
        </p>
      </div>
    </div>
  );
}
