// components/Tabs.js
import useWindowSize from "@/helpers/useWindowSize";
import Image from "next/image";
import React, { useState } from "react";

function getCenteredItems(array:any, index:any, count:any) {
  const halfLength = Math.floor(count / 2);
  const startIndex = Math.max(0, index - halfLength);
  const endIndex = Math.min(array.length - 1, startIndex + count - 1);

  // Adjust the startIndex if needed to ensure count items are included
  const adjustedStartIndex = endIndex - count + 1;

  return array.slice(adjustedStartIndex, endIndex + 1);
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
    const countToShow = size.width >= 1024 ? 5 : size.width >= 600 ? 2 : 1;

    return getCenteredItems(tabs, firstVisibleTab, countToShow);
  };

  const handleArrowClick = (direction: any) => {
    const step = 1;

    if (direction === "left") {
      setFirstVisibleTab((prev) => prev - step);
    } else if (direction === "right") {
      setFirstVisibleTab((prev) => prev + step);
    }

    // Update selectedTab based on the arrow click
    const newSelectedTabIndex =
      direction === "left"
        ? Math.max(tabs.indexOf(selectedTab) - 1, 0)
        : Math.min(tabs.indexOf(selectedTab) + 1, tabs.length - 1);

    onTabClick(tabs[newSelectedTabIndex]);
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
        disabled={firstVisibleTab === tabs.length - 1}
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
