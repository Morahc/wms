import { AppSidebar } from "@/components/layout/app-sidebar";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { Search } from "@/components/search";
import { ThemeSwitch } from "@/components/theme-switch";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col h-svh">
        <header className="flex justify-between h-16 shrink-0 items-center gap-2 border-b px-4">
          <div className="flex items-center gap-x-4">
            <SidebarTrigger variant="outline" />
            <Search />
          </div>
          <div className="flex items-center  gap-x-4">
            <ThemeSwitch />
            <ProfileDropdown />
          </div>
        </header>
        <div className={cn("w-full max-w-full overflow-auto", "flex grow flex-col")}>
          <div className="px-4 py-2 md:p-6">{children}</div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
