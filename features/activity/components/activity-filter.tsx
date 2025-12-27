"use client";

import { SearchIcon } from "lucide-react";

import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { ActivityLog } from "@/types/api";
import { useEffect, useState } from "react";

type Props = {
  logs: ActivityLog[];
  setLogs: React.Dispatch<React.SetStateAction<ActivityLog[]>>;
};

export default function ActivityFilter({ logs, setLogs }: Props) {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState("all");
  const [severity, setSeverity] = useState("all");
  const [time, setTime] = useState("all");

  // useEffect(() => {
  //   let filtered = [...logs];

  //   // Search filter
  //   if (q.trim()) {
  //     const query = q.toLowerCase();
  //     filtered = filtered.filter((log) => log.title.toLowerCase().includes(query));
  //   }

  //   if (category !== "all") {
  //     filtered = filtered.filter((log) => log.category === category);
  //   }

  //   if (severity !== "all") {
  //     filtered = filtered.filter((log) => log.severity === severity);
  //   }

  //   // Time filter
  //   if (time !== "all") {
  //     const now = new Date();
  //     let fromDate: Date | null = null;

  //     if (time === "Today") {
  //       fromDate = new Date(now.setHours(0, 0, 0, 0));
  //     }

  //     if (time === "7-days") {
  //       fromDate = new Date();
  //       fromDate.setDate(fromDate.getDate() - 7);
  //     }

  //     if (time === "30-days") {
  //       fromDate = new Date();
  //       fromDate.setDate(fromDate.getDate() - 30);
  //     }

  //     if (fromDate) {
  //       filtered = filtered.filter((log) => log.createdAt >= fromDate!);
  //     }
  //   }

  //   setLogs(filtered);
  // }, [q, category, severity, time, logs, setLogs]);

  console.log({ category, logs });

  return (
    <div className="flex flex-col gap-4 bg-muted p-6 rounded-md">
      <InputGroup className="bg-white">
        <InputGroupInput
          value={q}
          onChange={(event) => setQ(event.target.value)}
          placeholder="Search activity..."
        />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>

      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Select
            value={category}
            onValueChange={(e) => {
              setCategory(e);
              setLogs((logs) => {
                const filtered = logs.filter(
                  (log) => log.category.toLowerCase() === e.toLowerCase() || e === "all"
                );

                console.log(filtered);
                return filtered;
              });
            }}
          >
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="All Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All</SelectItem>
                <SelectItem value="Location">Location</SelectItem>
                <SelectItem value="Shipment">Shipment</SelectItem>
                <SelectItem value="Inventory">Inventory</SelectItem>
                <SelectItem value="Stock">Stock</SelectItem>
                <SelectItem value="User">User</SelectItem>
                <SelectItem value="System">System</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select value={severity} onValueChange={setSeverity}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="All Severity" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Severity</SelectItem>
                <SelectItem value="Info">Info</SelectItem>
                <SelectItem value="Warning">Warning</SelectItem>
                <SelectItem value="Critical">Critical</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <Select value={time} onValueChange={setTime}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="All Time" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="Today">Today</SelectItem>
                <SelectItem value="7-days">Last 7 days</SelectItem>
                <SelectItem value="30-days">Last 30 days</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Badge variant={"secondary"}>{logs.length} results</Badge>
      </div>
    </div>
  );
}
