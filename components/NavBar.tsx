"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import {
  Bars3Icon,
  XMarkIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Talent", href: "/talent" },
  { name: "Support", href: "/support" },
  { name: "Contact Us", href: "/contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check the scroll position and update the state
      if (window.scrollY > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // Attach the event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`z-20 ${isSticky ? "fixed top-0 w-full" : ""}`}
        style={isSticky ? { background: "#002D3F" } : { background: "none" }}
        aria-label="Global"
      >
        <div
          className={`container flex flex-wrap items-center justify-between mx-auto py-4 ${
            isSticky ? "" : "sm:rounded-full px-5"
          }`}
          style={
            isSticky
              ? { background: "#002D3F" }
              : { background: "#FFFFFF1A", backdropFilter: "blur(10px)" }
          }
        >
          <div className="flex grow lg:flex-1">
            <Link href="/" className="p-1.5">
              <Image
                src="/Logo.svg"
                width={64}
                height={40}
                alt="Logo"
                priority={true}
              />
            </Link>
          </div>
          <div className="flex lg:hidden justify-end">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-11">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                prefetch={false}
                className={`text-lg leading-6 hover:text-white ${
                  pathname === item.href
                    ? "font-semibold text-white"
                    : "font-thin text-[#D7DEE1] text-opacity-80"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden md:hidden lg:flex lg:flex-1 ml-10">
            <button className="flex items-center p-2 rounded-full text-base font-medium leading-4 tracking-normal text-left h-[46px] gap-2 text-[#005375] pr-[15px] bg-[#FFFFFF99]">
              <Image
                src="./call-calling.svg"
                width={36}
                height={36}
                className="w-[36px] h-[36px]"
                alt="call-calling"
              />
              <span>Call Us</span>
            </button>
          </div>
          <div className="hidden lg:flex lg:justify-end">
            <MagnifyingGlassIcon
              className="text-white h-6 w-6"
              aria-hidden="true"
            />
          </div>
        </div>
        {mobileMenuOpen && (
          <div
            className="justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul
              className="flex flex-col mx-auto font-medium lg:flex-row lg:space-x-8 lg:mt-0"
              style={isSticky ? { width: "100%" } : { width: "90%" }}
            >
              {navigation.map((item, index) => (
                <li key={index}>
                  <Link
                    key={item.name}
                    href={item.href}
                    prefetch={false}
                    className={`block py-2 pr-4 pl-3 text-white bg-[#005375] ${
                      pathname === item.href
                        ? "font-semibold text-white"
                        : "font-thin text-[#D7DEE1] text-opacity-80"
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
