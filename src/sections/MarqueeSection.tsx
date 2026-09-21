"use client";

import React from "react";
import { Sparkles } from "lucide-react";

const items = ["PERSONAL FINANCE", "CREDIT CARDS", "INSTALLMENTS", "STATEMENT IMPORTS", "PHILIPPINES", "PERATRACK"];

export default function MarqueeSection() {
  return (
    <section className="py-10 bg-gradient-to-r from-[#027745] via-[#03A251] to-[#85DB6C] overflow-hidden relative shadow-inner">
      <div className="flex animate-marquee space-x-12 items-center whitespace-nowrap">
        {[...items, ...items, ...items, ...items].map((text, idx) => (
          <div key={idx} className="flex items-center gap-8 text-[#00160D] font-black text-2xl sm:text-4xl uppercase tracking-wider shrink-0">
            <Sparkles className="w-7 h-7 text-[#00160D] fill-[#00160D]" />
            <span>{text}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
