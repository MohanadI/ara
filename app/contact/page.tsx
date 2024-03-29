'use client';

import PageHeader from "@/components/PageHeader";
import ContactUsForm from "./Form";
import Image from "next/image";
import { SectionTitle } from "@/components/SectionTitle";
import { Carousel } from "flowbite-react";


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
        bottomPadding="5px"
      />
      <section className="text-gray-600 body-font">
        <div className="container mx-auto pt-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="left_cards">
              <a className="flex flex-col p-5 mt-0 sm:items-center bg-white rounded-md shadow-[0px_0px_10px_0px_#00000008] md:flex-row md:max-w-xl">
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
              <a className="flex flex-col p-5 mt-4 sm:items-center bg-white rounded-md shadow-[0px_0px_10px_0px_#00000008] md:flex-row md:max-w-xl">
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
              <a className="flex flex-col p-5 mt-4 sm:items-center bg-white rounded-md shadow-[0px_0px_10px_0px_#00000008] md:flex-row md:max-w-xl">
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
              <a className="flex flex-col p-5 mt-4 sm:items-center bg-white rounded-md shadow-[0px_0px_10px_0px_#00000008] md:flex-row md:max-w-xl">
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
            <div className="sm:col-span-2">
              <ContactUsForm />
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto py-16">
          <SectionTitle
            subTitle="Local Expertise, Global Reach: Dubai to MENA and Beyond"
            Title="Our Presence"
          />
          <div className="grid grid-cols-1 sm:grid-cols-7 gap-6">
            <div className="sm:col-span-5">
              <img
                className="w-full"
                alt="map"
                src={"./Map.jpg"}
                width={740}
                height={426}
              />
            </div>
            <div className="sm:col-span-2 flex flex-col justify-between">
              <div>
                <h4 className="text-base text-[#003E57] font-medium leading-[19px] tracking-normal text-left">
                  Based in Dubai, ARA CONSULTING is strategically positioned to
                  cater to the unique needs of businesses in the MENA region.
                </h4>
                <p className="mt-6 description-paragraph text-[#003E57]">
                  Our local expertise is complemented by a global outlook,
                  ensuring that our clients receive solutions that are both
                  culturally attuned and internationally competitive.
                </p>
              </div>
              <div className="h-36">
                <Carousel
                  key="contact-us-slider"
                  theme={{
                    root: {
                      leftControl:
                        "absolute left-0 bottom-0 items-end flex h-20 justify-center focus:outline-none",
                      rightControl:
                        "absolute left-14 bottom-0 items-end flex h-20 justify-center focus:outline-none",
                    },
                    indicators: {
                      active: {
                        off: "bg-white/50 hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
                        on: "bg-white dark:bg-gray-800",
                      },
                      base: "h-3 w-3 rounded-full",
                      wrapper: "hidden",
                    },
                    item: {
                      base: "absolute top-1/2 left-1/2 block w-full -translate-x-1/2 -translate-y-1/2",
                      wrapper: {
                        off: "w-full flex-shrink-0 transform cursor-default snap-center",
                        on: "w-full flex-shrink-0 transform cursor-grab snap-center",
                      },
                    },
                    control: {
                      base: "inline-flex h-12 w-12 items-center justify-center rounded-none bg-[#005375]",
                      icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6",
                    },
                    scrollContainer: {
                      base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-lg",
                      snap: "snap-x",
                    },
                  }}
                >
                  <div className="flex flex-col h-full items-left justify-left bg-[#f2f6f7]">
                    <Image
                      src="./flags/uae.svg"
                      alt="UAE"
                      className="w-[30px] h-[30px]"
                      width={30}
                      height={30}
                    />
                    <h1 className="text-[32px] text-[#003E57] font-medium leading-[38px] tracking-normal text-left">
                      UAE
                    </h1>
                  </div>
                  <div className="flex flex-col h-full items-left justify-left bg-[#f2f6f7]">
                    <Image
                      src="./flags/saudi.svg"
                      alt="Saudi Arabia"
                      className="w-[30px] h-[30px]"
                      width={30}
                      height={30}
                    />
                    <h1 className="text-[32px] text-[#003E57] font-medium leading-[38px] tracking-normal text-left">
                      KSA
                    </h1>
                  </div>
                  <div className="flex flex-col h-full items-left justify-left bg-[#f2f6f7]">
                    <Image
                      src="./flags/qa.svg"
                      alt="Qatar"
                      className="w-[30px] h-[30px]"
                      width={30}
                      height={30}
                    />
                    <h1 className="text-[32px] text-[#003E57] font-medium leading-[38px] tracking-normal text-left">
                      Qatar
                    </h1>
                  </div>
                  <div className="flex flex-col h-full items-left justify-left bg-[#f2f6f7]">
                    <Image
                      src="./flags/oman.svg"
                      alt="Oman"
                      className="w-[30px] h-[30px]"
                      width={30}
                      height={30}
                    />
                    <h1 className="text-[32px] text-[#003E57] font-medium leading-[38px] tracking-normal text-left">
                      Oman
                    </h1>
                  </div>
                  <div className="flex flex-col h-full items-left justify-left bg-[#f2f6f7]">
                    <Image
                      src="./flags/eg.svg"
                      alt="Egypt"
                      className="w-[30px] h-[30px]"
                      width={30}
                      height={30}
                    />
                    <h1 className="text-[32px] text-[#003E57] font-medium leading-[38px] tracking-normal text-left">
                      Egypt
                    </h1>
                  </div>
                  <div className="flex flex-col h-full items-left justify-left bg-[#f2f6f7]">
                    <Image
                      src="./flags/palestine.svg"
                      alt="Palestine"
                      className="w-[30px] h-[30px]"
                      width={30}
                      height={30}
                    />
                    <h1 className="text-[32px] text-[#003E57] font-medium leading-[38px] tracking-normal text-left">
                      Palestine
                    </h1>
                  </div>
                  <div className="flex flex-col h-full items-left justify-left bg-[#f2f6f7]">
                    <Image
                      src="./flags/jordan.svg"
                      alt="Jordan"
                      className="w-[30px] h-[30px]"
                      width={30}
                      height={30}
                    />
                    <h1 className="text-[32px] text-[#003E57] font-medium leading-[38px] tracking-normal text-left">
                      Jordan
                    </h1>
                  </div>
                  <div className="flex flex-col h-full items-left justify-left bg-[#f2f6f7]">
                    <Image
                      src="./flags/australia.svg"
                      alt="Australia"
                      className="w-[30px] h-[30px]"
                      width={30}
                      height={30}
                    />
                    <h1 className="text-[32px] text-[#003E57] font-medium leading-[38px] tracking-normal text-left">
                      Australia
                    </h1>
                  </div>
                  <div className="flex flex-col h-full items-left justify-left bg-[#f2f6f7]">
                    <Image
                      src="./flags/nz.svg"
                      alt="New Zealand"
                      className="w-[30px] h-[30px]"
                      width={30}
                      height={30}
                    />
                    <h1 className="text-[32px] text-[#003E57] font-medium leading-[38px] tracking-normal text-left">
                      New Zealand
                    </h1>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
