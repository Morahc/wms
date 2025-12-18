"use client";

import { useState } from "react";
import { ArrowRight, Box, CheckCircle2, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { useFormDataContext } from "../context/form-step";

const types = [
  {
    step: 1,
    label: "Transfer Shipment",
    icon: Truck,
    description: "Move inventory between warehouses, distribution centers or stores",
    lists: [
      "Origin and destination locations",
      "Internal tracking",
      "Bulk item transfers",
      "No customer information required",
    ],
  },
  {
    step: 2,
    label: "Customer Order",
    icon: Box,
    description: "Ship products directly to customers",
    lists: [
      "Customer delivery address",
      "Carrier and tracking information",
      "Shipping cost and calculation",
      "Signature requirements",
    ],
  },
];

export default function ShipmentTypeForm() {
  const [selectedType, setSelectedType] = useState(0);
  const { setStep } = useFormDataContext();

  return (
    <div className="space-y-6">
      <div className="grid lg:grid-cols-2 gap-8">
        {types.map((type) => {
          const Icon = type.icon;

          return (
            <Card
              key={type.label}
              className="group data-[selected=true]:border-black border-2 relative"
              data-selected={type.step === selectedType}
              onClick={() => setSelectedType(type.step)}
            >
              <div className="absolute top-4 right-4 group-data-[selected=true]:flex hidden">
                <CheckCircle2 className="fill-black text-white size-6" />
              </div>
              <CardHeader className="flex items-center gap-4">
                <div className="group-data-[selected=true]:bg-black p-4 rounded-md bg-muted flex items-center justify-center">
                  <Icon className="group-data-[selected=true]:text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">{type.label}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-muted-foreground text-sm space-y-2">
                  {type.lists.map((list) => (
                    <li key={list}>{list}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          );
        })}
      </div>
      {selectedType !== 0 && (
        <Button onClick={() => setStep(selectedType)} className="flex ml-auto">
          Continue <ArrowRight />
        </Button>
      )}
    </div>
  );
}
