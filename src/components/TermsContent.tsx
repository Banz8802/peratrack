"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import SearchModal from "@/components/SearchModal";
import Footer from "@/components/Footer";
import {
  FileText,
  Zap,
  Bug,
  Building2,
  CheckSquare,
  ShieldAlert,
  Trash2,
  Mail,
  ArrowRight,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  Scale,
} from "lucide-react";

const sections = [
  {
    id: "early-access-service",
    title: "Early-access service",
    icon: Zap,
    badge: "Free & Invite-Only",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    content:
      "PeraTrack is invite-only and provided free of charge. Features may change, break, or be removed, and the service is provided “as is” without warranties.",
  },
  {
    id: "software-bugs",
    title: "Software may contain bugs",
    icon: Bug,
    badge: "Early-Stage Product",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    content:
      "PeraTrack is an early-stage product. Calculations, estimates, and imports may be incomplete or incorrect. Please report anything that looks wrong.",
  },
  {
    id: "official-record",
    title: "Your bank statement is the official record",
    icon: Building2,
    badge: "Bank Record Priority",
    badgeColor: "bg-[#85DB6C]/10 text-[#85DB6C] border-[#85DB6C]/20",
    content:
      "PeraTrack helps you track and estimate. Your bank’s official statement always remains the authoritative record of your accounts and balances.",
  },
  {
    id: "responsible-for-verifying",
    title: "You are responsible for verifying",
    icon: CheckSquare,
    badge: "User Verification",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    content:
      "Always verify PeraTrack’s figures against your official statements before relying on them for decisions or payments.",
  },
  {
    id: "not-financial-advice",
    title: "Not financial advice",
    icon: ShieldAlert,
    badge: "Tracking Tool Only",
    badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    content:
      "PeraTrack is a tracking tool, not a financial adviser. Nothing in the app constitutes financial, tax, or legal advice.",
  },
  {
    id: "account-data-deletion",
    title: "Account & data deletion",
    icon: Trash2,
    badge: "Full Data Ownership",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    content:
      "You may delete your entire account and data at any time from Profile → “Delete my account,” or contact support for help — and you may stop using the service whenever you wish.",
  },
];

export default function TermsContent() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#00160D] text-slate-100 flex flex-col justify-between selection:bg-[#85DB6C] selection:text-[#00160D]">
      {/* Navigation Header */}
      <Header
        onOpenMobileMenu={() => setIsMobileMenuOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Offcanvas Mobile Navigation */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />

      {/* Global Search Dialog */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />

      {/* Main Terms Body */}
      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section Header */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#032416] to-[#00160D] border border-[#85DB6C]/20 p-8 sm:p-12 mb-12 shadow-2xl">
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#85DB6C]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#85DB6C]/10 border border-[#85DB6C]/25 text-[#85DB6C] text-xs font-semibold tracking-wide uppercase mb-6">
                <Scale className="w-3.5 h-3.5" />
                <span>Good-Faith Summary & Terms</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Terms & Disclaimer
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                By using PeraTrack, you agree to the following. This is a good-faith summary, not exhaustive legal terms, and may change as the product evolves.
              </p>

              {/* Terms Key Highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#85DB6C]/15">
                <div className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#85DB6C] shrink-0" />
                  <span>Provided Free & Invite-Only</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#85DB6C] shrink-0" />
                  <span>Bank Statement is Official</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#85DB6C] shrink-0" />
                  <span>Delete Account Any Time</span>
                </div>
              </div>
            </div>
          </div>

          {/* Grid Layout: Sticky Navigation + Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Quick Navigation (Sticky Sidebar) */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-28 space-y-4">
                {/* Quick Navigation Card */}
                <div className="space-y-4 p-6 rounded-2xl bg-[#032416]/40 border border-[#85DB6C]/15 backdrop-blur-sm shadow-xl">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#85DB6C]" />
                    <span>Quick Navigation</span>
                  </h3>
                  <nav className="space-y-1">
                    {sections.map((sec) => {
                      const IconComp = sec.icon;
                      return (
                        <a
                          key={sec.id}
                          href={`#${sec.id}`}
                          className="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-slate-300 hover:text-[#85DB6C] hover:bg-[#85DB6C]/10 transition-all group"
                        >
                          <div className="flex items-center gap-2.5">
                            <IconComp className="w-4 h-4 text-slate-400 group-hover:text-[#85DB6C] transition-colors" />
                            <span className="truncate">{sec.title}</span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#85DB6C] group-hover:translate-x-0.5 transition-all" />
                        </a>
                      );
                    })}
                  </nav>

                  <div className="pt-4 border-t border-[#85DB6C]/15">
                    <div className="p-4 rounded-xl bg-[#00160D]/60 border border-[#85DB6C]/10">
                      <p className="text-xs text-slate-400 leading-relaxed mb-3">
                        Have questions about our terms or service?
                      </p>
                      <a
                        href="mailto:support@peratrack.ph"
                        className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-[#03A251] hover:bg-[#85DB6C] text-[#00160D] font-bold text-xs transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Contact Support</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Notice Card */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-[#032416]/60 to-[#00160D]/90 border border-[#85DB6C]/25 backdrop-blur-sm shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#85DB6C]/10 rounded-full blur-xl pointer-events-none" />
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#85DB6C] mb-2.5">
                    <ShieldAlert className="w-4 h-4 text-[#85DB6C]" />
                    <span>Important Notice</span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    PeraTrack is currently{" "}
                    <span className="font-bold text-[#85DB6C]">invite-only production</span>. Always verify figures against your official bank statements.
                  </p>
                </div>
              </div>
            </aside>

            {/* Right Column: Terms Content Cards */}
            <div className="lg:col-span-8 space-y-6">
              {sections.map((sec) => {
                const IconComp = sec.icon;
                return (
                  <section
                    key={sec.id}
                    id={sec.id}
                    className="scroll-mt-32 p-6 sm:p-8 rounded-2xl bg-[#032416]/30 border border-[#85DB6C]/15 hover:border-[#85DB6C]/30 transition-all shadow-lg group"
                  >
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-xl bg-[#85DB6C]/10 border border-[#85DB6C]/20 text-[#85DB6C] group-hover:scale-105 transition-transform">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-bold text-white group-hover:text-[#85DB6C] transition-colors">
                          {sec.title}
                        </h2>
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold border ${sec.badgeColor}`}
                      >
                        {sec.badge}
                      </span>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed whitespace-pre-line">
                      {sec.content}
                    </p>
                  </section>
                );
              })}

              {/* Bottom Support & Contact Callout */}
              <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#032416] to-[#00160D] border border-[#85DB6C]/25 text-slate-200 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#85DB6C]" />
                    <span>Questions, or want your data deleted?</span>
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">
                    Email our team directly for any support or data requests.
                  </p>
                </div>
                <a
                  href="mailto:support@peratrack.ph"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#03A251] to-[#85DB6C] text-[#00160D] font-bold text-xs hover:brightness-110 transition-all shadow-md shrink-0"
                >
                  <span>support@peratrack.ph</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
