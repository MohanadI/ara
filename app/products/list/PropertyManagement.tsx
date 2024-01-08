"use client";

import { Card } from "flowbite-react";
import Image from "next/image";

export default function PropertyManagement() {
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
            Property Management Solution
          </h1>
          <p className="text-base font-light text-[#003E57] mt-6">
            Optimize the management of your real estate portfolio with our
            Property Management Solution. This product streamlines property
            operations, lease management, and tenant interactions along with
            managing property sales contracts, buyers&apos; payments and their
            progress.
          </p>
        </div>
        <h1 className="text-[#003E57] text-xl mt-10">
          Main Modules and Functionalities:
        </h1>
        <div className="grid grid-cols-2 gap-6 mt-4">
          <Card theme={cardTheme} href="#">
            <h5 className="text-lg font-normal text-[#003E57]">
              Lease Management
            </h5>
            <p className="text-base font-light text-[#003E57]">
              Efficiently manage lease agreements and renewals
            </p>
          </Card>
          <Card theme={cardTheme} href="#">
            <h5 className="text-lg font-normal text-[#003E57]">
              Property Maintenance
            </h5>
            <p className="text-base font-light text-[#003E57]">
              Schedule and track maintenance tasks for each property
            </p>
          </Card>
          <Card theme={cardTheme} href="#">
            <h5 className="text-lg font-normal text-[#003E57]">
              Tenant Portals
            </h5>
            <p className="text-base font-light text-[#003E57]">
              Provide tenants with online portals for communication and payments
            </p>
          </Card>
          <Card theme={cardTheme} href="#">
            <h5 className="text-lg font-normal text-[#003E57]">
              Contracts Management
            </h5>
            <p className="text-base font-light text-[#003E57]">
              Efficiently manage sales agreements and contracts payments across
              all your properties
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
                  Efficient Lease Administration
                </h5>
                <p className="text-base text-center font-light text-[#003E57]">
                  Simplify lease administration processes for improved accuracy
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
                  Tenant Satisfaction
                </h5>
                <p className="text-base text-center font-light text-[#003E57]">
                  Enhance tenant satisfaction with streamlined communication
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
                  Data-Driven Decisions
                </h5>
                <p className="text-base text-center font-light text-[#003E57]">
                  Access real-time data for informed property management
                  decisions
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
}