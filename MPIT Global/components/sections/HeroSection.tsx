"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroSlide {
  id: number;
  subtitle: string;
  titlePart1: string;
  titlePart2: string;
  description: string;
  primaryBtnText: string;
  primaryBtnHref: string;
  secondaryBtnText: string;
  imageSrc: string;
  imageAlt: string;
  videoUrl?: string;
}

const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    subtitle: "UK-Focused IT & Digital Solutions",
    titlePart1: "Modern Websites. Smart Marketing.",
    titlePart2: "Real Growth.",
    description:
      "MPIT Global helps UK businesses build a powerful digital presence with professional websites, strategic digital marketing, and reliable IT support. Your success starts here.",
    primaryBtnText: "Explore Our Services",
    primaryBtnHref: "/services",
    secondaryBtnText: "Get Free Consultation",
    imageSrc: "/images/hero-slide-1.jpg",
    imageAlt: "Modern Websites, Smart Marketing, Real Growth - MPIT Global",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 2,
    subtitle: "Website Design, Development & SEO",
    titlePart1: "Clean, Modern Websites",
    titlePart2: "Built for Performance & Conversions",
    description:
      "Fast, secure, mobile-friendly websites built for performance and conversions. Custom WordPress, Shopify, and bespoke web platforms.",
    primaryBtnText: "View Web Solutions",
    primaryBtnHref: "/services/web-development",
    secondaryBtnText: "Our Work",
    imageSrc: "/images/hero-slide-2.jpg",
    imageAlt: "Website Design and Development UK - MPIT Global",
  },
  {
    id: 3,
    subtitle: "Branding, Marketing & IT Support",
    titlePart1: "Build Brand Authority &",
    titlePart2: "Drive Targeted Enquiries",
    description:
      "Data-driven marketing, Google ranking improvement, memorable brand identities, and reliable 24/7 technical support.",
    primaryBtnText: "Start Your Project",
    primaryBtnHref: "/contact",
    secondaryBtnText: "Contact Us",
    imageSrc: "/images/hero-slide-3.jpg",
    imageAlt: "Digital Marketing and IT Support - MPIT Global",
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const totalSlides = HERO_SLIDES.length;

  useEffect(() => {
    if (isPaused || isVideoOpen) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, isVideoOpen, totalSlides]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 50) handleNext();
    if (diff < -50) handlePrev();
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const activeSlide = HERO_SLIDES[currentSlide];

  return (
    <section
      className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center py-10 overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white dark:from-[#060D1A] dark:via-[#070E1C] dark:to-[#070E1C]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[400px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(56,163,220,0.06)_0%,transparent_70%)] pointer-events-none" />

      {/* Navigation Arrow Controls */}
      <button
        onClick={handlePrev}
        className="absolute left-3 sm:left-6 md:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white dark:bg-[#0c1626] border border-slate-200/90 dark:border-white/10 shadow-md hover:shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-mpit-blue hover:border-mpit-blue/40 transition-all duration-200 cursor-pointer active:scale-95"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-3 sm:right-6 md:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white dark:bg-[#0c1626] border border-slate-200/90 dark:border-white/10 shadow-md hover:shadow-lg flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-mpit-blue hover:border-mpit-blue/40 transition-all duration-200 cursor-pointer active:scale-95"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Content (7 Cols) */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left animate-fadeIn">
            {/* Top Subtitle */}
            <p className="text-sm sm:text-base font-semibold text-mpit-blue dark:text-[#38A3DC] tracking-wide">
              {activeSlide.subtitle}
            </p>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.12] text-[#0e1e38] dark:text-white">
              <span>{activeSlide.titlePart1}</span>
              <br />
              <span className="text-mpit-blue dark:text-[#38A3DC]">
                {activeSlide.titlePart2}
              </span>
            </h1>

            {/* Sub-headline description */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-xl leading-relaxed font-normal">
              {activeSlide.description}
            </p>

            {/* Call to Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                href={activeSlide.primaryBtnHref}
                variant="primary"
                size="lg"
                showArrow
                className="px-7 py-3 text-sm sm:text-base font-medium shadow-md shadow-mpit-blue/25"
              >
                {activeSlide.primaryBtnText}
              </Button>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-sm sm:text-base font-medium bg-white dark:bg-[#0c1626] text-mpit-blue dark:text-[#38A3DC] border border-mpit-blue dark:border-[#38A3DC] hover:bg-mpit-blue/5 dark:hover:bg-white/10 shadow-xs transition-all duration-300 cursor-pointer active:scale-95 group"
              >
                <span>{activeSlide.secondaryBtnText}</span>
                <span className="w-5 h-5 rounded-full bg-mpit-blue text-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                  <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Hero Image (6 Cols) */}
          <div className="lg:col-span-6 relative">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl border border-slate-100 dark:border-white/10 group">
              <Image
                src={activeSlide.imageSrc}
                alt={activeSlide.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-40 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-2">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => setCurrentSlide(idx)}
              className={cn(
                "h-2.5 rounded-full transition-all duration-300 cursor-pointer focus:outline-none",
                idx === currentSlide
                  ? "w-7 bg-[#1B365D] dark:bg-mpit-blue"
                  : "w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Video Modal Popup */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black/90 transition-colors cursor-pointer"
              aria-label="Close Video"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative pt-[56.25%] w-full">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="MPIT Global Corporate Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
