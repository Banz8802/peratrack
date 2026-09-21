"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Star, Play, ChevronLeft, ChevronRight, X } from "lucide-react";

const testimonials = [
  {
    name: "Mevon Lane",
    role: "Co. Founder, TechCorp",
    img: "/images/testimonial/h3-testimonial-1.webp",
    quote: "Nexor truly exceeded our expectations. From the initial consultation to the final implementation, their team provided excellent service and unwavering support. Their ability to integrate advanced IT solutions into our operations has streamlined our processes.",
    rating: 5,
  },
  {
    name: "Eleanor Vance",
    role: "CTO, CloudScale",
    img: "/images/testimonial/h3-testimonial-2.webp",
    quote: "Partnering with Tekmino has been an absolute game-changer for our company. Their team delivered a tailored IT solution that met our unique business needs, saving us time and significant operational budget.",
    rating: 5,
  },
  {
    name: "Marcus Aurel",
    role: "VP Operations, DataNet",
    img: "/images/testimonial/h3-testimonial-3.webp",
    quote: "When we approached Tekmino for help with our technology integration, we were looking for a partner who could deliver tangible security results. They did exactly that, migrating our cloud infrastructure seamlessly.",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const nextTestimonial = () => setCurrentIdx((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setCurrentIdx((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const activeItem = testimonials[currentIdx];

  return (
    <section id="testimonials" className="py-24 bg-[#0b1120] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold">
            <Sparkles className="w-4 h-4" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Building Success with Client Feedback.
          </h2>
        </div>

        {/* Active Testimonial Card */}
        <div className="bg-[#151e32] border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Thumbnail Image with Play Button */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden h-72 sm:h-96 group">
              <Image
                src={activeItem.img}
                alt={activeItem.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="w-16 h-16 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center shadow-lg shadow-cyan-500/50 hover:scale-110 transition-transform"
                  aria-label="Play Client Story Video"
                >
                  <Play className="w-7 h-7 fill-slate-950 ml-1" />
                </button>
              </div>
            </div>

            {/* Content Right */}
            <div className="lg:col-span-7 space-y-6 flex flex-col justify-between">
              <div>
                {/* Rating */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(activeItem.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg sm:text-xl text-slate-200 italic leading-relaxed mb-6">
                  &ldquo;{activeItem.quote}&rdquo;
                </p>

                {/* Author Info */}
                <div>
                  <h4 className="text-xl font-bold text-white">{activeItem.name}</h4>
                  <span className="text-sm font-medium text-cyan-400">{activeItem.role}</span>
                </div>
              </div>

              {/* Slider Arrows */}
              <div className="flex items-center justify-end gap-3 pt-6 border-t border-white/10">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-full bg-white/5 hover:bg-cyan-500 text-white hover:text-slate-950 border border-white/10 transition-all"
                  aria-label="Previous Testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-full bg-white/5 hover:bg-cyan-500 text-white hover:text-slate-950 border border-white/10 transition-all"
                  aria-label="Next Testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal Placeholder */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden aspect-video">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/20 hover:bg-white text-white hover:text-black transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <iframe
              src="https://www.youtube.com/embed/MLpWrANjFbI?autoplay=1"
              title="Client Success Story"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}
    </section>
  );
}
