import type { Metadata } from "next";
import localFont from "next/font/local";

import { Toaster } from "@/components/ui/sonner";
import { FontProvider } from "@/context/font-context";
import { ThemeProvider } from "@/context/theme-context";

import { SearchProvider } from "@/context/search-context";
import "./globals.css";

const montserrat = localFont({
  src: "../public/fonts/Montserrat/Montserrat-VariableFont_wght.ttf",
  display: "swap",
  variable: "--font-montserrat",
});

const inter = localFont({
  src: "../public/fonts/Inter/Inter-VariableFont.ttf",
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Acne Inc",
  description: "Inventory management system",
  icons: "/pwa/manifest-icon-192.maskable.png",
  abstract: "An inventory management system for modern businesses.",
  viewport: {
    width: "device-width",
    initialScale: 1,
    viewportFit: "cover",
  },
  applicationName: "Acne Inc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
        <ThemeProvider>
          <FontProvider>
            <SearchProvider>
              <Toaster />
              {children}
            </SearchProvider>
          </FontProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
