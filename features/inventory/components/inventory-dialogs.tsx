"use client";

import { ConfirmDialog } from "@/components/confirm-dialog";
import { useInventory } from "../context/inventory-context";
import { showSubmittedData } from "@/lib/show-submitted-data";

export function InventoryDialogs() {
  const { open, setOpen, currentRow, setCurrentRow } = useInventory();

  return (
    <>
      {currentRow && (
        <ConfirmDialog
          key="task-delete"
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
            showSubmittedData(currentRow, "The following inventory item has been deleted:");
          }}
          className="max-w-md"
          title={`Delete this inventory item: ${currentRow.id} ?`}
          desc={
            <>
              You are about to delete a task with the ID <strong>{currentRow.id}</strong>. <br />
              This action cannot be undone.
            </>
          }
          confirmText="Delete"
        />
      )}
    </>
  );
}
