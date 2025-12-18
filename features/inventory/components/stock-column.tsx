"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "@/components/ui/badge";
import { StockLevel } from "@/types/api";
import { MapPin } from "lucide-react";
import Link from "next/link";

export const columns: ColumnDef<StockLevel>[] = [
  {
    accessorKey: "name",
    header: "Location",
    cell: ({ row }) => {
      const { name, code, id } = row.original.location;

      return (
        <div className="flex items-center gap-2">
          <MapPin className="size-4" />
          <div>
            <Link
              href={`/dashboard/locations/${id}`}
              className="font-medium capitalize hover:border-b border-dashed"
            >
              {name}
            </Link>
            <p className="text-xs text-muted-foreground">{code}</p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "quantity",
    header: "Total",
  },
  {
    accessorKey: "availableQuantity",
    header: "Availiable",
  },
  {
    accessorKey: "reservedQuantity",
    header: "Reserved",
  },
  {
    accessorKey: "reorderPoint",
    header: "Reorder Point",
    cell: ({ row }) => {
      return <span>{row.original.reorderPoint || "N/A"}</span>;
    },
  },
  {
    header: "Percentage",
    cell: ({ row }) => {
      const { percentage } = row.original;
      return <span>{percentage}%</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const { quantity, reorderPoint } = row.original;
      const status = quantity >= (reorderPoint || 0);
      const value = status ? "Normal" : "Low Alert";

      return <Badge variant={status ? "success" : "destructive"}>{value}</Badge>;
    },
  },
];
