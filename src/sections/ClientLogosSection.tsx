"use client";

import React from "react";
import Image from "next/image";

const brands = [
  { name: "Brand 1", src: "/images/brands/brand-1.webp" },
  { name: "Brand 2", src: "/images/brands/brand-2.webp" },
  { name: "Brand 3", src: "/images/brands/brand-3.webp" },
  { name: "Brand 4", src: "/images/brands/brand-4.webp" },
  { name: "Brand 5", src: "/images/brands/brand-5.webp" },
  { name: "Brand 6", src: "/images/brands/brand-6.webp" },
];

export default function ClientLogosSection() {
  return (
    <section className="py-20 bg-[#0b1120] overflow-hidden border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
        <h5 className="text-lg font-medium text-slate-300">
          Join Over <span className="text-cyan-400 font-bold">1000+</span> Companies with Tekmino Here
        </h5>
      </div>

      {/* Infinite Logo Marquee */}
      <div className="relative w-full overflow-hidden flex">
        <div className="flex animate-marquee space-x-16 items-center shrink-0">
          {[...brands, ...brands, ...brands].map((brand, idx) => (
            <div
              key={idx}
              className="w-40 h-16 relative flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={brand.src}
                alt={brand.name}
                width={140}
                height={40}
                className="max-h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
