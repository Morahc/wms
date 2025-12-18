import { buttonVariants } from "@/components/ui/button";
import InventoryForm from "@/features/inventory/components/inventory-form";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewInventoryPage() {
  return (
    <div className="space-y-6">
      <Link
        href={"/dashboard/inventory"}
        className={cn(buttonVariants({ variant: "link" }), "text-sm")}
      >
        <ArrowLeft /> Back to Inventory
      </Link>
      <div>
        <h2 className="text-3xl font-bold">Create New Item</h2>
        <p className="text-muted-foreground">Add a new item to your inventory</p>
      </div>
      <InventoryForm />
    </div>
  );
}
