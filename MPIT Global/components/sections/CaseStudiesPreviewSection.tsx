import React from "react";
import Link from "next/link";
import { CASE_STUDIES_DATA } from "@/lib/case-studies-data";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, TrendingUp, Layers, CheckCircle2 } from "lucide-react";

export function CaseStudiesPreviewSection() {
  const featuredCases = CASE_STUDIES_DATA.slice(0, 3);

  return (
    <section className="py-10 bg-transparent relative border-t border-slate-200/80 dark:border-white/[0.06]" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <SectionHeading
            title="Real-World Impact & Case Studies"
            highlightedWord="Case Studies"
            subtitle="Explore how MPIT Global delivers exponential performance, streamlined operational efficiency, and revenue acceleration."
            align="left"
            className="mb-0 max-w-2xl"
          />

          <Button href="/case-studies" variant="primary" size="md" showArrow>
            View All Case Studies
          </Button>
        </div>

        {/* 3 Featured Projects */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredCases.map((cs) => (
            <div
              key={cs.id}
              className="rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] hover:border-[#38A3DC] dark:hover:border-[#38A3DC]/50 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1.5"
            >
              <div className="p-7 sm:p-8">
                {/* Category & Industry */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Badge variant="gradient" size="sm">
                    {cs.category}
                  </Badge>
                  <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{cs.industry}</span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#1B365D] dark:group-hover:text-[#60BBEF] transition-colors mb-3">
                  {cs.title}
                </h3>

                {/* Client Name */}
                <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                  Client: <span className="text-slate-800 dark:text-slate-200">{cs.client}</span>
                </p>

                {/* Summary */}
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  {cs.summary}
                </p>

                {/* Key Metrics Strip */}
                <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-black/40 border border-slate-200/80 dark:border-white/[0.06] mb-6">
                  {cs.results.slice(0, 2).map((res, rIdx) => (
                    <div key={rIdx}>
                      <span className="text-lg font-black text-[#1B365D] dark:text-[#38A3DC] block">
                        {res.metric}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight block">
                        {res.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cs.technologies.slice(0, 4).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Deep Link */}
              <div className="px-7 sm:px-8 py-4 bg-slate-50 dark:bg-black/40 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                <span>View Full Case Breakdown</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 text-[#38A3DC] dark:text-[#60BBEF] transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
