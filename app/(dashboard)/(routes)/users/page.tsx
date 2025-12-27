import { UserButtons } from "@/features/user/components/user-buttons";
import { columns } from "@/features/user/components/user-column";
import { UserDialogs } from "@/features/user/components/user-dialogs";
import { UsersTable } from "@/features/user/components/user-table";
import { users } from "@/features/user/data";

export default async function Users() {
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-6 h-full">
      <div className="flex flex-col md:flex-row gap-3 justify-between md:items-center">
        <div>
          <h2 className="text-xl md:text-3xl font-medium md:font-bold">User Management</h2>
          <p className="text-muted-foreground text-sm md:text-base">
            Manage, search and browse your users and staff
          </p>
        </div>
        <UserButtons />
      </div>
      <UserDialogs />
      <UsersTable columns={columns} data={users} />
    </div>
  );
}
