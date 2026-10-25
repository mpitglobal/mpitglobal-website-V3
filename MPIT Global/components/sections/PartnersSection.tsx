import React from "react";
import { CLIENT_LOGOS } from "@/lib/constants";

export function PartnersSection() {
  return (
    <section className="py-10 bg-slate-50/70 dark:bg-[#070B14]/70 border-y border-slate-200/80 dark:border-white/[0.06] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mb-8">
          Trusted by Innovative Leaders Across Global Sectors
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CLIENT_LOGOS.map((client, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.06] flex flex-col items-center justify-center text-center hover:border-[#38A3DC] dark:hover:border-[#38A3DC]/40 shadow-xs hover:shadow-md transition-all duration-300 group"
            >
              <span className="font-mono text-base font-extrabold text-slate-800 dark:text-white/80 group-hover:text-[#1B365D] dark:group-hover:text-[#60BBEF] transition-colors tracking-widest">
                {client.symbol}
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 group-hover:text-[#38A3DC] dark:group-hover:text-[#60BBEF] transition-colors truncate w-full">
                {client.industry}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
