"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { InventoryItem } from "@/types/api";
import { ArrowUpDown, Ellipsis } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { cn, formatter } from "@/lib/utils";

export const columns: ColumnDef<InventoryItem>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const { name, fragile } = row.original;
      return (
        <span>
          {name} {fragile && <Badge variant={"outline"}>Fragile</Badge>}
        </span>
      );
    },
  },
  {
    accessorKey: "sku",
    header: "SKU",
    cell: ({ row }) => {
      return <Badge variant={"secondary"}>{row.original.sku}</Badge>;
    },
  },
  {
    accessorKey: "category",
    header: "Category",
  },
  {
    accessorKey: "unitCost",
    header: "Unit Cost",
    cell: ({ row }) => {
      return <span className="font-light">{formatter.format(row.original.unitCost)}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const isActive = row.original.isActive;
      const value = isActive ? "Active" : "Inactive";

      return <Badge variant={isActive ? "success" : "destructive"}>{value}</Badge>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { id } = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis size={18} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link className="w-full" href={`/dashboard/inventory/${id}`}>
                View
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="w-full" href={`/dashboard/inventory/${id}/edit`}>
                Edit
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button onClick={() => alert(id)} variant={"ghost"} className="text-destructive">
                Delete
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
