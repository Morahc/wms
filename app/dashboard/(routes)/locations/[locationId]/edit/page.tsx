import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import LocationForm from "@/features/location/components/location-form";
import { cn } from "@/lib/utils";
import { AddLocationInput } from "@/features/location/api/add-location";

const initialData: AddLocationInput = {
  name: "Central Warehouse NYC",
  code: "WH-NYC",
  type: "warehouse",
  address: {
    street: "789 Industrial Parkway",
    city: "Brooklyn",
    state: "NY",
    postalCode: "11220",
    country: "United States",
  },
  contactInfo: {
    phone: "+1 (718) 555-0123",
    email: "nyc.warehouse@company.com",
    managerName: "Michael Chen",
  },
  isActive: true,
};

export default function EditLocation() {
  return (
    <div className="space-y-6">
      <Link
        href={"/dashboard/locations"}
        className={cn(buttonVariants({ variant: "link" }), "text-sm")}
      >
        <ArrowLeft /> Back to Locations
      </Link>
      <div>
        <h2 className="text-3xl font-bold">Edit Location</h2>
        <p className="text-muted-foreground">Update information for {initialData.name}</p>
      </div>
      <LocationForm initialData={initialData} />
    </div>
  );
}
