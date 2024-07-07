"use client";

import Image from "next/image";
import React, { useState } from "react";

interface ImageToVideoProps {
  imageUrl: string;
  videoUrl?: string;
}

const ImageToVideo = ({ imageUrl, videoUrl }: ImageToVideoProps) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="w-full h-full object-cover"
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
