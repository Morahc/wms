import InventoryProvider from "@/features/inventory/context/inventory-context";

export default async function InventoryLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <InventoryProvider>{children}</InventoryProvider>;
}
