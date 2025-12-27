import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import LocationForm from "@/features/location/components/location-form";
import { cn } from "@/lib/utils";
import { AddLocationInput } from "@/features/location/api/add-location";
import { locations } from "@/features/location/data";

export default async function EditLocation(props: PageProps<"/locations/[locationId]/edit">) {
  const { locationId } = await props.params;

  const initialData = locations.find((item) => item.id === locationId);

  if (!initialData) {
    return null;
  }
  return (
    <div className="space-y-6">
      <Link href={"/locations"} className={cn(buttonVariants({ variant: "link" }), "text-sm")}>
        <ArrowLeft /> Back to Locations
      </Link>
      <div>
        <h2 className="text-xl md:text-3xl font-medium md:font-bold">Edit Location</h2>
        <p className="text-muted-foreground">Update information for {initialData.name}</p>
      </div>
      <LocationForm initialData={initialData} />
    </div>
  );
}
