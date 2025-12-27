import Link from "next/link";
import { notFound } from "next/navigation";

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AddStockForm from "@/features/inventory/components/add-stock-form";
import { inventoryItems } from "@/features/inventory/data";
import { cn } from "@/lib/utils";
import { AlertTriangle, ArrowLeft, ArrowRight, ChartColumn, Ruler } from "lucide-react";

export default async function InventoryItemDetails(props: PageProps<"/inventory/[inventoryId]">) {
  const { inventoryId } = await props.params;

  const item = inventoryItems.find((item) => item.id === inventoryId);

  if (!item) {
    return notFound();
  }

  return (
    <div className="space-y-6">
      <Link href={"/inventory"} className={cn(buttonVariants({ variant: "link" }), "text-sm")}>
        <ArrowLeft /> Back to Inventory
      </Link>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div className="space-y-2">
              <h3 className="text-xl font-medium">{item.name}</h3>
              <div className="flex gap-2 items-center">
                <Badge variant={"secondary"}>{item.sku}</Badge>
                <p className="font-bold text-muted-foreground">${item.unitCost}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge>{item.category}</Badge>
              <Badge variant={item.active ? "success" : "destructive"}>
                {item.active ? "Active" : "Inactive"}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col items-start gap-2">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <ChartColumn />
              <h4 className="text-lg font-medium">Stock Information</h4>
            </div>
            <div className="flex gap-2">
              <AddStockForm itemId={item.id} />
              <Link
                href={`/inventory/${item.id}/stock`}
                className={cn(buttonVariants({ variant: "outline", size: "sm" }), "text-xs")}
              >
                View Stock <ArrowRight />
              </Link>
            </div>
          </div>

          <ul className="w-full divide-y text-sm">
            <li className="flex justify-between items-center gap-4 py-4">
              <p className="text-muted-foreground">Total Units</p>
              <p className="font-semibold">158 units</p>
            </li>
            <li className="flex justify-between items-center gap-4 py-4">
              <p className="text-muted-foreground">Total Available</p>
              <p className="font-semibold">128 units</p>
            </li>
            <li className="flex justify-between items-center gap-4 py-4">
              <p className="text-muted-foreground">Total Reserved</p>
              <p className="font-semibold">30 units</p>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <Ruler />
            <h4 className="text-lg font-medium">Physical Properties</h4>
          </div>
          <ul className="w-full divide-y text-sm">
            <li className="space-y-2 py-4">
              <p className="text-muted-foreground">Weight</p>
              <p className="text-sm">
                {item.weight} {item.weightUnit}
              </p>
            </li>
            <li className="space-y-2 py-4">
              <p className="text-muted-foreground">Dimensions</p>
              <p className="text-sm">
                {`${item.dimensions.length} x ${item.dimensions.width} x ${item.dimensions.height} ${item.dimensions.unit} `}
              </p>
              <p className="text-xs text-muted-foreground">Length x Width x Height</p>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-2">
            <AlertTriangle />
            <h4 className="text-lg font-medium">Handling Requirements</h4>
          </div>
          <ul className="w-full divide-y text-sm">
            <li className="flex justify-between items-center gap-4 py-4">
              <p className="text-muted-foreground">Fragile</p>
              <Badge variant={item.fragile ? "success" : "outline"} className="text-xs">
                {item.fragile ? "Yes - Handle with care" : "Not required"}
              </Badge>
            </li>
            <li className="flex justify-between items-center gap-4 py-4">
              <p className="text-muted-foreground">Special Handling</p>
              <Badge
                variant={item.requiresSpecialHandling ? "success" : "outline"}
                className="text-xs"
              >
                {item.requiresSpecialHandling ? "Yes - Requires special handling" : "Not required"}
              </Badge>
            </li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col items-start gap-2">
          <h4 className="text-lg font-medium">Timeline</h4>
          <ul className="w-full divide-y text-sm">
            <li className="flex justify-between  items-center gap-4 py-4">
              <p className="text-muted-foreground">Created</p>
              <p className="font-medium">January 15, 2020 at 09:00 AM</p>
            </li>
            <li className="flex justify-between items-center gap-4 py-4">
              <p className="text-muted-foreground">Last Updated</p>
              <p className="font-medium">March 15, 2024 at 11:30 AM</p>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
