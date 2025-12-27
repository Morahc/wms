"use client";

import { ConfirmDialog } from "@/components/confirm-dialog";
import { showSubmittedData } from "@/lib/show-submitted-data";
import { useLocation } from "../context/location-context";

export function LocationDialogs() {
  const { open, setOpen, currentRow, setCurrentRow } = useLocation();

  return (
    <>
      {currentRow && (
        <ConfirmDialog
          key="location-delete"
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
            showSubmittedData(currentRow, "The following location has been deleted:");
          }}
          className="max-w-md"
          title={`Delete this location: ${currentRow.id} ?`}
          desc={
            <>
              You are about to delete a location with the ID <strong>{currentRow.id}</strong>. <br />
              This action cannot be undone.
            </>
          }
          confirmText="Delete"
        />
      )}
    </>
  );
}
