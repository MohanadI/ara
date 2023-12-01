// 'use client';
import VerticalSlider from "@/components/VerticalSlider/VerticalSlider";
import { ActionBanner } from "@/components/sections/ActionBanner";
import { ProductsSection } from "@/components/sections/Products";
import { ServicesSection } from "@/components/sections/Services";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export default function Home() {
  return (
    <>
      <div
        className="relative isolate px-6 pt-14 lg:px-8"
        style={{
          background:
            "linear-gradient(122.96deg, rgba(0, 17, 24, 0.9) 26.5%, rgba(0, 38, 53, 0.725518) 60.15%, rgba(0, 83, 117, 0) 100%), url('/Rectangle 1.svg')",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="mx-auto max-w-5xl py-32 pt-44">
          <VerticalSlider />
        </div>
      </div>
      <ServicesSection />
      <ProductsSection />
      <ActionBanner />
      <div
        className="relative isolate px-6 pt-14 lg:px-8"
        style={{
          background:
            "linear-gradient(122.96deg, rgba(0, 17, 24, 0.9) 26.5%, rgba(0, 38, 53, 0.725518) 60.15%, rgba(0, 83, 117, 0) 100%), url('/Rectangle 74.svg')",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
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
            Explore our website and contact us today to learn more about how we
            can empower your organization to thrive in the digital age
          </h4>
          <button
            className="flex mx-auto rounded-full bg-white border-0 py-2 px-8 focus:outline-none hover:bg-opacity-60 text-base mt-10"
            style={{ color: "rgba(0, 83, 117, 1)" }}
          >
            Learn More{" "}
            <ArrowLongRightIcon
              className="pl-1 h-6 w-6"
              style={{ color: "rgba(0, 83, 117, 1)" }}
            />
          </button>
        </div>
      </div>
    </>
  );
}
