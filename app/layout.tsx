import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import { Footer } from "@/components/Footer";

import "./globals.css";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTopButton from "@/components/ScrollToTopButton";

export const metadata: Metadata = {
  title: "ARA CONSULTING",
  verification:{ google: "9CGHkL2ZvjdpmK6Nm0IdPhyQJh8KBeBOt5o27WbXUqU" },
  description:
    "At the core of ARA CONSULTING's mission is a commitment to empower small, medium and large enterprises with the transformative capabilities of SAP solutions.",
};

interface Props {
  children: React.ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <html lang="en">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-2THY8T97BC"
        ></script>
        <script>
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-xxxxxxxxxx');
        `}
        </script>
      </head>
      <body className="flex flex-col min-h-screen">
        <>
          <header className="w-full absolute md:top-5 z-20">
            <NavBar />
          </header>
          <main className="grow gap-2">
            {children}
            <div className="fixed bottom-10 right-10 flex flex-col">
              <WhatsAppButton />
              <ScrollToTopButton />
            </div>
          </main>
          <footer className="py-0 text-center text-xs bg-[#005375]">
            <Footer />
          </footer>
        </>
      </body>
    </html>
  );
}
