"use client";

import { PackagePlus } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ImportDialog } from "./import-inventory-form";

export function InventoryButtons() {
  return (
    <div className="flex gap-2">
      <ImportDialog title="Import Inventory" />
      <Link className={cn(buttonVariants())} href={"/inventory/create"}>
        Create Item <PackagePlus />
      </Link>
    </div>
  );
}
