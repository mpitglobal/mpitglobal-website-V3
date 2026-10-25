import React from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Sparkles, Briefcase, MessageSquare, Zap, Target, CheckCircle2 } from "lucide-react";

export function CompanyIntroSection() {
  const approaches = [
    {
      icon: Briefcase,
      title: "Professional Work",
      desc: "Clean code, modern UI/UX design, and industry-standard best practices tailored for the UK market.",
    },
    {
      icon: MessageSquare,
      title: "Clear Communication",
      desc: "No jargon, no hidden fees. Honest timelines, weekly transparent updates, and direct access.",
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      desc: "Rapid turnaround without compromising quality, ensuring fast time-to-market for your business.",
    },
    {
      icon: Target,
      title: "Real Results",
      desc: "Websites and marketing strategies designed to increase Google rankings, inbound leads, and real sales.",
    },
  ];

  return (
    <section className="py-10 bg-slate-50/50 dark:bg-[#070B14]/70 relative border-t border-slate-200/80 dark:border-white/[0.06]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.18]">
              Helping UK Businesses Grow with{" "}
              <span className="text-mpit-blue dark:text-[#38A3DC]">Technology That Works</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              MPIT Global is a UK-focused IT, web development, and digital marketing company committed to helping businesses grow with technology that works.
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
              We combine modern design, high-performance development, and data-driven marketing to create digital experiences that attract customers, build trust, and drive revenue.
            </p>

            {/* Approach Banner */}
            <div className="p-4 rounded-2xl bg-white dark:bg-[#0c1626] border border-blue-100 dark:border-white/10 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-mpit-blue dark:text-[#38A3DC] block mb-1.5">
                Our Approach is Simple
              </span>
              <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white">
                Professional work &bull; Clear communication &bull; Fast delivery &bull; Real results.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/about" variant="primary" size="md" showArrow>
                Learn More About Us
              </Button>
              <Button href="/contact" variant="outline" size="md">
                Get a Free Consultation
              </Button>
            </div>
          </div>

          {/* Right Column: 4 Approach Cards (6 Cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {approaches.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] hover:border-mpit-blue dark:hover:border-[#38A3DC]/50 shadow-sm hover:shadow-md transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-mpit-blue/10 dark:bg-mpit-blue/20 flex items-center justify-center text-mpit-blue dark:text-[#38A3DC] mb-3.5 group-hover:scale-110 group-hover:bg-mpit-blue group-hover:text-white transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5 group-hover:text-mpit-blue dark:group-hover:text-[#38A3DC] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
