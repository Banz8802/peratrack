"use client";

import React from "react";
import Link from "next/link";
import { X, Search, ChevronRight, Mail, Shield, CheckCircle } from "lucide-react";
import PeraTrackLogo from "@/components/PeraTrackLogo";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden flex">
      {/* Overlay Backdrop */}
      <div
        className="fixed inset-0 bg-[#00160D]/85 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Offcanvas Drawer */}
      <div className="relative ml-auto w-full max-w-xs sm:max-w-sm bg-[#032416] border-l border-[#85DB6C]/20 h-full overflow-y-auto p-6 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300 z-10">
        <div>
          {/* Header Top */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <Link href="/" onClick={onClose}>
              <PeraTrackLogo />
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Search */}
          <div className="mt-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search features, FAQs..."
                className="w-full bg-[#00160D] border border-[#85DB6C]/20 rounded-full px-4 py-2.5 pl-10 text-sm text-slate-200 placeholder-slate-400 focus:outline-none focus:border-[#85DB6C]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            </div>
          </div>

          {/* Navigation Menu */}
          <nav className="mt-8 space-y-3">
            <div className="border-b border-white/5 pb-3">
              <Link
                href="/"
                onClick={onClose}
                className="flex items-center justify-between text-[#85DB6C] font-semibold py-1"
              >
                <span>Home</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="border-b border-white/5 pb-3">
              <Link
                href="/#receipt-scanner"
                onClick={onClose}
                className="flex items-center justify-between text-slate-200 hover:text-[#85DB6C] font-medium py-1"
              >
                <span>Receipt Scanner</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="border-b border-white/5 pb-3">
              <Link
                href="/#features"
                onClick={onClose}
                className="flex items-center justify-between text-slate-200 hover:text-[#85DB6C] font-medium py-1"
              >
                <span>Features</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="border-b border-white/5 pb-3">
              <Link
                href="/#how-it-works"
                onClick={onClose}
                className="flex items-center justify-between text-slate-200 hover:text-[#85DB6C] font-medium py-1"
              >
                <span>How It Works</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="border-b border-white/5 pb-3">
              <Link
                href="/#faq"
                onClick={onClose}
                className="flex items-center justify-between text-slate-200 hover:text-[#85DB6C] font-medium py-1"
              >
                <span>FAQ</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="pb-3">
              <Link
                href="/#register"
                onClick={onClose}
                className="flex items-center justify-between text-slate-200 hover:text-[#85DB6C] font-medium py-1"
              >
                <span>Create Account</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </nav>
        </div>

        {/* Footer Info */}
        <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#85DB6C]">
            <Shield className="w-4 h-4" />
            <span>Smart Personal Finance · Philippines</span>
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">
            PeraTrack helps Filipinos track accounts, credit cards, OCR receipts, statement due dates, installment purchases, and payments.
          </p>
        </div>
      </div>
    </div>
  );
}
