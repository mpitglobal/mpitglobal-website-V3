import React from "react";
import { PROCESS_STEPS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2 } from "lucide-react";

export function ProcessSection() {
  return (
    <section className="py-10 bg-slate-50/50 dark:bg-[#070B14]/70 relative border-t border-slate-200/80 dark:border-white/[0.06]" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Methodology & Execution"
          title="From Concept to Compounding Scale"
          highlightedWord="Compounding Scale"
          subtitle="Our battle-tested 5-phase delivery framework ensures predictable velocity, zero scope surprises, and measurable impact."
          align="center"
        />

        {/* Desktop & Laptop Grid (5 Columns) */}
        <div className="hidden lg:grid grid-cols-5 gap-4 relative">
          {/* Connector Line behind steps */}
          <div className="absolute top-1/4 left-8 right-8 h-0.5 bg-gradient-to-r from-[#38A3DC]/20 via-[#38A3DC] to-[#1B365D]/20 -translate-y-1/2 z-0" />

          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative z-10 flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] hover:border-[#38A3DC] dark:hover:border-[#38A3DC]/50 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300 group hover:-translate-y-2"
            >
              <div>
                {/* Step Circle */}
                <div className="w-12 h-12 rounded-full bg-slate-50 dark:bg-[#102038] border-2 border-mpit-blue dark:border-[#38A3DC] flex items-center justify-center font-mono font-bold text-slate-900 dark:text-white text-base shadow-[0_0_15px_rgba(56,163,220,0.3)] group-hover:scale-110 group-hover:bg-mpit-blue group-hover:text-white transition-all duration-300 mb-6">
                  {step.step}
                </div>

                <span className="text-[11px] font-bold text-[#1B365D] dark:text-[#38A3DC] uppercase tracking-wider block mb-1">
                  {step.tagline}
                </span>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {step.name}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables List */}
              <div className="pt-4 border-t border-slate-100 dark:border-white/[0.06] space-y-1.5">
                {step.deliverables.map((deliv, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                    <CheckCircle2 className="w-3 h-3 text-[#38A3DC] dark:text-[#60BBEF] shrink-0" />
                    <span className="truncate">{deliv}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile & Tablet Vertical Timeline */}
        <div className="lg:hidden space-y-6 relative before:absolute before:inset-0 before:left-6 before:w-0.5 before:bg-[#38A3DC]/30">
          {PROCESS_STEPS.map((step) => (
            <div
              key={step.step}
              className="relative pl-14 sm:pl-16 group"
            >
              {/* Bullet Node */}
              <div className="absolute left-3.5 -translate-x-1/2 top-4 w-6 h-6 rounded-full bg-white dark:bg-[#070E1C] border-2 border-[#38A3DC] dark:border-[#38A3DC] flex items-center justify-center font-mono text-[10px] font-bold text-slate-900 dark:text-white shadow-[0_0_10px_rgba(56,163,220,0.4)]">
                {step.step}
              </div>

              <div className="p-6 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] shadow-sm group-hover:border-[#38A3DC] transition-colors">
                <span className="text-xs font-bold text-[#1B365D] dark:text-[#38A3DC] uppercase tracking-wider block mb-1">
                  {step.tagline}
                </span>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {step.step} — {step.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {step.description}
                </p>
                <div className="pt-3 border-t border-slate-100 dark:border-white/[0.06] flex flex-wrap gap-2">
                  {step.deliverables.map((deliv, dIdx) => (
                    <span
                      key={dIdx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.05] text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-white/5"
                    >
                      {deliv}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
