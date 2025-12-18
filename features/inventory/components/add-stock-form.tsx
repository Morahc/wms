"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { dummyLocations } from "@/features/location/data";
import { AddInventoryStockInput, addInventoryStockInputSchema } from "../api/add-inventory-stock";

export default function AddStockForm({ itemId }: { itemId: string }) {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<AddInventoryStockInput>({
    resolver: zodResolver(addInventoryStockInputSchema),
    defaultValues: {
      location: "",
      notes: "",
      reason: "",
      quantity: 0,
    },
  });

  function onSubmit(payload: AddInventoryStockInput) {
    console.log(payload);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size={"sm"}>
          <Plus className="mr-2 h-4 w-4" />
          Add Stock
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Stock</DialogTitle>
          <DialogDescription>Increase inventory quantity at a location</DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
            <FormField
              control={form.control}
              name={"location"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Location</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {dummyLocations.map((location) => (
                        <SelectItem key={location.id} value={location.id}>
                          {location.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="quantity"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={"reason"}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select reason" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {dummyLocations.map((location) => (
                        <SelectItem key={location.id} value={location.id}>
                          {location.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Note (Optional)</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex gap-2 justify-end">
              <Button size={"sm"} type="button" variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button size={"sm"} type="submit" disabled={isLoading}>
                {isLoading ? "Adding..." : "Add Stock"}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
