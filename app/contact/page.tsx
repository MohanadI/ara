// 'use client';

import PageHeader from "@/components/PageHeader";
import ContactUsForm from "./Form";
import Image from "next/image";
import MapChart from "@/components/Map";
import { SectionTitle } from "@/components/SectionTitle";

export default function Contact() {
  return (
    <>
      <PageHeader
        helpText="Get in touch"
        title="Contact Us"
        description={
          <p className="p-2 text-center mt-6 description-paragraph text-white">
            Whether you&apos;re looking for information about our services,
            interested in a consultation, or have general inquiries, we&apos;re
            here to help. Feel free to reach out to us using any of the channels
            below:
          </p>
        }
        background={"linear-gradient(110.11deg, #005375 10.08%, #0082B8 100%)"}
      />
      <section className="text-gray-600 body-font">
        <div className="container px-10 lg:px-2 xl:px-24 2xl:px-60 py-10 pt-20 mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <div className="left_cards">
              <a
                href="#"
                className="flex flex-col p-3 items-center bg-white border border-gray-200 rounded-lg shadow-[0px_0px_10px_0px_#00000008] md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <Image
                  src="./vaadin_phone-landline.svg"
                  alt="Land Line"
                  width={48}
                  height={48}
                  className="ml-[17px] p-3 rounded-full bg-[#005375]"
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-1 text-xl font-base tracking-tight text-[#003E57] dark:text-white">
                    Landline:
                  </h5>
                  <p className="font-normal text-[#003E57] dark:text-gray-400">
                    +971 4 452 9093
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="flex flex-col p-3 mt-4 items-center bg-white border border-gray-200 rounded-lg shadow-[0px_0px_10px_0px_#00000008] md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <Image
                  src="./material-symbols_phone-iphone.svg"
                  alt="Land Line"
                  width={48}
                  height={48}
                  className="ml-[17px] p-3 rounded-full bg-[#005375]"
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-1 text-xl font-base tracking-tight text-[#003E57] dark:text-white">
                    Mobile:
                  </h5>
                  <p className="font-normal text-[#003E57] dark:text-gray-400">
                    +971 55 295 2060
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="flex flex-col p-3 mt-4 items-center bg-white border border-gray-200 rounded-lg shadow-[0px_0px_10px_0px_#00000008] md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <Image
                  src="./whatsapp_contact.svg"
                  alt="Land Line"
                  width={48}
                  height={48}
                  className="ml-[17px] p-3 rounded-full bg-[#005375]"
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-1 text-xl font-base tracking-tight text-[#003E57] dark:text-white">
                    WhatsApp:
                  </h5>
                  <p className="font-normal text-[#003E57] dark:text-gray-400">
                    +971 54 322 4240
                  </p>
                </div>
              </a>
              <a
                href="#"
                className="flex flex-col p-3 mt-4 items-center bg-white border border-gray-200 rounded-lg shadow-[0px_0px_10px_0px_#00000008] md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              >
                <Image
                  src="./sms.svg"
                  alt="Land Line"
                  width={48}
                  height={48}
                  className="ml-[17px] p-3 rounded-full bg-[#005375]"
                />
                <div className="flex flex-col justify-between p-4 leading-normal">
                  <h5 className="mb-1 text-xl font-base tracking-tight text-[#003E57] dark:text-white">
                    Email:
                  </h5>
                  <p className="font-normal text-[#003E57] dark:text-gray-400">
                    info@araconsulting.co
                  </p>
                </div>
              </a>
            </div>
            <div className="col-span-2">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container px-10 lg:px-2 xl:px-24 2xl:px-60 py-10 pt-20 mx-auto">
          <SectionTitle
            subTitle="Local Expertise, Global Reach: Dubai to MENA and Beyond"
            Title="Our Presence"
          />
          <MapChart />
        </div>
      </section>
    </>
  );
}
