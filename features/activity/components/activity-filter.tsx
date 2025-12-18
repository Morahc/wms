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

export default function ActivityFilter() {
  return (
    <div className="flex flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Search activity..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>

      <div className="flex items-center justify-between">
        <div className="flex gap-4 items-center">
          <Select>
            <SelectTrigger className="">
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

          <Select>
            <SelectTrigger className="">
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

          <Select>
            <SelectTrigger className="">
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
        <Badge variant={"secondary"}>18 results</Badge>
      </div>
    </div>
  );
}
