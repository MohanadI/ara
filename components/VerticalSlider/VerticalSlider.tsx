"use client";

import { useState } from "react";
import styles from "./VerticalSlider.module.css";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

const VerticalSlider = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleClick = (tabNumber: number) => {
    setSelectedTab(tabNumber);
  };

  return (
    <div className={styles.container}>
      <div className={styles.slider}>
        {[1, 2, 3, 4, 5, 6].map((tab) => (
          <div key={tab} className={styles.tab}>
            {tab === selectedTab ? (
              <div
                className={`${styles.circle} ${styles.active}`}
                onClick={() => handleClick(tab)}
              />
            ) : (
              <>
                {tab === selectedTab + 1 ? (
                  <div className={styles.line} />
                ) : null}
                <div
                  className={styles.tabNumber}
                  onClick={() => handleClick(tab)}
                >
                  0{tab}
                </div>
                {tab === selectedTab - 1 ? (
                  <div className={styles.line} />
                ) : null}
              </>
            )}
          </div>
        ))}
      </div>
      <div className={styles.contentContainer}>
        {selectedTab === 1 && (
          <div className="p-0 sm:px-4 w-full flex flex-col items-start">
            <span className="inline-block p-2 rounded-full bg-white bg-opacity-20 text-white text-xs font-medium tracking-widest">
              Discover a world of potential and excellence with ara consulting
            </span>
            <h2 className="sm:text-5xl text-xl title-font font-medium text-white mt-8 mb-4">
              Take your business to new heights with SAP Business One
            </h2>
            <p className="leading-relaxed text-white text-opacity-90 mb-2">
              Explore our website and contact us today to learn more about how
              we can empower your organization to thrive in the digital age
            </p>
            <p className="leading-relaxed text-white text-opacity-90 mb-8">
              At our core, we believe that collaboration is key. By partnering
              with us, you're not just gaining a solution provider. You're
              joining forces with a team that genuinely cares about your
              success.
            </p>
            <button className="flex text-black rounded-full bg-white border-0 py-2 px-8 focus:outline-none hover:bg-opacity-60 text-base">
              Get Started{" "}
              <ArrowLongRightIcon className="text-black pl-1 h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerticalSlider;
