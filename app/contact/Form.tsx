"use client";

import { useState, FormEvent, useRef } from "react";
import PhoneNumberWithDropDown from "@/components/PhoneNumberWithDropDown";
import { countries } from "@/helpers/constants";
import Select from "react-select";
import { Spinner, Button, Toast } from "flowbite-react";
import { HiCheck, HiX } from "react-icons/hi";


export default function ContactUsForm() {
  const [selectedCountry, setSelectedCountry] = useState<any>(
    countries[0]
  );
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [state, setState] = useState({
    subject: "",
    message: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    company: "",
  });

  const ref = useRef<HTMLFormElement>(null);

  const onChangeHandler = (name: string, value: any) => {
    setState({...state, [name]: value });
  };

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

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setShowError(false);
    setShowSuccess(false);
    let formData = { ...state, "country": selectedCountry.name };

    const data = { "data": formData };
    try {
      const res = await fetch("http://localhost:1337/api/inboxes", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "content-type": "application/json",
        },
      });
      console.log(res);
      setIsLoading(false);
      if (res.ok) {
        setShowSuccess(true);
        setState({
          subject: "",
          message: "",
          first_name: "",
          last_name: "",
          phone_number: "",
          email: "",
          company: "",
        });
        setSelectedCountry(countries[0]);
        ref.current?.reset();
      } else {
        setShowError(true);
      }
    } catch (error) {
      setIsLoading(false);
      setShowError(true);
      console.log(error);
    }
  }

  return (
    <form
      ref={ref}
      style={{
        boxShadow: "0px 0px 10px 0px #00000008",
        background: "#ffffff",
        borderRadius: "6px",
        padding: "25px",
      }}
      onSubmit={onSubmit}
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
      <div className="flex flex-col">
        {showSuccess && (
          <Toast
            theme={{
              root: {
                base: "flex w-full items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",
                closed: "opacity-0 ease-out",
              },
            }}
          >
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200">
              <HiCheck className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              Message sent successfully!
            </div>
            <Toast.Toggle />
          </Toast>
        )}
        {showError && (
          <Toast
            theme={{
              root: {
                base: "flex w-full items-center rounded-lg bg-white p-4 text-gray-500 shadow dark:bg-gray-800 dark:text-gray-400",
                closed: "opacity-0 ease-out",
              },
            }}
          >
            <div className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200">
              <HiX className="h-5 w-5" />
            </div>
            <div className="ml-3 text-sm font-normal">
              Something went wrong! Please try again later.
            </div>
            <Toast.Toggle />
          </Toast>
        )}
      </div>
      <div className="mb-5 mt-1">
        <Select
          placeholder="I’m writing about"
          options={optionsForSubject}
          isClearable={true}
          value={
            state.subject
              ? {
                  value: state.subject,
                  label: state.subject,
                }
              : null
          }
          onChange={(value) => onChangeHandler("subject", value?.label)}
          name="subject"
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
          name="message"
          onChange={(e) => onChangeHandler("message", e.target.value)}
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
            onChange={(e) => onChangeHandler("first_name", e.target.value)}
            name="first_name"
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
            onChange={(e) => onChangeHandler("last_name", e.target.value)}
            name="last_name"
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
            name="country"
            options={countryOptions}
            getOptionLabel={(option) => `${option.name}`}
            isClearable={true}
            value={selectedCountry}
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
          <PhoneNumberWithDropDown
            SelectedCountryValue={selectedCountry}
            name="phone_number"
            value={state.phone_number}
            onChange={(value: any) => onChangeHandler("phone_number", value)}
          />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="relative mb-5">
          <input
            type="email"
            name="email"
            onChange={(e) => onChangeHandler("email", e.target.value)}
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
            onChange={(e) => onChangeHandler("company", e.target.value)}
            name="company"
            className="border text-base px-4 rounded-lg border-solid border-[#00395026] p-3 block w-full placeholder-[#003E5766]"
            placeholder="Your Company"
            required
          />
          <label className="absolute -top-3 bg-white left-1 ml-2 px-1 text-sm text-[#003E57]">
            Company
          </label>
        </div>
      </div>
      <Button
        type="submit"
        disabled={isLoading}
        className="text-white bg-[#075677] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto text-center focus:border-[#003E57]"
      >
        {isLoading && (
          <div className="flex justify-center items-center">
            <Spinner aria-label="Spinner button example" size="sm" />
          </div>
        )}
        <span className="pl-3">Send Message</span>
      </Button>
    </form>
  );
}
