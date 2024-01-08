"use client";

import { Card } from "flowbite-react";
import Image from "next/image";

export default function HumanResourcesManagement() {
    const cardTheme = {
        root: {
            base: "flex rounded-lg border-l-[3px] border-l-[#005375] border-solid shadow-[0px_0px_4px_0px_#0031461A] bg-white",
            children: "flex flex-col min-h-[170px] justify-start gap-4 p-3",
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
            Human Resources Management System and Employee Self-service Portal
          </h1>
          <p className="text-base font-light text-[#003E57] mt-6">
            Revolutionize HR operations with our comprehensive Human Resources
            Management System (HRMS) and Employee Self-service Portal. This
            solution empowers organizations to efficiently manage human capital
            from recruitment to performance management.
          </p>
        </div>
        <h1 className="text-[#003E57] text-xl mt-10">
          Main Modules and Functionalities:
        </h1>
        <div className="grid grid-cols-2 gap-6 mt-4">
          <Card theme={cardTheme} href="#">
            <h5 className="text-lg font-normal text-[#003E57]">Payroll</h5>
            <p className="text-base font-light text-[#003E57]">
              This module manages the gross and net pay, which also includes the
              payments and deductions calculated while processing payroll for an
              employee. The module calculates the payment and all deductions
              while processing remuneration using different wage types
            </p>
          </Card>
          <Card theme={cardTheme} href="#">
            <h5 className="text-lg font-normal text-[#003E57]">
              Employee Self-service Portal
            </h5>
            <p className="text-base font-light text-[#003E57]">
              Enable employees to manage profiles, leave requests, and access
              important HR information.
            </p>
          </Card>
          <Card theme={cardTheme} href="#">
            <h5 className="text-lg font-normal text-[#003E57]">
              Performance Management
            </h5>
            <p className="text-base font-light text-[#003E57]">
              Set goals, conduct appraisals, and track employee performance.
            </p>
          </Card>
          <Card theme={cardTheme} href="#">
            <h5 className="text-lg font-normal text-[#003E57]">
              Recruitment and Onboarding
            </h5>
            <p className="text-base font-light text-[#003E57]">
              Simplify the hiring process and streamline employee onboarding.
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
                  Efficient HR Processes
                </h5>
                <p className="text-base text-center font-light text-[#003E57]">
                  Automate routine tasks for increased efficiency and accuracy
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
                  Employee Engagement
                </h5>
                <p className="text-base text-center font-light text-[#003E57]">
                  Foster a positive work environment through self-service
                  capabilities
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
                  Compliance
                </h5>
                <p className="text-base text-center font-light text-[#003E57]">
                  Ensure adherence to HR regulations and standards
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
}