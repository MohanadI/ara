"use client";

import type { Metadata } from "next";
import NavBar from "@/components/NavBar";

import { Footer } from "@/components/Footer";
import Image from "next/image";

import "./globals.css";

const metadata: Metadata = {
  title: "ARA",
  description: "ARA",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <>
          <header className="absolute inset-x-0 top-0 z-50">
            <NavBar />
          </header>
          <main className="grow gap-2">
            {children}
          </main>
          <footer
            className="py-3 text-center text-xs"
            style={{ background: "#005375" }}
          >
            <Footer />
          </footer>
          <div className="fixed bottom-10 right-10 flex flex-col">
            <button
              className="  text-white font-bold p-2 rounded-full shadow-lg"
              style={{
                padding: "15px",
                background: "#FFFFFFCC",
              }}
            >
              <Image
                src="/whatsapp_floating.svg"
                alt="whatsapp_floating"
                width={33}
                height={33}
                className="w-[33px] h-[33px]"
              />
            </button>
            <button
              className="  text-white font-bold rounded-full shadow-lg"
              style={{
                background: "#FFFFFFCC",
                padding: "17px",
                marginTop: "5px",
              }}
              onClick={() => window.scrollTo(0, 0)}
            >
              <Image
                src="/floating_up.svg"
                alt="floating_up"
                width={27}
                height={27}
                className="m-auto w-[27px] h-[27px]"
              />
            </button>
          </div>
        </>
      </body>
    </html>
  );
}
