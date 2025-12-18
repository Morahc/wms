"use client"

import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import AddStockForm from "@/features/inventory/components/add-stock-form";
import { dummyInventoryItems } from "@/features/inventory/data";
import { cn } from "@/lib/utils";
import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Box,
  ChartColumn,
  DollarSign,
  Ruler,
} from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function InventoryItemDetails() {
  const data = dummyInventoryItems[0];

  if (!data) throw notFound();

  return (
    <div className="space-y-6">
      <Link
        href={"/dashboard/inventory"}
        className={cn(buttonVariants({ variant: "link" }), "text-sm")}
      >
        <ArrowLeft /> Back to Inventory
      </Link>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-medium">{data.name}</h3>
              <Badge variant={"secondary"}>{data.sku}</Badge>
            </div>
            <div className="flex items-center gap-2">
              <Badge>{data.category}</Badge>
              <Badge variant={data.isActive ? "success" : "destructive"}>
                {data.isActive ? "Active" : "Inactive"}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4">
          <div className="h-48 border rounded-md"></div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <DollarSign />
                <h4 className="text-lg font-medium">Unit Cost</h4>
              </div>
              <p className="text-sm text-muted-foreground">{data.unitCost}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Box />
                <h4 className="text-lg font-medium">Description</h4>
              </div>
              <p className="text-sm text-muted-foreground">{data.description}</p>
            </div>
          </div>
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
              <AddStockForm itemId={data.id}/>
              <Link
                href={`/dashboard/inventory/${data.id}/stock`}
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
                {data.weight} {data.weightUnit}
              </p>
            </li>
            <li className="space-y-2 py-4">
              <p className="text-muted-foreground">Dimensions</p>
              <p className="text-sm">
                {`${data.dimensions.length} x ${data.dimensions.width} x ${data.dimensions.height} ${data.dimensions.unit} `}
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
              <Badge variant={data.fragile ? "success" : "outline"} className="text-xs">
                {data.fragile ? "Yes - Handle with care" : "Not required"}
              </Badge>
            </li>
            <li className="flex justify-between items-center gap-4 py-4">
              <p className="text-muted-foreground">Special Handling</p>
              <Badge
                variant={data.requiresSpecialHandling ? "success" : "outline"}
                className="text-xs"
              >
                {data.requiresSpecialHandling ? "Yes - Requires special handling" : "Not required"}
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
