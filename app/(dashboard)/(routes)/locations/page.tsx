import { LocationButtons } from "@/features/location/components/location-buttons";
import { columns } from "@/features/location/components/location-column";
import { LocationDialogs } from "@/features/location/components/location-dialogs";
import { LocationTable } from "@/features/location/components/location-table";
import { locations } from "@/features/location/data";

export default function Locations() {
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-6 h-full">
      <div className="flex flex-col md:flex-row gap-3 justify-between md:items-center">
        <div>
          <h2 className="text-xl md:text-3xl font-medium md:font-bold">Locations</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Manage and monitor all your business locations
          </p>
        </div>
        <LocationButtons />
      </div>
      <LocationDialogs />
      <LocationTable columns={columns} data={locations} />
    </div>
  );
}
