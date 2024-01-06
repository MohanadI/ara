// components/Tabs.js
import Image from "next/image";
import React, { useState, useEffect } from "react";

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{ width: any; height: any }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // only execute all the code below in client side
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

const Tabs = ({
  tabs,
  selectedTab,
  onTabClick,
}: {
  tabs: any;
  selectedTab: any;
  onTabClick: any;
}) => {
  const [firstVisibleTab, setFirstVisibleTab] = useState(0);
  const size = useWindowSize();
  const getTabsToShow = () => {
    if (size.width >= 1024) {
      return tabs.slice(firstVisibleTab, firstVisibleTab + 5);
    } else if (size.width >= 600) {
      return tabs.slice(firstVisibleTab, firstVisibleTab + 2);
    } else {
      return tabs.slice(firstVisibleTab, firstVisibleTab + 1);
    }
  };

  const handleArrowClick = (direction: any) => {
    const step = size.width >= 1024 ? 4 : size.width >= 600 ? 2 : 1;

    if (direction === "left") {
      setFirstVisibleTab((prev) => Math.max(prev - step, 0));
    } else if (direction === "right") {
      setFirstVisibleTab((prev) => Math.min(prev + step, tabs.length - step));
    }
  };

  return (
    <div
      className="flex m-auto mb-2"
      style={{
        background: "rgba(78, 131, 152, 0.8)",
        height: "112px",
        borderRadius: "10px",
        marginBottom: 0,
        boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.25)",
        zIndex: 2,
        backdropFilter: "blur(4px)",
        overflowX: "auto", // Enable horizontal scrolling on small screens
      }}
    >
      <button
        className="mr-auto"
        onClick={() => handleArrowClick("left")}
        disabled={firstVisibleTab === 0}
      >
        <Image
          src="/arrow-left.svg"
          className="w-[40px] h-[40px]"
          width={40}
          height={40}
          alt="arrow-left"
        />
      </button>
      {getTabsToShow().map((tab: any, index: any) => (
        <div
          key={index}
          className={`sm:px-6 py-3 cursor-pointer justify-center text-center m-auto ${
            tab === selectedTab ? " text-white font-medium" : "text-gray-100"
          } inline-flex items-center leading-none tracking-wider w-56`}
          onClick={() => onTabClick(tab)}
        >
          <span
            style={{
              fontSize: "18px",
              lineHeight: "21px",
              letterSpacing: "1px",
              whiteSpace: "pre-line",
            }}
          >
            {tab}
          </span>
        </div>
      ))}
      <button
        className="ml-auto"
        onClick={() => handleArrowClick("right")}
        disabled={firstVisibleTab === tabs.length - getTabsToShow().length}
      >
        <Image
          src="/arrow-right.svg"
          width={40}
          height={40}
          className="w-[40] h-[40]"
          alt="arrow-left"
        />
      </button>
    </div>
  );
};

export default Tabs;
