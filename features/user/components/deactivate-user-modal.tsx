"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

export default function DeactivateUserModal() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
          Deactivate User
      </DialogTrigger>
      <DialogContent className="space-y-4">
        <DialogHeader>
          <DialogTitle>Deactivate User</DialogTitle>
          <DialogDescription>Are you sure you want to deactivate Sarah Johnson?</DialogDescription>
        </DialogHeader>
        <ul className="list-disc list-inside space-y-2 text-sm">
          <li>User will be immediately logged out</li>
          <li>User will not be able to log in</li>
          <li>All data and activity history will be preserved</li>
          <li>You can reactivate this account later </li>
        </ul>
      </DialogContent>
    </Dialog>
  );
}
