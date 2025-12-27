import LocationProvider from "@/features/location/context/location-context";

export default async function LocationLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <LocationProvider>{children}</LocationProvider>;
}
