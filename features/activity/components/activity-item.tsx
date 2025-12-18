import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ActivityLog } from "@/types/api";
import { Box, Server, Store, Truck, User } from "lucide-react";

type ActivityItemProps = ActivityLog;

export default function ActivityItem({
  category,
  entityName,
  action,
  severity,
  title,
  description,
}: ActivityItemProps) {
  return (
    <div className="flex items-start gap-4 w-full border shadow rounded-lg p-4">
      <div className="size-10 flex items-center justify-center bg-muted rounded-full">
        <ActivityIcon severity={severity} category={category} />
      </div>
      <div className="flex flex-col gap-2 grow">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <h5 className="font-medium">{title}</h5>
            <Badge
              variant={
                severity == "info" ? "info" : severity == "critical" ? "destructive" : "warning"
              }
              className="text-xs"
            >
              {severity}
            </Badge>
          </div>
          <span className="text-muted-foreground text-sm">9:00 AM</span>
        </div>
        <p className="text-sm">{description}</p>
        <div className="flex gap-2 capitalize">
          <Badge variant={"outline"}>{category}</Badge>
          <Badge variant={"outline"}>{action}</Badge>
          {entityName && <Badge variant={"outline"}>{entityName}</Badge>}
        </div>
        <hr />
        <div className="flex text-muted-foreground text-sm">
          <p>John Smith</p>
        </div>
      </div>
    </div>
  );
}

function ActivityIcon({
  category,
  severity,
}: {
  category: ActivityLog["category"];
  severity: ActivityLog["severity"];
}) {
  const iconMap: Record<
    ActivityLog["category"],
    React.ComponentType<React.SVGProps<SVGSVGElement>>
  > = {
    inventory: Box,
    user: User,
    shipment: Truck,
    location: Store,
    system: Server,
    stock: Box,
  };

  const Icon = iconMap[category];

  return (
    <Icon
      className={cn("size-5", {
        "text-blue-400": severity === "info",
        "text-yellow-400": severity === "warning",
        "text-red-400": severity === "critical",
      })}
    />
  );
}
