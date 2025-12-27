import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import UserForm from "@/features/user/components/user-form";
import { cn } from "@/lib/utils";

export default function CreateUserPage() {
  return (
    <div className="space-y-4 md:space-y-6">
      <Link
        href={"/users"}
        className={cn(buttonVariants({ variant: "link" }), "text-xs md:text-sm")}
      >
        <ArrowLeft /> Back to Users
      </Link>
      <div>
        <h2 className="text-xl md:text-3xl font-medium md:font-bold">Create user</h2>
        <p className="text-sm md:text-base text-muted-foreground">
          Add a new user to your organization
        </p>
      </div>
      <UserForm />
    </div>
  );
}
