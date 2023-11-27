// components/Tabs.js
import Image from "next/image";
import React, { useState } from "react";

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

  const showArrows = tabs.length > 4; // Show arrows if there are more than 4 tabs

  const getTabsToShow = () => {
    const lastVisibleTab = firstVisibleTab + 3; // Show up to 4 tabs
    return tabs.slice(firstVisibleTab, lastVisibleTab + 1);
  };

  const handleArrowClick = (direction: any) => {
    if (direction === "left") {
      setFirstVisibleTab((prev) => Math.max(prev - 1, 0));
    } else if (direction === "right") {
      setFirstVisibleTab((prev) => Math.min(prev + 1, tabs.length - 4));
    }
  };

  return (
    <div
      className="flex mx-auto flex-wrap mb-2"
      style={{
        background: "rgba(78, 131, 152, 0.9)",
        height: "80px",
        borderRadius: "10px",
        marginBottom: 0,
        boxShadow: "0px 0px 2px 0px rgba(0, 0, 0, 0.25)",
        zIndex: 1,
        overflowX: "auto", // Enable horizontal scrolling on small screens
      }}
    >
      {showArrows && (
        <button
          onClick={() => handleArrowClick("left")}
          disabled={firstVisibleTab === 0}
        >
          <Image
            src="/arrow-left.svg"
            width={30}
            height={30}
            alt="arrow-left"
          />
        </button>
      )}
      {getTabsToShow().map((tab: any, index: any) => (
        <div
          key={index}
          className={`sm:px-6 py-3 justify-center text-center sm:justify-start ${
            index === selectedTab ? "text-white" : "text-gray-100"
          } inline-flex items-center leading-none tracking-wider`}
          onClick={() => onTabClick(index)}
        >
          <span className="title-font cursor-pointer font-normal text-[13px]">
            {tab}
          </span>
        </div>
      ))}
      {showArrows && (
        <button
          onClick={() => handleArrowClick("right")}
          disabled={firstVisibleTab === tabs.length - 4}
        >
          <Image
            src="/arrow-right.svg"
            width={30}
            height={30}
            alt="arrow-left"
          />
        </button>
      )}
    </div>
  );
};

export default Tabs;
