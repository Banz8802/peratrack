"use client";

import React from "react";
// import Image from "next/image";
import Link from "next/link";
import PeraTrackLogo from "@/components/PeraTrackLogo";
import { ShieldCheck, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#00160D] border-t border-[#85DB6C]/20 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Logo & Description & App Store Badges */}
          <div className="max-w-sm space-y-4">
            <PeraTrackLogo />
            <p className="text-xs text-slate-400 leading-relaxed">
              Personal finance tracking, credit cards, installments, and instant OCR receipt scanning for the Philippines.
            </p>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-300 font-medium">
            <Link href="/" className="hover:text-[#85DB6C] transition-colors">Home</Link>
            <Link href="/#receipt-scanner" className="hover:text-[#85DB6C] transition-colors">Receipt Scanner</Link>
            <Link href="/#features" className="hover:text-[#85DB6C] transition-colors">Features</Link>
            <Link href="/#how-it-works" className="hover:text-[#85DB6C] transition-colors">How It Works</Link>
            <Link href="/#faq" className="hover:text-[#85DB6C] transition-colors">FAQ</Link>
            <Link href="/privacy" className="hover:text-[#85DB6C] transition-colors">Privacy</Link>
            <Link href="/terms" className="hover:text-[#85DB6C] transition-colors">Terms</Link>
            <Link href="/account-deletion" className="hover:text-[#85DB6C] transition-colors">Account deletion</Link>
            <a href="mailto:support@peratrack.ph?subject=PeraTrack%20feedback" className="hover:text-[#85DB6C] transition-colors flex items-center gap-1.5">
              <Mail className="w-3.5 h-3.5 text-[#85DB6C]" />
              <span>Send feedback</span>
            </a>
          </nav>
        </div>

        {/* Copyright */}
        <div className="pt-8 text-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} PeraTrack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
