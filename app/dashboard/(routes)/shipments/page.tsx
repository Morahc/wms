import Link from "next/link";

import { StatContainer, StatItem, StatLabel, StatValue } from "@/components/shared/stats";
import { buttonVariants } from "@/components/ui/button";
import { DataTable } from "@/components/ui/datatable";
import { columns } from "@/features/shipments/components/shipment-column";
import { dummyShipments } from "@/features/shipments/data";
import ShipmentsFilter from "@/features/shipments/components/shipment-fitler";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";

const statData = [
  {
    label: "Pending Shipments",
    value: "5",
  },
  {
    label: "Shipments in Transit",
    value: "12",
  },
  {
    label: "Delivered Shipments",
    value: "89",
  },
];

export default function Shipments() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Shipments Management</h2>
          <p className="text-muted-foreground">Track and manage all shipments</p>
        </div>
        <Link className={cn(buttonVariants())} href={"/dashboard/shipments/create"}>
          Create
          <Plus />
        </Link>
      </div>
      <div className="space-y-6">
        <ShipmentsFilter />
        <DataTable columns={columns} data={dummyShipments} />
      </div>
    </div>
  );
}
