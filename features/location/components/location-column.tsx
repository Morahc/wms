"use client";

import Link from "next/link";
import { useCopyToClipboard } from "usehooks-ts";
import { ColumnDef } from "@tanstack/react-table";
import { CopyIcon, Ellipsis } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Location } from "@/types/api";
import { cn } from "@/lib/utils";

export const columns: ColumnDef<Location>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "code",
    header: "Code",
    cell: ({ row: { original } }) => {
      const { code } = original;

      return <span className="bg-gray-100 p-1 rounded-md">{code}</span>;
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <span className="capitalize font-medium p-1 rounded-md bg-gray-200">{row.original.type}</span>
    ),
  },
  {
    accessorKey: "address.city",
    header: "City",
    cell: ({ row }) => {
      const { city, state } = row.original.address;
      return (
        <span className="capitalize">
          {state}, {city}
        </span>
      );
    },
  },
  {
    accessorKey: "contactInfo.managerName",
    header: "Manager",
    cell: ({ row }) => {
      const { email, managerName, phone } = row.original.contactInfo;
      const [_, copyToClipboard] = useCopyToClipboard();
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="border-b border-dashed">{managerName}</TooltipTrigger>
            {email && phone && (
              <TooltipContent side="left" className="w-fit">
                <div className="text-sm w-full text-pretty">
                  {
                    <div className="flex justify-between items-center gap-2">
                      <p>{email}</p>
                      <Button onClick={() => copyToClipboard(email)}>
                        <CopyIcon />
                      </Button>
                    </div>
                  }
                  <div className="flex justify-between items-center gap-2">
                    <p>{phone}</p>
                    <Button onClick={() => copyToClipboard(phone)}>
                      <CopyIcon />
                    </Button>
                  </div>
                </div>
              </TooltipContent>
            )}
          </Tooltip>
        </TooltipProvider>
      );
    },
  },
  {
    accessorKey: "isActive",
    header: "Status",
    cell: ({ row }) => {
      const isActive = row.original.isActive;
      const value = isActive ? "Active" : "Inactive";

      return (
        <span
          className={cn("font-medium p-1 rounded-md", isActive ? "bg-green-100" : "bg-red-100")}
        >
          {value}
        </span>
      );
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { id } = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis className="size-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link className="w-full" href={`/dashboard/locations/${id}`}>
                View Details
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="w-full" href={`/dashboard/locations/${id}/edit`}>
                Edit Loaction
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Button
                onClick={() => alert(id)}
                variant={"ghost"}
                className="h-fit w-full justify-start text-destructive"
              >
                Delete Location
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
