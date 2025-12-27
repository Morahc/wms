"use client";

import { ConfirmDialog } from "@/components/confirm-dialog";
import { showSubmittedData } from "@/lib/show-submitted-data";
import { useUser } from "../context/user-context";
import { InviteUserDialog } from "./invite-user-dialog";

export function UserDialogs() {
  const { open, setOpen, currentRow, setCurrentRow } = useUser();

  return (
    <>
      <InviteUserDialog open={open == "invite"} onOpenChange={() => setOpen("invite")} />
      {/* <DeactivateUserDialog
        open={open == "deactivate"}
        onOpenChange={() => setOpen("deactivate")}
      /> */}
      {currentRow && (
        <>
          <ConfirmDialog
            destructive
            open={open === "delete"}
            onOpenChange={() => {
              setOpen("delete");
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
            }}
            handleConfirm={() => {
              setOpen(null);
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
              showSubmittedData(currentRow, "The following user has been deleted:");
            }}
            className="max-w-md"
            title={`Delete user`}
            desc={
              <>
                You are about to delete <strong>{currentRow.name}'s</strong> account. <br />
                This action cannot be undone.
              </>
            }
            confirmText="Delete"
          />
          <ConfirmDialog
            destructive
            open={open === "deactivate"}
            onOpenChange={() => {
              setOpen("deactivate");
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
            }}
            handleConfirm={() => {
              setOpen(null);
              setTimeout(() => {
                setCurrentRow(null);
              }, 500);
              showSubmittedData(currentRow, "The following user has been deactivated:");
            }}
            className="max-w-md"
            title={`Deactivate User`}
            desc={
              <>
                You are about to deactivate <strong>{currentRow.name}'s</strong> account. <br />
                This action cannot be undone.
              </>
            }
            confirmText="Deactivate"
            children={
              <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                <li>User will be immediately logged out</li>
                <li>User will not be able to log in</li>
                <li>All data and activity history will be preserved</li>
                <li>You can reactivate this account later </li>
              </ul>
            }
          />
        </>
      )}
    </>
  );
}
