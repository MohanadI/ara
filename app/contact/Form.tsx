import PhoneNumberWithDropDown from "@/components/PhoneNumberWithDropDown";

export default function ContactUsForm() {
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
      <div className="mb-5">
        <select
          id="about"
          defaultValue=""
          required
          className="bg-white border border-solid border-[#00395026] text-[#003E57] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option>I’m writing about</option>
          <option value="q">Question</option>
          <option value="in">Inquires</option>
        </select>
      </div>
      <div className="mb-5">
        <textarea
          id="message"
          rows={4}
          className="block p-2.5 w-full text-sm text-[#003E57] bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Your message"
          required
        ></textarea>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-5">
          <input
            type="text"
            id="First_Name"
            className="bg-white border border-solid border-[#00395026] text-[#003E57] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="First Name"
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            id="Last_Name"
            placeholder="Last Name"
            className="bg-white border border-solid border-[#00395026] text-[#003E57] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-5">
          <select
            id="countries"
            defaultValue=""
            className="bg-white border border-solid border-[#00395026] text-[#003E57] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option>Country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>
        </div>
        <div className="mb-5">
          <PhoneNumberWithDropDown />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="mb-5">
          <input
            type="email"
            id="email"
            className="bg-white border border-solid border-[#00395026] text-[#003E57] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Business e-mail address"
            required
          />
        </div>
        <div className="mb-5">
          <input
            type="text"
            id="Company"
            className="bg-white border border-solid border-[#00395026] text-[#003E57] text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Company"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="text-white bg-[#075677] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Send Message
      </button>
    </form>
  );
}
