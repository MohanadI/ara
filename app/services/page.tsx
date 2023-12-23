// 'use client';

import PageHeader from "@/components/PageHeader";
import TabsWithContent from "@/components/TabsWithContent";
import SAPBusinessOne from "./products/SAPBusinessOne";

export default function Services() {
  const productsTabs = [
    {
      key: "SAP Business One",
      title: "SAP Business One",
      content: <SAPBusinessOne />,
    },
    {
      key: "Human Resources Management",
      title: "Human Resources Management",
      content: <>Hello 2</>,
    },
    {
      key: "Intercompany Management",
      title: "Intercompany Management",
      content: <>Hello 3</>,
    },
    {
      key: "Warehouse Management",
      title: "Warehouse Management",
      content: <>Hello 4</>,
    },
    {
      key: "Fleet Management",
      title: "Fleet Management",
      content: <>Hello 5</>,
    },
    {
      key: "Asset Management",
      title: "Asset Management",
      content: <>Hello 6</>,
    },
    {
      key: "Property Management",
      title: "Property Management",
      content: <>Hello 7</>,
    },
    {
      key: "Facility Management",
      title: "Facility Management",
      content: <>Hello 8</>,
    },
  ];
  return (
    <>
      <PageHeader
        helpText="Get in touch"
        title="Our Services"
        description={
          <p className="p-2 text-center mt-6 description-paragraph text-white">
            Transform your business with our comprehensive SAP services. Whether
            you&apos;re embarking on a new SAP journey or seeking to optimize
            your existing landscape, ARA CONSULTING is here to guide you.
            Contact us today to discuss how our services can align with your
            business objectives and drive sustainable growth.
          </p>
        }
        background={
          "linear-gradient(110.11deg, #000A0E 10.08%, rgba(0, 111, 157, 0.56) 100%), url('./services_header.svg')  no-repeat center center / cover"
        }
      />
      <section className="text-gray-600 body-font">
        <div className="container px-10 lg:px-2 xl:px-24 2xl:px-60 py-10 pt-20 mx-auto">
          {/* ERP */}
          <div className="grid grid-cols-2">
            <div className="bg-[#f2f6f7] rounded-xl rounded-tr-none rounded-br-none border border-[#0053751A] pb-8">
              <div className="w-full mb-4 mt-4">
                <h1 className="sm:text-2xl text-2xl text-[#003E57] font-medium ml-3">
                  ERP Implementation
                </h1>
              </div>
              <p className="pr-3 pl-3 text-left description-paragraph text-[#316377]">
                Embark on a transformative journey with our ERP implementation
                services. At ARA CONSULTING, we understand that a successful ERP
                implementation is more than just installing software – it&apos;s
                about reshaping your business processes for optimal efficiency.
                Our seasoned consultants work closely with your team to assess
                your unique requirements, ensuring a seamless transition to
                SAP&apos;s robust Enterprise Resource Planning (ERP) solutions.
              </p>
              <p className="pr-3 pl-3 text-left mt-6 description-paragraph text-[#316377]">
                Our ERP implementation methodology is built on industry best
                practices and years of hands-on experience. We guide you through
                the entire process, from strategic planning and system
                configuration to data migration and training. As your SAP
                Service Partner, we prioritize minimizing disruptions during the
                transition, empowering your organization to harness the full
                potential of SAP for enhanced productivity and growth.
              </p>
            </div>
            <div
              className="rounded-xl rounded-tl-none rounded-bl-none"
              style={{
                background:
                  "linear-gradient(111.31deg, rgba(1, 83, 116, 0.3) 3.88%, rgba(0, 83, 117, 0.2) 100%), url('./enterprise-resource-management-erp-software-system-business-resources-plan 4.svg') no-repeat center center / cover",
              }}
            ></div>
          </div>
          {/* Customized Development and Industry-Specific */}
          <div className="grid grid-cols-2 mt-14">
            <div
              className="rounded-xl rounded-tr-none rounded-br-none"
              style={{
                background:
                  "linear-gradient(111.31deg, rgba(1, 83, 116, 0.3) 3.88%, rgba(0, 83, 117, 0.2) 100%), url('./enterprise-resource-management-erp-software-system-business-resources-plan 4 (1).svg') no-repeat center center / cover",
              }}
            ></div>
            <div className="bg-[#f2f6f7] rounded-xl rounded-tl-none rounded-bl-none border border-[#0053751A] pb-8">
              <div className="w-full mb-4 mt-4">
                <h1 className="sm:text-2xl text-2xl text-[#003E57] font-medium ml-3">
                  Customized Development and Industry-Specific
                </h1>
              </div>
              <p className="pr-3 pl-3 text-left description-paragraph text-[#316377]">
                In the dynamic landscape of modern business, off-the-shelf
                solutions often fall short of addressing specific needs.
                That&apos;s where our customized development and
                industry-specific solutions come into play. At ARA CONSULTING,
                we take pride in our ability to tailor SAP solutions to meet the
                unique requirements of your industry. Our team of skilled
                developers collaborates closely with your stakeholders to
                understand your business intricacies, ensuring that SAP aligns
                seamlessly with your processes.
              </p>
              <p className="pr-3 pl-3 text-left mt-6 description-paragraph text-[#316377]">
                Whether you operate in manufacturing, retail, healthcare, or any
                other industry, we design and implement solutions that go beyond
                generic ERP offerings. Our customized development approach not
                only optimizes your current operations but also positions your
                business for future scalability.
              </p>
            </div>
          </div>
          {/* Support and Service Level Agreements */}
          <div className="grid grid-cols-2 mt-14">
            <div className="bg-[#f2f6f7] rounded-xl rounded-tr-none rounded-br-none border border-[#0053751A] pb-8">
              <div className="w-full mb-4 mt-4">
                <h1 className="sm:text-2xl text-2xl text-[#003E57] font-medium ml-3">
                  Support and Service Level Agreements
                </h1>
              </div>
              <p className="pr-3 pl-3 text-left description-paragraph text-[#316377]">
                Reliability is at the core of our support and Service Level
                Agreements (SLAs). Partnering with ARA CONSULTING means
                entrusting your SAP systems to a team committed to maintaining
                their optimal performance. Our support services extend beyond
                issue resolution; we proactively monitor and manage your SAP
                landscape, ensuring minimal downtime and swift response to
                challenges.
              </p>
              <p className="pr-3 pl-3 text-left mt-6 description-paragraph text-[#316377]">
                Our SLAs are crafted to meet the unique needs of your business,
                providing clarity and accountability. Whether it&apos;s
                troubleshooting, updates, or ensuring compliance with SAP best
                practices, our support team is your dedicated ally. Elevate your
                SAP experience with a service partnership that prioritizes your
                operational continuity and long-term success.
              </p>
            </div>
            <div
              className="rounded-xl rounded-tl-none rounded-bl-none"
              style={{
                background:
                  "linear-gradient(111.31deg, rgba(1, 83, 116, 0.3) 3.88%, rgba(0, 83, 117, 0.2) 100%), url('./enterprise-resource-management-erp-software-system-business-resources-plan 2.svg') no-repeat center center / cover",
              }}
            ></div>
          </div>
          {/* Integration of Multiple Systems */}
          <div className="grid grid-cols-2 mt-14">
            <div
              className="rounded-xl rounded-tr-none rounded-br-none"
              style={{
                background:
                  "linear-gradient(111.31deg, rgba(1, 83, 116, 0.3) 3.88%, rgba(0, 83, 117, 0.2) 100%), url('./enterprise-resource-management-erp-software-system-business-resources-plan 5.svg') no-repeat center center / cover",
              }}
            ></div>
            <div className="bg-[#f2f6f7] rounded-xl rounded-tl-none rounded-bl-none border border-[#0053751A] pb-8">
              <div className="w-full mb-4 mt-4">
                <h1 className="sm:text-2xl text-2xl text-[#003E57] font-medium ml-3">
                  Integration of Multiple Systems
                </h1>
              </div>
              <p className="pr-3 pl-3 text-left description-paragraph text-[#316377]">
                Seamless connectivity across your organization is crucial for
                driving efficiency and informed decision-making. Our expertise
                lies in the integration of multiple systems, bringing together
                disparate platforms to create a unified and streamlined business
                environment. At ARA CONSULTING, we understand that your business
                applications must work in harmony, eliminating data silos and
                fostering collaboration.
              </p>
              <p className="pr-3 pl-3 text-left mt-6 description-paragraph text-[#316377]">
                Our team employs industry-leading integration tools to ensure a
                cohesive flow of information across your systems. From ERP to
                CRM, e-commerce platforms, and beyond, we orchestrate
                integrations that empower your business with real-time insights
                and improved operational agility. Experience the benefits of a
                connected enterprise with our tailored integration solutions.
              </p>
            </div>
          </div>
          {/* Data Migration and Management */}
          <div className="grid grid-cols-2 mt-14">
            <div className="bg-[#f2f6f7] rounded-xl rounded-tr-none rounded-br-none border border-[#0053751A] pb-8">
              <div className="w-full mb-4 mt-4">
                <h1 className="sm:text-2xl text-2xl text-[#003E57] font-medium ml-3">
                  Data Migration and Management
                </h1>
              </div>
              <p className="pr-3 pl-3 text-left description-paragraph text-[#316377]">
                Effortlessly transition your data to SAP systems with our
                comprehensive data migration and management services. Whether
                you&apos;re adopting SAP for the first time or upgrading to a
                new version, our skilled professionals ensure a secure and
                smooth data migration process. We meticulously assess your
                existing data, develop a strategic migration plan, and execute
                the transfer with minimal disruption to your operations.
              </p>
              <p className="pr-3 pl-3 text-left mt-6 description-paragraph text-[#316377]">
                Beyond migration, we provide ongoing data management services to
                keep your information organized, accessible, and compliant with
                industry standards. ARA CONSULTING is your trusted partner for
                navigating the complexities of data migration and ensuring that
                your valuable information is effectively managed within the SAP
                ecosystem.
              </p>
            </div>
            <div
              className="rounded-xl rounded-tl-none rounded-bl-none"
              style={{
                background:
                  "linear-gradient(111.31deg, rgba(1, 83, 116, 0.3) 3.88%, rgba(0, 83, 117, 0.2) 100%), url('./enterprise-resource-management-erp-software-system-business-resources-plan 6.svg') no-repeat center center / cover",
              }}
            ></div>
          </div>
          {/* Training and User Enablement */}
          <div className="grid grid-cols-2 mt-14">
            <div
              className="rounded-xl rounded-tr-none rounded-br-none"
              style={{
                background:
                  "linear-gradient(111.31deg, rgba(1, 83, 116, 0.3) 3.88%, rgba(0, 83, 117, 0.2) 100%), url('./enterprise-resource-management-erp-software-system-business-resources-plan 7.svg') no-repeat center center / cover",
              }}
            ></div>
            <div className="bg-[#f2f6f7] rounded-xl rounded-tl-none rounded-bl-none border border-[#0053751A] pb-8">
              <div className="w-full mb-4 mt-4">
                <h1 className="sm:text-2xl text-2xl text-[#003E57] font-medium ml-3">
                  Training and User Enablement
                </h1>
              </div>
              <p className="pr-3 pl-3 text-left description-paragraph text-[#316377]">
                Empower your team with our tailored training and user enablement
                services. A successful SAP implementation is not just about
                technology; it&apos;s about ensuring that your users are
                equipped with the knowledge and skills needed to leverage the
                full potential of SAP solutions. At ARA CONSULTING, we offer
                hands-on training sessions, workshops, and documentation to
                ensure that your team is proficient in using SAP effectively.
              </p>
              <p className="pr-3 pl-3 text-left mt-6 description-paragraph text-[#316377]">
                Our training programs cover various aspects, from basic system
                navigation to advanced functionalities. We understand that user
                adoption is key to realizing the benefits of SAP, and our
                approach emphasizes engaging and informative training to make
                the transition seamless. Elevate your team&apos;s capabilities
                with ARA CONSULTING as your dedicated SAP training and user
                enablement partner.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section>
        {/* joint-development-new-product-business-technology-internet 1.svg */}
        <div
          style={{
            background:
              "linear-gradient(7.39deg, rgba(0, 31, 44, 0.85) 15.55%, rgba(3, 90, 126, 0.8) 82.75%), url('./joint-development-new-product-business-technology-internet 1 (1).svg')  no-repeat center center / cover",
          }}
        >
          <div className="flex flex-wrap mb-10 text-center container px-10 lg:px-2 xl:px-24 2xl:px-60 py-10 pt-20 mx-auto">
            <p
              className="w-full leading-relaxed"
              style={{
                fontSize: "16px",
                fontWeight: 300,
                lineHeight: "19px",
                letterSpacing: "0em",
                textAlign: "center",
                color: "#FFFFFFCC",
              }}
            >
              Strong variety of products
            </p>
            <div className="w-full mb-6 mt-3 lg:mb-0">
              <h1
                className="sm:text-3xl text-2xl font-medium title-font mb-2"
                style={{
                  color: "#ffffff",
                  fontSize: "40px",
                  fontWeight: 600,
                  lineHeight: "48px",
                  letterSpacing: "0em",
                  textAlign: "center",
                }}
              >
                Our Products
              </h1>
              <div
                className="h-1 w-10 rounded m-auto"
                style={{ background: "#FFFFFFCC" }}
              ></div>
              <p style={{ color: "#FFFFFFCC", marginTop: "25px" }}>
                Explore innovation with our SAP-powered solutions tailored for
                modern businesses. As your SAP Service Partner, ARA CONSULTING
                delivers transformable products for enhanced efficiency and
                sustainable growth.
              </p>
            </div>
          </div>
        </div>
        <div className="mb-10 text-center container px-10 lg:px-2 xl:px-24 2xl:px-60 mx-auto">
          <TabsWithContent tabs={productsTabs} />
        </div>
      </section>
    </>
  );
}
