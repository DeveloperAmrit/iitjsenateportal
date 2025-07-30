"use client";

import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import { useEffect } from "react";

const imageNames = ["iitj1.jpg", "iitj8.jpg", "iitj9.jpg", "iitj5.jpg"]; 

export default function CampusCarousel() {
  // Keen Slider setup
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    slides: {
      perView: 1,
    },
  });

  // Autoplay effect: every 4 seconds
  useEffect(() => {
    if (!instanceRef.current) return;
    const slider = instanceRef.current;
    const interval = setInterval(() => {
      slider.next();
    }, 4000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div
      ref={sliderRef}
      className="keen-slider absolute top-0 left-0 w-full h-screen z-0"
    >
      {imageNames.map((img, index) => (
        <div key={index} className="keen-slider__slide relative w-full h-screen">
          <Image
            src={`/images/IITJ/hero/${img}`}
            alt={`Campus view ${index + 1}`}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}
