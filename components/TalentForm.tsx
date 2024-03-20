"use client";
import { useState, FormEvent, useRef } from "react";
import { Spinner, Button, Toast, FileInput } from "flowbite-react";
import { HiCheck, HiX } from "react-icons/hi";

export default function TalentForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);
  const [file, setFile] = useState(null);
  const [state, setState] = useState({
    full_name: "",
    email: "",
    phone: "",
    location: "",
    specialty: "",
    links: "",
    uploads: null,
  });
  const ref = useRef<HTMLFormElement>(null);

  const handleFileChange = async (e) => {
    const formData = new FormData();
    formData.append("files", e.target.files[0]);
    try {
      const res = await fetch("https://araconsulting.co/api/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => setFile(data[0].id))
        .catch((error) => console.error("Error:", error));
    }catch(error){
      console.log(error);
    }
  };
  const onChangeHandler = (name: string, value: any) => {
    setState({ ...state, [name]: value });
  };

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setShowError(false);
    setShowSuccess(false);

    let formData = { ...state, uploads: file };
    const data = { data: formData };
    try {
      const res = await fetch("https://araconsulting.co/api/talents", {
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
          full_name: "",
          email: "",
          phone: "",
          location: "",
          specialty: "",
          links: "",
          uploads: null,
        });
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
      className="my-14"
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
          marginBottom: "40px",
        }}
      >
        Talent Form
      </h3>
      <div className="flex flex-col mb-6 max-w-md">
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
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="relative mb-5">
          <input
            type="text"
            id="full_name"
            onChange={(e) => onChangeHandler("full_name", e.target.value)}
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
            id="email"
            onChange={(e) => onChangeHandler("email", e.target.value)}
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
            id="phone"
            onChange={(e) => onChangeHandler("phone", e.target.value)}
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
            id="location"
            onChange={(e) => onChangeHandler("location", e.target.value)}
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
            id="specialty"
            onChange={(e) => onChangeHandler("specialty", e.target.value)}
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
            id="links"
            onChange={(e) => onChangeHandler("links", e.target.value)}
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
          <FileInput
            id="file-upload"
            name="uploads"
            required
            onChange={handleFileChange}
            className="hidden"
          />
        </div>
        <Button
          type="submit"
          disabled={isLoading}
          className="text-white bg-[#ABABAB] hover:bg-[#075677] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-40 h-12 ml-auto"
        >
          {isLoading && (
            <div className="flex justify-center items-center">
              <Spinner aria-label="Spinner button example" size="sm" />
            </div>
          )}
          <span className="">Send Form</span>
        </Button>
      </div>
    </form>
  );
}
