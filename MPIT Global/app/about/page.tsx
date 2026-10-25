import React from "react";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { STATS, CORE_VALUES, GLOBAL_OFFICES } from "@/lib/constants";
import { CTASection } from "@/components/sections/CTASection";
import {
  Sparkles,
  Target,
  Compass,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Briefcase,
  Layers,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | MPIT Global - Modern Websites & Digital Solutions UK",
  description:
    "Learn about MPIT Global — a UK-focused IT, web development, and digital marketing company empowering UK businesses with modern digital solutions.",
};

export default function AboutPage() {
  const differentiators = [
    {
      title: "We don’t just build websites",
      highlight: "we build digital experiences.",
      desc: "Fast, secure, mobile-first websites designed with modern aesthetics to build credibility and convert visitors into loyal customers.",
      icon: Layers,
    },
    {
      title: "We don’t just run marketing",
      highlight: "we create strategies that convert.",
      desc: "Data-driven Google SEO, localized campaigns, and targeted ads that increase organic traffic, enquiries, and real business revenue.",
      icon: Target,
    },
    {
      title: "We don’t just support IT",
      highlight: "we ensure your business runs smoothly.",
      desc: "Proactive hosting management, email configuration, security audits, and quick troubleshooting whenever you need it.",
      icon: ShieldCheck,
    },
  ];

  return (
    <div className="pt-8 sm:pt-12 bg-transparent">
      {/* Hero Section / Who We Are */}
      <section className="relative py-10 overflow-hidden border-b border-slate-200/80 dark:border-white/[0.08]">
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.15)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Who <span className="text-mpit-blue dark:text-[#38A3DC]">We Are</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            MPIT Global is a modern IT and digital solutions company serving businesses across the UK. 
            We specialise in website development, digital marketing, branding, and technical support — 
            helping companies build a strong digital foundation and achieve measurable growth.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" showArrow>
              Get in Touch
            </Button>
            <Button href="/services" variant="outline" size="lg">
              Explore Our Services
            </Button>
          </div>

          {/* Quick Stats Grid */}
          <div className="mt-16 pt-10 border-t border-slate-200/80 dark:border-white/[0.08] grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {STATS.map((stat, idx) => (
              <div key={idx} className="p-5 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.06] shadow-xs">
                <span className="text-3xl sm:text-4xl font-extrabold text-mpit-blue dark:text-[#38A3DC] block">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 mt-1 block">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5 block">
                  {stat.sub}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-10 bg-slate-50/50 dark:bg-[#070B14]/60 border-b border-slate-200/80 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission Box */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] shadow-sm relative overflow-hidden group hover:border-mpit-blue dark:hover:border-[#38A3DC]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-mpit-blue/10 dark:bg-mpit-blue/20 flex items-center justify-center text-mpit-blue dark:text-[#38A3DC] mb-6">
                <Target className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Empowering UK Businesses with Technology
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                To empower UK businesses with modern digital solutions that are fast, reliable, and built for long-term success.
              </p>
            </div>

            {/* Vision Box */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] shadow-sm relative overflow-hidden group hover:border-mpit-blue dark:hover:border-[#38A3DC]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-mpit-blue/10 dark:bg-mpit-blue/20 flex items-center justify-center text-mpit-blue dark:text-[#38A3DC] mb-6">
                <Compass className="w-6 h-6" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Your Trusted UK Digital Growth Partner
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                To become a trusted digital partner for UK businesses by delivering exceptional quality, transparent communication, and consistent results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section */}
      <section className="py-10 bg-transparent border-b border-slate-200/80 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The MPIT Edge"
            title="What Makes Us Different"
            highlightedWord="Us Different"
            subtitle="We don't settle for average results. We combine engineering excellence, marketing psychology, and reliable IT care."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {differentiators.map((diff, idx) => {
              const Icon = diff.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] hover:border-mpit-blue dark:hover:border-[#38A3DC]/50 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-mpit-blue/10 dark:bg-mpit-blue/20 flex items-center justify-center text-mpit-blue dark:text-[#38A3DC] mb-6 group-hover:scale-110 group-hover:bg-mpit-blue group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                      {diff.title} —
                    </h3>
                    <p className="text-base sm:text-lg font-extrabold text-mpit-blue dark:text-[#38A3DC] mb-4">
                      {diff.highlight}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {diff.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-10 bg-slate-50/50 dark:bg-[#070B14]/60 border-b border-slate-200/80 dark:border-white/[0.06]" id="values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Guiding Principles"
            title="Our Values"
            highlightedWord="Values"
            subtitle="The core foundation of every client engagement and project we deliver."
            align="center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {CORE_VALUES.map((val, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] hover:border-mpit-blue shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-2xl bg-mpit-blue/10 dark:bg-mpit-blue/20 text-mpit-blue dark:text-[#38A3DC] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-mpit-blue dark:group-hover:text-[#38A3DC] transition-colors">
                    {val.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Headquarters & Presence Section */}
      <section className="py-10 bg-transparent border-b border-slate-200/80 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="UK & Global Locations"
            title="London Headquarters & Support"
            highlightedWord="Headquarters"
            subtitle="Serving businesses in London, Surrey, Crawley, Redhill, and across the United Kingdom."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {GLOBAL_OFFICES.map((office, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] hover:border-mpit-blue shadow-sm hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{office.city}</h3>
                <p className="text-xs text-mpit-blue dark:text-[#38A3DC] font-semibold mb-4">{office.region}</p>
                <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                  <p>{office.address}</p>
                  <p>{office.zip}</p>
                  <p className="pt-2 text-slate-900 dark:text-white font-semibold">{office.phone}</p>
                  <p className="text-mpit-blue dark:text-[#38A3DC]">{office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection />
    </div>
  );
}
