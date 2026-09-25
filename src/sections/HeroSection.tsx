"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Sparkles, CreditCard, Lock, ScanLine } from "lucide-react";
import { FacebookIcon, InstagramIcon, LinkedinIcon, XIcon } from "@/components/SocialIcons";

const slides = [
  {
    bg: "/images/slider/slider-img-1.webp",
    badgeIcon: ShieldCheck,
    subtitle: "Smart Personal Finance · Philippines",
    title: "Take control of your money, cards, and installments.",
    desc: "PeraTrack helps Filipinos track accounts, credit cards, statement due dates, installment purchases, refunds, fees, and payments in one clear dashboard.",
    btnText: "Start tracking free",
    btnLink: "#register",
    secondaryBtnText: "Try Receipt Scanner",
    secondaryBtnLink: "#receipt-scanner",
  },
  {
    bg: "/images/slider/slider-img-3.webp",
    badgeIcon: ScanLine,
    subtitle: "OCR Receipt Scanner",
    title: "Scan Receipts. Track Expenses Faster.",
    desc: "Use PeraTrack's OCR Receipt Reader to scan receipts with your phone camera and automatically extract expense details in seconds.",
    btnText: "Try Receipt Scanner",
    btnLink: "#receipt-scanner",
    secondaryBtnText: "Create Account",
    secondaryBtnLink: "#register",
  },
  {
    bg: "/images/slider/slider-img-2.webp",
    badgeIcon: CreditCard,
    subtitle: "Built for PH Credit Cards",
    title: "Track statement dates, due dates & installments without guesswork.",
    desc: "Monitor Month 1 and mid-stream installments, minimum payments due, statement cut-offs, and cashback refunds across UnionBank, Security Bank, BPI, and RCBC.",
    btnText: "Explore features",
    btnLink: "#features",
    secondaryBtnText: "Statement imports",
    secondaryBtnLink: "#how-it-works",
  },
  {
    bg: "/images/slider/slider-img-3.webp",
    badgeIcon: Sparkles,
    subtitle: "Privacy-First Architecture",
    title: "Zero card numbers stored or requested ever.",
    desc: "Never enter your 16-digit card number or CVV. Stage PDF e-statements and receipts for local review first, keeping you in complete control before updating balances.",
    btnText: "Create Free Account",
    btnLink: "#register",
    secondaryBtnText: "Read FAQ",
    secondaryBtnLink: "#faq",
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  const BadgeIconComponent = slides[currentSlide]?.badgeIcon || Sparkles;


  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 pb-16 bg-[#00160D]">
      {/* Background Image Slider Carousel */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentSlide ? "opacity-100 scale-105" : "opacity-0 scale-100 pointer-events-none"
            }`}
          style={{ transitionProperty: "opacity, transform", transitionDuration: "1000ms" }}
        >
          <Image
            src={slide.bg}
            alt={slide.title}
            fill
            className="object-cover object-center filter contrast-110"
            priority={idx === 0}
          />
          {/* Green Dark Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#00160D] via-[#00160D]/90 to-[#00160D]/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00160D] via-transparent to-[#00160D]/60" />
        </div>
      ))}

      {/* Social Sidebar (Desktop Left) */}
      <div className="hidden xl:flex fixed left-8 top-1/2 -translate-y-1/2 z-20 flex-col items-center gap-6">
        <span className="text-xs uppercase tracking-widest text-[#85DB6C] [writing-mode:vertical-lr] whitespace-nowrap font-semibold">
          Follow us:
        </span>
        <div className="w-px h-12 bg-[#85DB6C]/20" />
        <div className="flex flex-col items-center gap-4 text-slate-300">
          <a href="#" className="hover:text-[#85DB6C] transition-colors" aria-label="Facebook"><FacebookIcon className="w-4 h-4" /></a>
          <a href="#" className="hover:text-[#85DB6C] transition-colors" aria-label="Instagram"><InstagramIcon className="w-4 h-4" /></a>
          <a href="#" className="hover:text-[#85DB6C] transition-colors" aria-label="LinkedIn"><LinkedinIcon className="w-4 h-4" /></a>
          <a href="#" className="hover:text-[#85DB6C] transition-colors" aria-label="X Twitter"><XIcon className="w-4 h-4" /></a>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Subtitle Badge */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#032416] border border-[#85DB6C]/30 text-[#85DB6C] text-xs sm:text-sm font-semibold mb-6 shadow-lg shadow-[#03A251]/10 animate-pulse">
            <BadgeIconComponent className="w-4 h-4 text-[#85DB6C]" />
            <span>{slides[currentSlide].subtitle}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
            {slides[currentSlide].title.split(" ").map((word, i) =>
              word.toLowerCase().includes("money") ||
                word.toLowerCase().includes("cards") ||
                word.toLowerCase().includes("installments") ||
                word.toLowerCase().includes("zero") ||
                word.toLowerCase().includes("receipts") ||
                word.toLowerCase().includes("faster") ||
                word.toLowerCase().includes("guesswork") ? (
                <span key={i} className="text-transparent bg-clip-text bg-gradient-to-r from-[#85DB6C] to-[#03A251]">
                  {word}{" "}
                </span>
              ) : (
                word + " "
              )
            )}
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mb-10 leading-relaxed">
            {slides[currentSlide].desc}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Link
              href={slides[currentSlide].btnLink}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#03A251] to-[#85DB6C] text-[#00160D] font-extrabold px-8 py-4 rounded-full text-base hover:shadow-xl hover:shadow-[#03A251]/30 hover:scale-105 transition-all"
            >
              <span>{slides[currentSlide].btnText}</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={slides[currentSlide].secondaryBtnLink}
              className="inline-flex items-center gap-2 bg-[#032416]/80 hover:bg-[#063421] text-slate-200 border border-[#85DB6C]/30 px-8 py-4 rounded-full text-base font-semibold transition-all hover:border-[#85DB6C] hover:text-[#85DB6C]"
            >
              {slides[currentSlide].secondaryBtnText}
            </Link>
          </div>
        </div>
      </div>

      {/* Navigation Controls (Bottom Right) */}
      <div className="absolute right-8 bottom-12 z-20 flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="p-3.5 rounded-full bg-[#032416] hover:bg-[#03A251] text-white hover:text-[#00160D] border border-[#85DB6C]/30 transition-all shadow-lg"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Dots */}
        <div className="flex items-center gap-2 px-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all ${i === currentSlide ? "w-8 bg-[#85DB6C]" : "w-2.5 bg-white/30"
                }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          className="p-3.5 rounded-full bg-[#032416] hover:bg-[#03A251] text-white hover:text-[#00160D] border border-[#85DB6C]/30 transition-all shadow-lg"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
