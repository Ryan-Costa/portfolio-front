"use client";

import { useEffect, useRef, useState } from "react";
import Typed from "typed.js";

export const Title = () => {
  const ref = useRef(null);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const typed = new Typed(".auto-type", {
      strings: ["Ryan Costa", "Front-end Developer", "Software Engineer"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="w-[42.5rem]">
      <div>
        <h1 className="text-7xl text-black font-bold">
          Hi, I&apos;m
          <br />
          <span ref={ref} className="auto-type text-primary">
            Ryan Costa
          </span>
        </h1>
      </div>
    </div>
  );
};
