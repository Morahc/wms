"use client";

import { Download, UserPlus2, Mail } from "lucide-react";
import Link from "next/link";

import { Button, buttonVariants } from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { useUser } from "../context/user-context";

export function UserButtons() {
  const { setOpen } = useUser();

  return (
    <div className="flex gap-2">
      <Button variant="outline" className="space-x-1" onClick={() => setOpen("invite")}>
        Invite User <Mail className="size-3 md:size-5" />
      </Button>
      <Link className={cn(buttonVariants())} href={"/users/create"}>
        Create User
        <UserPlus2 className="size-3 md:size-5" />
      </Link>
    </div>
  );
}
