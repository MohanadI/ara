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
    </div>
  );
};
