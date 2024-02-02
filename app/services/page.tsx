// 'use client';
import { marked } from "marked";
import PageHeader from "@/components/PageHeader";
import { getServices } from "@/lib/services";

export default async function Services() {
  const { services } = await getServices(10);

  return (
    <>
      <PageHeader
        helpText="What we offer"
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
        <div className="container py-10 pt-20 mx-auto">
          {services.map((item, index) => (
            <div key={item.title} className="mb-20">
              <div className="w-full text-center mb-4">
                <h1 className="sm:text-2xl text-2xl text-[#003E57] font-medium">
                  {item.title}
                </h1>
              </div>
              {index % 2 === 0 ? (
                <div className="sm:grid sm:grid-cols-2">
                  <div className="bg-[#f2f6f7] rounded-xl rounded-tr-none rounded-br-none border border-[#0053751A] p-4 text-left text-[#316377]">
                    <p
                      className="description-paragraph"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {item.description}
                    </p>
                  </div>
                  <div
                    className="rounded-xl rounded-tl-none rounded-bl-none"
                    style={{
                      background: `linear-gradient(111.31deg, rgba(1, 83, 116, 0.3) 3.88%, rgba(0, 83, 117, 0.2) 100%), url('${item.image}') no-repeat center center / cover`,
                    }}
                  ></div>
                </div>
              ) : (
                <div className="sm:grid sm:grid-cols-2">
                  <div
                    className="rounded-xl rounded-tr-none rounded-br-none"
                    style={{
                      background: `linear-gradient(111.31deg, rgba(1, 83, 116, 0.3) 3.88%, rgba(0, 83, 117, 0.2) 100%), url('${item.image}') no-repeat center center / cover`,
                    }}
                  ></div>
                  <div className="bg-[#f2f6f7] rounded-xl rounded-tl-none rounded-bl-none border border-[#0053751A] p-4 text-left text-[#316377]">
                    <p
                      className="description-paragraph"
                      style={{ whiteSpace: "pre-line" }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
