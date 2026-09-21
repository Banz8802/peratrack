"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight, ArrowUpRight } from "lucide-react";

const projects = [
  {
    num: "01",
    title: "Cloud Migration System",
    desc: "Many businesses struggle with outdated on-premise systems that limit scalability and flexibility. Our cloud migration service ensures a seamless transition to cloud platforms.",
    img: "/images/project/project-1.webp",
  },
  {
    num: "02",
    title: "Mobile App Development",
    desc: "A strong mobile presence is crucial for business growth in today’s digital age. We design and develop custom mobile applications for iOS and Android, tailored to specific requirements.",
    img: "/images/project/project-2.webp",
  },
  {
    num: "03",
    title: "ERP Implementation",
    desc: "Managing different business functions separately creates inefficiencies and data silos. Our ERP implementation service integrates finance, HR, supply chain, and customer management.",
    img: "/images/project/project-3.webp",
  },
  {
    num: "04",
    title: "Data Analytics Dashboard",
    desc: "Businesses generate vast amounts of data, but without proper insights, it remains untapped potential. Our data analytics dashboard centralizes and visualizes key business metrics.",
    img: "/images/project/project-4.webp",
  },
];

export default function AdditionalServicesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(0);

  return (
    <section id="projects" className="py-24 bg-[#0d1527] relative border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Explore Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white max-w-2xl">
              Discover How Empower for Businesses.
            </h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-full text-sm hover:brightness-110 transition-all shadow-lg shadow-cyan-500/20 shrink-0"
          >
            <span>Explore More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Project Reveal Accordion / Hover Items */}
        <div className="space-y-6">
          {projects.map((proj, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`p-6 sm:p-8 rounded-3xl border transition-all duration-500 relative overflow-hidden group ${
                  isHovered
                    ? "bg-[#151e32] border-cyan-500/50 shadow-2xl shadow-cyan-500/10"
                    : "bg-[#151e32]/60 border-white/10 hover:border-white/20"
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-1">
                    <span className="text-2xl sm:text-3xl font-extrabold text-cyan-400">
                      {proj.num}
                    </span>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {proj.title}
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      {proj.desc}
                    </p>
                  </div>

                  {/* Image Preview Window */}
                  <div className="lg:col-span-4 relative h-48 sm:h-52 rounded-2xl overflow-hidden border border-white/10">
                    <Image
                      src={proj.img}
                      alt={proj.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>

                  <div className="lg:col-span-1 flex justify-end">
                    <Link
                      href="#contact"
                      className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-200 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
