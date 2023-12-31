"use client";

import { Card } from "flowbite-react";
import Image from "next/image";

export default function IntercompanyManagement() {
    const cardTheme = {
        root: {
            base: "flex rounded-lg border-l-[3px] border-l-[#005375] border-solid shadow-[0px_0px_4px_0px_#0031461A] bg-white",
            children: "flex flex-col justify-start gap-4 p-3",
            horizontal: {
                off: "flex-col",
                on: "flex-col md:max-w-xl md:flex-row",
            },
            href: "hover:bg-gray-100 dark:hover:bg-gray-700",
        }
    };
    return (
      <div className="text-left">
        <div>
          <h2 className="text-sm font-light text-[#316377]">
            Product overview
          </h2>
          <h1 className="text-[#003E57] font-semibold text-xl mt-2">
            Intercompany Solution
          </h1>
          <p className="text-base font-light text-[#003E57] mt-6">
            Simplify intercompany transactions with our Intercompany Solution,
            designed to facilitate seamless communication and collaboration
            between different entities within your organization.
          </p>
        </div>
        <h1 className="text-[#003E57] text-xl mt-10">
          Main Modules and Functionalities:
        </h1>
        <div className="grid grid-cols-2 gap-6 mt-4">
          <Card theme={cardTheme} href="#">
            <h5 className="text-lg font-normal text-[#003E57]">
              Intercompany Transactions
            </h5>
            <p className="text-base font-light text-[#003E57]">
              Enable efficient transactions between different business units
            </p>
          </Card>
          <Card theme={cardTheme} href="#">
            <h5 className="text-lg font-normal text-[#003E57]">
              Consolidated Reporting
            </h5>
            <p className="text-base font-light text-[#003E57]">
              Consolidate financial data for comprehensive reporting
            </p>
          </Card>
          <Card theme={cardTheme} href="#">
            <h5 className="text-lg font-normal text-[#003E57]">
              Centralized Communication
            </h5>
            <p className="text-base font-light text-[#003E57]">
              Streamline communication and data exchange between subsidiaries.
            </p>
          </Card>
        </div>
        <div className="mt-9">
          <h1 className="text-[#003E57] font-normal text-xl">
            Key Benefits of using Human Resources Management System and Employee
            Self-service Portal:
          </h1>
          <div className="grid grid-cols-3 gap-6 mt-7">
            <Card className="max-w-sm shadow-none">
              <div className="flex flex-col items-center">
                <Image
                  alt="Bonnie image"
                  height="56"
                  src="/Frame 486.svg"
                  width="56"
                  className="mb-6"
                />
                <h5 className="mb-2 text-lg font-medium text-[#003E57]">
                  Enhanced Transparency
                </h5>
                <p className="text-base text-center font-light text-[#003E57]">
                  Gain a clear view of intercompany transactions for better
                  decision-making
                </p>
              </div>
            </Card>
            <Card className="max-w-sm shadow-none">
              <div className="flex flex-col items-center">
                <Image
                  alt="Bonnie image"
                  height="56"
                  src="/Integrated Workflow.svg"
                  width="56"
                  className="mb-6"
                />
                <h5 className="mb-2 text-lg font-medium text-[#003E57]">
                  Accurate Inventory Management
                </h5>
                <p className="text-base text-center font-light text-[#003E57]">
                  Minimize errors associated with manual intercompany processes
                </p>
              </div>
            </Card>
            <Card className="max-w-sm shadow-none">
              <div className="flex flex-col items-center">
                <Image
                  alt="Bonnie image"
                  height="56"
                  src="/Data-Driven Decision-Making.svg"
                  width="56"
                  className="mb-6"
                />
                <h5 className="mb-2 text-lg font-medium text-[#003E57]">
                  Enhanced Customer Satisfaction
                </h5>
                <p className="text-base text-center font-light text-[#003E57]">
                  Achieve better financial control and compliance across
                  subsidiaries
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
}