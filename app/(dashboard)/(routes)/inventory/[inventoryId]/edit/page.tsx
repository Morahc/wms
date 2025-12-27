import { buttonVariants } from "@/components/ui/button";
import InventoryForm from "@/features/inventory/components/inventory-form";
import { inventoryItems } from "@/features/inventory/data";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default async function EditInventory(props: PageProps<"/inventory/[inventoryId]/edit">) {
  const { inventoryId } = await props.params;

  const initalData = inventoryItems.find((item) => item.id === inventoryId);

  if (!initalData) {
    return null;
  }

  return (
    <div className="space-y-6">
      <Link href={"/inventory"} className={cn(buttonVariants({ variant: "link" }), "text-sm")}>
        <ArrowLeft /> Back to Inventory
      </Link>
      <div>
        <h2 className="text-xl md:text-3xl font-medium md:font-bold">Edit Item</h2>
        <p className="text-muted-foreground">Update information for {initalData.name}</p>
      </div>
      <InventoryForm initialData={initalData} />
    </div>
  );
}
