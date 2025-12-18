import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import LocationForm from "@/features/location/components/location-form";
import { cn } from "@/lib/utils";

export default function CreateLocations() {
  return (
    <div className="space-y-6">
      <Link
        href={"/dashboard/locations"}
        className={cn(buttonVariants({ variant: "link" }), "text-sm")}
      >
        <ArrowLeft /> Back to Locations
      </Link>
      <div>
        <h2 className="text-3xl font-bold">Create New Location</h2>
        <p className="text-muted-foreground">Add a new location to your organization</p>
      </div>
      <LocationForm />
    </div>
  );
}
