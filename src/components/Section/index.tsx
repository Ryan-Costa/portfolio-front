"use client";

import { useState } from "react";
import { useIntersectionObserver } from "usehooks-ts";

interface SectionProps {
  name: string;
  description: string;
  language: string;
}

export const Section = ({ name, description, language }: SectionProps) => {
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  const { isIntersecting, ref } = useIntersectionObserver({
    threshold: 0.5,
    freezeOnceVisible: true,
  });

  if (isIntersecting && !hasBeenVisible) {
    setHasBeenVisible(true);
  }

  return (
    <section
      ref={ref}
      className={`w-screen h-screen flex flex-col items-center justify-center`}
    >
      <div
        className={`${
          hasBeenVisible ? "show" : "hiden"
        } flex flex-col items-center justify-center`}
      >
        <h2 className="inline-flex">{name}</h2>
        <p className="inline-flex">{description}</p>
        <p className="inline-flex">{language}</p>
      </div>
    </section>
  );
};

export default Section;
