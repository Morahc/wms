"use client";

import { cn } from "@/lib/utils";
import { useSearch } from "@/context/search-context";
import { Button } from "./ui/button";
import { SearchIcon } from "lucide-react";

interface Props {
  className?: string;
}

export function Search({ className = "" }: Props) {
  const { setOpen } = useSearch();
  return (
    <Button
      variant="outline"
      className={cn(
        "bg-muted/25 px-2 text-muted-foreground hover:bg-muted/50 w-full flex items-center flex-1 justify-start md:justify-between rounded-sm text-sm font-normal shadow-none md:w-40 md:flex-none lg:w-56 xl:w-64",
        className
      )}
      onClick={() => setOpen(true)}
    >
      <div className="flex items-center gap-2">
        <SearchIcon className="size-4 md:size-5" aria-hidden="true" />
        <span className="text-[13px]">Search</span>
      </div>
      <kbd className="bg-muted pointer-events-none h-5 items-center gap-1 rounded border px-1.5 font-mono text-[10px] font-medium opacity-100 select-none hidden md:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  );
}
