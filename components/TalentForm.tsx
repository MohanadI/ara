"use client";

import { FileInput, Label } from "flowbite-react";

export default function TalentForm() {
  return (
    <form
      className="my-14"
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
        Talent Form
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-5">
          <input
            type="text"
            id="Full_Name"
            className="bg-white border border-solid border-[#00395026] text-[#003E57] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Full Name"
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="email"
            id="email_address"
            placeholder="Your Email Address"
            className="bg-white border border-solid border-[#00395026] text-[#003E57] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-5">
          <input
            type="phone"
            id="phone_number"
            placeholder="Your Phone Number"
            className="bg-white border border-solid border-[#00395026] text-[#003E57] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            id="location"
            placeholder="Your City, State/Province, Country"
            className="bg-white border border-solid border-[#00395026] text-[#003E57] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-5 col-span-2">
          <input
            type="text"
            id="Specialty"
            className="bg-white border border-solid border-[#00395026] text-[#003E57] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Your Job Area: e.g: Sales, Consulting"
            required
          />
        </div>
        <div className="mb-5 col-span-2">
          <input
            type="text"
            id="link"
            className="bg-white border border-solid border-[#00395026] text-[#003E57] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Include links to your portfolio, website, or any online platforms showcasing your work"
            required
          />
        </div>
        <div className="mb-5 col-span-2">
          <div id="fileUpload" className="max-w-md">
            <div className="mb-2 block">
              <Label htmlFor="file" value="Upload Your Resume" />
            </div>
            <FileInput
              id="file"
            />
          </div>
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-[#075677] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Apply Now
      </button>
    </form>
  );
}
