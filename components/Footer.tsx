"use client";
import Image from "next/image";

export const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();

  const handleWhatsAppButtonClick = () => {
    // Replace '1234567890' with the phone number you want to open in WhatsApp
    const phoneNumber = "+971543224240";

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // Open the WhatsApp URL in the same tab
    window.location.href = whatsappUrl;
  };

  return (
    <section className="">
      <div className="container mx-auto">
        <div className="py-10 grid lg:grid-cols-3 gap-4">
          <div className="hidden sm:block lg:text-left">
            <p className="tracking-wide text-gray-100 text-lg">Company</p>
            <ul className="mt-4 space-y-2 pt-0">
              <li>
                <a
                  href="/"
                  className="text-gray-50 text-sm transition-colors duration-300 hover:text-deep-purple-accent-200 hover:font-semibold"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-50 text-sm transition-colors duration-300 hover:text-deep-purple-accent-200 hover:font-semibold"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-50 text-sm transition-colors duration-300 hover:text-deep-purple-accent-200 hover:font-semibold"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-50 text-sm transition-colors duration-300 hover:text-deep-purple-accent-200 hover:font-semibold"
                >
                  Privacy policy
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-50 text-sm transition-colors duration-300 hover:text-deep-purple-accent-200 hover:font-semibold"
                >
                  Terms of service
                </a>
              </li>
            </ul>
          </div>
          <div className="text-center">
            <Image
              src="/footer_icon.svg"
              className="m-auto w-[206px] h-[120px]"
              width={206}
              height={120}
              alt="Footer Logo"
            />
            <div className="flex justify-center my-1 mt-5 gap-3">
              <Image src="/mdi_twitter.svg" width={30} height={30} alt="X" />
              <a
                href="https://www.linkedin.com/company/ara-consulting-llc/"
                target="_blank"
              >
                <Image
                  src="/mdi_linkedin.svg"
                  width={30}
                  height={30}
                  alt="LinkedIn"
                />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100089621760215"
                target="_blank"
              >
                <Image
                  src="/jam_facebook.svg"
                  width={30}
                  height={30}
                  alt="Facebook"
                />
              </a>
              <a
                href="https://www.instagram.com/ara_consulting_llc/"
                target="_blank"
              >
                <Image
                  src="/ri_instagram-fill.svg"
                  width={30}
                  height={30}
                  alt="Instagram"
                />
              </a>
            </div>
          </div>
          <div className="text-right m-auto lg:-m-0">
            <p className="tracking-wide text-gray-100 text-lg pr-2 pb-2">
              Contact Information
            </p>

            <ul className="mt-2 space-y-2 pt-0 p-5 float-right">
              <li>
                <a
                  href="tel:+971044529093"
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
                  onClick={handleWhatsAppButtonClick}
                  className="flex cursor-pointer text-gray-300 text-sm transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-gray-50"
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
                  href="tel:+971552952060"
                  className="flex text-gray-300 text-sm transition-colors duration-300 hover:text-deep-purple-accent-200 hover:text-gray-50"
                >
                  <Image
                    src="/mobile_icon.svg"
                    className="mr-3 ml-1 w-[15px] h-[20px]"
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
      </div>
      <div className="flex flex-col text-center pt-5 pb-5 border-t border-white border-opacity-30 sm:flex-row">
        <p className="text-sm text-white text-opacity-80 m-auto">
          © {currentYear} ARA CONSULTING, All Rights Reserved
        </p>
      </div>
    </section>
  );
};
