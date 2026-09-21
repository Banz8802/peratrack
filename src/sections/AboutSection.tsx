"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles, Plus } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-[#0b1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Main Image & Reviews Overlay */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl group">
              <Image
                src="/images/about/h3-about-img.jpg"
                alt="About Tekmino"
                width={968}
                height={597}
                className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1120]/60 via-transparent to-transparent" />
            </div>

            {/* Floating Review Badge */}
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#151e32]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-4 sm:p-5 shadow-2xl max-w-xs flex items-center gap-4 animate-bounce-slow">
              <div className="flex -space-x-3 overflow-hidden shrink-0">
                <Image
                  src="/images/testimonial/client-1.webp"
                  alt="Client 1"
                  width={40}
                  height={40}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-cyan-500 object-cover"
                />
                <Image
                  src="/images/testimonial/client-2.webp"
                  alt="Client 2"
                  width={40}
                  height={40}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-cyan-500 object-cover"
                />
                <Image
                  src="/images/testimonial/client-3.webp"
                  alt="Client 3"
                  width={40}
                  height={40}
                  className="inline-block h-10 w-10 rounded-full ring-2 ring-cyan-500 object-cover"
                />
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/40 text-xs font-bold">
                  <Plus className="w-4 h-4" />
                </div>
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-200 leading-tight">
                  More <span className="text-cyan-400">800+</span> Clients Global Reviews IT Solution.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>About Our Company</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Providing Tailored IT Solution Ensuring Seamless Business Growth, Success.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              We are dedicated to transforming businesses through innovative and future-ready IT solutions. With a passion for technology and a commitment to excellence, we empower organizations. From cloud computing to AI-driven infrastructure, we deliver measurable results.
            </p>

            <div className="flex flex-wrap items-center justify-between gap-6 py-2 border-y border-white/10">
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-slate-200 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Tailored IT Solutions.</span>
                </li>
                <li className="flex items-center gap-3 text-slate-200 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Future-Ready Infrastructure.</span>
                </li>
                <li className="flex items-center gap-3 text-slate-200 font-medium">
                  <CheckCircle2 className="w-5 h-5 text-cyan-400 shrink-0" />
                  <span>Industry Expertise.</span>
                </li>
              </ul>

              {/* Circular Action Badge */}
              <Link
                href="#services"
                className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-sky-600 p-0.5 flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-cyan-500/30 group"
              >
                <div className="w-full h-full rounded-full bg-[#0b1120] flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-slate-950 transition-colors">
                  <ArrowRight className="w-7 h-7" />
                </div>
              </Link>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-5 rounded-2xl bg-[#151e32] border border-white/10">
                <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-1">
                  10m<span className="text-slate-100">+</span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">Active Users</h4>
                <p className="text-xs text-slate-400">Transforming ideas into digital excellence worldwide.</p>
              </div>

              <div className="p-5 rounded-2xl bg-[#151e32] border border-white/10">
                <div className="text-3xl sm:text-4xl font-extrabold text-cyan-400 mb-1">
                  03x<span className="text-slate-100"> Faster</span>
                </div>
                <h4 className="text-base font-bold text-white mb-1">Speed Boost</h4>
                <p className="text-xs text-slate-400">Accelerated deployment &amp; optimized cloud architecture.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
