import { ArrowLeft } from "lucide-react";
import Link from "next/link";

import { StatBlock } from "@/components/shared/stat-block";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { DataTable } from "@/components/ui/datatable";
import { columns } from "@/features/inventory/components/stock-column";
import { sampleStockSummary } from "@/features/inventory/data";
import { cn, formatter } from "@/lib/utils";

export default async function InventoryStock(
  props: PageProps<"/dashboard/inventory/[inventoryId]/stock">
) {
  const { inventoryId } = await props.params;

  const stockSummary = sampleStockSummary;

  const statData = [
    {
      label: "Total Quantity",
      value: stockSummary.totalQuantity,
      description: "Total quantity across locations",
    },
    {
      label: "Total Availiable",
      value: stockSummary.totalAvailable,
      description: "Total avaliable quantity across locations",
    },
    {
      label: "Total Reserved",
      value: stockSummary.totalReserved,
      description: "Total reserved quantity across locations",
    },
    {
      label: "Total Value",
      value: formatter.format(stockSummary.totalValue),
      description: "Total value across locations",
    },
  ];

  return (
    <div className="space-y-6">
      <Link
        href={`/dashboard/inventory/${inventoryId}`}
        className={cn(buttonVariants({ variant: "link" }), "text-sm")}
      >
        <ArrowLeft /> Back to Item
      </Link>
      <div>
        <h2 className="text-3xl font-bold">
          Stock Information for {stockSummary.inventoryItem.name}
        </h2>
        <p className="text-muted-foreground">View stock levels across locations</p>
      </div>
      <Card className="bg-muted">
        <CardContent>
          <h2 className="text-2xl font-bold">{stockSummary.inventoryItem.name}</h2>
          <p className="text-muted-foreground">
            Stock across {stockSummary.locationCount} location(s).
          </p>
        </CardContent>
      </Card>
      <StatBlock data={statData} />
      <DataTable columns={columns} data={stockSummary.locationsWithStock} />
    </div>
  );
}
