"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import MobileMenu from "@/components/MobileMenu";
import SearchModal from "@/components/SearchModal";
import Footer from "@/components/Footer";

import HeroSection from "@/sections/HeroSection";
import OCRReceiptSection from "@/sections/OCRReceiptSection";
import FeaturesSection from "@/sections/FeaturesSection";
import ServicesSection from "@/sections/ServicesSection";
import MarqueeSection from "@/sections/MarqueeSection";
import FaqSection from "@/sections/FaqSection";
import CTASection from "@/sections/CTASection";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#00160D] text-slate-100 flex flex-col justify-between selection:bg-[#85DB6C] selection:text-[#00160D]">
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

      {/* PeraTrack Core Page Body */}
      <div className="flex-1">
        <HeroSection />
        <OCRReceiptSection />
        <FeaturesSection />
        <ServicesSection />
        <MarqueeSection />
        <FaqSection />
        <CTASection />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
