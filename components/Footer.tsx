import Image from "next/image";

export const Footer = () => {
  return (
    <>
      <div className="pt-10 p-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl grid lg:grid-cols-3 gap-4">
        <div className="lg:text-left">
          <p className="font-bold tracking-wide text-gray-300 text-base">
            Important links
          </p>
          <ul className="mt-2 space-y-2 lg:list-disc pt-0 p-5">
            <li>
              <a
                href="/"
                className="text-gray-300 text-sm transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-gray-50"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-300 text-sm transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-gray-50"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-300 text-sm transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-gray-50"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-300 text-sm transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-gray-50"
              >
                Privacy policy
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-gray-300 text-sm transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-gray-50"
              >
                Terms of service
              </a>
            </li>
          </ul>
        </div>
        <div className="text-center">
          <Image
            src="/Logo.svg"
            className="m-auto"
            width={121}
            height={76}
            alt="Logo"
          />
          <h4 className="text-white text-sm">ARA CONSULTING</h4>
          <div className="p-4 text-gray-400">
            <span className="p-1">
              <b className="text-white">A</b>nalyze
              <b className="text-white">.</b>
            </span>
            <span className="p-1">
              <b className="text-white">R</b>ealize
              <b className="text-white">.</b>
            </span>
            <span className="p-1">
              <b className="text-white">A</b>utomate
              <b className="text-white">.</b>
            </span>
          </div>
          <div className="flex justify-center my-1 gap-2">
            <Image src="/mdi_twitter.svg" width={30} height={30} alt="X" />
            <Image src="/mdi_linkedin.svg" width={30} height={30} alt="LinkedIn" />
            <Image src="/jam_facebook.svg" width={30} height={30} alt="Facebook" />
            <Image
              src="/ri_instagram-fill.svg"
              width={30}
              height={30}
              alt="Instagram"
            />
          </div>
        </div>
        <div className="text-right m-auto lg:-m-0">
          <p className="font-bold tracking-wide text-gray-300 text-base pr-2 pb-2">
            Contact Information
          </p>
          <ul className="mt-2 space-y-2 pt-0 p-5 float-right">
            <li>
              <a
                href="/"
                className="flex text-gray-300 text-sm transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-gray-50"
              >
                <Image
                  src="/call-callingphone.svg"
                  className="mr-2"
                  width={24}
                  height={24}
                  alt="calling_phone"
                />
                <span>+971 04 452 9093</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex text-gray-300 text-sm transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-gray-50"
              >
                <Image
                  src="/whatsapp.svg"
                  className="mr-2"
                  width={24}
                  height={24}
                  alt="calling_phone"
                />
                <span>+971 54 322 4240</span>
              </a>
            </li>
            <li>
              <a
                href="/"
                className="flex text-gray-300 text-sm transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-gray-50"
              >
                <Image
                  src="/mobile_icon.svg"
                  className="mr-3 ml-1"
                  width={15}
                  height={20}
                  alt="calling_phone"
                />
                <span>+971 55 295 2060</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col text-center pt-5 pb-5 border-t border-gray-300 sm:flex-row">
        <p className="text-sm text-gray-400 m-auto">
          Copyright © 2023 ARA CONSULTING, All Right Reserved
        </p>
      </div>
    </>
  );
};
