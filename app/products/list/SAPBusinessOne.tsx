"use client";

import { Card, List } from "flowbite-react";
import Image from "next/image";

export default function SAPBusinessOne() {
  const cardTheme = {
    root: {
      base: "flex rounded-lg sm:max-w-sm border-l-[3px] border-l-[#005375] border-solid shadow-[0px_0px_4px_0px_#0031461A] bg-white",
      children: "flex flex-col min-h-[170px] justify-start gap-4 p-3",
      horizontal: {
        off: "flex-col",
        on: "flex-col md:max-w-xl md:flex-row",
      },
      href: "hover:bg-gray-100 dark:hover:bg-gray-700",
    },
  };
  return (
    <div className="text-left">
      <div className="sm:grid sm:grid-cols-2 sm:gap-4">
        <div>
          <h2 className="text-sm font-light text-[#316377]">
            Product overview
          </h2>
          <h1 className="text-[#003E57] font-semibold text-xl mt-2">
            SAP Business One
          </h1>
          <p className="text-base font-light text-[#003E57] mt-6 max-w-md">
            SAP Business One is an integrated Enterprise Resource Planning (ERP)
            solution crafted for small to mid-sized enterprises. This robust
            platform provides a holistic view of business operations, enabling
            informed decision-making across various functions.
          </p>
        </div>
        <div>
          <Image
            className="w-full"
            alt="map"
            src={"./Screen Shot 2023-12-16 at 3.16 1.svg"}
            width={508}
            height={216}
          />
        </div>
      </div>
      <h1 className="text-[#003E57] text-xl mt-2">
        Main Modules and Functionalities:
      </h1>
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-3 gap-6 mt-4">
        <Card theme={cardTheme} href="#">
          <h5 className="text-lg font-normal text-[#003E57]">
            Financial Management
          </h5>
          <p className="text-base font-light text-[#003E57]">
            The Financial Management module in SAP Business One provides
            comprehensive tools for managing financial processes. It includes
            features for general ledger, accounts payable, accounts receivable,
            fixed assets, and financial reporting, enabling businesses to
            maintain accurate and transparent financial records.
          </p>
        </Card>
        <Card theme={cardTheme} href="#">
          <h5 className="text-lg font-normal text-[#003E57]">
            Sales and Customer Relationship Management (CRM)
          </h5>
          <p className="text-base font-light text-[#003E57]">
            This module helps businesses streamline their sales processes, from
            lead to order fulfillment. It includes functionalities for managing
            customer contacts, sales opportunities, sales orders, and customer
            invoices. Integration with other modules ensures real-time
            visibility into customer interactions.
          </p>
        </Card>
        <Card theme={cardTheme} href="#">
          <h5 className="text-lg font-normal text-[#003E57]">
            Purchasing and Supplier Relationship Management
          </h5>
          <p className="text-base font-light text-[#003E57]">
            The Purchasing module facilitates efficient procurement processes.
            It covers purchase orders, supplier invoices, goods receipt, and
            returns. Integrated with inventory management, it helps optimize the
            entire procurement cycle.
          </p>
        </Card>
        <Card theme={cardTheme} href="#">
          <h5 className="text-lg font-normal text-[#003E57]">
            Inventory Management
          </h5>
          <p className="text-base font-light text-[#003E57]">
            Managing inventory efficiently is crucial for businesses. SAP
            Business One&apos;s Inventory Management module provides tools for
            tracking stock levels, managing item master data, and optimizing
            reorder points. It ensures accurate inventory control across the
            supply chain.
          </p>
        </Card>
        <Card theme={cardTheme} href="#">
          <h5 className="text-lg font-normal text-[#003E57]">
            Production Planning
          </h5>
          <p className="text-base font-light text-[#003E57]">
            For manufacturing businesses, the Production Planning module assists
            in planning and managing production processes. It includes features
            for bill of materials (BOM), work orders, and production scheduling,
            helping businesses optimize manufacturing operations.
          </p>
        </Card>
        <Card theme={cardTheme} href="#">
          <h5 className="text-lg font-normal text-[#003E57]">
            Material Requirements Planning (MRP)
          </h5>
          <p className="text-base font-light text-[#003E57]">
            This module enables users to define a planning scenario in five easy
            steps and predict demand based on forecasts and creates
            recommendation for purchase orders and production orders based on
            the current status of transactions in the system.
          </p>
        </Card>
        <Card theme={cardTheme} href="#">
          <h5 className="text-lg font-normal text-[#003E57]">
            Project Management
          </h5>
          <p className="text-base font-light text-[#003E57]">
            The Project Management module helps businesses manage projects
            efficiently. It covers project planning, resource allocation, time
            tracking, and expense management. This module is particularly useful
            for businesses involved in project-based industries.
          </p>
        </Card>
        <Card theme={cardTheme} href="#">
          <h5 className="text-lg font-normal text-[#003E57]">
            Service Management
          </h5>
          <p className="text-base font-light text-[#003E57]">
            For companies offering services, the Service Management module
            supports service-related processes. It includes features for
            managing service contracts, service calls, and field service
            operations.
          </p>
        </Card>
        <Card theme={cardTheme} href="#">
          <h5 className="text-lg font-normal text-[#003E57]">
            System Administration and Customization
          </h5>
          <p className="text-base font-light text-[#003E57]">
            This module provides tools for system administrators to configure
            and customize SAP Business One based on the unique needs of the
            business. It includes user and access management, customization of
            forms and fields, and integration with other applications.
          </p>
        </Card>
      </div>
      <div className="mt-9">
        <h1 className="text-[#003E57] font-normal text-xl">
          SAP Business One Implementation Methodology:
        </h1>
        <p className="text-base font-light text-[#003E57] mt-6">
          SAP Business One follows a structured implementation methodology to
          ensure the successful deployment of the ERP (Enterprise Resource
          Planning) solution. The methodology typically consists of several
          phases, each with its set of tasks and activities. The specifics may
          vary based on the SAP partner or implementation team, but the core
          phases generally include:
        </p>
        <div className="mt-5">
          <h4 className="text-[#003E57] font-light text-base">
            Project Preparation:
          </h4>
          <List className="mt-3 text-base text-[#003E57] font-light">
            <List.Item>Define project goals, scope, and objectives.</List.Item>
            <List.Item>
              Identify key stakeholders and form a project team.
            </List.Item>
            <List.Item>
              Develop a project plan, including timelines and milestones.
            </List.Item>
            <List.Item>Set up project infrastructure and tools.</List.Item>
          </List>
        </div>
        {/* List 2 */}
        <div className="mt-5">
          <h4 className="text-[#003E57] font-light text-base">
            Business Blueprint:
          </h4>
          <List className="mt-3 text-base text-[#003E57] font-light">
            <List.Item>
              Conduct a detailed analysis of the client&apos;s business
              processes.
            </List.Item>
            <List.Item>
              Document business requirements and expectations.
            </List.Item>
            <List.Item>
              Develop a &apos;blueprint&apos; that outlines how SAP Business One
              will meet these requirements.
            </List.Item>
            <List.Item>
              Share the blueprint with key stakeholders for approval.
            </List.Item>
          </List>
        </div>
        {/* List 3 */}
        <div className="mt-5">
          <h4 className="text-[#003E57] font-light text-base">Realization:</h4>
          <List className="mt-3 text-base text-[#003E57] font-light">
            <List.Item>
              Configure SAP Business One based on the approved blueprint.
            </List.Item>
            <List.Item>
              Develop and customize any necessary functionalities.
            </List.Item>
            <List.Item>
              Perform data migration tasks, importing relevant data into the
              system.
            </List.Item>
            <List.Item>
              Create user documentation and conduct training sessions.
            </List.Item>
          </List>
        </div>
        {/* List 4 */}
        <div className="mt-5">
          <h4 className="text-[#003E57] font-light text-base">
            Final Preparation:
          </h4>
          <List className="mt-3 text-base text-[#003E57] font-light">
            <List.Item>
              Perform system and user acceptance testing (UAT).
            </List.Item>
            <List.Item>
              Fine-tune configurations based on testing feedback.
            </List.Item>
            <List.Item>
              Conduct end-user training to ensure familiarity with the system.
            </List.Item>
            <List.Item>Prepare for the cutover to the live system.</List.Item>
          </List>
        </div>
        {/* List 5 */}
        <div className="mt-5">
          <h4 className="text-[#003E57] font-light text-base">
            Go-Live and Support:
          </h4>
          <List className="mt-3 text-base text-[#003E57] font-light">
            <List.Item>
              Execute the cutover to transition from the old system to SAP
              Business One.
            </List.Item>
            <List.Item>
              Monitor system performance and address any issues promptly.
            </List.Item>
            <List.Item>
              Provide post-implementation support to resolve any challenges.
            </List.Item>
            <List.Item>
              Evaluate the success of the implementation against predefined
              criteria.
            </List.Item>
          </List>
        </div>
        {/* List 6 */}
        <div className="mt-5">
          <h4 className="text-[#003E57] font-light text-base">
            Continuous Improvement:
          </h4>
          <List className="mt-3 text-base text-[#003E57] font-light">
            <List.Item>Gather feedback from users and stakeholders.</List.Item>
            <List.Item>
              Identify areas for improvement and optimization.
            </List.Item>
            <List.Item>
              Implement continuous improvement initiatives based on feedback.
            </List.Item>
          </List>
        </div>
      </div>
      <div className="mt-9">
        <h1 className="text-[#003E57] font-normal text-xl">
          Key Benefits of using SAP Business One:
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-7">
          <Card className="w-full sm:max-w-sm shadow-none">
            <div className="flex flex-col items-center">
              <Image
                alt="Bonnie image"
                height="56"
                src="/Frame 486.svg"
                width="56"
                className="mb-6"
              />
              <h5 className="mb-2 text-lg font-medium text-[#003E57]">
                Scalability
              </h5>
              <p className="text-base text-center font-light text-[#003E57]">
                Grow your business confidently with a flexible and scalable ERP
                solution.
              </p>
            </div>
          </Card>
          <Card className="w-full sm:max-w-sm shadow-none">
            <div className="flex flex-col items-center">
              <Image
                alt="Bonnie image"
                height="56"
                src="/Integrated Workflow.svg"
                width="56"
                className="mb-6"
              />
              <h5 className="mb-2 text-lg font-medium text-[#003E57]">
                Integrated Workflow
              </h5>
              <p className="text-base text-center font-light text-[#003E57]">
                Unify business processes for improved collaboration and
                operational efficiency.
              </p>
            </div>
          </Card>
          <Card className="w-full sm:max-w-sm shadow-none">
            <div className="flex flex-col items-center">
              <Image
                alt="Bonnie image"
                height="56"
                src="/Data-Driven Decision-Making.svg"
                width="56"
                className="mb-6"
              />
              <h5 className="mb-2 text-lg font-medium text-[#003E57]">
                Data-Driven Decision-Making
              </h5>
              <p className="text-base text-center font-light text-[#003E57]">
                Harness the power of real-time analytics to make informed
                decisions.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
