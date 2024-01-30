"use client";

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
          marginBottom: "40px",
        }}
      >
        Talent Form
      </h3>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="relative mb-5">
          <input
            type="text"
            id="floatingInput"
            placeholder="Your Full Name"
            required
            className="border text-base px-4 rounded-lg border-solid border-[#00395026] p-3 block w-full placeholder-[#003E5766]"
          />
          <label className="absolute -top-3 bg-white left-1 ml-2 px-1 text-sm text-[#003E57]">
            Full Name
          </label>
        </div>
        <div className="relative mb-5">
          <input
            type="email"
            id="floatingInputEmail"
            placeholder="Your Email Address"
            required
            className="border text-base px-4 rounded-lg border-solid border-[#00395026] p-3 block w-full placeholder-[#003E5766]"
          />
          <label className="absolute -top-3 bg-white left-1 ml-2 px-1 text-sm text-[#003E57]">
            Email Address
          </label>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="relative mb-5">
          <input
            type="phone"
            id="floatingInputPhone"
            placeholder="Your Phone Number"
            required
            className="border text-base px-4 rounded-lg border-solid border-[#00395026] p-3 block w-full placeholder-[#003E5766]"
          />
          <label className="absolute -top-3 bg-white left-1 ml-2 px-1 text-sm text-[#003E57]">
            Phone Number
          </label>
        </div>
        <div className="relative mb-5">
          <input
            type="text"
            id="floatingInputLocation"
            placeholder="Your City, State/Province, Country"
            required
            className="border text-base px-4 rounded-lg border-solid border-[#00395026] p-3 block w-full placeholder-[#003E5766]"
          />
          <label className="absolute -top-3 bg-white left-1 ml-2 px-1 text-sm text-[#003E57]">
            Location
          </label>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="relative mb-2 col-span-2">
          <input
            type="text"
            id="floatingInputSpecialty"
            placeholder="Your Job Area: e.g: Sales, Consulting"
            required
            className="border text-base px-4 rounded-lg border-solid border-[#00395026] p-3 block w-full placeholder-[#003E5766]"
          />
          <label className="absolute -top-3 bg-white left-1 ml-2 px-1 text-sm text-[#003E57]">
            Specialty
          </label>
        </div>
        <div className="relative mb-5 col-span-2">
          <input
            type="text"
            id="floatingInputLinks"
            placeholder="Include links to your portfolio, website, or any online platforms showcasing your work"
            required
            className="border text-base px-4 rounded-lg border-solid border-[#00395026] p-3 block w-full placeholder-[#003E5766]"
          />
          <label className="absolute -top-3 bg-white left-1 ml-2 px-1 text-sm text-[#003E57]">
            Links to Portfolio/Work/LinkedIn
          </label>
        </div>
        <div className="mb-5 col-span-2 sm:col-span-1">
          <label
            htmlFor="file-upload"
            className="cursor-pointer inline-flex items-center px-4 py-2 bg-[#075677] text-white rounded-md shadow-md font-thin h-12"
          >
            Upload Your Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6 ml-3"
            >
              <path
                fillRule="evenodd"
                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                clipRule="evenodd"
              />
            </svg>
          </label>
          <input type="file" id="file-upload" className="hidden" />
        </div>
        <button
          type="submit"
          className="text-white bg-[#ABABAB] hover:bg-[#075677] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-40 h-12 ml-auto"
        >
          Send Form
        </button>
      </div>
    </form>
  );
}
