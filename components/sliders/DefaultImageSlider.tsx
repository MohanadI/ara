export const DefaultImageSlider = ({ slides }: { slides: any }) => {
  return (
    <div
      id="default-carousel"
      className="relative w-full"
      data-carousel="slide"
    >
      <div className="relative overflow-hidden rounded-l-xl h-full">
        {slides.map((slide: { img: string; label: string }) => {
          return (
            <div
              key={slide.label}
              className="hidden duration-700 ease-in-out"
              data-carousel-item
            >
              <div
                className="flex items-center justify-around h-full"
                style={{
                  background:
                    "linear-gradient(111.31deg, rgba(1, 83, 116, 0.3) 3.88%, rgba(0, 83, 117, 0.2) 100%), url(" +
                    slide.img +
                    ") no-repeat center center / cover",
                }}
              >
                <h2 className="text-5xl text-white font-bold">{slide.label}</h2>
              </div>
            </div>
          );
        })}
      </div>
      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        {slides.map((slide: { img: string; label: string }) => (
          <button
            key={slide.label + "slide_button"}
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label={"Slide" + slide.label}
            data-carousel-slide-to="0"
          ></button>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};
