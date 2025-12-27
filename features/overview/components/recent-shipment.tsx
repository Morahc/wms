"use client";

import { TrendingUp } from "lucide-react";
import { Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export const description = "A pie chart with no separator";

const chartData = [
  { browser: "Delivered", count: 275, fill: "var(--chart-3)" },
  { browser: "In Transit", count: 200, fill: "var(--chart-2)" },
  { browser: "Pending", count: 187, fill: "var(--chart-4)" },
  { browser: "Cancelled", count: 34, fill: "var(--chart-1)" },
];

const chartConfig = {
  count: {
    label: "Count",
  },
  chrome: {
    label: "Delivered",
    color: "var(--chart-3)",
  },
  safari: {
    label: "In Transit",
    color: "var(--chart-2)",
  },
  firefox: {
    label: "Pending",
    color: "var(--chart-4)",
  },
  cancelled: {
    label: "Cancelled",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function RecentShipment() {
  return (
    <Card className="flex flex-col md:col-span-2">
      <CardHeader className="items-center pb-0">
        <CardTitle>Recent Shipments</CardTitle>
        <CardDescription>Latest shipment updates</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[250px]">
          <PieChart>
            <ChartTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Pie data={chartData} dataKey="count" nameKey="browser" stroke="0" />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
      </CardFooter>
    </Card>
  );
}
