"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import ImageToVideo from "../ImageToVideo";

interface SectionProps {
  name: string;
  firstText: string;
  secondText?: string;
  invert: boolean;
  imageUrl: string;
  videoUrl: string | undefined;
  images: string[];
  originalAnimation: boolean;
}

export const Section = ({
  name,
  firstText,
  secondText,
  invert = true,
  imageUrl,
  videoUrl,
  images,
  originalAnimation,
}: SectionProps) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
    freezeOnceVisible: true,
  });

  if (isIntersecting && !hasBeenVisible) {
    setHasBeenVisible(true);
  }

  console.log(hasBeenVisible);

  return (
    <section
      ref={ref}
      className={`px-[8rem] w-screen h-screen flex items-center justify-center  ${
        invert ? "bg-background" : "bg-primary-rgba"
      }`}
    >
      <div
        className={`flex gap-10 ${invert ? "flex-row-reverse" : "flex-row"} `}
      >
        <div
          className={`${
            hasBeenVisible ? "animate-slide-in-from-left" : "opacity-0"
          } flex flex-col items-start justify-start w-full gap-12 min-w-[40rem]`}
        >
          <div
            className={`flex flex-col items-start justify-start w-full gap-12`}
          >
            <h2 className={`text-5xl font-bold`}>{name}</h2>
            <p className={`leading-8 text-2xl font-normal`}>{firstText}</p>
            <p className={`leading-8 text-2xl font-normal`}>{secondText}</p>
          </div>

          {images && (
            <div className="flex flex-col gap-8">
              <h3 className="leading-8 text-2xl font-normal">
                Tecnologias mais utilizadas:
              </h3>
              <div className="flex gap-2">
                {images.map((image, index) => (
                  <Image
                    key={index}
                    src={image}
                    alt={`Image ${index + 1}`}
                    width={100}
                    height={100}
                    className={`${
                      setTimeout(() => {
                        hasBeenVisible;
                      })
                        ? "animate-slide-in-from-left"
                        : "opacity-0"
                    }`}
                    style={{
                      animationDelay: `${Math.min(300 * index, 900)}ms`,
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
        <ImageToVideo
          imageUrl={imageUrl}
          videoUrl={videoUrl}
          originalAnimation={originalAnimation}
          hasBeenVisible={hasBeenVisible}
        />
      </div>
    </section>
  );
};

export default Section;
