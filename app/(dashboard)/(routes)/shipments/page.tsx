import Link from "next/link";
import { Truck } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { columns } from "@/features/shipments/components/shipment-column";
import { ShipmentTable } from "@/features/shipments/components/shipment-table";
import { dummyShipments } from "@/features/shipments/data";
import { cn } from "@/lib/utils";

export default function Shipments() {
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-6 h-full">
      <div className="flex flex-col md:flex-row gap-3 justify-between items-start md:items-center">
        <div>
          <h2 className="text-xl md:text-3xl font-medium md:font-bold">Shipments Management</h2>
          <p className="text-muted-foreground">
            Track and manage all shipments for your organization.
          </p>
        </div>
        <Link className={cn(buttonVariants())} href={"/shipments/create"}>
          Create Shipment
          <Truck className="size-3 md:size-5" />
        </Link>
      </div>
      <ShipmentTable columns={columns} data={dummyShipments} />
    </div>
  );
}
