import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

import { Footer } from "@/components/Footer";
import Image from "next/image";

import "./globals.css";

export const metadata: Metadata = {
  title: "ARA Consulting",
  description: "Take your business to new heights with SAP Business One",
};

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <>
          <header className="w-full absolute top-5 z-20">
            <NavBar />
          </header>
          <main className="grow gap-2">{children}</main>
          <footer
            className="py-3 text-center text-xs"
            style={{ background: "#005375" }}
          >
            <Footer />
          </footer>
        </>
      </body>
    </html>
  );
}
