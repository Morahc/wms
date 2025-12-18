import { AppSidebar } from "@/components/layout/app-sidebar";
import { ProfileDropdown } from "@/components/profile-dropdown";
import { ThemeSwitch } from "@/components/theme-switch";
import { Button } from "@/components/ui/button";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
// import { createClient } from "@/lib/supabase/server";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const supabase = await createClient();

  // const { data, error } = await supabase.auth.getClaims();
  // if (error || !data?.claims) {
  //   redirect("/");
  // }

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset className="flex flex-col h-svh">
        <header className="flex justify-between h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger variant="outline" />
          <div className="flex items-center gap-x-4">
            <ThemeSwitch />
            <ProfileDropdown />
          </div>
        </header>
        <div className={cn("w-full max-w-full overflow-auto", "flex grow flex-col", "p-6")}>
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
