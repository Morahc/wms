"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Command } from "lucide-react";

const data = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Overview",
        url: "/dashboard",
      },
      {
        title: "Inventory",
        url: "/dashboard/inventory",
      },
      {
        title: "Locations",
        url: "/dashboard/locations",
      },
      {
        title: "Shipments",
        url: "/dashboard/shipments",
      },
      {
        title: "Users",
        url: "/dashboard/users",
      },
      {
        title: "Activity Logs",
        url: "/dashboard/activity-log",
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        title: "Account",
        url: "/dashboard/account",
      },
      {
        title: "Preference",
        url: "/dashboard/preference",
      },
    ],
  },
] as const;

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon" variant="floating" {...props}>
      <SidebarHeader className="flex flex-row items-center gap-2">
        <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
          <Command className="size-4" />
        </div>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold">Acne Inc</span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {data.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>{item.title}</SidebarGroupLabel>
            <SidebarGroupContent className="">
              <SidebarMenu>
                {item.items.map((item) => {
                  const isActive = pathname
                    .split("/")
                    .filter(Boolean)
                    .includes(item.title.toLowerCase());

                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={isActive}>
                        <Link href={item.url}>{item.title}</Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  );
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
