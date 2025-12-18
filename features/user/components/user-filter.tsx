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

export default function UserFilter() {
  return (
    <div className="grid grid-cols-4 items-center gap-4">
      <InputGroup className="col-span-2">
        <InputGroupInput placeholder="Search items..." />
        <InputGroupAddon>
          <SearchIcon />
        </InputGroupAddon>
      </InputGroup>
      <Select>
        <SelectTrigger className="">
          <SelectValue placeholder="Staff" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="distributor">Distributor</SelectItem>
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
