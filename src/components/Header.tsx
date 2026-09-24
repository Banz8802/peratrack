"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Search, ArrowRight, Menu, ChevronDown } from "lucide-react";
import PeraTrackLogo from "@/components/PeraTrackLogo";

interface HeaderProps {
  onOpenMobileMenu: () => void;
  onOpenSearch: () => void;
}

export default function Header({ onOpenMobileMenu, onOpenSearch }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#00160D]/90 backdrop-blur-md border-b border-[#85DB6C]/20 py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <PeraTrackLogo />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-sm font-semibold text-[#85DB6C] hover:text-white transition-colors">
              Home
            </Link>
            <Link href="/#features" className="text-sm font-medium text-slate-200 hover:text-[#85DB6C] transition-colors">
              Features
            </Link>
            <Link href="/#how-it-works" className="text-sm font-medium text-slate-200 hover:text-[#85DB6C] transition-colors">
              How It Works
            </Link>
            <Link href="/#faq" className="text-sm font-medium text-slate-200 hover:text-[#85DB6C] transition-colors">
              FAQ
            </Link>
            <Link href="/#contact" className="text-sm font-medium text-slate-200 hover:text-[#85DB6C] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Header Right Action */}
          <div className="flex items-center gap-4">
            <button
              onClick={onOpenSearch}
              className="p-2.5 rounded-full bg-white/5 hover:bg-white/10 text-slate-200 hover:text-[#85DB6C] transition-colors"
              aria-label="Open Search"
            >
              <Search className="w-4 h-4" />
            </button>

            <Link
              href="/#register"
              className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-[#03A251] to-[#85DB6C] text-[#00160D] font-bold px-5 py-2.5 rounded-full text-sm hover:brightness-110 transition-all shadow-lg shadow-[#03A251]/25"
            >
              <span>Request early access</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <button
              onClick={onOpenMobileMenu}
              className="lg:hidden p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 transition-colors"
              aria-label="Toggle Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
