"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Sparkles, ArrowRight, FileSpreadsheet, CreditCard, PieChart, ShieldAlert, CheckCircle2 } from "lucide-react";

const workflows = [
  {
    id: "tab-ocr",
    num: "01",
    label: "OCR Receipt Reader",
    title: "Scan Receipts & Auto-Extract Expense Details",
    excerpt: "Use your device camera to scan paper or digital receipts. PeraTrack automatically reads merchant name, date, total amount, VAT, and line items.",
    banks: ["Camera Scan (On-Device)", "Digital Image Upload", "Merchant & Date Auto-Detect", "Local Staging Review"],
  },
  {
    id: "tab-1",
    num: "02",
    label: "PDF Statement Parser",
    title: "Import e-Statements for UnionBank & Security Bank",
    excerpt: "Upload your official PDF statements. PeraTrack parses purchases, finance fees, and refunds for review before updating your balance.",
    banks: ["UnionBank (Supported)", "Security Bank (Supported)", "BPI (Manual / Screenshot)", "RCBC (Manual / Screenshot)"],
  },
  {
    id: "tab-2",
    num: "03",
    label: "Credit Card Hub",
    title: "Statement Due Dates & Minimum Payments Tracked",
    excerpt: "Never miss a due date again. Monitor outstanding balances, statement cut-offs, minimum due allocations, and cashback refunds.",
    banks: ["UnionBank Visa/MC", "Security Bank Wave/Platinum", "BPI Rewards / Amex", "RCBC Hexagon / Flex"],
  },
  {
    id: "tab-3",
    num: "04",
    label: "Installments & BNPL",
    title: "0% Installments & Processing Fee Breakdown",
    excerpt: "Track month-by-month installment schedules, remaining term obligations, processing charges, and merchant promos with complete clarity.",
    banks: ["0% Merchant Installments", "Cash-on-Installment", "Balance Conversion", "Buy Now Pay Later"],
  },
];

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState("tab-ocr");

  const activeFlow = workflows.find((w) => w.id === activeTab) || workflows[0];

  return (
    <section id="how-it-works" className="py-24 bg-[#00160D] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#032416] border border-[#85DB6C]/30 text-[#85DB6C] text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>How PeraTrack Works</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white max-w-2xl">
              Powerful tools built specifically for PH credit cards &amp; bank accounts.
            </h2>
          </div>
          <Link
            href="#register"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#03A251] to-[#85DB6C] text-[#00160D] font-extrabold px-6 py-3 rounded-full text-sm hover:brightness-110 transition-all shadow-lg shadow-[#03A251]/20 shrink-0 self-start md:self-auto"
          >
            <span>Create Free Account</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Tabbed Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-3">
            {workflows.map((flow) => {
              const isActive = flow.id === activeTab;
              return (
                <button
                  key={flow.id}
                  onClick={() => setActiveTab(flow.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                    isActive
                      ? "bg-gradient-to-r from-[#03A251]/20 to-[#85DB6C]/10 border-[#85DB6C] text-white shadow-xl shadow-[#03A251]/20"
                      : "bg-[#032416] border-white/10 text-slate-300 hover:border-[#85DB6C]/30 hover:bg-[#063421]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-sm font-bold ${isActive ? "text-[#85DB6C]" : "text-slate-400"}`}>
                      {flow.num}
                    </span>
                    <span className="font-bold text-base sm:text-lg group-hover:text-[#85DB6C] transition-colors">
                      {flow.label}
                    </span>
                  </div>
                  <ArrowRight className={`w-5 h-5 transition-transform ${isActive ? "text-[#85DB6C] translate-x-1" : "text-slate-500"}`} />
                </button>
              );
            })}
          </div>

          {/* Tab Detail Panel */}
          <div className="lg:col-span-8 bg-[#032416] border border-[#85DB6C]/20 rounded-3xl p-8 sm:p-10 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <span className="inline-block px-3 py-1 rounded-full bg-[#03A251]/20 text-[#85DB6C] text-xs font-bold border border-[#85DB6C]/30">
                PeraTrack Module {activeFlow.num}
              </span>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                {activeFlow.title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {activeFlow.excerpt}
              </p>

              <div className="pt-4 border-t border-white/10">
                <h4 className="text-xs uppercase tracking-wider text-[#85DB6C] font-bold mb-4">Supported Integrations &amp; Workflows</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeFlow.banks.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-[#00160D] border border-[#85DB6C]/15 text-slate-200 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-[#85DB6C] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 flex justify-end">
              <Link
                href="#register"
                className="inline-flex items-center gap-2 text-[#85DB6C] font-extrabold hover:text-white group text-sm"
              >
                <span>Start Tracking</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
