// 'use client';
import VerticalSlider from "@/components/VerticalSlider/VerticalSlider";
import { ActionBanner } from "@/components/sections/ActionBanner";
import { ProductsSection } from "@/components/sections/Products";
import { ServicesSection } from "@/components/sections/services";
import Image from "next/image";

import styles from "./home.module.css"; // Import your styles

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="container m-auto py-20 pt-40">
          <VerticalSlider />
        </div>
      </section>
      <ServicesSection />
      <ProductsSection />
      <ActionBanner />
      <section className={styles.footerHeroSection}>
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl py-32 sm:py-20 lg:py-20 text-center font-bold">
            <h1
              className="text-white"
              style={{
                fontSize: "48px",
                fontWeight: 700,
                lineHeight: "57px",
                letterSpacing: "0em",
                textAlign: "center",
              }}
            >
              Take your business to new heights with SAP Business One
            </h1>
            <h4
              className="text-white text-base pt-10"
              style={{
                color: "#D7DEE1",
                fontSize: "20px",
                fontWeight: 400,
                lineHeight: "24px",
                letterSpacing: "0.1em",
                textAlign: "center",
              }}
            >
              Join ARA Consulting on a journey of innovation, growth, and digital excellence. Let us be your SAP partner in turning aspirations into achievements, challenges into opportunities, and dreams into reality. Analyze your potential, Realize your ambitions, and Automate your path to success with ARA CONSULTING
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}
