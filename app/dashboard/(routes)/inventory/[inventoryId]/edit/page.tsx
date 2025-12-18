import { buttonVariants } from "@/components/ui/button";
import { AddInventoryInput } from "@/features/inventory/api/add-inventory";
import InventoryForm from "@/features/inventory/components/inventory-form";
import { dummyInventoryItems } from "@/features/inventory/data";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function EditInventory() {
  const initalData: AddInventoryInput = {
    sku: "WM-2024-001",
    name: "Wireless Mouse",
    description:
      "Ergonomic wireless mouse with 2.4GHz connectivity and adjustable DPI settings. Features 6 programmable buttons and rechargeable battery with up to 60 days of use.",
    category: "Electronics",
    weight: 0.15,
    weightUnit: "kg",
    dimensions: {
      length: 12.5,
      width: 7.5,
      height: 4.2,
      unit: "cm",
    },
    size: "Medium",
    unitCost: 24.99,
    requiresSpecialHandling: false,
    fragile: true,
    isActive: true,
    initialStock: [{ location: "", quantity: 0, reorderLevel: 0 }],
    image: undefined,
  };
  return (
    <div className="space-y-6">
      <Link
        href={"/dashboard/inventory"}
        className={cn(buttonVariants({ variant: "link" }), "text-sm")}
      >
        <ArrowLeft /> Back to Inventory
      </Link>
      <div>
        <h2 className="text-3xl font-bold">Edit Item</h2>
        <p className="text-muted-foreground">Update information for {initalData.name}</p>
      </div>
      <InventoryForm initialData={initalData} />
    </div>
  );
}
