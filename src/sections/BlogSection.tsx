"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ArrowRight } from "lucide-react";

const blogs = [
  {
    title: "How to Successfully Migrate Your Business to the Cloud",
    category: "Solutions",
    author: "Ellinien Loma",
    img: "/images/blog/blog-1.webp",
    excerpt: "Managed IT Services provide businesses with proactive technology support, ensuring seamless operations and enhanced infrastructure resilience.",
    featured: true,
  },
  {
    title: "Building a Stronger Workforce with IT Training",
    category: "Solutions",
    author: "Ellinien Loma",
    img: "/images/blog/blog-2.webp",
    featured: false,
  },
  {
    title: "Optimizing Your IT Budget: Tips and Strategies",
    category: "Solutions",
    author: "Ellinien Loma",
    img: "/images/blog/blog-3.webp",
    featured: false,
  },
  {
    title: "The Top 5 IT Challenges Faced by Modern Enterprises",
    category: "Solutions",
    author: "Ellinien Loma",
    img: "/images/blog/blog-4.webp",
    featured: false,
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-24 bg-[#0d1527] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-semibold mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Explore Blogs</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
              Read Latest Blog &amp; News.
            </h2>
          </div>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 font-bold px-6 py-3 rounded-full text-sm hover:brightness-110 transition-all shadow-lg shadow-cyan-500/20 shrink-0 self-start md:self-auto"
          >
            <span>Explore More</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Featured Post (Left) */}
          <div className="lg:col-span-6 bg-[#151e32] border border-white/10 rounded-3xl p-6 overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 transition-all group">
            <div>
              <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden mb-6">
                <Image
                  src={blogs[0].img}
                  alt={blogs[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                <span className="bg-cyan-500/10 text-cyan-400 px-2.5 py-1 rounded-full font-semibold border border-cyan-500/30">
                  {blogs[0].category}
                </span>
                <span>By {blogs[0].author}</span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                <Link href="#contact">{blogs[0].title}</Link>
              </h3>

              <p className="text-slate-300 text-sm leading-relaxed mb-6">
                {blogs[0].excerpt}
              </p>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 text-cyan-400 font-bold hover:text-cyan-300 text-sm group/btn"
            >
              <span>Read More</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Secondary Posts (Right Column) */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            {blogs.slice(1).map((blog, idx) => (
              <div
                key={idx}
                className="bg-[#151e32] border border-white/10 rounded-3xl p-5 flex flex-col sm:flex-row items-center gap-5 hover:border-cyan-500/40 transition-all group"
              >
                <div className="relative w-full sm:w-40 h-32 shrink-0 rounded-2xl overflow-hidden">
                  <Image
                    src={blog.img}
                    alt={blog.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <span className="bg-cyan-500/10 text-cyan-400 px-2 py-0.5 rounded-full font-semibold border border-cyan-500/30">
                      {blog.category}
                    </span>
                    <span>By {blog.author}</span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    <Link href="#contact">{blog.title}</Link>
                  </h4>

                  <Link
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    <span>Read More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
