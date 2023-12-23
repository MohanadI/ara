import Image from "next/image";
import { SectionTitle } from "../SectionTitle";

export const ServicesSection = () => {
  const services = [
    {
      key: "Solution_Implementation",
      title: "Solution Implementation",
      image: "/sample_services_1.svg",
    },
    {
      key: "Customized_Development",
      title: "Customized Development & Industry-specific solutions",
      image: "/sample_services_2.svg",
    },
    {
      key: "Support_SLA",
      title: "Support / SLA",
      image: "/sample_services_3.svg",
    },
    {
      key: "Integration_of_multiple_systems",
      title: "Integration of multiple systems",
      image: "/sample_services_3.svg",
    },
    {
      key: "Data_Migration",
      title: "Data Migration and management",
      image: "/sample_services_1.svg",
    },
    {
      key: "Training",
      title: "Training and users enablement",
      image: "/sample_services_2.svg",
    },
  ];
  return (
    <section className="container px-10 lg:px-2 xl:px-24 2xl:px-60 py-10 pt-20 mx-auto">
      <SectionTitle
        subTitle="Empowering businesses with cutting-edge technology solutions"
        Title="Our Services"
      />
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
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
                className="rounded w-[128px] h-[128px] m-auto object-cover object-center mb-6"
                src={item.image}
                width={128}
                height={128}
                alt="content"
              />
              <h2
                className="text-lg text-center font-medium title-font mb-4"
                style={{
                  color: "#003E57",
                }}
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
    </section>
  );
};
