"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";
import ImageToVideo from "../ImageToVideo";

interface SectionProps {
  name: string;
  description: string;
  invert: boolean;
  imageUrl: string;
  videoUrl: string | undefined;
}

export const Section = ({
  name,
  description,
  invert = true,
  imageUrl,
  videoUrl,
}: SectionProps) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
    freezeOnceVisible: true,
  });

  if (isIntersecting && !hasBeenVisible) {
    setHasBeenVisible(true);
  }

  console.log(videoUrl);

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
          <h2 className="text-5xl font-bold">{name}</h2>
          <p className="leading-8 text-2xl font-normal">{description}</p>
        </div>
        <div className="w-full h-[35rem] min-w-[40rem] rounded-lg z-10 overflow-hidden">
          <ImageToVideo imageUrl={imageUrl} videoUrl={videoUrl} />
        </div>
      </div>
    </section>
  );
};

export default Section;
