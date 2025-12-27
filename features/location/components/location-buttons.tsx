"use client";

import { Warehouse } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

import { ImportDialog } from "@/features/inventory/components/import-inventory-form";
import { cn } from "@/lib/utils";

export function LocationButtons() {
  return (
    <div className="flex gap-2">
      <ImportDialog title="Import Locations" />
      <Link className={cn(buttonVariants())} href={"/locations/create"}>
        Create Location
        <Warehouse className="size-3 md:size-5" />
      </Link>
    </div>
  );
}
