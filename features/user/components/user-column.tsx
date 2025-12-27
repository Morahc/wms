"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Ellipsis, Trash, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "@/types/api";
import { useUser } from "../context/user-context";

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
    accessorKey: "active",
    header: "Active",
    cell: ({ row }) => {
      const { active } = row.original;

      return (
        <Badge variant={active ? "success" : "destructive"}>{active ? "Active" : "Inactive"}</Badge>
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
      const current = row.original;
      const { setOpen, setCurrentRow } = useUser();

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="data-[state=open]:bg-muted flex h-8 w-8 p-0">
              <Ellipsis size={16} />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              onClick={() => {
                setOpen("deactivate");
                setCurrentRow(current);
              }}
            >
              Deactivate User
              <DropdownMenuShortcut>
                <X className="size-3 md:size-5" />
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
      );
    },
  },
];
