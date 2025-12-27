"use client"

import React, { useState } from "react";
import { InventoryItem } from "@/types/api";
import useDialogState from "@/hooks/use-dialog-state";

type InventoryDialogType = "create" | "update" | "delete" | "import";

interface InventoryContextType {
  open: InventoryDialogType | null;
  setOpen: (str: InventoryDialogType | null) => void;
  currentRow: InventoryItem | null;
  setCurrentRow: React.Dispatch<React.SetStateAction<InventoryItem | null>>;
}

const InventoryContext = React.createContext<InventoryContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function InventoryProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<InventoryDialogType>(null);
  const [currentRow, setCurrentRow] = useState<InventoryItem | null>(null);
  return (
    <InventoryContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </InventoryContext>
  );
}

export const useInventory = () => {
  const inventoryContext = React.useContext(InventoryContext);

  if (!inventoryContext) {
    throw new Error("useInventory has to be used within <InventoryContext>");
  }

  return inventoryContext;
};
