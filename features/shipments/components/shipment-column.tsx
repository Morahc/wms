"use client";

import Link from "next/link";
import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Shipment, ShipmentStatus } from "@/types/api";
import { ArrowRight, CircleCheck, CircleX, Dot, Ellipsis, Trash, View } from "lucide-react";
import { Badge, badgeVariants } from "@/components/ui/badge";
import { VariantProps } from "class-variance-authority";

export const columns: ColumnDef<Shipment>[] = [
  {
    accessorKey: "shipmentNumber",
    header: "Number",
  },
  {
    accessorKey: "type",
    header: "Shipment Type",
    cell: ({ row }) => {
      return <span className="capitalize">{row.original.type.replace("_", " ")}</span>;
    },
  },
  {
    accessorKey: "name",
    header: "Destination",
    cell: ({ row }) => {
      const type = row.original.type;

      if (type == "transfer") {
        const { originLocation, destinationLocation } = row.original;

        return (
          <span className="flex items-center gap-2">
            <p className="text-sm text-muted-foreground">{originLocation.code}</p>{" "}
            <ArrowRight size={12} />
            <Badge>{destinationLocation.code}</Badge>
          </span>
        );
      }

      if (type == "customer_order") {
        const { customerInfo } = row.original;

        return (
          <div className="flex items-center gap-1">
            <p className="text-sm">{customerInfo.name}</p> <Dot />
            <p>
              {customerInfo.address.state}, {customerInfo.address.city}
            </p>
          </div>
        );
      }
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.original.status;

      const variants: Record<ShipmentStatus, VariantProps<typeof badgeVariants>["variant"]> = {
        draft: "secondary",
        pending: "warning",
        in_transit: "info",
        cancelled: "destructive",
        failed: "destructive",
        delivered: "success",
        out_for_delivery: "info",
        confirmed: "success",
      };

      return (
        <Badge variant={variants[status] || "success"} className="capitalize">
          {status.replace("_", " ")}
        </Badge>
      );
    },
  },
  {
    accessorKey: "itemCount",
    header: "Items",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { id, status } = row.original;

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
              <Link className="w-full" href={`/shipments/${id}`}>
                View
              </Link>
              <DropdownMenuShortcut>
                <View className="size-3 md:size-5" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            {/* {status == "draft" ||
              (status == "pending" && (
                <DropdownMenuItem>
                  <Link className="w-full" href={`/shipments/${id}`}>
                    Edit
                  </Link>
                </DropdownMenuItem>
              ))} */}
            <DropdownMenuItem>
              Delete
              <DropdownMenuShortcut>
                <Trash className="size-3 md:size-5" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
            {status === "pending" ? (
              <DropdownMenuItem>
                Mark In Transit
                <DropdownMenuShortcut>
                  <CircleCheck className="size-3 md:size-5" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            ) : (
              <DropdownMenuItem>
                Mark Delivered
                <DropdownMenuShortcut>
                  <CircleCheck className="size-3 md:size-5" />
                </DropdownMenuShortcut>
              </DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              Cancel Shipment
              <DropdownMenuShortcut>
                <CircleX className="size-3 md:size-5" />
              </DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
