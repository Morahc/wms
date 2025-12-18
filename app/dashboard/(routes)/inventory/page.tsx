import Link from "next/link";
import { AlertTriangle, DollarSign, Package } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import InventoryFilter from "@/features/inventory/components/inventory-filter";
import { DataTable } from "@/components/ui/datatable";
import { columns } from "@/features/inventory/components/inventory-column";
import { dummyInventoryItems } from "@/features/inventory/data";
import { StatContainer, StatItem, StatLabel, StatValue } from "@/components/shared/stats";
import { cn } from "@/lib/utils";
import { StatBlock } from "@/components/shared/stat-block";

const statData = [
  {
    label: "Total Value",
    value: "$703,496",
    description: "Inventory Value",
    Icon: DollarSign,
  },
  {
    label: "Total Stock",
    value: "2,435",
    description: "Units across all locations",
    Icon: Package,
  },
  {
    label: "Low Stock Alert",
    value: "0",
    description: "Items below reorder point",
    Icon: AlertTriangle,
  },
];

export default function Inventory() {
  return (
    <div className="flex flex-col gap-y-6 h-full">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">Inventory Management</h2>
          <p className="text-muted-foreground">Manage your inventory items and stock levels</p>
        </div>
        <Link
          className={cn(buttonVariants({ variant: "outline" }))}
          href={"/dashboard/inventory/create"}
        >
          Add Item
        </Link>
      </div>
      <StatBlock className="lg:grid-cols-3" data={statData} />
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl">All Items</h2>
          <p className="text-sm">Browse, search and filter all Items</p>
        </div>
        <InventoryFilter />
        <DataTable columns={columns} data={dummyInventoryItems} />
      </div>
    </div>
  );
}
