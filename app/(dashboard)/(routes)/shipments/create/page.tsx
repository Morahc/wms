import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import ShipmentStepForm from "@/features/shipments/components/shipment-step-form";
import FormDataProvider from "@/features/shipments/context/form-step";

export default function CreateShipmentPage() {
  return (
    <div className="space-y-3 md:space-y-6">
      <Link
        href={"/shipments"}
        className={cn(buttonVariants({ variant: "link" }), "text-xs md:text-sm")}
      >
        <ArrowLeft /> Back to Shipments
      </Link>
      <div>
        <h2 className="text-xl md:text-3xl font-medium md:font-bold">Create Shipment</h2>
        <p className="text-sm md:text-base text-muted-foreground">
          Create location transfer or customer shipment
        </p>
      </div>
      <FormDataProvider>
        <ShipmentStepForm />
      </FormDataProvider>
    </div>
  );
}
