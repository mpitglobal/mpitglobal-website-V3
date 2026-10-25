"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Cpu,
  Smartphone,
  Palette,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Slide {
  id: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  ctaText: string;
  ctaHref: string;
  icon: React.ReactNode;
  bgGradient: string;
}

const SLIDES: Slide[] = [
  {
    id: "web-cloud",
    category: "Enterprise Web & Cloud",
    title: "High-Performance Cloud & Full-Stack Web Architecture",
    subtitle: "Engineered for 99.99% Uptime and Sub-Second Global Latency",
    description:
      "We design and build mission-critical enterprise web applications, headless commerce systems, and resilient cloud architectures that scale effortlessly as your business grows.",
    metrics: [
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Page Load Speed", value: "<0.8s" },
      { label: "Global Availability", value: "99.99%" },
    ],
    tags: ["Next.js", "React 19", "TypeScript", "AWS / GCP", "Microservices"],
    ctaText: "Explore Web Engineering",
    ctaHref: "/services/web-development",
    icon: <Cpu className="w-8 h-8 text-[#38A3DC] dark:text-[#60BBEF]" />,
    bgGradient: "from-[#38A3DC]/20 via-[#25487B]/15 to-transparent",
  },
  {
    id: "digital-marketing",
    category: "Growth & Performance",
    title: "Data-Driven Digital Marketing & Organic SEO Dominance",
    subtitle: "Turning Search Intent and Precision Campaigns into High-ROI Revenue",
    description:
      "Maximize your brand's digital visibility and inbound pipeline through multi-channel performance advertising, conversion rate optimization, and algorithmic search ranking strategies.",
    metrics: [
      { label: "Organic Reach Growth", value: "+340%" },
      { label: "CAC Reduction", value: "-42%" },
      { label: "Conversion Lift", value: "3.8x" },
    ],
    tags: ["Performance Ads", "Enterprise SEO", "CRO Funnels", "Data Analytics"],
    ctaText: "Discover Growth Solutions",
    ctaHref: "/services/digital-marketing",
    icon: <TrendingUp className="w-8 h-8 text-[#38A3DC] dark:text-[#60BBEF]" />,
    bgGradient: "from-[#38A3DC]/20 via-[#1B365D]/15 to-transparent",
  },
  {
    id: "mobile-apps",
    category: "Mobile Solutions",
    title: "Next-Generation iOS & Android Mobile Ecosystems",
    subtitle: "Native Performance with Fluid Ergonomics & Offline Capabilities",
    description:
      "Crafting enterprise-grade mobile applications with seamless device integration, biometric security, real-time push synchronization, and five-star user ratings.",
    metrics: [
      { label: "App Store Rating", value: "4.9/5" },
      { label: "Active Mobile Users", value: "2.4M+" },
      { label: "Crash-Free Rate", value: "99.98%" },
    ],
    tags: ["React Native", "Flutter", "Swift iOS", "Kotlin Android", "GraphQL"],
    ctaText: "Explore Mobile Apps",
    ctaHref: "/services/app-development",
    icon: <Smartphone className="w-8 h-8 text-[#38A3DC] dark:text-[#60BBEF]" />,
    bgGradient: "from-[#38A3DC]/20 via-[#25487B]/15 to-transparent",
  },
  {
    id: "uiux-design",
    category: "Product & Experience",
    title: "Human-Centric UI/UX Systems & Brand Experiences",
    subtitle: "Intuitive Digital Interfaces that Captivate and Convert",
    description:
      "From comprehensive multi-brand design systems to interactive micro-prototyping, we elevate your digital presence with sophisticated design craftsmanship and user psychology.",
    metrics: [
      { label: "User Retention", value: "+85%" },
      { label: "Design Token Library", value: "500+" },
      { label: "WCAG Accessibility", value: "AAA Compliant" },
    ],
    tags: ["Design Systems", "Figma Prototyping", "Design Tokens", "Accessibility"],
    ctaText: "View UI/UX Craftsmanship",
    ctaHref: "/services/design",
    icon: <Palette className="w-8 h-8 text-[#38A3DC] dark:text-[#60BBEF]" />,
    bgGradient: "from-[#38A3DC]/20 via-[#1B365D]/15 to-transparent",
  },
];

