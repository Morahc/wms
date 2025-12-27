import Link from "next/link";
import { ArrowLeft, Package } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

export default function ItenNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <Package className="size-16 text-muted-foreground mb-4" />
      <h2 className="text-2xl font-semibold mb-2">Item Not Found</h2>
      <p className="text-muted-foreground mb-4">
        The inventory item you're looking for doesn't exist.
      </p>
      <Link className={buttonVariants({})} href={"/inventory"}>
        <ArrowLeft />
        Go Back
      </Link>
    </div>
  );
}
