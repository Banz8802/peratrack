"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ScanLine,
  Camera,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  FileText,
  ShieldCheck,
  Zap,
  DollarSign,
  Smartphone,
  Edit3,
  Check,
} from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Snap Receipt",
    desc: "Use your phone camera or upload a digital receipt image.",
    icon: Camera,
  },
  {
    num: "02",
    title: "OCR Scan",
    desc: "Instant camera frame scan analyzes text and layout geometry.",
    icon: ScanLine,
  },
  {
    num: "03",
    title: "Extract Details",
    desc: "Auto-detects merchant, date, total amount, VAT, and item lines.",
    icon: Zap,
  },
  {
    num: "04",
    title: "Review & Save",
    desc: "Verify extracted values locally before saving to your ledger.",
    icon: CheckCircle2,
  },
];

const sampleReceipts = [
  {
    id: "starbucks",
    merchant: "Starbucks Coffee PH",
    location: "Bonifacio Global City, Taguig",
    date: "Sep 24, 2026 · 2:45 PM",
    total: "₱480.00",
    category: "Food & Dining",
    paymentMethod: "UnionBank Rewards Visa",
    items: [
      { name: "1x Iced Caramel Macchiato (Venti)", price: "₱240.00" },
      { name: "1x Triple Cheese Ensaymada", price: "₱180.00" },
      { name: "VAT (12% Included)", price: "₱60.00" },
    ],
  },
  {
    id: "sm",
    merchant: "SM Supermarket",
    location: "Megamall, Mandaluyong",
    date: "Sep 22, 2026 · 6:10 PM",
    total: "₱1,850.50",
    category: "Groceries",
    paymentMethod: "Security Bank Wave MC",
    items: [
      { name: "Fresh Milk 1L Pack", price: "₱185.00" },
      { name: "Organic Brown Eggs 12s", price: "₱220.00" },
      { name: "Pantry Staples & Produce", price: "₱1,445.50" },
    ],
  },
  {
    id: "shell",
    merchant: "Shell Fuel Station",
    location: "EDSA Ortigas, Quezon City",
    date: "Sep 20, 2026 · 8:15 AM",
    total: "₱2,500.00",
    category: "Transportation & Fuel",
    paymentMethod: "BPI Rewards Card",
    items: [
      { name: "V-Power Gasoline (41.6L)", price: "₱2,500.00" },
    ],
  },
];

