"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./VerticalSlider.module.css";
import Image from "next/image";
import { List } from "flowbite-react";

const VerticalSlider = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const router = useRouter();

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
          <div className="p-0 sm:px-20 sm:pl-10 w-full flex flex-col items-start">
            <span
              className="inline-block p-2 px-4 rounded-full bg-white bg-opacity-20
             text-white text-[12px] md:text-base font-medium tracking-widest"
            >
              Discover a world of potential and excellence with{" "}
              <span className="uppercase">ara consulting</span>
            </span>
            <h2
              className="text-white mt-10 mb-4 text-[25px] md:text-[48px]"
              style={{
                fontWeight: 700,
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Take your business to new heights with SAP Business One
            </h2>
            <p
              className="mb-4 text-[14px] md:text-[20px]"
              style={{
                fontWeight: 300,
                letterSpacing: "0em",
                textAlign: "left",
                color: "rgba(215, 222, 225, 1)",
              }}
            >
              Explore our website and contact us today to learn more about how
              we can empower your organization to thrive in the digital age
            </p>
            <p
              className="mb-8 text-[14px] md:text-[20px]"
              style={{
                fontWeight: 300,
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
              onClick={() => router.push("/products")}
              className="flex rounded-full bg-white border-0 py-3 px-8 focus:outline-none hover:bg-opacity-60 text-base font-semibold"
              style={{ color: "rgba(0, 83, 117, 1)" }}
            >
              Get Started{" "}
              <Image
                src="./arrow_right_button.svg"
                alt="Arrow Right Button"
                width={24}
                height={24}
                className="ml-2"
              />
            </button>
          </div>
        )}
        {selectedTab === 2 && (
          <div className="p-0 sm:px-20 sm:pl-10 w-full flex flex-col items-start">
            <span
              className="inline-block p-2 px-4 rounded-full bg-white bg-opacity-20
             text-white text-[12px] md:text-base font-medium tracking-widest"
            >
              Discover a world of potential and excellence with{" "}
              <span className="uppercase">ara consulting</span>
            </span>
            <h2
              className="text-white mt-10 mb-4 text-[25px] md:text-[48px]"
              style={{
                fontWeight: 700,
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Take your business to new heights with SAP Business One
            </h2>
            <List
              theme={{
                root: {
                  base: "space-y-2 pt-1 text-[#d7dee1] text-[14px] md:text-xl font-light list-inside dark:text-gray-400",
                },
              }}
            >
              <List.Item>
                Instant access for employees who need to view and update data
                from anywhere
              </List.Item>
              <List.Item>
                Integrated analytics enable decisions to be made in real time
              </List.Item>
              <List.Item>Comprehensive sales and service functions</List.Item>
              <List.Item>
                Increase productivity of employees on the road
              </List.Item>
            </List>
          </div>
        )}
        {selectedTab === 3 && (
          <div className="p-0 sm:px-20 sm:pl-10 w-full flex flex-col items-start">
            <span
              className="inline-block p-2 px-4 rounded-full bg-white bg-opacity-20
             text-white text-[12px] md:text-base font-medium tracking-widest"
            >
              Discover a world of potential and excellence with{" "}
              <span className="uppercase">ara consulting</span>
            </span>
            <h2
              className="text-white mt-10 mb-4 text-[25px] md:text-[48px]"
              style={{
                fontWeight: 700,
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Take your business to new heights with SAP Business One
            </h2>
            <List
              theme={{
                root: {
                  base: "space-y-2 pt-1 text-[#d7dee1] text-[14px] md:text-xl font-light list-inside dark:text-gray-400",
                },
              }}
            >
              <List.Item>
                Become relevant in the global economy by implementing robust
                business processes
              </List.Item>
              <List.Item>
                Allow your business to adapt to market changes, and anticipate
                business trends
              </List.Item>
            </List>
          </div>
        )}
        {selectedTab === 4 && (
          <div className="p-0 sm:px-20 sm:pl-10 w-full flex flex-col items-start">
            <span
              className="inline-block p-2 px-4 rounded-full bg-white bg-opacity-20
             text-white text-[12px] md:text-base font-medium tracking-widest"
            >
              Discover a world of potential and excellence with{" "}
              <span className="uppercase">ara consulting</span>
            </span>
            <h2
              className="text-white mt-10 mb-4 text-[25px] md:text-[48px]"
              style={{
                fontWeight: 700,
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Take your business to new heights with SAP Business One
            </h2>
            <List
              theme={{
                root: {
                  base: "space-y-2 pt-1 text-[#d7dee1] text-[14px] md:text-xl font-light list-inside dark:text-gray-400",
                },
              }}
            >
              <List.Item>
                Integrated analytics and reports should always keep you informed
                on the health of your business
              </List.Item>
              <List.Item>
                Better decisions can be made on the back of real time data
                insight
              </List.Item>
            </List>
          </div>
        )}
        {selectedTab === 5 && (
          <div className="p-0 sm:px-20 sm:pl-10 w-full flex flex-col items-start">
            <span
              className="inline-block p-2 px-4 rounded-full bg-white bg-opacity-20
             text-white text-[12px] md:text-base font-medium tracking-widest"
            >
              Discover a world of potential and excellence with{" "}
              <span className="uppercase">ara consulting</span>
            </span>
            <h2
              className="text-white mt-10 mb-4 text-[25px] md:text-[48px]"
              style={{
                fontWeight: 700,
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Easy to Set Up, Use and Optimize
            </h2>
            <List
              theme={{
                root: {
                  base: "space-y-2 pt-1 text-[#d7dee1] text-[14px] md:text-xl font-light list-inside dark:text-gray-400",
                },
              }}
            >
              <List.Item>Simple and Affordable</List.Item>
              <List.Item>Quick to set up and optimize</List.Item>
              <List.Item>Easy to use</List.Item>
              <List.Item>
                Get the latest technology priced for small and growing
                businesses
              </List.Item>
            </List>
          </div>
        )}
        {selectedTab === 6 && (
          <div className="p-0 sm:px-20 sm:pl-10 w-full flex flex-col items-start">
            <span
              className="inline-block p-2 px-4 rounded-full bg-white bg-opacity-20
             text-white text-[12px] md:text-base font-medium tracking-widest"
            >
              Discover a world of potential and excellence with{" "}
              <span className="uppercase">ara consulting</span>
            </span>
            <h2
              className="text-white mt-10 mb-4 text-[25px] md:text-[48px]"
              style={{
                fontWeight: 700,
                letterSpacing: "0em",
                textAlign: "left",
              }}
            >
              Fast Time to Value
            </h2>
            <List
              theme={{
                root: {
                  base: "space-y-2 pt-1 text-[#d7dee1] text-[14px] md:text-xl font-light list-inside dark:text-gray-400",
                },
              }}
            >
              <List.Item>
                Intuitive and easy for your employees to adopt and use
              </List.Item>
              <List.Item>Implement in a short time period</List.Item>
              <List.Item>
                Embedded implementation tools based on the proven Accelerated
                Implementation Program
              </List.Item>
            </List>
          </div>
        )}
      </div>
    </div>
  );
};

export default VerticalSlider;
