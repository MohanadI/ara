import VerticalSlider from "@/components/VerticalSlider/VerticalSlider";
import { ProductsSection } from "@/components/sections/Products";
import ServicesSection from "@/components/sections/services";

import styles from "./home.module.css"; // Import your styles
import GetConsultButton from "@/components/GetConsultButton";


export default function Home() {
  return (
    <>
      <section className={styles.heroSection}>
          <VerticalSlider />
      </section>
      <ServicesSection />
      <ProductsSection />
      <section className="bg-[#f2f6f7]">
        <div className="container mx-auto">
          <div className="mx-auto max-w-3xl py-32 sm:py-20 lg:py-20 text-center text-[18px] md:text-[40px]">
            <h4 className="text-[#003E57]">
              <b>Analyze</b> your potential, <b>Realize</b> your ambitions, and
              <b> Automate</b> your path to success with <b>ARA CONSULTING</b>
            </h4>
            <GetConsultButton />
          </div>
        </div>
      </section>
    </>
  );
}
