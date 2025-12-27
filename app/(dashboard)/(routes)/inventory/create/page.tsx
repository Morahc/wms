import { buttonVariants } from "@/components/ui/button";
import InventoryForm from "@/features/inventory/components/inventory-form";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NewInventoryPage() {
  return (
    <div className="space-y-3 md:space-y-6">
      <Link
        href={"/inventory"}
        className={cn(buttonVariants({ variant: "link" }), "text-xs md:text-sm")}
      >
        <ArrowLeft /> Back to Inventory
      </Link>
      <div>
        <h2 className="text-xl md:text-3xl font-medium md:font-bold">Create Item</h2>
        <p className="text-xl md:text-3xl font-medium md:font-bold">
          Add a new item to your inventory
        </p>
      </div>
      <InventoryForm />
    </div>
  );
}
