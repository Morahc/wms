"use client";

import React, { createContext, PropsWithChildren, useContext } from "react";

import { cn } from "@/lib/utils";
import { Card } from "../ui/card";

type StatItem = {
  label: string;
  value: string | number;
};

type StatContext = {
  statItem: StatItem;
};

type StatItemProps = PropsWithChildren & {
  statItem: StatItem;
};

type ClassName = {
  className?: string;
};

const StatsContext = createContext<StatContext | undefined>(undefined);

const useStatContext = () => {
  const context = useContext(StatsContext);

  if (!context) {
    throw new Error("useStatContext must be used with a Stat");
  }

  return context;
};

export function StatContainer({
  children,
  ...props
}: PropsWithChildren & React.ComponentProps<"div">) {
  return (
    <div
      {...props}
      className={cn("flex justify-between rounded-xl h-24 lg:h-36 gap-4 lg:gap-8", props.className)}
    >
      {children}
    </div>
  );
}

export function StatItem({
  statItem,
  children,
  ...props
}: StatItemProps & React.ComponentProps<"div">) {
  return (
    <StatsContext.Provider value={{ statItem }}>
      <Card
        {...props}
        className={cn("flex flex-col justify-center grow gap-2 p-4 lg:p-5", props.className)}
      >
        {children}
      </Card>
    </StatsContext.Provider>
  );
}

export function StatLabel({ className }: ClassName) {
  const { statItem } = useStatContext();

  return (
    <div className="flex flex-nowrap items-center gap-2">
      <p className={cn("text-lg font-medium", className)}>{statItem.label}</p>
    </div>
  );
}

export function StatValue({ className }: ClassName) {
  const { statItem } = useStatContext();

  return <h3 className={cn("text-primary font-semibold text-3xl", className)}>{statItem.value}</h3>;
}
