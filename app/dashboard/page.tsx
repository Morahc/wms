import { Building, Package2, Truck } from "lucide-react";

import DashViewLayout from "@/components/layout/dash-view-layout";
import { StatBlock } from "@/components/shared/stat-block";
import RecentShipment from "@/features/overview/components/recent-shipment";
import { ShipmentTrendChart } from "@/features/overview/components/shipment-trend-chart";

import { createClient } from "@/lib/supabase/server";

const statData = [
  {
    label: "Total Inventory",
    value: "183,090",
    Icon: Package2,
  },
  {
    label: "Total Shipments",
    value: "2,431",
    Icon: Truck,
  },
  {
    label: "Active Locations",
    value: "52",
    Icon: Building,
  },
];

export default async function OverviewPage() {
  const supabase = await createClient();
  const { error, data } = await supabase.auth.getUser();
  const { data: claims } = await supabase.auth.getClaims();

  console.log({ user: data.user, claims });

  return (
    <DashViewLayout
      title="Dashboard Overview"
      description="Welcome back! Here's what's happening with your shipments today."
    >
      <StatBlock className="lg:grid-cols-3" data={statData} />
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-7">
        <ShipmentTrendChart />
        <RecentShipment />
      </div>
    </DashViewLayout>
  );
}
