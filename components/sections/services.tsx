import Image from "next/image";
import { SectionTitle } from "../SectionTitle";

export const ServicesSection = () => {
  const services = [
    {
      key: "Solution_Implementation",
      title: "Solution Implementation",
      image: "/enterprise-resource-management-erp-software-system-business-resources-plan 4.svg",
    },
    {
      key: "Customized_Development",
      title: "Customized Development & Industry-specific solutions",
      image: "/enterprise-resource-management-erp-software-system-business-resources-plan 4 (1).svg",
    },
    {
      key: "Support_SLA",
      title: "Support / SLA",
      image: "/enterprise-resource-management-erp-software-system-business-resources-plan 2.svg",
    },
    {
      key: "Integration_of_multiple_systems",
      title: "Integration of multiple systems",
      image: "/enterprise-resource-management-erp-software-system-business-resources-plan 5.svg",
    },
    {
      key: "Data_Migration",
      title: "Data Migration and management",
      image: "/enterprise-resource-management-erp-software-system-business-resources-plan 6.svg",
    },
    {
      key: "Training",
      title: "Training and users enablement",
      image: "/enterprise-resource-management-erp-software-system-business-resources-plan 7.svg",
    },
  ];
  return (
    <section className="px-4 pb-20 pt-20">
      <div className="container mx-auto">
        <SectionTitle
          subTitle="Empowering businesses with cutting-edge technology solutions"
          Title="Our Services"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {services.map((item) => (
            <div
              key={item.key}
              className="shadow-[0px_2px_5px_0px_rgba(0,31,44,0.06)]
            border-b-[0.5px] hover:shadow-[2px_4px_16px_rgba(0,0,0,0.16)]
            border-b-[rgba(0,83,117,1)] border-solid rounded-[5px]"
              style={{
                backgroundColor: "#ffffff",
                transform: "scale3d(1.01, 1.01, 1.01)",
                transition: "all .3s cubic-bezier(0,0,.5,1)",
              }}
            >
              <div className="p-6 rounded-lg">
                <Image
                  className="rounded-full w-[128px] h-[128px] m-auto object-cover object-center mb-6"
                  src={item.image}
                  width={128}
                  height={128}
                  alt="content"
                />
                <h2
                  className="text-lg text-center font-medium mb-4 text-[#003E57]"
                >
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <p
          className="p-2 text-center mt-6"
          style={{
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: "19px",
            letterSpacing: "0em",
            textAlign: "center",
            color: "rgba(49, 99, 119, 1)",
          }}
        >
          Aside from our wide range of SAP solutions, we also offer a host of
          services to support your SAP journey. From consulting and advisory
          services to implementation, migration, integration, and ongoing support
          and maintenance, we are committed to delivering exceptional customer
          service and ensuring your success.
        </p>
      </div>

    </section>
  );
};
