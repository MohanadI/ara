"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation'
import Tabs from "../Tabs";
import Image from "next/image";
import { SectionTitle } from "../SectionTitle";

export const ProductsSection = () => {
  const tabs = [
    "SAP Business One",
    "Human Resources\nManagement",
    "Intercompany\nManagement",
    "Warehouse\nManagement",
    "Fleet\nManagement",
    "Asset\nManagement",
    "Property\nManagement",
    "Facility\nManagement"
  ];
  const [selectedTab, setSelectedTab] = useState("SAP Business One");
  const router = useRouter()

  const onTabClick = (tab: any) => {
    setSelectedTab(tab);
  };

  return (
    <section>
      <div className="container mx-auto relative z-10">
        <SectionTitle
          subTitle="Wide variety of products"
          Title="Our Products"
        />
        <Tabs tabs={tabs} selectedTab={selectedTab} onTabClick={onTabClick} />
      </div>
      <div className="mx-auto flex flex-wrap flex-col">
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
          <div className="container mx-auto">
            <p className="w-full leading-relaxed text-gray-200 text-center text-sm font-thin">
              Product overview
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
              {selectedTab}
            </h1>
            <div className="h-1 w-8 rounded m-auto bg-white"></div>
            <div className="flex pb-5">
              <div className="flex items-center bg-white my-5 rounded-md w-full md:w-1/2 h-32 relative px-4 py-5">
                <Image
                  src="/VectorR.svg"
                  width={18}
                  height={38}
                  alt="arrow-left"
                  className="absolute w-[18px] h-[38px] -right-3 top-7"
                />

                <p
                  className="w-full leading-relaxed"
                  style={{
                    color: "#005375",
                    fontSize: "18px",
                    fontWeight: 100,
                    lineHeight: "22px",
                    letterSpacing: "0em",
                    textAlign: "center",
                  }}
                >
                  {selectedTab === "SAP Business One" && (
                    <>
                      SAP Business One is an integrated Enterprise Resource Planning (ERP) solution crafted for small to mid-sized enterprises. This robust platform provides a holistic view of business operations, enabling informed decision-making across various functions.
                    </>
                  )}
                  {selectedTab === "Human Resources\nManagement" && (
                    <>
                      Revolutionize HR operations with our comprehensive Human Resources Management System (HRMS) and Employee Self-service Portal. This solution empowers organizations to efficiently manage human capital from recruitment to performance management.
                    </>
                  )}
                  {selectedTab === "Intercompany\nManagement" && (
                    <>
                      Simplify intercompany transactions with our Intercompany Solution, designed to facilitate seamless communication and collaboration between different entities within your organization.
                    </>
                  )}
                  {selectedTab === "Warehouse\nManagement" && (
                    <>
                      Optimize warehouse operations with our Warehouse Management Solution. This product enhances inventory visibility, streamlines order fulfillment, and improves overall warehouse efficiency.
                    </>
                  )}
                  {selectedTab === "Fleet\nManagement" && (
                    <>
                      Optimize your fleet operations with our Fleet Management Solution. This product enhances vehicle tracking, maintenance scheduling, and overall fleet efficiency.
                    </>
                  )}
                  {selectedTab === "Asset\nManagement" && (
                    <>
                      Effectively manage your assets throughout their lifecycle with our Asset Management Solution. This product provides comprehensive tools for asset tracking, maintenance planning, and work orders management.
                    </>
                  )}
                  {selectedTab === "Property\nManagement" && (
                    <>
                      Optimize the management of your real estate portfolio with our Property Management Solution. This product streamlines property operations, lease management, and tenant interactions along with managing property sales contracts, buyers&apos; payments and their progress.
                    </>
                  )}
                  {selectedTab === "Facility\nManagement" && (
                    <>
                      Transform the way you manage facilities with our Facility Management Solution. This product offers tools for maintenance planning, space utilization, and overall facility optimization.
                    </>
                  )}

                </p>
              </div>
              <div className="flex flex-col self-end w-full my-5 lg:mt-0 lg:w-1/3 lg:pl-8">
                <button
                  onClick={() => router.push('/products')}
                  className="flex mr-auto rounded-full bg-white border-0 py-2 px-8 focus:outline-none hover:bg-opacity-60 text-base font-semibold text-[#005375]">
                  Learn More
                  <Image
                    src="./arrow_right_button.svg"
                    alt="arrow_right_button.svg"
                    width={24}
                    height={24}
                    className="ml-2"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
