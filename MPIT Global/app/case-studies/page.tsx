"use client";

import React, { useState } from "react";
import { CASE_STUDIES_DATA, CASE_STUDY_CATEGORIES, CaseStudyItem } from "@/lib/case-studies-data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, Layers, TrendingUp, CheckCircle2, Sparkles, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

export default function CaseStudiesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredStudies =
    selectedCategory === "All"
      ? CASE_STUDIES_DATA
      : CASE_STUDIES_DATA.filter((item) => item.category === selectedCategory);

  return (
    <div className="pt-8 sm:pt-12 bg-transparent">
      {/* Hero Section */}
      <section className="relative py-10 overflow-hidden border-b border-slate-200/80 dark:border-white/[0.08]">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] hero-glow-bg blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Engineering Measurable{" "}
            <span className="text-gradient-mpit">Client Success.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Explore how MPIT Global helps startups, mid-market innovators, and global enterprises modernize 
            their architectures, scale customer acquisition, and achieve tangible ROI.
          </p>
        </div>
      </section>

      {/* Filterable Portfolio Gallery */}
      <section className="py-10 bg-transparent border-b border-slate-200/80 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Tabs */}
          <div className="flex items-center justify-center flex-wrap gap-2 mb-14">
            {CASE_STUDY_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={cn(
                    "px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer",
                    isActive
                      ? "bg-mpit-blue text-white shadow-md shadow-mpit-blue/25 border border-transparent"
                      : "bg-white dark:bg-[#0c1626] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-mpit-blue hover:text-mpit-blue"
                  )}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((cs) => (
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
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{cs.industry} • {cs.year}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-[#1B365D] dark:group-hover:text-[#60BBEF] transition-colors mb-2">
                    {cs.title}
                  </h3>

                  {/* Client */}
                  <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                    Client: <span className="text-slate-900 dark:text-white">{cs.client}</span>
                  </p>

                  {/* Summary */}
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {cs.summary}
                  </p>

                  {/* Challenge & Solution Blocks */}
                  <div className="space-y-3 mb-6">
                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05]">
                      <span className="text-[11px] font-bold text-slate-700 dark:text-white/80 block uppercase tracking-wider mb-1">
                        Challenge:
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                        {cs.challenge}
                      </p>
                    </div>

                    <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200/60 dark:border-white/[0.05]">
                      <span className="text-[11px] font-bold text-[#1B365D] dark:text-[#38A3DC] block uppercase tracking-wider mb-1">
                        Solution:
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                        {cs.solution}
                      </p>
                    </div>
                  </div>

                  {/* Quantitative Results Metrics */}
                  <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-slate-50 dark:bg-black/60 border border-slate-200/80 dark:border-white/[0.08] mb-6">
                    {cs.results.slice(0, 2).map((res, rIdx) => (
                      <div key={rIdx}>
                        <span className="text-xl font-black text-[#1B365D] dark:text-[#38A3DC] block">
                          {res.metric}
                        </span>
                        <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight block">
                          {res.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {cs.technologies.map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] px-2 py-0.5 rounded-md bg-slate-100 dark:bg-white/[0.04] text-slate-600 dark:text-slate-400 border border-slate-200/60 dark:border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA Action */}
                <div className="px-7 sm:px-8 py-4 bg-slate-50 dark:bg-black/40 border-t border-slate-100 dark:border-white/[0.06] flex items-center justify-between text-xs font-semibold text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                  <span>Schedule Similar Architecture</span>
                  <div className="w-6 h-6 rounded-full bg-slate-200/80 dark:bg-white/[0.05] flex items-center justify-center group-hover:bg-[#38A3DC] group-hover:text-white transition-colors">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </div>
  );
}
