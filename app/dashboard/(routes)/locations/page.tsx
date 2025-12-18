import { Building2, Package2, Plus, Warehouse } from "lucide-react";
import Link from "next/link";

import { StatBlock } from "@/components/shared/stat-block";
import { buttonVariants } from "@/components/ui/button";
import { DataTable } from "@/components/ui/datatable";
import { columns } from "@/features/location/components/location-column";
import LocationsFilter from "@/features/location/components/locations-filter";
import { dummyLocations } from "@/features/location/data";
import { cn } from "@/lib/utils";

export default function Locations() {
  const statData = [
    {
      label: "Total Locations",
      value: "18",
      description: "15 active, 3 inactive",
      Icon: Building2,
    },
    {
      label: "Warehouses",
      value: "3",
      description: "Storage facilities",
      Icon: Warehouse,
    },
    {
      label: "Distribution Centers",
      value: "3",
      description: "Distribution facilities",
      Icon: Warehouse,
    },
    {
      label: "Total Stock",
      value: "15.3k",
      description: "All availiable Stock",
      Icon: Package2,
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Locations</h2>
          <p className="text-muted-foreground">Manage and monitor all your business locations</p>
        </div>
        <Link className={cn(buttonVariants())} href={"/dashboard/locations/create"}>
          Create
          <Plus />
        </Link>
      </div>
      <StatBlock data={statData} />
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold tracking-tight">All Locations</h2>
          <p className="text-sm font-light">Browse, search and filter all locations</p>
        </div>
        <LocationsFilter />
        <DataTable columns={columns} data={dummyLocations} />
      </div>
    </div>
  );
}
