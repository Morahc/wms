"use client"

import React, { useState } from "react";
import useDialogState from "@/hooks/use-dialog-state";
import { User } from "@/types/api";

type UserDialogType = "deactivate" | "delete" | "invite";

interface UserContextType {
  open: UserDialogType | null;
  setOpen: (str: UserDialogType | null) => void;
  currentRow: User | null;
  setCurrentRow: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = React.createContext<UserContextType | null>(null);

interface Props {
  children: React.ReactNode;
}

export default function UserProvider({ children }: Props) {
  const [open, setOpen] = useDialogState<UserDialogType>(null);
  const [currentRow, setCurrentRow] = useState<User | null>(null);
  return (
    <UserContext value={{ open, setOpen, currentRow, setCurrentRow }}>
      {children}
    </UserContext>
  );
}

export const useUser = () => {
  const userContext = React.useContext(UserContext);

  if (!userContext) {
    throw new Error("useUser has to be used within <UserContext>");
  }

  return userContext;
};
