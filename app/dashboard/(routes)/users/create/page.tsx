import { buttonVariants } from "@/components/ui/button";
import UserForm from "@/features/user/components/user-form";
import { cn } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function CreateUserPage() {
  return (
    <div className="space-y-6">
      <Link
        href={"/dashboard/users"}
        className={cn(buttonVariants({ variant: "link" }), "text-sm")}
      >
        <ArrowLeft /> Back to Users
      </Link>
      <div>
        <h2 className="text-3xl font-bold">Create New User</h2>
        <p className="text-muted-foreground">Add a new user to your organization</p>
      </div>
      <UserForm />
    </div>
  );
}
