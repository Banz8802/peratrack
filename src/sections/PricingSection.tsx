"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, Check, ArrowRight } from "lucide-react";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic Plan",
      desc: "Essential Electrical & IT Services",
      priceMonthly: 99,
      priceYearly: 84,
      isRecommend: false,
      features: [
        "Essential IT Support",
        "Cloud Storage (50 GB)",
        "Monthly System Check",
        "Basic Security Updates",
        "Software Patches and Fixes",
        "1 Scheduled Maintenance",
      ],
    },
    {
      name: "Standard Plan",
      desc: "Complete Electrical Solutions",
      priceMonthly: 249,
      priceYearly: 211,
      isRecommend: true,
      features: [
        "Advanced IT Management",
        "Cloud Storage (200 GB)",
        "Custom Software Solutions",
        "Threat Detection Services",
        "Data Backup and Recovery",
        "Monthly IT Consultation",
      ],
    },
    {
      name: "Premium Plan",
      desc: "Advanced Electrical Services",
      priceMonthly: 499,
      priceYearly: 424,
      isRecommend: false,
      features: [
        "Comprehensive IT Solutions",
        "Unlimited Cloud Storage",
        "Priority 1-Hour Support",
        "Cybersecurity Protection",
        "Dedicated Account Manager",
        "24/7 Emergency Service",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-[#0b1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Best Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Pricing Plans to Find the Right IT Support.
          </h2>

          {/* Pricing Switcher */}
          <div className="pt-4 flex items-center justify-center gap-4">
            <span className={`text-sm font-semibold ${!isYearly ? "text-cyan-400" : "text-slate-400"}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-14 h-8 rounded-full bg-[#151e32] border border-white/20 p-1 flex items-center transition-colors relative"
            >
              <div
                className={`w-6 h-6 rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 transition-transform ${
                  isYearly ? "translate-x-6" : "translate-x-0"
                }`}
              />
            </button>
            <span className={`text-sm font-semibold flex items-center gap-1.5 ${isYearly ? "text-cyan-400" : "text-slate-400"}`}>
              Yearly <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-500/30">(Save 15%)</span>
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => {
            const price = isYearly ? plan.priceYearly : plan.priceMonthly;
            return (
              <div
                key={idx}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                  plan.isRecommend
                    ? "bg-gradient-to-b from-[#1a2942] to-[#151e32] border-2 border-cyan-400 shadow-2xl shadow-cyan-500/20 md:-translate-y-4"
                    : "bg-[#151e32] border border-white/10 hover:border-white/20"
                }`}
              >
                {plan.isRecommend && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 font-bold px-4 py-1 rounded-full text-xs uppercase tracking-wider shadow-md">
                    Recommended Package
                  </span>
                )}

                <div>
                  <h4 className="text-2xl font-bold text-white mb-1">{plan.name}</h4>
                  <p className="text-xs text-slate-400 mb-6">{plan.desc}</p>

                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-2xl font-bold text-cyan-400">$</span>
                    <span className="text-5xl font-extrabold text-white">{price}</span>
                    <span className="text-sm text-slate-400">/per month</span>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-3 text-slate-300 text-sm">
                        <div className="w-5 h-5 rounded-full bg-cyan-500/10 text-cyan-400 flex items-center justify-center shrink-0">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="#contact"
                  className={`w-full py-3.5 rounded-full font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                    plan.isRecommend
                      ? "bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/25"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-cyan-400 hover:text-cyan-400"
                  }`}
                >
                  <span>Chose Package</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
