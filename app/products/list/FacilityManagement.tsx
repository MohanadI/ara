import { getProduct } from "@/lib/products";
import { Card } from "flowbite-react";
import Image from "next/image";

export default async function FacilityManagement() {
  const productInfo = await getProduct("Facility Management Solution");

  const cardTheme = {
    root: {
      base: "flex rounded-lg border-l-[3px] border-l-[#005375] border-solid shadow-[0px_0px_4px_0px_#0031461A] bg-white",
      children: "flex flex-col justify-start gap-4 p-3",
      horizontal: {
        off: "flex-col",
        on: "flex-col md:max-w-xl md:flex-row",
      },
      href: "hover:bg-gray-100 dark:hover:bg-gray-700",
    },
  };

  const gridClass = productInfo?.image ? "sm:grid sm:grid-cols-2 sm:gap-4" : "";

  return (
    <div className="text-left">
      <div className={gridClass}>
        <div>
          <h2 className="text-sm font-light text-[#316377]">
            Product overview
          </h2>
          <h1 className="text-[#003E57] font-semibold text-xl mt-2">
            {productInfo?.title}
          </h1>
          <p className="text-base font-light text-[#003E57] mt-6">
            {productInfo?.description}
          </p>
        </div>
        {productInfo?.image && (
          <div>
            <Image
              className="w-full"
              alt="map"
              src={productInfo?.image}
              width={508}
              height={216}
            />
          </div>
        )}
      </div>
      <h1 className="text-[#003E57] text-xl mt-10">
        Main Modules and Functionalities:
      </h1>
      <div className="grid grid-cols-2 gap-6 mt-4">
        <Card theme={cardTheme} href="#">
          <h5 className="text-lg font-normal text-[#003E57]">
            Maintenance Planning
          </h5>
          <p className="text-base font-light text-[#003E57]">
            Schedule and track routine maintenance tasks for facilities
          </p>
        </Card>
        <Card theme={cardTheme} href="#">
          <h5 className="text-lg font-normal text-[#003E57]">
            Space Utilization
          </h5>
          <p className="text-base font-light text-[#003E57]">
            Optimize space usage for improved efficiency
          </p>
        </Card>
        <Card theme={cardTheme} href="#">
          <h5 className="text-lg font-normal text-[#003E57]">
            Vendor Management
          </h5>
          <p className="text-base font-light text-[#003E57]">
            Streamline interactions with facility management vendors
          </p>
        </Card>
      </div>
      <div className="mt-9">
        <h1 className="text-[#003E57] font-normal text-xl">
          Key Benefits of using Human Resources Management System and Employee
          Self-service Portal:
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
                Reduced Downtime
              </h5>
              <p className="text-base text-center font-light text-[#003E57]">
                Minimize downtime through proactive maintenance planning
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
                Improved Efficiency
              </h5>
              <p className="text-base text-center font-light text-[#003E57]">
                Optimize space and resource utilization for cost savings
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
                Vendor Collaboration
              </h5>
              <p className="text-base text-center font-light text-[#003E57]">
                Enhance collaboration with facility management vendors
              </p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
