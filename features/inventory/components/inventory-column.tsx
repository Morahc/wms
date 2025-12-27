"use client";

import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

import { DataTableColumnHeader } from "@/components/shared/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatter } from "@/lib/utils";
import { InventoryItem } from "@/types/api";
import { Ellipsis, Eye, Pencil, SquarePen, Trash, View } from "lucide-react";
import Link from "next/link";
import { useInventory } from "../context/inventory-context";

export const columns: ColumnDef<InventoryItem>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Name" />,
    cell: ({ row }) => {
      const { name, fragile, imageUrl } = row.original;
      return (
        <div className="flex items-center gap-x-3 w-max">
          <Image
            src={imageUrl}
            alt={name}
            width={40}
            height={40}
            className="object-cover aspect-square"
          />
          <span>{name}</span> {fragile && <Badge variant={"outline"}>Fragile</Badge>}
        </div>
      );
    },
  },
  {
    accessorKey: "sku",
    header: "SKU",
    cell: ({ row }) => {
      return <Badge variant={"default"}>{row.original.sku}</Badge>;
    },
  },
  {
    accessorKey: "category",
    header: ({ column }) => <DataTableColumnHeader column={column} title="Category" />,
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
      const active = row.original.active;
      const value = active ? "Active" : "Inactive";

      return <Badge variant={active ? "success" : "destructive"}>{value}</Badge>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { setCurrentRow, setOpen } = useInventory();
      const current = row.original;

      return (
        <div className="relative">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="data-[state=open]:bg-muted flex h-8 w-8 p-0">
                <Ellipsis size={16} />
                <span className="sr-only">Open menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[160px]">
              <DropdownMenuItem>
                <Link className="w-full" href={`/inventory/${current.id}`}>
                  View
                </Link>
                <DropdownMenuShortcut>
                  <View className="size-3 md:size-5" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link className="w-full" href={`/inventory/${current.id}/edit`}>
                  Edit
                </Link>
                <DropdownMenuShortcut>
                  <SquarePen className="size-3 md:size-5" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setOpen("delete");
                  setCurrentRow(current);
                }}
              >
                Delete
                <DropdownMenuShortcut>
                  <Trash className="size-3 md:size-5" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