export function HomeSliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = SLIDES.length;

  // Auto-play timer
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);

    return () => clearInterval(timer);
  }, [isPaused, totalSlides]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  // Touch Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeSlide = SLIDES[currentSlide];

  return (
    <section
      id="featured-innovations"
      aria-label="Featured Digital Solutions Carousel"
      className="py-10 relative overflow-hidden bg-slate-50/50 dark:bg-[#070B14]/60 border-y border-slate-200/80 dark:border-white/[0.06]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Accent Mesh */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 -left-48 w-96 h-96 bg-[#38A3DC]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-48 w-96 h-96 bg-[#1B365D]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Pioneering <span className="text-mpit-blue dark:text-[#38A3DC]">Progressive Innovation</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl">
              Explore how MPIT Global engineers transform ideas into high-impact digital products, scalable platforms, and market-leading brands.
            </p>
          </div>

          {/* Slider Controls (Prev / Next & Pause Indicator) */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 hidden sm:inline-block">
              {currentSlide + 1} / {totalSlides}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-white dark:bg-[#0c1626] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-[#38A3DC] transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
                aria-label="Previous Slide"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-white dark:bg-[#0c1626] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:border-[#38A3DC] transition-all shadow-sm hover:scale-105 active:scale-95 cursor-pointer focus:outline-none"
                aria-label="Next Slide"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Slide Card */}
        <div className="relative rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200 dark:border-white/10 shadow-xl overflow-hidden transition-all duration-500 min-h-[460px] flex flex-col justify-between">
          {/* Subtle top gradient bar */}
          <div className="h-1.5 w-full bg-gradient-to-r from-[#38A3DC] via-[#25487B] to-[#1B365D]" />

          {/* Slide Content Grid */}
          <div className="p-6 sm:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  {activeSlide.icon}
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1B365D] dark:text-[#38A3DC]">
                    {activeSlide.category}
                  </span>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    MPIT Global Core Expertise
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug">
                  {activeSlide.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base font-semibold text-[#38A3DC] dark:text-[#60BBEF]">
                  {activeSlide.subtitle}
                </p>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                {activeSlide.description}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-2 pt-2">
                {activeSlide.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Button href={activeSlide.ctaHref} variant="primary" size="md" showArrow>
                  {activeSlide.ctaText}
                </Button>
                <Button href="/contact" variant="outline" size="md">
                  Book Architecture Consultation
                </Button>
              </div>
            </div>

            {/* Right Visual / Metric Panel (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-[#111f38] dark:to-[#091222] border border-slate-200 dark:border-white/10 p-6 sm:p-8 space-y-6 shadow-inner relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-mpit-blue/15 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Proven Delivery Metrics
                  </span>
                  <span className="flex items-center gap-1 text-xs text-emerald-600 dark:text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified ROI
                  </span>
                </div>

                {/* Metrics Stack */}
                <div className="space-y-4">
                  {activeSlide.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-white dark:bg-white/5 border border-slate-200/80 dark:border-white/10 flex items-center justify-between shadow-xs hover:border-mpit-blue transition-colors"
                    >
                      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
                        {metric.label}
                      </span>
                      <span className="text-xl sm:text-2xl font-black text-mpit-blue dark:text-[#38A3DC]">
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Trust Seal */}
                <div className="pt-2 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <ShieldCheck className="w-4 h-4 text-mpit-blue shrink-0" />
                  <span>ISO & SOC-2 Compliant Delivery Lifecycle</span>
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Indicators / Dots */}
          <div className="px-6 py-4 bg-slate-100/70 dark:bg-black/40 border-t border-slate-200 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              {SLIDES.map((slide, idx) => (
                <button
                  key={slide.id}
                  onClick={() => setCurrentSlide(idx)}
                  className={cn(
                    "h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none",
                    idx === currentSlide
                      ? "w-8 bg-mpit-blue"
                      : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
                  )}
                  aria-label={`Go to slide ${idx + 1}: ${slide.category}`}
                />
              ))}
            </div>

            <span className="text-xs text-slate-500 dark:text-slate-400">
              {isPaused ? "Paused on hover" : "Auto-playing every 6s"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