export default function OCRReceiptSection() {
  const [activeReceipt, setActiveReceipt] = useState(sampleReceipts[0]);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 2500);
  };

  return (
    <section id="receipt-scanner" className="py-24 bg-[#00160D] relative border-t border-white/10 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-[#03A251]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#032416] border border-[#85DB6C]/30 text-[#85DB6C] text-sm font-semibold shadow-lg shadow-[#03A251]/10">
            <ScanLine className="w-4 h-4 text-[#85DB6C]" />
            <span>OCR Receipt Reader</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Scan Receipts. Track Expenses Faster.
          </h2>

          <p className="text-lg sm:text-xl text-slate-300 leading-relaxed">
            Use PeraTrack&apos;s OCR Receipt Reader to scan your receipts and automatically extract expense details, making expense tracking faster and easier.
          </p>
        </div>

        {/* Visual Flow Steps Banner */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {steps.map((step) => {
            const IconComp = step.icon;
            return (
              <div
                key={step.num}
                className="bg-[#032416]/80 border border-[#85DB6C]/20 rounded-2xl p-5 hover:border-[#85DB6C]/50 transition-all group"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-extrabold text-[#85DB6C] bg-[#03A251]/20 px-2.5 py-1 rounded-md border border-[#85DB6C]/30">
                    Step {step.num}
                  </span>
                  <div className="p-2 rounded-xl bg-white/5 group-hover:bg-[#85DB6C]/10 text-slate-300 group-hover:text-[#85DB6C] transition-colors">
                    <IconComp className="w-4 h-4" />
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-1">{step.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Interactive OCR Demo Stage */}
        <div className="bg-[#032416] border border-[#85DB6C]/25 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          {/* Header Controls for Demo */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-8 mb-8 border-b border-white/10">
            <div>
              <span className="text-xs font-bold text-[#85DB6C] uppercase tracking-widest block mb-1">
                Interactive Live Preview
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Select a receipt sample to test OCR extraction:
              </h3>
            </div>

            {/* Receipt Preset Buttons */}
            <div className="flex flex-wrap items-center gap-2">
              {sampleReceipts.map((rec) => (
                <button
                  key={rec.id}
                  onClick={() => setActiveReceipt(rec)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                    activeReceipt.id === rec.id
                      ? "bg-gradient-to-r from-[#03A251] to-[#85DB6C] text-[#00160D] shadow-md font-bold"
                      : "bg-[#00160D] text-slate-300 border border-white/10 hover:border-[#85DB6C]/40"
                  }`}
                >
                  {rec.merchant.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Main Grid: Scanner Viewport + Extracted Data Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Phone Camera Scanner Viewport */}
            <div className="lg:col-span-5 bg-[#00160D] border border-[#85DB6C]/30 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[380px] shadow-inner group">
              {/* Animated Scan Beam */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#85DB6C] to-transparent shadow-[0_0_15px_#85DB6C] animate-pulse top-1/4 z-20 pointer-events-none" />

              {/* Viewport Framing Overlay */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#85DB6C]" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#85DB6C]" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#85DB6C]" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#85DB6C]" />

              {/* Simulated Paper Receipt Graphic */}
              <div className="bg-[#032416]/90 border border-white/10 rounded-xl p-5 my-auto text-slate-200 text-xs font-mono relative z-10 shadow-2xl">
                <div className="text-center pb-3 border-b border-dashed border-white/20 mb-3">
                  <p className="font-bold text-sm text-[#85DB6C]">{activeReceipt.merchant}</p>
                  <p className="text-[11px] text-slate-400">{activeReceipt.location}</p>
                  <p className="text-[10px] text-slate-500 mt-1">{activeReceipt.date}</p>
                </div>

                {/* Items */}
                <div className="space-y-2 py-2">
                  {activeReceipt.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-center text-slate-300">
                      <span>{item.name}</span>
                      <span className="font-semibold text-white">{item.price}</span>
                    </div>
                  ))}
                </div>

                {/* Total */}
                <div className="pt-3 border-t border-dashed border-white/20 mt-3 flex justify-between items-center text-sm font-bold">
                  <span className="text-[#85DB6C]">TOTAL AMOUNT</span>
                  <span className="text-[#85DB6C] text-base">{activeReceipt.total}</span>
                </div>
              </div>

              {/* Viewport Status Tag */}
              <div className="flex items-center justify-between text-[11px] text-slate-400 pt-3 relative z-10">
                <span className="flex items-center gap-1.5 text-[#85DB6C] font-semibold">
                  <span className="w-2 h-2 rounded-full bg-[#85DB6C] animate-ping" />
                  Camera Active · On-Device OCR
                </span>
                <span>Confidence: 99.2%</span>
              </div>
            </div>

            {/* Right: Extracted Result Staging Card */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-[#85DB6C]" />
                  <span className="font-bold text-white text-lg">Extracted Expense Data</span>
                </div>
                <span className="text-xs bg-[#03A251]/20 text-[#85DB6C] border border-[#85DB6C]/30 px-3 py-1 rounded-full font-semibold">
                  Ready for Review
                </span>
              </div>

              {/* Data Fields Table */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-[#00160D]/80 border border-white/10 rounded-xl p-3.5">
                  <span className="text-[11px] text-slate-400 font-medium block mb-1">Merchant Name</span>
                  <p className="text-sm font-bold text-white flex items-center justify-between">
                    <span>{activeReceipt.merchant}</span>
                    <Edit3 className="w-3.5 h-3.5 text-slate-500 hover:text-[#85DB6C] cursor-pointer" />
                  </p>
                </div>

                <div className="bg-[#00160D]/80 border border-white/10 rounded-xl p-3.5">
                  <span className="text-[11px] text-slate-400 font-medium block mb-1">Date &amp; Time</span>
                  <p className="text-sm font-bold text-white flex items-center justify-between">
                    <span>{activeReceipt.date}</span>
                    <Edit3 className="w-3.5 h-3.5 text-slate-500 hover:text-[#85DB6C] cursor-pointer" />
                  </p>
                </div>

                <div className="bg-[#00160D]/80 border border-white/10 rounded-xl p-3.5">
                  <span className="text-[11px] text-slate-400 font-medium block mb-1">Extracted Total</span>
                  <p className="text-base font-extrabold text-[#85DB6C] flex items-center justify-between">
                    <span>{activeReceipt.total}</span>
                    <Edit3 className="w-3.5 h-3.5 text-slate-500 hover:text-[#85DB6C] cursor-pointer" />
                  </p>
                </div>

                <div className="bg-[#00160D]/80 border border-white/10 rounded-xl p-3.5">
                  <span className="text-[11px] text-slate-400 font-medium block mb-1">Payment Method / Card</span>
                  <p className="text-sm font-bold text-white flex items-center justify-between">
                    <span>{activeReceipt.paymentMethod}</span>
                    <Edit3 className="w-3.5 h-3.5 text-slate-500 hover:text-[#85DB6C] cursor-pointer" />
                  </p>
                </div>
              </div>

              {/* Privacy Guarantee Note */}
              <div className="bg-[#00160D] border border-[#85DB6C]/20 rounded-xl p-4 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#85DB6C] shrink-0" />
                <p className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white">Phone-First Privacy:</strong> Your receipt images stay local to your camera and device. Only the verified text is saved to your personal account.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={handleSave}
                  className={`inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-extrabold text-sm transition-all shadow-lg ${
                    isSaved
                      ? "bg-emerald-500 text-white shadow-emerald-500/30"
                      : "bg-gradient-to-r from-[#03A251] to-[#85DB6C] text-[#00160D] hover:brightness-110 shadow-[#03A251]/25 hover:scale-105"
                  }`}
                >
                  {isSaved ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Expense Saved to Ledger!</span>
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Confirm &amp; Save Expense</span>
                    </>
                  )}
                </button>

                <Link
                  href="#register"
                  className="inline-flex items-center gap-2 text-slate-300 hover:text-[#85DB6C] font-semibold text-sm transition-colors"
                >
                  <span>Start Tracking Receipts</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
