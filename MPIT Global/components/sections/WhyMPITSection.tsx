import React from "react";
import { WHY_CHOOSE_US } from "@/lib/constants";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Globe2, Zap, MessageSquare, Target, Coins } from "lucide-react";

export function WhyMPITSection() {
  const iconMap: Record<string, React.ReactNode> = {
    Globe2: <Globe2 className="w-6 h-6 text-mpit-blue dark:text-[#38A3DC]" />,
    Zap: <Zap className="w-6 h-6 text-mpit-blue dark:text-[#38A3DC]" />,
    MessageSquare: <MessageSquare className="w-6 h-6 text-mpit-blue dark:text-[#38A3DC]" />,
    Target: <Target className="w-6 h-6 text-mpit-blue dark:text-[#38A3DC]" />,
    Coins: <Coins className="w-6 h-6 text-mpit-blue dark:text-[#38A3DC]" />,
  };

  return (
    <section className="py-10 bg-transparent relative border-t border-slate-200/80 dark:border-white/[0.06]" id="why-us">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose MPIT Global?"
          highlightedWord="MPIT Global"
          subtitle="We deliver modern technology and smart marketing built for UK business expectations — professionalism, clarity, and real results."
          align="center"
        />

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className={`rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] p-8 hover:border-mpit-blue dark:hover:border-[#38A3DC]/50 hover:bg-slate-50/80 dark:hover:bg-[#102038] shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300 group hover:-translate-y-1 relative overflow-hidden flex flex-col justify-between ${
                index === 3 || index === 4 ? "lg:col-span-1" : ""
              }`}
            >
              {/* Subtle accent light */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-[radial-gradient(circle_at_top_right,rgba(0,102,255,0.15),transparent_70%)] pointer-events-none" />

              <div>
                <div className="w-12 h-12 rounded-2xl bg-mpit-blue/10 dark:bg-mpit-blue/20 border border-mpit-blue/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-mpit-blue group-hover:[&_svg]:text-white transition-all duration-300">
                  {iconMap[item.icon] || <Zap className="w-6 h-6 text-mpit-blue" />}
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-mpit-blue dark:group-hover:text-[#38A3DC] transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-white/[0.05] flex items-center justify-between text-xs font-semibold text-mpit-blue dark:text-[#38A3DC]">
                <span>Standard UK SLA</span>
                <span>0{index + 1}</span>
              </div>
            </div>
          ))}

          {/* Quick Consultation CTA Card filling the 6th slot on 3-col grid */}
          <div className="rounded-3xl bg-gradient-to-br from-mpit-blue to-[#0e1e38] p-8 text-white shadow-lg flex flex-col justify-between relative overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-200 block mb-2">
                Fast & Transparent
              </span>
              <h3 className="text-xl font-bold mb-3">
                Ready to Discuss Your Project?
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                Get a clear project estimate and honest timeline tailored to your budget with no hidden costs.
              </p>
            </div>
            <div className="pt-6">
              <a
                href="/contact"
                className="inline-flex items-center justify-center w-full px-5 py-3 rounded-full bg-white text-mpit-blue font-bold text-sm hover:bg-blue-50 transition-colors shadow-md"
              >
                Get Free Proposal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
