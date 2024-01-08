// 'use client';

import PageHeader from "@/components/PageHeader";
import TabsWithContent from "@/components/TabsWithContent";
import SAPBusinessOne from "./list/SAPBusinessOne";
import HumanResourcesManagement from "./list/HumanResourcesManagement";
import IntercompanyManagement from "./list/IntercompanyManagement";
import WarehouseManagement from "./list/WarehouseManagement";
import FleetManagement from "./list/FleetManagement";
import AssetManagement from "./list/AssetManagement";
import PropertyManagement from "./list/PropertyManagement";
import FacilityManagement from "./list/FacilityManagement";

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
      content: <HumanResourcesManagement />,
    },
    {
      key: "Intercompany Management",
      title: "Intercompany\nManagement",
      content: <IntercompanyManagement />,
    },
    {
      key: "Warehouse Management",
      title: "Warehouse\nManagement",
      content: <WarehouseManagement />,
    },
    {
      key: "Fleet Management",
      title: "Fleet\nManagement",
      content: <FleetManagement />,
    },
    {
      key: "Asset Management",
      title: "Asset\nManagement",
      content: <AssetManagement />,
    },
    {
      key: "Property Management",
      title: "Property\nManagement",
      content: <PropertyManagement />,
    },
    {
      key: "Facility Management",
      title: "Facility\nManagement",
      content: <FacilityManagement />,
    },
  ];

  return (
    <>
      <PageHeader
        helpText="Wide variety of Products"
        title="Our Products"
        description={
          <p className="p-2 text-center mt-6 description-paragraph text-white">
            Explore innovation with our SAP-powered solutions tailored for modern businesses. As your service partner, ARA CONSULTING delivers transformable products for enhanced efficiency and sustainable growth.
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
