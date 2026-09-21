"use client";

import React from "react";
import { Eye, CreditCard, CalendarCheck, ShieldCheck, UserCheck, Sparkles, SlidersHorizontal } from "lucide-react";

const features = [
  {
    icon: Eye,
    title: "See your money clearly",
    desc: "Track bank accounts, e-wallets, cash, income, expenses, and transfers in one unified view.",
  },
  {
    icon: CreditCard,
    title: "Built for credit-card life in the Philippines",
    desc: "Track statement dates, due dates, minimum due, payments, refunds, finance charges, and outstanding balances.",
  },
  {
    icon: CalendarCheck,
    title: "Installments without guesswork",
    desc: "Track Month 1 and mid-stream installments, monthly allocations, processing fees, and remaining obligations.",
  },
  {
    icon: SlidersHorizontal,
    title: "Review before anything changes",
    desc: "Statement imports are staged for review first. You stay in control before applying purchases, payments, refunds, fees, or installments.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy-first card handling",
    desc: "Never enter your full card number. Identify cards by name or nickname. The first 4 digits are optional and only help detect the network — they’re never stored.",
  },
  {
    icon: UserCheck,
    title: "Shaped by real users",
    desc: "Help improve PeraTrack by reporting issues and requesting features crafted for real Filipino finance workflows.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-[#00160D] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#032416] border border-[#85DB6C]/30 text-[#85DB6C] text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>PeraTrack Features</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Designed for how Filipinos actually manage money.
          </h2>
        </div>

        {/* 6 Grid Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <div
                key={idx}
                className="bg-[#032416] border border-[#85DB6C]/20 rounded-3xl p-8 hover:border-[#85DB6C]/50 hover:shadow-2xl hover:shadow-[#03A251]/20 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#03A251]/20 border border-[#85DB6C]/30 flex items-center justify-center text-[#85DB6C] mb-6 group-hover:scale-110 transition-transform">
                    <IconComp className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#85DB6C] transition-colors leading-snug">
                    {feat.title}
                  </h3>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
