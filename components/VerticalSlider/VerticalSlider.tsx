"use client";

import { useState } from "react";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import styles from "./VerticalSlider.module.css";

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
          <div className="p-0 sm:px-4 sm:ml-5 w-full flex flex-col items-start">
            <span
              className="inline-block p-2 px-4 rounded-full bg-white bg-opacity-20
             text-white text-base font-medium tracking-widest"
            >
              Discover a world of potential and excellence with{" "}
              <span className="uppercase">ara consulting</span>
            </span>
            <h2
              className="text-white mt-10 mb-4"
              style={{
                fontSize: "48px",
                fontWeight: 700,
                lineHeight: "57px",
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Take your business to new heights with SAP Business One
            </h2>
            <p
              className="mb-4"
              style={{
                fontSize: "20px",
                fontWeight: 300,
                lineHeight: "24px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "rgba(215, 222, 225, 1)",
              }}
            >
              Explore our website and contact us today to learn more about how
              we can empower your organization to thrive in the digital age
            </p>
            <p
              className="mb-8"
              style={{
                fontSize: "20px",
                fontWeight: 300,
                lineHeight: "24px",
                letterSpacing: "0em",
                textAlign: "left",
                color: "rgba(215, 222, 225, 1)",
              }}
            >
              At our core, we believe that collaboration is key. By partnering
              with us, you are not just gaining a solution provider. You are
              joining forces with a team that genuinely cares about your
              success.
            </p>
            <button
              className="flex rounded-full bg-white border-0 py-3 px-8 focus:outline-none hover:bg-opacity-60 text-base"
              style={{ color: "rgba(0, 83, 117, 1)" }}
            >
              Get Started{" "}
              <ArrowLongRightIcon
                className="pl-1 h-6 w-6"
                style={{ color: "rgba(0, 83, 117, 1)" }}
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerticalSlider;
