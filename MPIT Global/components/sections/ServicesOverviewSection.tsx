"use client";

import React from "react";
import Link from "next/link";
import { Globe, TrendingUp, Palette, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardItem {
  id: string;
  number: string;
  slug: string;
  title: string;
  tagline: string;
  features: string[];
  outcome: string;
  icon: React.ReactNode;
}

const CORE_SERVICES: ServiceCardItem[] = [
  {
    id: "website-design-development",
    number: "01",
    slug: "web-development",
    title: "Website Design & Development",
    tagline: "Fast, secure, mobile-friendly websites",
    features: [
      "Custom WordPress, Shopify, and PHP development",
      "Business websites, e-commerce stores, booking systems",
      "SEO-ready structure for higher Google visibility",
    ],
    outcome: "A clean, modern website that makes your business look professional and converts visitors into customers.",
    icon: <Globe className="w-6 h-6 text-mpit-blue dark:text-[#38A3DC]" />,
  },
  {
    id: "digital-marketing-seo",
    number: "02",
    slug: "digital-marketing",
    title: "Digital Marketing & SEO",
    tagline: "Google ranking improvement & targeted customer acquisition",
    features: [
      "Google ranking improvement & Local SEO for UK businesses",
      "Social media management & content creation",
      "Paid ads (Google Ads, Meta Ads) & brand strategy",
    ],
    outcome: "More traffic, more enquiries, more sales.",
    icon: <TrendingUp className="w-6 h-6 text-mpit-blue dark:text-[#38A3DC]" />,
  },
  {
    id: "branding-creative",
    number: "03",
    slug: "design",
    title: "Branding & Creative",
    tagline: "Strong, memorable identity that stands out",
    features: [
      "Logo design & brand style guidelines",
      "Brand identity (colors, fonts, style)",
      "Business cards, brochures, marketing materials",
    ],
    outcome: "A strong, memorable brand that stands out in the UK market.",
    icon: <Palette className="w-6 h-6 text-mpit-blue dark:text-[#38A3DC]" />,
  },
  {
    id: "it-technical-support",
    number: "04",
    slug: "consulting",
    title: "IT & Technical Support",
    tagline: "Hosting setup, maintenance & troubleshooting",
    features: [
      "Hosting setup & management",
      "Email configuration & domain security",
      "Website maintenance, security monitoring & technical troubleshooting",
    ],
    outcome: "Smooth operations with reliable support whenever you need it.",
    icon: <ShieldCheck className="w-6 h-6 text-mpit-blue dark:text-[#38A3DC]" />,
  },
];

export function ServicesOverviewSection() {
  return (
    <section className="py-10 bg-slate-50/50 dark:bg-transparent relative border-t border-slate-200/80 dark:border-white/[0.06]" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0e1e38] dark:text-white tracking-tight">
            Our Core Services
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From modern website engineering and local UK SEO to complete branding and reliable IT support — we deliver everything your business needs to succeed.
          </p>
        </div>

        {/* 4 Cards Grid (2x2 on desktop, 1 on mobile) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CORE_SERVICES.map((service) => (
            <div
              key={service.id}
              className="group rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] p-7 sm:p-9 shadow-sm hover:shadow-xl dark:shadow-none hover:border-mpit-blue dark:hover:border-[#38A3DC]/50 transition-all duration-300 flex flex-col justify-between relative hover:-translate-y-1"
            >
              <div>
                {/* Card Top Row: Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-mpit-blue/10 dark:bg-mpit-blue/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-mpit-blue [&_svg]:group-hover:text-white transition-all duration-300">
                    {service.icon}
                  </div>
                  <span className="text-2xl sm:text-3xl font-black text-slate-200 dark:text-white/10 group-hover:text-mpit-blue/30 dark:group-hover:text-[#38A3DC]/30 transition-colors font-mono">
                    {service.number}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-mpit-blue dark:group-hover:text-[#38A3DC] transition-colors mb-2">
                  {service.title}
                </h3>

                {/* Service Tagline */}
                <p className="text-xs sm:text-sm font-medium text-mpit-blue dark:text-[#38A3DC] mb-5">
                  {service.tagline}
                </p>

                {/* Feature Bullet Points */}
                <ul className="space-y-2.5 mb-6">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-mpit-blue dark:text-[#38A3DC] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Outcome Highlight Box & Link */}
              <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                <div className="p-3.5 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900/40">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-mpit-blue dark:text-[#38A3DC] block mb-0.5">
                    Outcome
                  </span>
                  <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                    {service.outcome}
                  </p>
                </div>

                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-mpit-blue dark:text-[#38A3DC] hover:text-mpit-blue-hover dark:hover:text-white transition-colors group/link pt-1"
                >
                  <span>Explore Service Details</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
