"use client"

import React, { useState } from "react";
import { Location } from "@/types/api";
import useDialogState from "@/hooks/use-dialog-state";

type LocationDialogType = "delete" | "import";

interface LocationContextType {
  open: LocationDialogType | null;
  setOpen: (str: LocationDialogType | null) => void;
  currentRow: Location | null;
  setCurrentRow: React.Dispatch<React.SetStateAction<Location | null>>;
}

const LocationContext = React.createContext<LocationContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function LocationProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<LocationDialogType>(null);
  const [currentRow, setCurrentRow] = useState<Location | null>(null);
  return (
    <LocationContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </LocationContext>
  );
}

export const useLocation = () => {
  const locationContext = React.useContext(LocationContext);

  if (!locationContext) {
    throw new Error("useLocation has to be used within <LocationContext>");
  }

  return locationContext;
};
