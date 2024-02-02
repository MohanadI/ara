import ListBlock from "@/components/Blocks/ListBlock";
import { getProduct } from "@/lib/products";
import { Card } from "flowbite-react";
import Image from "next/image";

export default async function SAPBusinessOne() {
  const productInfo = await getProduct("SAP Business One");

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

  const cardWithListTheme = {
    root: {
      children: "flex flex-col md:min-h-[350px] justify-start gap-4 p-3",
    },
  };

  const gridClass = productInfo?.image
    ? "sm:grid sm:grid-cols-2 sm:gap-4"
    : "";
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
          <p className="text-base font-light text-[#003E57] mt-6 max-w-md">
            {productInfo?.description}
          </p>
        </div>
        { productInfo?.image && <div>
          <Image
            className="w-full"
            alt="map"
            src={productInfo?.image}
            width={508}
            height={216}
          />
        </div> }
      </div>
      <h1 className="text-[#003E57] text-xl mt-2">
        Main Modules and Functionalities:
      </h1>
      <div className="grid grid-cols-1 sm:grid sm:grid-cols-3 gap-6 mt-4">
        {productInfo?.modules.map((module) => (
          <Card theme={cardTheme} key={module.title}>
            <h5 className="text-lg font-normal text-[#003E57]">
              {module.title}
            </h5>
            <p className="text-base font-light text-[#003E57]">
              {module.description}
            </p>
          </Card>
        ))}
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
        <div className="grid md:grid-cols-5 gap-4 mt-5">
          {productInfo?.methodologies.map((methodology) => (
            <div className="grid-item" key={methodology.title}>
              <h4
                style={{
                  padding: "15px",
                  color: "#fff",
                  background:
                    "url('./Vector.svg')  no-repeat center center / cover",
                }}
              >
                {methodology.title}
              </h4>
              <Card theme={cardWithListTheme} className="mt-5">
                <ListBlock data={methodology.description} />
              </Card>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-9">
        <h1 className="text-[#003E57] font-normal text-xl">
          Key Benefits of using SAP Business One:
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-7">
          {productInfo?.benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="w-full sm:max-w-sm shadow-none"
            >
              <div className="flex flex-col items-center">
                <Image
                  alt="Bonnie image"
                  height="56"
                  src={benefit.icon}
                  width="56"
                  className="mb-6"
                />
                <h5 className="mb-2 text-lg font-medium text-[#003E57]">
                  {benefit.title}
                </h5>
                <p className="text-base text-center font-light text-[#003E57]">
                  {benefit.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
