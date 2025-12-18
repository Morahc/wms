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

export default function ShipmentsFilter() {
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <InputGroup className="col-span-2">
        <InputGroupInput placeholder="Search Shipment number..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="All Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="in transit">In Transit</SelectItem>
            <SelectItem value="delivererd">Delivererd</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="All Types" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="transfer">Transfer</SelectItem>
            <SelectItem value="customer-delivery">Customer Delivery</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
