"use client";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { useSearch } from "@/context/search-context";
import { useTheme } from "@/context/theme-context";
import { Sun, ChevronRight, Laptop, Moon, MoveRight } from "lucide-react";
import React from "react";
import { navGroup } from "./layout/data";
import { ScrollArea } from "./ui/scroll-area";
import { useRouter } from "next/navigation";

export function CommandMenu() {
  const router = useRouter();
  const { setTheme } = useTheme();
  const { open, setOpen } = useSearch();

  const runCommand = React.useCallback(
    (command: () => unknown) => {
      setOpen(false);
      command();
    },
    [setOpen]
  );

  return (
    <CommandDialog modal open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <ScrollArea type="hover" className="h-72 pr-1">
          <CommandEmpty>No results found.</CommandEmpty>
          {navGroup.map((group) => (
            <CommandGroup key={group.title} heading={group.title}>
              {group.items.map((navItem, i) => {
                if (navItem.url)
                  return (
                    <CommandItem
                      key={`${navItem.url}-${i}`}
                      value={navItem.title}
                      onSelect={() => {
                        runCommand(() => router.push(navItem.url));
                      }}
                    >
                      <div className="mr-2 flex h-4 w-4 items-center justify-center">
                        <MoveRight className="text-muted-foreground/80 size-2" />
                      </div>
                      {navItem.title}
                    </CommandItem>
                  );

                // return navItem.items?.map((subItem, i) => (
                //   <CommandItem
                //     key={`${navItem.title}-${subItem.url}-${i}`}
                //     value={`${navItem.title}-${subItem.url}`}
                //     onSelect={() => {
                //       runCommand(() => router.push(subItem.url));
                //     }}
                //   >
                //     <div className="mr-2 flex h-4 w-4 items-center justify-center">
                //       <MoveRight className="text-muted-foreground/80 size-2" />
                //     </div>
                //     {navItem.title} <ChevronRight /> {subItem.title}
                //   </CommandItem>
                // ));
              })}
            </CommandGroup>
          ))}
          <CommandSeparator />
          <CommandGroup heading="Theme">
            <CommandItem onSelect={() => runCommand(() => setTheme("light"))}>
              <Sun /> <span>Light</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("dark"))}>
              <Moon className="scale-90" />
              <span>Dark</span>
            </CommandItem>
            <CommandItem onSelect={() => runCommand(() => setTheme("system"))}>
              <Laptop />
              <span>System</span>
            </CommandItem>
          </CommandGroup>
        </ScrollArea>
      </CommandList>
    </CommandDialog>
  );
}
