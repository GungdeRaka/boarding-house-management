"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  { src: "/images/about-main.png", alt: "Modern Living Space" },
  { src: "/images/about-pool.png", alt: "Refreshing Pool Area" },
  { src: "/images/about-garden.png", alt: "Lush Tropical Garden" },
  { src: "/hero_bg.png", alt: "Kuda Putih House Exterior" },
  { src: "/images/about-main.png", alt: "Comfortable Bedroom" },
  { src: "/images/about-pool.png", alt: "Serene Poolside View" },
];

// Duplicate the images to create a seamless loop
const duplicatedImages = [...images, ...images];

export default function ImageCarousel() {
  return (
    <div className="relative w-full overflow-hidden py-10">
      <motion.div
        className="flex gap-4 w-max"
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicatedImages.map((image, index) => (
          <div
            key={index}
            className="relative w-72 h-48 md:w-96 md:h-64 rounded-2xl overflow-hidden shadow-lg shrink-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 288px, 384px"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
