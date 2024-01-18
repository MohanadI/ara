"use client";
import { Carousel } from "flowbite-react";

export const DefaultImageSlider = ({ slides }: { slides: any }) => {
  return (
    <Carousel
      slideInterval={5000}
      theme={{
        root: {
          base: "relative h-full w-full",
          leftControl: "hidden",
          rightControl: "hidden",
        },
        scrollContainer: {
          base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-scroll scroll-smooth rounded-xl rounded-tr-none rounded-br-none",
          snap: "snap-x",
        },
      }}
      style={{
        borderRadius: 0,
      }}
    >
      {slides.map((slide: { img: string; label: string }) => {
        return (
          <div
            key={slide.label}
            className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white"
            style={{
              background:
                "linear-gradient(111.31deg, rgba(1, 83, 116, 0.3) 3.88%, rgba(0, 83, 117, 0.2) 100%), url(" +
                slide.img +
                ") no-repeat center center / cover",
            }}
          >
            <h2 className="text-5xl text-white font-bold">{slide.label}</h2>
          </div>
        );
      })}
    </Carousel>
  );
};
