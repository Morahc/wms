"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Shipment, ShipmentStatus } from "@/types/api";
import Link from "next/link";
import { ArrowRight, Dot, Ellipsis } from "lucide-react";
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
            <Badge variant={"secondary"}>{destinationLocation.code}</Badge>
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
    accessorKey: "createdAt",
    header: "Created At",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const { id, status } = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis className="size-5" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>
              <Link className="w-full" href={`/dashboard/shipments/${id}`}>
                View
              </Link>
            </DropdownMenuItem>
            {status == "draft" ||
              (status == "pending" && (
                <DropdownMenuItem>
                  <Link className="w-full" href={`/dashboard/shipments/${id}`}>
                    Edit
                  </Link>
                </DropdownMenuItem>
              ))}
            <DropdownMenuItem asChild>
              <Button
                onClick={() => alert(id)}
                variant={"ghost"}
                className="h-fit text-destructive"
              >
                Delete
              </Button>
            </DropdownMenuItem>
            {status === "pending" ? (
              <DropdownMenuItem>Mark In Transit</DropdownMenuItem>
            ) : (
              <DropdownMenuItem>Mark Delivered</DropdownMenuItem>
            )}
            <DropdownMenuSeparator />
            <DropdownMenuItem>Cancel Shipment</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
