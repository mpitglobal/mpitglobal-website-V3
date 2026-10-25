import React from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Quote } from "lucide-react";

export function TestimonialsSection() {
  return (
    <section className="py-10 bg-transparent relative border-t border-slate-200/80 dark:border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What UK Business Owners Say"
          highlightedWord="UK Business Owners"
          subtitle="Real feedback from growing companies who trust MPIT Global for websites, marketing, and IT solutions."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] hover:border-mpit-blue dark:hover:border-[#38A3DC]/50 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative"
            >
              <div>
                {/* Top Metric Badge */}
                <div className="mb-6 flex items-center justify-between">
                  <Badge variant="gradient" size="sm">
                    {t.metric}
                  </Badge>
                  <Quote className="w-6 h-6 text-slate-300 dark:text-white/20 group-hover:text-mpit-blue dark:group-hover:text-[#38A3DC] transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-base sm:text-lg text-slate-800 dark:text-slate-100 leading-relaxed italic mb-8 font-medium">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-6 border-t border-slate-100 dark:border-white/[0.06] flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-mpit-blue/10 dark:bg-mpit-blue/25 border border-mpit-blue/30 flex items-center justify-center font-bold text-xs text-mpit-blue dark:text-[#38A3DC]">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-mpit-blue dark:group-hover:text-[#38A3DC] transition-colors">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
