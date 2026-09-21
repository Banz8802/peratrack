"use client";

import React, { useState } from "react";
import { Sparkles, ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "Is PeraTrack free?",
    a: "Yes, PeraTrack is free to use. Access is invite-only right now.",
  },
  {
    q: "Do I need to enter my full card number?",
    a: "No. PeraTrack never asks for or stores your full card number, and does not need the last 4 digits either. Use a card name or nickname to identify your card.",
  },
  {
    q: "Can I import statements?",
    a: "UnionBank and Security Bank PDFs are currently supported. BPI and RCBC can use screenshot/manual entry while parser support improves.",
  },
  {
    q: "Is this a replacement for my bank statement?",
    a: "No. PeraTrack helps you track and estimate, but your bank statement remains the official record.",
  },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#00160D] relative border-t border-white/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#032416] border border-[#85DB6C]/30 text-[#85DB6C] text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>PeraTrack Answers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Frequently asked questions
          </h2>
        </div>

        {/* Accordion Container */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#032416] border-[#85DB6C]/40 shadow-xl shadow-[#03A251]/10"
                    : "bg-[#032416]/60 border-white/10 hover:border-[#85DB6C]/20"
                }`}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full text-left p-6 flex items-center justify-between gap-4 font-bold text-lg text-white"
                >
                  <span className={isOpen ? "text-[#85DB6C]" : "text-white"}>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-[#85DB6C]" : "text-slate-400"
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-white/5 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
