"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ImageToVideoProps {
  imageUrl: string;
  videoUrl?: string;
  hasBeenVisible: boolean;
  originalAnimation: boolean;
}

const ImageToVideo = ({
  imageUrl,
  videoUrl,
  hasBeenVisible,
  originalAnimation,
}: ImageToVideoProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${
        hasBeenVisible
          ? `${
              originalAnimation
                ? "animate-slide-in-from-left"
                : "animate-slide-in-from-right"
            }`
          : "opacity-0"
      } object-cover w-full h-[35rem] min-w-[40rem] rounded-lg z-10 overflow-hidden`}
    >
      {videoUrl ? (
        hover ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={imageUrl}
            alt="Thumbnail"
            priority
            width={1500}
            height={1000}
            quality={100}
            className="w-full h-full object-cover"
          />
        )
      ) : (
        <Image
          src={imageUrl}
          alt="Thumbnail"
          priority
          width={1500}
          height={1000}
          quality={100}
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default ImageToVideo;
