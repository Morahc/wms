"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { User } from "@/types/api";
import { Ellipsis } from "lucide-react";
import Link from "next/link";
import DeactivateUserModal from "./deactivate-user-modal";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "location",
    header: "Location",
    cell: ({ row }) => {
      return <span>{row.original.location?.name || "N/A"}</span>;
    },
  },
  {
    accessorKey: "isactive",
    header: "Active",
    cell: ({ row }) => {
      const { isActive } = row.original;

      return (
        <span
          className={cn(
            "inline-flex items-center w-fit px-2 h-5 text-xs font-semibold rounded-full text-white",
            isActive ? "bg-green-500" : "bg-red-500"
          )}
        >
          {isActive ? "Active" : "Not Active"}
        </span>
      );
    },
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ row }) => {
      return <span className="capitalize font-medium">{row.original.role}</span>;
    },
  },
  {
    header: "Created By",
    cell: ({ row }) => {
      return <span>{row.original.createdBy || "N/A"}</span>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { id } = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="p-0 font-normal">
              <Ellipsis className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link prefetch href={`/dashboard/inventory/${id}`}>
                View Details
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <DeactivateUserModal />
            </DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
