"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";

export default function GetConsultButton() {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push("/contact")}
      className="flex m-auto mt-7 rounded-full bg-[#005375] border-0 py-4 px-8 focus:outline-none hover:bg-opacity-60 text-base font-semibold text-white"
    >
      Get Consult
      <Image
        src="./inactive.svg"
        alt="arrow_right_button"
        width={24}
        height={24}
        className="ml-2"
      />
    </button>
  );
}
