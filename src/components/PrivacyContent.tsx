"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import SearchModal from "@/components/SearchModal";
import Footer from "@/components/Footer";
import {
  Shield,
  CreditCard,
  FileSpreadsheet,
  ScanLine,
  ShieldCheck,
  Megaphone,
  HardDrive,
  Trash2,
  Mail,
  ArrowRight,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  ShieldAlert,
} from "lucide-react";

const sections = [
  {
    id: "what-you-enter",
    title: "What you enter",
    icon: CreditCard,
    badge: "Private Data",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    content:
      "You add accounts, transactions, credit cards, statements, budgets, installment details, and any itemized receipt lines you save. This data is private to your account and used only to show you your own finances.",
  },
  {
    id: "statement-import-files",
    title: "Statement & import files",
    icon: FileSpreadsheet,
    badge: "Secure Uploads",
    badgeColor: "bg-[#85DB6C]/10 text-[#85DB6C] border-[#85DB6C]/20",
    content:
      "When you import a statement, the file is processed to extract transactions and is stored privately on our server — never in a public location. You identify your cards by name or nickname; PeraTrack does not ask for your full card number and does not need the last 4 digits. Cards added before this change may still show a saved last-4 label, but new cards do not require one.",
  },
  {
    id: "receipt-scanning-ocr",
    title: "Receipt scanning & OCR learning",
    icon: ScanLine,
    badge: "Phone-First Privacy",
    badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    content:
      "When you scan a receipt, PeraTrack reads it entirely on your phone — the photo itself is never uploaded, whether or not you opt in below, and by default nothing about a scan leaves your device. If you turn on “Help improve receipt scanning” in Settings (off by default), then after you review and save a receipt, PeraTrack may send the sanitized text and layout it detected, what it guessed versus what you corrected, and technical details such as the app, parser, and rule versions used — never the photo, and never raw image coordinates. We try to strip obvious sensitive identifiers before anything is sent, though we can’t guarantee every identifier is caught, so please review what you’re saving. This is used only to improve receipt-parsing accuracy; your own corrections always take priority on your own device. You can turn this off anytime in Settings.",
  },
  {
    id: "admin-support-access",
    title: "Admin & support access",
    icon: ShieldCheck,
    badge: "Zero Data Selling",
    badgeColor: "bg-[#03A251]/10 text-[#03A251] border-[#03A251]/20",
    content:
      "Our team can access data only when needed to operate the service, fix a bug, or respond to a support request you raise. We do not sell your financial data.",
  },
  {
    id: "advertising-future",
    title: "Advertising (future, currently disabled)",
    icon: Megaphone,
    badge: "Currently Inactive",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    content:
      "PeraTrack does not show ads today, and no advertising system is active. If we ever enable advertising in the future, we will update this policy first, and only ever behind a setting we can turn off instantly. When active, Google and the consent-management tooling required to legally serve ads (such as Google's User Messaging Platform) may process device information, cookies, advertising identifiers, and how you interact with ad placements — only in the specific places we designate for that, never on your account, transactions, statement review, receipt scanning, or other financial workflows. You will always be able to view and change your advertising consent from a privacy-choices control, and choosing not to receive personalized ads will never block or limit any part of PeraTrack's actual functionality.",
  },
  {
    id: "backups",
    title: "Backups",
    icon: HardDrive,
    badge: "Encrypted at Rest",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    content:
      "We keep encrypted-at-rest backups so your data can be restored after a failure. Backups are retained for a limited period and then rotated out.",
  },
  {
    id: "deletion-contact",
    title: "Deletion & contact",
    icon: Trash2,
    badge: "User Control",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    content:
      "You can delete your own financial data anytime from your profile (“Reset & delete my data”), or delete your entire account — login, profile, and all financial data — from Profile → “Delete my account.” Full steps, what is deleted vs. retained, and the 14-day cooling-off period are at ",
    linkText: "/account-deletion",
    linkHref: "/account-deletion",
    contentAfter: " (no sign-in required). To request a copy of your data, or if you need help with either option, email support and we’ll assist promptly.",
  },
];

export default function PrivacyContent() {
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

      {/* Main Privacy Body */}
      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section Header */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#032416] to-[#00160D] border border-[#85DB6C]/20 p-8 sm:p-12 mb-12 shadow-2xl">
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#85DB6C]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#85DB6C]/10 border border-[#85DB6C]/25 text-[#85DB6C] text-xs font-semibold tracking-wide uppercase mb-6">
                <Shield className="w-3.5 h-3.5" />
                <span>Privacy Policy & Transparency</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Privacy Policy
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                PeraTrack is in active production. This plain-language policy explains what we store and how we handle it. It is not a substitute for legal advice, and we may refine it as the product evolves.
              </p>

              {/* Security Highlights Banner */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#85DB6C]/15">
                <div className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#85DB6C] shrink-0" />
                  <span>On-Device Receipt Processing</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#85DB6C] shrink-0" />
                  <span>No Full Card Numbers Stored</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#85DB6C] shrink-0" />
                  <span>Zero Selling of Financial Data</span>
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
                        Have privacy questions or need support with your data?
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
                    PeraTrack is currently in{" "}
                    <span className="font-bold text-[#85DB6C]">active production</span>. Always verify figures against your official bank statements.
                  </p>
                </div>
              </div>
            </aside>

            {/* Right Column: Policy Content Cards */}
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
                      {sec.linkHref && (
                        <>
                          <Link
                            href={sec.linkHref}
                            className="text-[#85DB6C] font-semibold hover:underline inline-flex items-center gap-1 mx-1"
                          >
                            <span>{sec.linkText}</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                          {sec.contentAfter}
                        </>
                      )}
                    </p>
                  </section>
                );
              })}

              {/* Bottom Support & Deletion Callout */}
              <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#032416] to-[#00160D] border border-[#85DB6C]/25 text-slate-200 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#85DB6C]" />
                    <span>Questions, or want your data deleted?</span>
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">
                    Reach out to our privacy and support team directly at any time.
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
