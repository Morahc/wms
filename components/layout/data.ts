
import { Activity, Box, Brush, Building, LayoutDashboard, Settings, Truck, User2 } from "lucide-react";

export const navGroup = [
  {
    title: "Dashboard",
    items: [
      {
        title: "Overview",
        url: "/",
        icon: LayoutDashboard,
      },
      {
        title: "Inventory",
        url: "/inventory",
        icon: Box,
      },
      {
        title: "Locations",
        url: "/locations",
        icon: Building,
      },
      {
        title: "Shipments",
        url: "/shipments",
        icon: Truck,
      },
      {
        title: "Users",
        url: "/users",
        icon: User2,
      },
      {
        title: "Activity Logs",
        url: "/activity-log",
        icon: Activity,
      },
    ],
  },
  {
    title: "Settings",
    items: [
      {
        title: "Account",
        url: "/account",
        icon: Settings,
      },
      {
        title: "Preference",
        url: "/preference",
        icon: Brush,
      },
    ],
  },
] as const;