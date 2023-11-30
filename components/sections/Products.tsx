"use client";

import { useState } from "react";
import Tabs from "../Tabs";
import Image from "next/image";
import { SectionTitle } from "../SectionTitle";

export const ProductsSection = () => {
  const tabs = [
    "Warehouse Management",
    "Human Resources Management",
    "Media Production Management",
    "Intercompany Solution",
    "test",
  ];
  const [selectedTab, setSelectedTab] = useState(0);

  const onTabClick = (index: any) => {
    setSelectedTab(index);
  };

  const onArrowClick = (direction: any) => {
    if (direction === "left") {
      setSelectedTab((prev) => Math.max(prev - 1, 0));
    } else if (direction === "right") {
      setSelectedTab((prev) => Math.min(prev + 1, tabs.length - 1));
    }
  };

  const showArrows = tabs.length > 4;

  return (
    <section className="text-gray-600 body-font">
      <div className="py-24 mx-auto flex flex-wrap flex-col pb-0">
        <SectionTitle
          subTitle="Strong variety of products"
          Title="Our Products"
        />

        <Tabs tabs={tabs} selectedTab={selectedTab} onTabClick={onTabClick} />
        <div
          className="relative isolate px-6 pt-24 lg:px-8 -mt-12"
          style={{
            background:
              "linear-gradient(97.22deg, #186383 24.41%, rgba(21, 62, 82, 0.7) 84.91%), url('/human-resources-concept-with-hand.svg')",
            backgroundPosition: "right",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="flex flex-col text-center w-full">
            <div className="w-full mb-6 lg:mb-5">
              <p className="w-full leading-relaxed text-gray-200 text-sm font-thin">
                Optimizing Talent for Organizational Success
              </p>
              <h1
                className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white"
                style={{
                  fontSize: "40px",
                  fontWeight: 600,
                  lineHeight: "48px",
                  letterSpacing: "0em",
                  textAlign: "center",
                }}
              >
                Human Resources Management
              </h1>
              <div className="h-1 w-8 rounded m-auto bg-white"></div>
            </div>
            <div className="w-full md:w-4/5 2xl:w-2/3 mb-6 lg:mb-5 self-center 2xl:mr-10">
              <div className=" bg-white rounded-md w-full md:w-1/2 relative py-12">
                <Image
                  src="/VectorR.svg"
                  width={18}
                  height={38}
                  alt="arrow-left"
                  className="absolute -right-3 top-7"
                />
                {selectedTab === 0 && (
                  <p
                    className="w-full leading-relaxed text-sm"
                    style={{
                      color: "#005375",
                      fontSize: "18px",
                      fontWeight: 300,
                      lineHeight: "20px",
                      letterSpacing: "0em",
                      textAlign: "center",
                    }}
                  >
                    Bibendum nisi justo Aliquet arcu praesent condimentum
                    feugiat phasellus mauris. Aliquet arcu praesent.
                  </p>
                )}
                {selectedTab === 1 && (
                  <p
                    className="w-full leading-relaxed text-sm"
                    style={{
                      color: "#005375",
                      fontSize: "18px",
                      fontWeight: 300,
                      lineHeight: "20px",
                      letterSpacing: "0em",
                      textAlign: "center",
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur. Bibendum nisi justo
                    condimentum feugiat phasellus mauris. Aliquet arcu praesent.
                  </p>
                )}

                <h4
                  className=" font-medium text-sm mt-4"
                  style={{ color: "#005375" }}
                >
                  Mahfouz Raid
                </h4>
                <Image
                  src="/microsoft.svg"
                  width={90}
                  height={19}
                  alt="microsoft"
                  className="m-auto mt-2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
