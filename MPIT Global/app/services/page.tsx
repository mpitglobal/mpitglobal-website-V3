import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES_DATA } from "@/lib/services-data";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { CTASection } from "@/components/sections/CTASection";
import { ArrowRight, CheckCircle2, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Services | MPIT Global - Modern Websites & Digital Solutions UK",
  description:
    "Explore MPIT Global's core services: Website Design & Development, Digital Marketing & SEO, Branding & Creative, and IT Support & Technical Services for UK businesses.",
};

const ENGAGEMENT_MODELS = [
  {
    title: "Dedicated Project Delivery",
    tagline: "Fixed Scope, Honest Timeline & Transparent Quote",
    desc: "Ideal for new business websites, e-commerce stores, brand identity redesigns, or digital marketing launch campaigns with strictly defined milestones.",
    benefits: ["Guaranteed launch dates", "No hidden costs or scope creep", "Dedicated UK Project Lead"],
  },
  {
    title: "Monthly Care & Growth Plans",
    tagline: "Continuous Maintenance & SEO Scaling",
    desc: "Long-term partnership encompassing ongoing website maintenance, security monitoring, regular updates, local SEO acceleration, and technical helpdesk.",
    benefits: ["Monthly performance reviews", "Proactive 24/7 security monitoring", "Dedicated ongoing technical support"],
  },
  {
    title: "Custom Digital Solutions",
    tagline: "Tailored to Your Exact Business Goals",
    desc: "Custom booking platforms, API integrations, e-commerce systems, and full-funnel marketing campaigns engineered for high conversions.",
    benefits: ["Custom architecture", "Flexible scaling", "Complete commercial IP ownership"],
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-8 sm:pt-12 bg-transparent">
      {/* Hero Section */}
      <section className="relative py-10 overflow-hidden border-b border-slate-200/80 dark:border-white/[0.08]">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.15)_0%,transparent_70%)] blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Modern Websites. <span className="text-mpit-blue dark:text-[#38A3DC]">Real Results.</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We deliver clean, modern websites, data-driven digital marketing, memorable brand identities, and reliable IT support engineered to help UK businesses grow with confidence.
          </p>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-10 bg-transparent border-b border-slate-200/80 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {SERVICES_DATA.map((service, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={service.id}
                  id={service.slug}
                  className="rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] p-8 sm:p-12 hover:border-[#38A3DC] dark:hover:border-[#38A3DC]/50 shadow-sm hover:shadow-xl dark:shadow-none transition-all duration-300 relative overflow-hidden"
                >
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${isEven ? "lg:flex-row-reverse" : ""}`}>
                    {/* Main Description (7 Cols) */}
                    <div className="lg:col-span-7 space-y-5">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-xs font-bold text-[#1B365D] dark:text-[#38A3DC] bg-[#38A3DC]/15 px-3 py-1 rounded-full border border-[#38A3DC]/30">
                          {service.number} // {service.heroBadge}
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                        {service.title}
                      </h2>

                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                        {service.longOverview}
                      </p>

                      {/* 4 Key Benefits Bullets */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                        {service.keyBenefits.map((kb, kIdx) => (
                          <div key={kIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-400">
                            <CheckCircle2 className="w-4 h-4 text-[#38A3DC] dark:text-[#60BBEF] shrink-0 mt-0.5" />
                            <div>
                              <strong className="text-slate-900 dark:text-white block font-semibold">{kb.title}</strong>
                              <span>{kb.description}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="pt-4 flex flex-wrap items-center gap-4">
                        <Button
                          href={`/services/${service.slug}`}
                          variant="primary"
                          size="md"
                          showArrow
                        >
                          Explore {service.shortTitle} Dedicated Page
                        </Button>
                        <Button href="/contact" variant="outline" size="md">
                          Request Proposal
                        </Button>
                      </div>
                    </div>

                    {/* Features & Technologies Box (5 Cols) */}
                    <div className="lg:col-span-5 rounded-3xl bg-slate-50 dark:bg-black/40 border border-slate-200/80 dark:border-white/[0.08] p-6 sm:p-8 space-y-6">
                      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/[0.08]">
                        <span className="text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider">
                          Key Deliverables
                        </span>
                        <Badge variant="gradient" size="sm">
                          {service.metricsHighlight.stat}
                        </Badge>
                      </div>

                      <div className="space-y-3">
                        {service.features.slice(0, 4).map((feat, fIdx) => (
                          <div key={fIdx} className="p-3.5 rounded-2xl bg-white dark:bg-white/[0.03] border border-slate-200/60 dark:border-white/[0.05] shadow-2xs">
                            <span className="text-xs font-bold text-slate-900 dark:text-white block">
                              {feat.name}
                            </span>
                            <span className="text-[11px] text-slate-500 dark:text-slate-400 block mt-0.5">
                              {feat.description}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Tech stack badges */}
                      <div className="pt-2">
                        <span className="text-[11px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider block mb-2">
                          Core Technologies
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {service.technologies[0]?.items.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[10px] px-2.5 py-1 rounded-md bg-[#38A3DC]/15 dark:bg-[#38A3DC]/20 text-[#1B365D] dark:text-[#60BBEF] font-medium border border-[#38A3DC]/25 dark:border-[#38A3DC]/25"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section className="py-10 bg-slate-50/50 dark:bg-[#070B14]/60 border-b border-slate-200/80 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Flexible Partnership"
            title="How We Collaborate & Deliver"
            highlightedWord="Collaborate & Deliver"
            subtitle="Transparent, adaptable engagement models designed to fit your internal engineering roadmap and executive timeline."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ENGAGEMENT_MODELS.map((model, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] hover:border-[#38A3DC] shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <span className="text-xs font-mono font-bold text-[#1B365D] dark:text-[#38A3DC] uppercase tracking-wider block mb-2">
                    Model 0{idx + 1}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{model.title}</h3>
                  <p className="text-xs font-bold text-[#38A3DC] dark:text-[#60BBEF] mb-4">{model.tagline}</p>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {model.desc}
                  </p>
                </div>

                <div className="pt-6 border-t border-slate-100 dark:border-white/[0.06] space-y-2">
                  {model.benefits.map((b, bIdx) => (
                    <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#38A3DC] dark:text-[#60BBEF] shrink-0" />
                      <span>{b}</span>
                    </div>
                  ))}
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
