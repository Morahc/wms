"use client";

import { useEffect, useState } from "react";
import { SearchIcon } from "lucide-react";
import { activityLogs } from "../data";
import ActivityItem from "./activity-item";
import { Badge } from "@/components/ui/badge";
import { InputGroup, InputGroupAddon, InputGroupInput } from "@/components/ui/input-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ActivityWrapper() {
  const [filtered, setFiltered] = useState(activityLogs);

  const [q, setQ] = useState("");
  const [category, setCategory] = useState("all");

  useEffect(() => {
    let filtered = [...activityLogs];

    if (q.trim()) {
      const query = q.toLowerCase();
      filtered = filtered.filter((log) => log.title.toLowerCase().includes(query));
    }

    if (category !== "all") {
      filtered = filtered.filter((log) => log.category === category);
    }

    setFiltered(filtered);
  }, [q, category, setFiltered]);

  return (
    <>
      <div className="flex flex-col gap-4 bg-muted border dark:bg-black p-3 md:p-6 rounded-md">
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
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="bg-white">
                <SelectValue placeholder="All Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="all">All</SelectItem>
                  <SelectItem value="location">Location</SelectItem>
                  <SelectItem value="shipment">Shipment</SelectItem>
                  <SelectItem value="inventory">Inventory</SelectItem>
                  <SelectItem value="stock">Stock</SelectItem>
                  <SelectItem value="user">User</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <Badge>{filtered.length} results</Badge>
        </div>
      </div>
      <div className="overflow-auto space-y-6">
        {filtered.length > 0 ? (
          filtered.map((item) => <ActivityItem key={item.id} {...item} />)
        ) : (
          <div className="flex flex-col items-center justify-center py-16 text-center text-muted-foreground">
            <p className="text-sm font-medium">No activity found</p>
            <p className="text-xs">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </>
  );
}
