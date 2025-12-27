import { Building, Package2, Truck } from "lucide-react";

import DashViewLayout from "@/components/layout/dash-view-layout";
import { StatBlock } from "@/components/shared/stat-block";
import RecentShipment from "@/features/overview/components/recent-shipment";
import { ShipmentTrendChart } from "@/features/overview/components/shipment-trend-chart";

const statData = [
  {
    label: "Total Stock",
    value: "183,090",
    Icon: Package2,
    description: "Units in stock across all locations",
  },
  {
    label: "Total Shipments",
    value: "2,431",
    Icon: Truck,
    description: "Shipments this month",
  },
  {
    label: "Locations",
    value: "52",
    Icon: Building,
    description: "Active locations",
  },
];

export default async function OverviewPage() {
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
