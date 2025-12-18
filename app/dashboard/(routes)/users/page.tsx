import Link from "next/link";
import { UserPlus2 } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { DataTable } from "@/components/ui/datatable";
import { columns } from "@/features/user/components/user-column";
import UserFilter from "@/features/user/components/user-filter";
import { cn } from "@/lib/utils";
import { users } from "@/data";

export default async function Users() {
  // const {
  //   data: { users },
  //   error,
  // } = await supabaseAdmin.auth.admin.listUsers();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold">User Management</h2>
          <p className="text-muted-foreground">Manage, search and browse your users and staff</p>
        </div>
        <Link className={cn(buttonVariants())} href={"/dashboard/users/create"}>
          Create User
          <UserPlus2 />
        </Link>
      </div>
      <div className="space-y-4">
        <UserFilter />
        <DataTable columns={columns} data={users} />
      </div>
    </div>
  );
}
