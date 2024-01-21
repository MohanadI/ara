'use client';
import VerticalSlider from "@/components/VerticalSlider/VerticalSlider";
import { useRouter } from "next/navigation";
import { ProductsSection } from "@/components/sections/Products";
import { ServicesSection } from "@/components/sections/services";

import styles from "./home.module.css"; // Import your styles
import Image from "next/image";
import useWindowSize from "@/helpers/useWindowSize";

export default function Home() {
  const router = useRouter();
  const size = useWindowSize();
  const isMobile = size.width < 768;

  return (
    <>
      <section className={styles.heroSection}>
        <div
          style={isMobile ? { height: size.height } : { height: "auto" }}
          className="container m-auto pt-32 md:py-40 md:pt-52"
        >
          <VerticalSlider />
        </div>
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
            <button
              onClick={() => router.push("/contact")}
              className="flex m-auto mt-7 rounded-full bg-[#005375] border-0 py-4 px-8 focus:outline-none hover:bg-opacity-60 text-base font-semibold text-white"
            >
              Get Consult
              <Image
                src="./inactive.svg"
                alt="arrow_right_button"
                width={24}
                height={24}
                className="ml-2"
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
