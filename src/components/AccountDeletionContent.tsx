"use client";

import React, { useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import SearchModal from "@/components/SearchModal";
import Footer from "@/components/Footer";
import {
  UserX,
  Smartphone,
  Clock,
  Trash2,
  Database,
  RotateCcw,
  Mail,
  ArrowRight,
  ChevronRight,
  Sparkles,
  CheckCircle2,
  ShieldAlert,
  Shield,
  FileText,
} from "lucide-react";

const sections = [
  {
    id: "delete-in-app",
    title: "Delete your account, in the app",
    icon: Smartphone,
    badge: "In-App Self-Service",
    badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    steps: [
      "Sign in to PeraTrack.",
      "Go to Profile.",
      "Choose “Delete my account.”",
      "Enter your current password.",
      "Type your account’s email address to confirm.",
      "Confirm.",
    ],
    note: "The moment you submit the request, you’re signed out of every device and every active session is revoked immediately — this happens right away, not after any waiting period.",
  },
  {
    id: "cooling-off-period",
    title: "14-day cooling-off period — you can cancel",
    icon: Clock,
    badge: "14-Day Grace Period",
    badgeColor: "bg-[#85DB6C]/10 text-[#85DB6C] border-[#85DB6C]/20",
    content:
      "Your account is then scheduled for deletion 14 days later. Nothing is deleted immediately, and nothing is deleted early. At any point during those 14 days, you can sign back in — signing in is not blocked while a deletion is pending — and you’ll see a clear option to cancel the request. Cancelling fully restores your account with nothing lost.",
  },
  {
    id: "what-happens-after-14-days",
    title: "What happens once the 14 days pass",
    icon: Trash2,
    badge: "Permanent Deletion",
    badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    bullets: [
      {
        bold: "Your financial and user-entered data is deleted",
        text: " — every transaction, account, credit card, statement import, installment plan, credit-card-statement record, budget, bill, recurring entry, notification, and custom category you created.",
      },
      {
        bold: "Identifying account and profile fields are anonymized",
        text: " — your name, email, phone, mailing address, and avatar are cleared or replaced with a non-identifying placeholder, and your password is replaced with a random value that can never be used to sign in again. The account can no longer identify you or be signed into. We do not hard-delete the underlying account record outright — doing it this way is what lets a small number of internal, non-identifying records (below) stay consistent — but nothing that identifies you personally remains attached to it once deletion completes, and there is no way to reactivate or recover it afterward.",
      },
    ],
  },
  {
    id: "retained-data-reasons",
    title: "What may be retained, and why",
    icon: Database,
    badge: "Security & Disaster Recovery",
    badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
    paragraphs: [
      "We may retain a minimal internal record that a deletion request was made and completed (its dates, and which account) — never your financial data, and never your name, email, or other identifying profile details — where this is needed for security, abuse prevention, legal compliance, or otherwise operating the service reliably.",
      "Separately, we keep encrypted-at-rest database backups for disaster recovery. Backups are retained for a limited period — currently up to 30 days — and then automatically rotated out; we do not manually edit individual users out of existing backups, so a deletion completed shortly before a backup is taken could still be present in that specific backup until it ages out and is rotated away on its normal schedule.",
    ],
  },
  {
    id: "data-reset-option",
    title: "Prefer to keep your account and only clear your financial data?",
    icon: RotateCcw,
    badge: "Financial Data Reset",
    badgeColor: "bg-teal-500/10 text-teal-300 border-teal-500/20",
    content:
      "Go to Profile → “Reset & delete my data.” This removes your financial data (you choose which categories) but keeps your login, profile, and account itself — you are not signed out, and this does not start the 14-day account deletion process described above, which only applies to “Delete my account.”",
  },
  {
    id: "human-support-help",
    title: "Prefer help from a person?",
    icon: Mail,
    badge: "Direct Assistance",
    badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
    content:
      "Email support@peratrack.ph (subject: Delete my PeraTrack account) and we’ll help you request deletion, or answer questions about what is deleted versus retained.",
  },
];

export default function AccountDeletionContent() {
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

      {/* Main Account Deletion Body */}
      <main className="flex-1 pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Hero Section Header */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-[#032416] to-[#00160D] border border-[#85DB6C]/20 p-8 sm:p-12 mb-12 shadow-2xl">
            <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 bg-[#85DB6C]/10 rounded-full blur-3xl pointer-events-none" />
            
            <div className="relative z-10 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#85DB6C]/10 border border-[#85DB6C]/25 text-[#85DB6C] text-xs font-semibold tracking-wide uppercase mb-6">
                <UserX className="w-3.5 h-3.5" />
                <span>Self-Service & Data Control</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Account Deletion — PeraTrack
              </h1>

              <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                PeraTrack is a personal finance tracking app for the Philippines, published by the PeraTrack team. This page explains, in plain language, how to delete your PeraTrack account and data, what happens when you do, and what (if anything) is retained afterward.
              </p>

              {/* Key Highlights */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-[#85DB6C]/15">
                <div className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#85DB6C] shrink-0" />
                  <span>In-App Self-Service Deletion</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#85DB6C] shrink-0" />
                  <span>14-Day Grace & Cancellation Window</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-medium text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#85DB6C] shrink-0" />
                  <span>Full Financial Data Removal</span>
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
                            <IconComp className="w-4 h-4 text-slate-400 group-hover:text-[#85DB6C] transition-colors shrink-0" />
                            <span className="truncate">{sec.title}</span>
                          </div>
                          <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#85DB6C] group-hover:translate-x-0.5 transition-all shrink-0" />
                        </a>
                      );
                    })}
                  </nav>

                  <div className="pt-4 border-t border-[#85DB6C]/15">
                    <div className="p-4 rounded-xl bg-[#00160D]/60 border border-[#85DB6C]/10">
                      <p className="text-xs text-slate-400 leading-relaxed mb-3">
                        Need help deleting your account or clearing financial records?
                      </p>
                      <a
                        href="mailto:support@peratrack.ph?subject=Delete%20my%20PeraTrack%20account"
                        className="inline-flex items-center justify-center gap-2 w-full py-2 px-3 rounded-lg bg-[#03A251] hover:bg-[#85DB6C] text-[#00160D] font-bold text-xs transition-colors"
                      >
                        <Mail className="w-3.5 h-3.5" />
                        <span>Email Support</span>
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

            {/* Right Column: Account Deletion Content Cards */}
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
                        <div className="p-2.5 rounded-xl bg-[#85DB6C]/10 border border-[#85DB6C]/20 text-[#85DB6C] group-hover:scale-105 transition-transform shrink-0">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <h2 className="text-xl font-bold text-white group-hover:text-[#85DB6C] transition-colors">
                          {sec.title}
                        </h2>
                      </div>
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold border shrink-0 ${sec.badgeColor}`}
                      >
                        {sec.badge}
                      </span>
                    </div>

                    {/* Step-by-Step Deletion Guide */}
                    {sec.steps && (
                      <div className="space-y-4">
                        <ol className="space-y-2.5">
                          {sec.steps.map((step, idx) => (
                            <li
                              key={idx}
                              className="flex items-center gap-3 text-sm text-slate-200 bg-[#00160D]/50 border border-[#85DB6C]/10 px-4 py-2.5 rounded-xl"
                            >
                              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#85DB6C]/15 text-[#85DB6C] text-xs font-bold shrink-0">
                                {idx + 1}
                              </span>
                              <span>{step}</span>
                            </li>
                          ))}
                        </ol>
                        {sec.note && (
                          <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-xs leading-relaxed flex items-start gap-2.5">
                            <Shield className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{sec.note}</span>
                          </div>
                        )}
                      </div>
                    )}

                    {/* Plain Content Paragraph */}
                    {sec.content && (
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {sec.content}
                      </p>
                    )}

                    {/* Bullet points for Data Removal */}
                    {sec.bullets && (
                      <div className="space-y-3">
                        {sec.bullets.map((b, i) => (
                          <div
                            key={i}
                            className="p-4 rounded-xl bg-[#00160D]/40 border border-[#85DB6C]/10 text-xs text-slate-300 leading-relaxed"
                          >
                            <span className="font-bold text-white">{b.bold}</span>
                            {b.text}
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Paragraph List */}
                    {sec.paragraphs && (
                      <div className="space-y-3">
                        {sec.paragraphs.map((pText, pi) => (
                          <p key={pi} className="text-sm text-slate-300 leading-relaxed">
                            {pText}
                          </p>
                        ))}
                      </div>
                    )}
                  </section>
                );
              })}

              {/* Privacy Policy Cross-Link Box */}
              <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#032416] to-[#00160D] border border-[#85DB6C]/25 text-slate-200 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div>
                  <h3 className="text-base font-bold text-white flex items-center gap-2">
                    <FileText className="w-4 h-4 text-[#85DB6C]" />
                    <span>Looking for our Privacy Practices?</span>
                  </h3>
                  <p className="mt-1 text-xs text-slate-400">
                    This page summarizes account/data deletion specifically. For everything else we collect and how we handle it, read our Privacy Policy.
                  </p>
                </div>
                <Link
                  href="/privacy"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#03A251] to-[#85DB6C] text-[#00160D] font-bold text-xs hover:brightness-110 transition-all shadow-md shrink-0"
                >
                  <span>View Privacy Policy</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
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
