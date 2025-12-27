"use client";

import Link from "next/link";
import { useCopyToClipboard } from "usehooks-ts";
import { ColumnDef } from "@tanstack/react-table";
import { CopyIcon, Ellipsis, SquarePen, Trash, View } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Location } from "@/types/api";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { useLocation } from "../context/location-context";
import { toast } from "sonner";

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

      return <Badge>{code}</Badge>;
    },
  },
  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => (
      <Badge variant={"outline"} className="capitalize font-medium">
        {row.original.type}
      </Badge>
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

      const handleCopy = (value: string) => {
        copyToClipboard(phone);
        toast.success("Copied to clipboard");
      };
      return (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="border-b border-dashed">{managerName}</TooltipTrigger>
            {email && phone && (
              <TooltipContent side="left" className="w-fit">
                <div className="text-xs md:text-sm w-full text-pretty">
                  {
                    <div className="flex justify-between items-center gap-2">
                      <p>{email}</p>
                      <Button
                        onClick={() => {
                          handleCopy(email);
                        }}
                      >
                        <CopyIcon className="size-3 md:size-5" />
                      </Button>
                    </div>
                  }
                  <div className="flex justify-between items-center gap-2">
                    <p>{phone}</p>
                    <Button onClick={() => handleCopy(phone)}>
                      <CopyIcon className="size-3 md:size-5" />
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
    accessorKey: "active",
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
      const { setOpen, setCurrentRow } = useLocation();
      const current = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="data-[state=open]:bg-muted flex h-8 w-8 p-0">
              <Ellipsis size={16} />
              <span className="sr-only">Open menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <Link className="w-full" href={`/locations/${current.id}`}>
                View
              </Link>
              <DropdownMenuShortcut>
                <View className="size-3 md:size-5" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link className="w-full" href={`/locations/${current.id}/edit`}>
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
      );
    },
  },
];
