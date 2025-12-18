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

export default function LocationsFilter() {
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <InputGroup className="col-span-2">
        <InputGroupInput placeholder="Search loactions..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="All Types" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="warehosue">Warehosue</SelectItem>
            <SelectItem value="store">Store</SelectItem>
            <SelectItem value="distribution">Distribution Center</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="All Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inavtive</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
