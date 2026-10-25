import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { SERVICES_DATA, ServiceItem } from "@/lib/services-data";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { CTASection } from "@/components/sections/CTASection";
import {
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  TrendingUp,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";

interface ServicePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const service = SERVICES_DATA.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    return {
      title: "Service Not Found | MPIT Global",
    };
  }

  return {
    title: `${service.title} | MPIT Global Solutions`,
    description: service.description,
    openGraph: {
      title: `${service.title} | MPIT Global`,
      description: service.description,
    },
  };
}

export default async function DedicatedServicePage({ params }: ServicePageProps) {
  const resolvedParams = await params;
  const service = SERVICES_DATA.find((s) => s.slug === resolvedParams.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-8 sm:pt-12 bg-transparent">
      {/* Service Hero */}
      <section className="relative py-10 overflow-hidden border-b border-slate-200/80 dark:border-white/[0.08]">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] hero-glow-bg blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
              {service.title}
            </h1>

            <p className="mt-6 text-lg sm:text-xl text-[#1B365D] dark:text-[#38A3DC] font-semibold max-w-3xl mx-auto">
              {service.tagline}
            </p>

            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              {service.description}
            </p>

            {/* CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button href="/contact" variant="primary" size="lg" showArrow>
                Request a Proposal
              </Button>
              <Button href="#features" variant="outline" size="lg">
                Explore Features & Tech
              </Button>
            </div>

            {/* Metric Highlight Strip */}
            <div className="mt-12 inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] shadow-sm">
              <span className="text-2xl sm:text-3xl font-black text-[#1B365D] dark:text-[#38A3DC]">
                {service.metricsHighlight.stat}
              </span>
              <span className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 text-left">
                {service.metricsHighlight.label}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview & Key Benefits */}
      <section className="py-10 bg-slate-50/50 dark:bg-[#070B14]/60 border-b border-slate-200/80 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Overview Column */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white leading-tight">
                Architecting Measurable Competitive Advantage
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {service.longOverview}
              </p>
              <div className="p-6 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.06] space-y-3 shadow-xs">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                  Guaranteed Execution Standards
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#38A3DC] dark:text-[#60BBEF]" />
                    <span>Dedicated Senior Lead & Transparent Sprint Tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#38A3DC] dark:text-[#60BBEF]" />
                    <span>100% Intellectual Property & Source Code Transfer</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#38A3DC] dark:text-[#60BBEF]" />
                    <span>Post-Launch 24/7 SLA & Maintenance Support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 4 Key Benefits Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {service.keyBenefits.map((benefit, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] hover:border-[#38A3DC] shadow-sm hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#38A3DC]/15 dark:bg-[#38A3DC]/20 text-[#1B365D] dark:text-[#60BBEF] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#1B365D] dark:group-hover:text-[#60BBEF] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features & Deliverables Grid */}
      <section className="py-10 bg-transparent border-b border-slate-200/80 dark:border-white/[0.06]" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Core Deliverables"
            title={`What We Build in ${service.shortTitle}`}
            highlightedWord={service.shortTitle}
            subtitle="Explore the exhaustive technical capabilities and deliverables included within this service domain."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-7 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] hover:border-[#38A3DC] shadow-sm hover:shadow-lg transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-white/[0.06] text-slate-600 dark:text-slate-400">
                    {feat.tag}
                  </span>
                  <span className="font-mono text-xs text-slate-400 dark:text-white/20">0{idx + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-[#1B365D] dark:group-hover:text-[#60BBEF] transition-colors">
                  {feat.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-Specific Process Section */}
      <section className="py-10 bg-slate-50/50 dark:bg-[#070B14]/60 border-b border-slate-200/80 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Delivery Roadmap"
            title="How We Execute from Day One"
            highlightedWord="Execute"
            subtitle="A systematic, milestone-driven execution methodology ensuring transparency, predictability, and velocity."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {service.process.map((step, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] hover:border-[#38A3DC] shadow-xs transition-colors"
              >
                <span className="text-xl font-mono font-bold text-[#38A3DC] dark:text-[#60BBEF] block mb-2">
                  {step.step}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies & Tools Matrix */}
      <section className="py-10 bg-transparent border-b border-slate-200/80 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Tech Matrix"
            title="Tools & Frameworks We Leverage"
            highlightedWord="Tools & Frameworks"
            subtitle="We utilize industry-standard, battle-tested modern tools and platforms for this practice."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.technologies.map((techCat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] shadow-xs"
              >
                <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-4 pb-2 border-b border-slate-100 dark:border-white/[0.08]">
                  {techCat.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techCat.items.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-3 py-1 rounded-md bg-[#38A3DC]/15 dark:bg-[#38A3DC]/20 text-[#1B365D] dark:text-[#60BBEF] border border-[#38A3DC]/25 dark:border-[#38A3DC]/25 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why MPIT For This Service */}
      <section className="py-10 bg-slate-50/50 dark:bg-[#070B14]/60 border-b border-slate-200/80 dark:border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-8">
            Why Choose MPIT Global for {service.shortTitle}?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {service.whyChooseUs.map((point, idx) => (
              <div
                key={idx}
                className="p-5 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] flex items-start gap-3 shadow-xs"
              >
                <CheckCircle2 className="w-5 h-5 text-[#38A3DC] dark:text-[#60BBEF] shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 dark:text-slate-200 leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-10 bg-transparent border-b border-slate-200/80 dark:border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Common Inquiries"
            title="Frequently Asked Questions"
            highlightedWord="Questions"
            subtitle={`Got questions about our ${service.shortTitle} engagements? Find answers below.`}
            align="center"
          />

          <Accordion items={service.faqs} />
        </div>
      </section>

      {/* Conversion CTA */}
      <CTASection />
    </div>
  );
}
