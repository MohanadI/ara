import Image from "next/image";

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
    <section className="text-gray-600 body-font">
      <div className="container px-10 lg:px-20 py-10 pt-20 mx-auto">
        <div className="flex flex-wrap w-full mb-20 text-center">
          <p className="w-full leading-relaxed text-gray-500 text-sm">
            Empowering businesses with cutting-edge technology solutions
          </p>
          <div className="w-full mb-6 lg:mb-0">
            <h1
              className="sm:text-3xl text-2xl font-medium title-font mb-2"
              style={{ color: "#003E57" }}
            >
              Our Services
            </h1>
            <div
              className="h-1 w-10 rounded m-auto"
              style={{ background: "#003E57" }}
            ></div>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {services.map((item) => (
            <div
              key={item.key}
              className="shadow-[0px_2px_5px_0px_rgba(0,31,44,0.06)]
            border-b-[0.5px]
            border-b-[rgba(0,83,117,1)] border-solid rounded-[5px]"
              style={{
                backgroundColor: "#ECF1F3",
              }}
            >
              <div className="p-6 rounded-lg">
                <Image
                  className="rounded m-auto object-cover object-center mb-6"
                  src={item.image}
                  width={128}
                  height={128}
                  alt="content"
                />
                <h2 className="text-lg text-center text-gray-900 font-medium title-font mb-4">
                  {item.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
        <p
          className="p-2 text-center mt-2"
          style={{ color: "rgba(49, 99, 119, 1)" }}
        >
          Aside from our wide range of SAP solutions, we also offer a host of
          services to support your SAP journey. From consulting and advisory
          services to implementation, migration, integration, and ongoing
          support and maintenance, we are committed to delivering exceptional
          customer service and ensuring your success.
        </p>
      </div>
    </section>
  );
};
