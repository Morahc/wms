"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { showSubmittedData } from "@/lib/show-submitted-data";
import { useState } from "react";
import { Download } from "lucide-react";

const formSchema = z.object({
  file: z
    .array(z.file())
    .refine((files) => files.length > 0, {
      message: "Please upload a file",
    })
    .refine((files) => ["text/csv"].includes(files?.[0]?.type), "Please upload csv format."),
});

interface Props {
  title: string;
}

export function ImportDialog({ title }: Props) {
  const [open, onOpenChange] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { file: undefined },
  });

  const fileRef = form.register("file");

  const onSubmit = () => {
    const file = form.getValues("file");

    if (file && file[0]) {
      const fileDetails = {
        name: file[0].name,
        size: file[0].size,
        type: file[0].type,
      };
      showSubmittedData(fileDetails, "You have imported the following file:");
    }
    onOpenChange(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(val) => {
        onOpenChange(val);
        form.reset();
      }}
    >
      <DialogTrigger asChild>
        <Button variant={"outline"}>
          Import <Download className="size-3 md:size-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-2 sm:max-w-sm">
        <DialogHeader className="text-left">
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>Import quickly from a CSV file.</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form id="task-import-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="file"
              render={() => (
                <FormItem className="mb-2 space-y-1">
                  <FormLabel>File</FormLabel>
                  <FormControl>
                    <Input type="file" {...fileRef} className="h-8" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
        <DialogFooter className="gap-2">
          <DialogClose asChild>
            <Button variant="outline">Close</Button>
          </DialogClose>
          <Button type="submit" form="task-import-form">
            Import
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
