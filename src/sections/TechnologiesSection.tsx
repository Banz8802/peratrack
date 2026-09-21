"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

const techBadges = [
  { name: "GitLab", src: "/images/integration/gitlab.png" },
  { name: "ClickUp", src: "/images/integration/clickup.png" },
  { name: "Notion", src: "/images/integration/notion.png" },
  { name: "Asana", src: "/images/integration/asana.png" },
  { name: "OVHcloud", src: "/images/integration/ovhcloud.png" },
  { name: "Zoom", src: "/images/integration/zoom.png" },
  { name: "Slack", src: "/images/integration/slack.png" },
  { name: "Dropbox", src: "/images/integration/dropbox.png" },
  { name: "SendGrid", src: "/images/integration/sendgrid.png" },
  { name: "Microsoft", src: "/images/integration/microsoft.png" },
  { name: "Pipedrive", src: "/images/integration/pipedrive.png" },
  { name: "ChatGPT", src: "/images/integration/chatGPT.png" },
];

export default function TechnologiesSection() {
  return (
    <section className="py-24 bg-[#0d1527] relative border-y border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Left */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>Our Technologies</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
              Effortless IT Integration for Solutions.
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              Comprehensive IT management including monitoring, maintenance &amp; round-the-clock support to keep your business operating smoothly with modern cloud stack platforms.
            </p>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 group"
            >
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Badge Grid Right */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6">
              {techBadges.map((tech, idx) => (
                <div
                  key={idx}
                  className="bg-[#151e32] border border-white/10 rounded-2xl p-4 sm:p-6 flex items-center justify-center hover:border-cyan-400/50 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 group"
                >
                  <Image
                    src={tech.src}
                    alt={tech.name}
                    width={80}
                    height={40}
                    className="max-h-8 sm:max-h-10 w-auto object-contain filter group-hover:brightness-125 transition-all"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
