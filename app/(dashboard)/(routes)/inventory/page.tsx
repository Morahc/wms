import { AlertTriangle, DollarSign, Package } from "lucide-react";

import { StatBlock } from "@/components/shared/stat-block";
import { Badge } from "@/components/ui/badge";
import { InventoryButtons } from "@/features/inventory/components/inventory-buttons";
import { columns } from "@/features/inventory/components/inventory-column";
import { InventoryDialogs } from "@/features/inventory/components/inventory-dialogs";
import { InventoryTable } from "@/features/inventory/components/inventory-table";
import { inventoryItems } from "@/features/inventory/data";

const statData = [
  {
    label: "Total Value",
    value: "$193,496",
    description: "Inventory Value",
    Icon: DollarSign,
  },
  {
    label: "Total Stock",
    value: "105",
    description: "Units across all locations",
    Icon: Package,
  },
  {
    label: "Low Stock Alert",
    value: "7",
    description: "Items below reorder point",
    Icon: AlertTriangle,
  },
];

export default function Inventory() {
  return (
    <div className="flex flex-col gap-y-3 md:gap-y-6 h-full">
      <div className="flex flex-col md:flex-row gap-3 justify-between md:items-center">
        <div>
          <h2 className="text-xl md:text-3xl font-medium md:font-bold">Inventory Management</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Manage your inventory items and stock levels
          </p>
        </div>
        <InventoryButtons />
      </div>
      <StatBlock className="lg:grid-cols-3" data={statData} />
      <div className="space-y-6">
        <InventoryTable columns={columns} data={inventoryItems} />
      </div>
      <InventoryDialogs />
    </div>
  );
}
