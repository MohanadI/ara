// ScrollToTopButton.js
"use client";
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { Button } from "flowbite-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to show/hide the button based on the scroll position
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsVisible(scrollTop > 300); // Adjust the scroll position threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      onClick={scrollToTop}
      className="flex justify-center items-center bg-[#005375] w-[50px] h-[50px] text-gray-100 cursor-pointer rounded-[50%] z-[9999999] mt-1"
    >
      <FaArrowUp size={25} />
    </Button>
  );
};

export default ScrollToTopButton;
