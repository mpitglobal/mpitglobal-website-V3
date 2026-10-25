import React from "react";
import { INDUSTRIES_SERVED } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  ShoppingBag,
  Utensils,
  Wrench,
  Building2,
  Activity,
  Briefcase,
  Rocket,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export function IndustriesSection() {
  const iconMap: Record<string, React.ReactNode> = {
    ShoppingBag: <ShoppingBag className="w-5 h-5 text-mpit-blue dark:text-[#38A3DC]" />,
    Utensils: <Utensils className="w-5 h-5 text-mpit-blue dark:text-[#38A3DC]" />,
    Wrench: <Wrench className="w-5 h-5 text-mpit-blue dark:text-[#38A3DC]" />,
    Building2: <Building2 className="w-5 h-5 text-mpit-blue dark:text-[#38A3DC]" />,
    Activity: <Activity className="w-5 h-5 text-mpit-blue dark:text-[#38A3DC]" />,
    Briefcase: <Briefcase className="w-5 h-5 text-mpit-blue dark:text-[#38A3DC]" />,
    Rocket: <Rocket className="w-5 h-5 text-mpit-blue dark:text-[#38A3DC]" />,
  };

  return (
    <section className="py-10 bg-slate-50/60 dark:bg-[#070B14]/70 relative border-t border-slate-200/80 dark:border-white/[0.06]" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Industries We Serve"
          highlightedWord="Industries We Serve"
          subtitle="Tailored digital strategies and software engineered specifically for key UK business sectors."
          align="center"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
          {INDUSTRIES_SERVED.map((ind, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] hover:border-mpit-blue dark:hover:border-[#38A3DC]/50 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-mpit-blue/10 dark:bg-mpit-blue/20 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-mpit-blue group-hover:[&_svg]:text-white transition-all">
                  {iconMap[ind.icon] || <Briefcase className="w-5 h-5 text-mpit-blue" />}
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-mpit-blue dark:group-hover:text-[#38A3DC] transition-colors mb-2">
                  {ind.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {ind.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 dark:border-white/[0.06]">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-mpit-blue dark:text-[#38A3DC] group-hover:underline"
                >
                  <span>Request Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}

          {/* Quick Consultation Industry Box */}
          <div className="p-6 rounded-2xl bg-linear-to-br from-mpit-blue/10 via-mpit-blue/5 to-transparent dark:from-[#38A3DC]/15 dark:via-[#38A3DC]/5 dark:to-transparent border border-mpit-blue/30 dark:border-[#38A3DC]/30 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-mpit-blue dark:text-[#38A3DC] block mb-2">
                Your Sector
              </span>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Don&apos;t See Your Industry?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                We design custom web, marketing, and IT architectures tailored to any niche or business model.
              </p>
            </div>
            <div className="pt-4 mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 rounded-xl bg-mpit-blue text-white font-bold text-xs hover:bg-mpit-blue-hover transition-colors shadow-xs"
              >
                Talk to a Specialist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
