"use client";

import { createContext, type PropsWithChildren, useContext, useState } from "react";

type FormDataContextProps = PropsWithChildren;

type FormDataContext = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const FormDataContext = createContext<FormDataContext | null>(null);

const FormDataProvider = ({ children }: FormDataContextProps) => {
  const [step, setStep] = useState(0);

  return <FormDataContext value={{ step, setStep }}>{children}</FormDataContext>;
};

export const useFormDataContext = (): NonNullable<FormDataContext> => {
  const context = useContext(FormDataContext);

  if (!context) {
    throw new Error("useFormDataContext not in provider");
  }

  return context;
};

export default FormDataProvider;
