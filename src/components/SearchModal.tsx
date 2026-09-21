"use client";

import React from "react";
import { X, Search } from "lucide-react";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchModal({ isOpen, onClose }: SearchModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#151e32] border border-white/10 rounded-2xl p-6 shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <h3 className="text-lg font-medium text-slate-100">Search Projects, Services or Blog</h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={(e) => { e.preventDefault(); onClose(); }} className="mt-6">
          <div className="relative">
            <input
              type="search"
              placeholder="Search here..."
              autoFocus
              className="w-full bg-[#0b1120] border border-cyan-500/30 rounded-xl px-5 py-3.5 pl-12 text-slate-100 placeholder-slate-400 text-base focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
            />
            <Search className="w-5 h-5 text-cyan-400 absolute left-4 top-4" />
            <button
              type="submit"
              className="absolute right-3 top-2.5 bg-gradient-to-r from-sky-500 to-cyan-400 text-slate-950 font-semibold px-4 py-1.5 rounded-lg text-sm hover:brightness-110"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
