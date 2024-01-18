// 'use client';
import VerticalSlider from "@/components/VerticalSlider/VerticalSlider";
import { ActionBanner } from "@/components/sections/ActionBanner";
import { ProductsSection } from "@/components/sections/Products";
import { ServicesSection } from "@/components/sections/services";

import styles from "./home.module.css"; // Import your styles

export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
        <div className="container m-auto pt-32 md:py-40 md:pt-52">
          <VerticalSlider />
        </div>
      </section>
      <ServicesSection />
      <ProductsSection />
      <ActionBanner />
      <section className={styles.footerHeroSection}>
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl py-32 sm:py-20 lg:py-20 text-center font-bold text-[20px] md:text-[48px]">
            <h3 className="text-white">
              Analyze your potential, Realize your ambitions, and Automate your
              path to success with
            </h3>
            <h3 className="text-white">ARA CONSULTING</h3>
          </div>
        </div>
      </section>
    </>
  );
}
