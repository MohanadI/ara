import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

export const ActionBanner = () => {
  return (
    <section className="body-font">
      <div className="containerpx-80 py-24 mx-auto md:px-10 lg:px-20 xl:px-40 2xl:px-80">
        <div
          className="flex flex-wrap px-5 py-3 mx-auto items-center lg:rounded-full sm:px-5 md:px-5 lg:py-0 lg:px-14"
          style={{
            background:
              "linear-gradient(90deg,#005375 0%,rgba(20, 138, 186, 0.6094) 99.92%)",
          }}
        >
          <div className="mb-0 w-full lg:w-2/3 lg:pr-12 lg:py-8 lg:mb-0 lg:pb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              Free trial
            </h1>
            <p className="leading-relaxed text-base text-white">
              Free 3-day trial. Fill the form and experience our expertise
            </p>
          </div>
          <div className="flex flex-col w-full mt-3 lg:mt-0 lg:w-1/3 lg:pl-12">
            <button
              className="flex mx-auto rounded-full bg-white border-0 py-2 px-8 focus:outline-none hover:bg-opacity-60 text-base font-normal"
              style={{ color: "rgba(0, 83, 117, 1)" }}
            >
              Get Started{" "}
              <ArrowLongRightIcon
                className=" pl-1 h-6 w-6"
                style={{ color: "rgba(0, 83, 117, 1)" }}
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
