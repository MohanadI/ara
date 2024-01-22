"use client";

import { useState} from "react";
import PhoneNumberWithDropDown from "@/components/PhoneNumberWithDropDown";
import { countries } from "@/helpers/constants";
import Select from "react-select";

interface Country {
  ccode: string;
  value: string;
  name: string;
  mcode: string;
}

export default function ContactUsForm() {
  const [selectedCountry, setSelectedCountry] = useState<any>(
    countries[0]
  );

  const countryOptions = countries;

  const optionsForSubject = [
    {
      value: "Careers",
      label: "Careers",
    },
    {
      value: "Customer Engagement",
      label: "Customer Engagement",
    },
    {
      value: "Developer",
      label: "Developer",
    },
    {
      value: "General inquiry",
      label: "General inquiry",
    },
    {
      value: "Industry Sales Inquiry",
      label: "Industry Sales Inquiry",
    },
    {
      value: "Investor Relations",
      label: "Investor Relations",
    },
    {
      value: "News and Press",
      label: "News and Press",
    },
    {
      value: "Partner",
      label: "Partner",
    },
    {
      value: "Product Sales Inquiry",
      label: "Product Sales Inquiry",
    },
    {
      value: "Services",
      label: "Services",
    },
    {
      value: "Support",
      label: "Support",
    },
    {
      value: "Technical issues",
      label: "Technical issues",
    },
    {
      value: "Technology Trends",
      label: "Technology Trends",
    },
    {
      value: "Training and Enablement",
      label: "Training and Enablement",
    },
  ];

  return (
    <form
      style={{
        boxShadow: "0px 0px 10px 0px #00000008",
        background: "#ffffff",
        borderRadius: "6px",
        padding: "25px",
      }}
    >
      <h3
        style={{
          fontSize: "24px",
          fontWeight: "400",
          lineHeight: "21px",
          letterSpacing: "0em",
          textAlign: "left",
          color: "#075677",
          marginBottom: "20px",
        }}
      >
        Contact Form
      </h3>
      <div className="mb-5 mt-9">
        <Select
          placeholder="I’m writing about"
          options={optionsForSubject}
          isClearable={true}
          styles={{
            control: (baseStyles, state) => ({
              ...baseStyles,
              borderColor: "#00395026",
              padding: "6px",
              borderRadius: "8px",
            }),
          }}
          required
        />
      </div>
      <div className="relative mb-5">
        <textarea
          id="message"
          rows={4}
          className="border text-base px-4 rounded-lg border-solid border-[#00395026] p-3 block w-full placeholder-[#003E5766]"
          placeholder="Your Message"
          required
        ></textarea>
        <label className="absolute -top-3 bg-white left-1 ml-2 px-1 text-sm text-[#003E57]">
          Your Message
        </label>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="relative mb-5">
          <input
            type="text"
            id="First_Name"
            className="border text-base px-4 rounded-lg border-solid border-[#00395026] p-3 block w-full placeholder-[#003E5766]"
            placeholder="Your First Name"
            required
          />
          <label className="absolute -top-3 bg-white left-1 ml-2 px-1 text-sm text-[#003E57]">
            First Name
          </label>
        </div>
        <div className="relative mb-5">
          <input
            type="text"
            id="Last_Name"
            placeholder="Your Last Name"
            className="border text-base px-4 rounded-lg border-solid border-[#00395026] p-3 block w-full placeholder-[#003E5766]"
            required
          />
          <label className="absolute -top-3 bg-white left-1 ml-2 px-1 text-sm text-[#003E57]">
            Last Name
          </label>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="relative mb-5">
          <Select
            id="countries"
            placeholder="Your Country"
            options={countryOptions}
            getOptionLabel={(option) => `${option.name}`}
            isClearable={true}
            onChange={(value) => setSelectedCountry(value)}
            styles={{
              control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: "#00395026",
                padding: "6px",
                borderRadius: "8px",
              }),
            }}
            required
          />
          <label className="absolute -top-3 bg-white left-1 ml-2 px-1 text-sm text-[#003E57]">
            Country
          </label>
        </div>
        <div className="mb-5">
          <PhoneNumberWithDropDown SelectedCountryValue={selectedCountry} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="relative mb-5">
          <input
            type="email"
            id="email_address"
            className="border text-base px-4 rounded-lg border-solid border-[#00395026] p-3 block w-full placeholder-[#003E5766]"
            placeholder="Your Business e-mail address"
            required
          />
          <label className="absolute -top-3 bg-white left-1 ml-2 px-1 text-sm text-[#003E57]">
            Business e-mail address
          </label>
        </div>
        <div className="relative mb-5">
          <input
            type="text"
            id="company"
            className="border text-base px-4 rounded-lg border-solid border-[#00395026] p-3 block w-full placeholder-[#003E5766]"
            placeholder="Your Company"
            required
          />
          <label className="absolute -top-3 bg-white left-1 ml-2 px-1 text-sm text-[#003E57]">
            Company
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-[#075677] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center focus:border-[#003E57]"
      >
        Send Message
      </button>
    </form>
  );
}
