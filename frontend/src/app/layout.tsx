import type { Metadata } from "next";
import "./globals.css";

import { Toaster } from "react-hot-toast";
import Navbar from "@/components/layout/Navbar";
import NavbarWrapper from "@/components/layout/NavbarWrapper";
export const metadata: Metadata = {
  title: "Music Catalog",
  description: "Music Catalog Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavbarWrapper />
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}