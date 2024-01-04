// 'use client';

import PageHeader from "@/components/PageHeader";
import TabsWithContent from "@/components/TabsWithContent";
import SAPBusinessOne from "../services/products/SAPBusinessOne";

export default function Products() {
  const productsTabs = [
    {
      key: "SAP Business One",
      title: "SAP Business One",
      content: <SAPBusinessOne />,
    },
    {
      key: "Human Resources Management",
      title: "Human Resources\nManagement",
      content: <>Hello 2</>,
    },
    {
      key: "Intercompany Management",
      title: "Intercompany\nManagement",
      content: <>Hello 3</>,
    },
    {
      key: "Warehouse Management",
      title: "Warehouse\nManagement",
      content: <>Hello 4</>,
    },
    {
      key: "Fleet Management",
      title: "Fleet\nManagement",
      content: <>Hello 5</>,
    },
    {
      key: "Asset Management",
      title: "Asset\nManagement",
      content: <>Hello 6</>,
    },
    {
      key: "Property Management",
      title: "Property\nManagement",
      content: <>Hello 7</>,
    },
    {
      key: "Facility Management",
      title: "Facility\nManagement",
      content: <>Hello 8</>,
    },
  ];

  return (
    <>
      <PageHeader
        helpText="Wide variety of Products"
        title="Products"
        description={
          <p className="p-2 text-center mt-6 description-paragraph text-white">
            Explore innovation with our SAP-powered solutions tailored for modern businesses. As your SAP Service Partner, ARA CONSULTING delivers transformable products for enhanced efficiency and sustainable growth.
          </p>
        }
        background={
          "linear-gradient(110.11deg, #000A0E 10.08%, rgba(0, 111, 157, 0.56) 100%), url('./joint-development-new-product-business-technology-internet 1 (1).svg')  no-repeat center center / cover"
        }
        bottomPadding="50px"
      />
      <div className="mb-10 text-center container mx-auto">
        <TabsWithContent tabs={productsTabs} />
      </div>
    </>

  );
}
