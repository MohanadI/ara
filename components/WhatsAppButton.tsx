"use client";
// WhatsAppButton.js
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "flowbite-react";

const WhatsAppButton = () => {

  const handleWhatsAppButtonClick = () => {
    // Replace '1234567890' with the phone number you want to open in WhatsApp
    const phoneNumber = "00971 54 322 4240";

    // Construct the WhatsApp URL
    const whatsappUrl = `https://wa.me/${phoneNumber}`;

    // Open the WhatsApp URL in the same tab
    window.location.href = whatsappUrl;
  };

  return (
    <Button
      onClick={handleWhatsAppButtonClick}
      className="flex justify-center items-center bg-[#005375] w-[50px] h-[50px] text-gray-100 cursor-pointer rounded-[50%] z-[9999999]"
    >
      <FaWhatsapp size={30} />
    </Button>
  );
};

export default WhatsAppButton;
