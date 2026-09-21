"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

export default function CTASection() {
  return (
    <section id="register" className="py-24 bg-[#032416] relative border-t border-[#85DB6C]/20 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#03A251]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#00160D] border border-[#85DB6C]/30 text-[#85DB6C] text-xs font-semibold">
          <ShieldCheck className="w-4 h-4" />
          <span>Invite-Only Access</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
          Ready to start?
        </h2>

        <p className="text-lg text-slate-300 max-w-xl mx-auto">
          Request an invite and take control of your money, cards, and installments today.
        </p>

        <div className="pt-4 flex justify-center">
          <Link
            href="mailto:support@peratrack.ph?subject=Request%20early%20access"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#03A251] to-[#85DB6C] text-[#00160D] font-extrabold px-8 py-4 rounded-full text-base hover:brightness-110 transition-all shadow-xl shadow-[#03A251]/30 hover:scale-105"
          >
            <span>Request early access</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
