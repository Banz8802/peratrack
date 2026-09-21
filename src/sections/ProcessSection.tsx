"use client";

import React from "react";
import { Sparkles } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Deep Discovery & Planning.",
    desc: "Every great solution starts with understanding. We take the time to learn about your business, challenges, and long-term tech goals.",
  },
  {
    num: "02",
    title: "Development & Implement.",
    desc: "Our senior engineers build and deploy secure, scalable infrastructure tailored to your operational specifications with minimal downtime.",
  },
  {
    num: "03",
    title: "Optimization & Support.",
    desc: "We continuously monitor performance, patch vulnerabilities, and provide 24/7 proactive technical maintenance to keep you ahead.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-24 bg-[#0d1527] relative overflow-hidden border-y border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>How We Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Transform Your Business in 3 Simple Steps.
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-12 right-12 h-0.5 bg-gradient-to-r from-cyan-500/20 via-cyan-400/40 to-cyan-500/20 -translate-y-6 z-0" />

          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative z-10 bg-[#151e32] border border-white/10 rounded-3xl p-8 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400 group-hover:scale-110 transition-transform">
                  {step.num}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-colors">
                  <Sparkles className="w-5 h-5" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {step.title}
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
