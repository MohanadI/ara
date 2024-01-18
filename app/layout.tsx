import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";

import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "ARA CONSULTING",
  description:
    "At the core of ARA CONSULTING's mission is a commitment to empower small, medium and large enterprises with the transformative capabilities of SAP solutions.",
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
          <main className="grow gap-2">
            {children}
            <div className="fixed bottom-10 right-10 flex flex-col">
              <WhatsAppButton />
              <ScrollToTopButton />
            </div>
          </main>
          <footer className="py-3 text-center text-xs bg-[#005375]">
            <Footer />
          </footer>
        </>
      </body>
    </html>
  );
}
