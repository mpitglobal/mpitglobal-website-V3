"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Code2, Smartphone, Cloud, LineChart, Palette, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const TECH_CATEGORIES = [
  {
    id: "web",
    name: "Web & Full-Stack",
    icon: Code2,
    description: "Next-generation reactive architectures with server-side rendering, edge routing, and bulletproof type safety.",
    items: [
      { name: "Next.js (App Router)", level: "Production Standard", desc: "SSR, SSG, Server Actions & Edge Middleware" },
      { name: "React & TypeScript", level: "Enterprise", desc: "Strict type safety, zero-runtime bugs, high maintainability" },
      { name: "Tailwind CSS", level: "Design Tokens", desc: "Custom token systems, responsive fluidity, zero runtime CSS" },
      { name: "Node.js & NestJS", level: "High-Throughput", desc: "Microservices, GraphQL & RESTful high-concurrency APIs" },
      { name: "PostgreSQL & Redis", level: "Data Architecture", desc: "ACID compliance, sub-millisecond in-memory caching" },
      { name: "Supabase & Prisma", level: "ORM & Auth", desc: "Realtime subscriptions, RBAC policies & schema migrations" },
    ],
  },
  {
    id: "mobile",
    name: "Mobile & Apps",
    icon: Smartphone,
    description: "Fluid 60fps mobile experiences for iOS & Android with offline-first synchronization.",
    items: [
      { name: "React Native", level: "Cross-Platform", desc: "Native bridge performance with single codebase efficiency" },
      { name: "Flutter & Dart", level: "High Performance", desc: "Custom canvas rendering engine for complex animations" },
      { name: "Swift & SwiftUI", level: "iOS Native", desc: "Apple HealthKit, CoreML, widgets & biometric security" },
      { name: "Kotlin & Jetpack", level: "Android Native", desc: "Material 3 design, background sync workers & Play Services" },
      { name: "WatermelonDB", level: "Offline Sync", desc: "SQLite reactive local database for instant offline access" },
      { name: "OneSignal & FCM", level: "Push Notifications", desc: "Segmented rich push notifications & telemetry triggers" },
    ],
  },
  {
    id: "cloud",
    name: "Cloud & DevOps",
    icon: Cloud,
    description: "Automated, auto-scaling, zero-downtime infrastructure with continuous observability.",
    items: [
      { name: "Amazon Web Services", level: "Primary Cloud", desc: "EKS, Lambda, S3, RDS, CloudFront & Route 53" },
      { name: "Terraform & IaC", level: "Infrastructure as Code", desc: "Version-controlled, reproducible cloud provisioning" },
      { name: "Docker & Kubernetes", level: "Orchestration", desc: "Containerized deployments with automated self-healing" },
      { name: "Vercel & Cloudflare", level: "Edge Network", desc: "Global CDN, edge computing & sub-50ms latency" },
      { name: "GitHub Actions & CI/CD", level: "Automation", desc: "Automated testing, linting, and staged deployments" },
      { name: "Datadog & Sentry", level: "Observability", desc: "24/7 real-time error tracking and APM telemetry" },
    ],
  },
  {
    id: "growth",
    name: "Growth & SEO",
    icon: LineChart,
    description: "Data-driven performance marketing platforms, tracking infrastructure, and organic dominance suites.",
    items: [
      { name: "Google Analytics 4 & GTM", level: "Analytics", desc: "Server-side tagging & custom conversion funnel tracking" },
      { name: "Google Ads & Meta Ads", level: "Paid Acquisition", desc: "Algorithmic bidding, programmatic retargeting & ABM" },
      { name: "Ahrefs & Semrush", level: "SEO Intelligence", desc: "Topical gap analysis, backlink monitoring & SERP tracking" },
      { name: "HubSpot & Klaviyo", level: "CRM & Automation", desc: "Lead scoring, lifecycle nurture email flows & CRM sync" },
      { name: "Hotjar & Optimizely", level: "CRO & Heatmaps", desc: "Behavioral telemetry, user session recordings & A/B testing" },
      { name: "Schema & JSON-LD", level: "Structured Data", desc: "Search Engine entity graph enrichment & rich snippets" },
    ],
  },
  {
    id: "design",
    name: "UI/UX & Design Systems",
    icon: Palette,
    description: "Enterprise design systems, interactive prototypes, and accessible human-centered interfaces.",
    items: [
      { name: "Figma (Tokens & Auto-Layout)", level: "Design Master", desc: "Variables, design systems, and responsive components" },
      { name: "ProtoPie & Framer", level: "Micro-Interactions", desc: "High-fidelity interactive prototypes with real logic" },
      { name: "Tokens Studio", level: "Design Tokens", desc: "Direct Figma-to-code design token synchronization" },
      { name: "WCAG 2.1 AA Standards", level: "Accessibility", desc: "Color contrast testing, screen reader support & focus rings" },
      { name: "Storybook", level: "Component UI Docs", desc: "Isolated component playground for engineering alignment" },
      { name: "After Effects & Lottie", level: "Motion Graphics", desc: "Lightweight vector animations for web and mobile" },
    ],
  },
];

export function TechStackSection() {
  const [activeTab, setActiveTab] = useState(0);
  const currentCategory = TECH_CATEGORIES[activeTab];

  return (
    <section className="py-10 bg-transparent relative border-t border-slate-200/80 dark:border-white/[0.06]" id="technologies">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Engineered with the World's Best Technologies"
          highlightedWord="Best Technologies"
          subtitle="We carefully curate battle-tested, high-performance technology stacks that guarantee scalability, security, and developer ergonomics."
          align="center"
        />

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 mb-12">
          {TECH_CATEGORIES.map((cat, idx) => {
            const Icon = cat.icon;
            const isActive = activeTab === idx;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(idx)}
                className={cn(
                  "px-4 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2 cursor-pointer",
                  isActive
                    ? "bg-mpit-blue text-white shadow-md shadow-mpit-blue/25 border border-transparent"
                    : "bg-white dark:bg-[#0c1626] text-slate-700 dark:text-slate-300 hover:text-mpit-blue dark:hover:text-white border border-slate-200 dark:border-white/10 hover:border-mpit-blue"
                )}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Box */}
        <div className="rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] p-8 sm:p-12 relative overflow-hidden shadow-sm dark:shadow-none">
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_top_right,rgba(56,163,220,0.15),transparent_70%)] pointer-events-none" />

          {/* Description */}
          <div className="max-w-2xl mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
              {currentCategory.name} Capabilities
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">
              {currentCategory.description}
            </p>
          </div>

          {/* 6 Grid Cards of Technologies */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {currentCategory.items.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-[#102038] border border-slate-200/80 dark:border-white/[0.06] hover:border-[#38A3DC] dark:hover:border-[#38A3DC]/50 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-base text-slate-900 dark:text-white group-hover:text-[#1B365D] dark:group-hover:text-[#60BBEF] transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#38A3DC]/15 dark:bg-[#38A3DC]/20 text-[#1B365D] dark:text-[#60BBEF] font-medium border border-[#38A3DC]/30 dark:border-[#38A3DC]/30">
                    {item.level}
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
