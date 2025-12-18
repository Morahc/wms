"use client";

import { useFormDataContext } from "@/features/shipments/context/form-step";
import ShipmentTypeForm from "./shipment-type-select";
import TransferShipment from "./transfer-form";
import CustomerTransferShipment from "./customer-transfer-form";

export default function ShipmentStepForm() {
  const { step } = useFormDataContext();

  const renderStep = () => {
    switch (step) {
      case 0:
        return <ShipmentTypeForm />;
      case 1:
        return <TransferShipment />;
      case 2:
        return <CustomerTransferShipment />;

      default:
        return <ShipmentTypeForm />;
    }
  };
  return <div>{renderStep()}</div>;
}
