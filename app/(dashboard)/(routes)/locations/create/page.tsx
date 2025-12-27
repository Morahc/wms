import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import LocationForm from "@/features/location/components/location-form";
import { cn } from "@/lib/utils";

export default function CreateLocations() {
  return (
    <div className="space-y-4 md:space-y-6">
      <Link
        href={"/locations"}
        className={cn(buttonVariants({ variant: "link" }), "text-xs md:text-sm")}
      >
        <ArrowLeft /> Back to Locations
      </Link>
      <div>
        <h2 className="text-xl md:text-3xl font-medium md:font-bold">Create location</h2>
        <p className="text-sm md:text-base text-muted-foreground">
          Add a new location to your organization
        </p>
      </div>
      <LocationForm />
    </div>
  );
}
