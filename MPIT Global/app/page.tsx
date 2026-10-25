import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeSliderSection } from "@/components/sections/HomeSliderSection";
import { PartnersSection } from "@/components/sections/PartnersSection";
import { CompanyIntroSection } from "@/components/sections/CompanyIntroSection";
import { ServicesOverviewSection } from "@/components/sections/ServicesOverviewSection";
import { WhyMPITSection } from "@/components/sections/WhyMPITSection";
import { IndustriesSection } from "@/components/sections/IndustriesSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { CaseStudiesPreviewSection } from "@/components/sections/CaseStudiesPreviewSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HomeSliderSection />
      <PartnersSection />
      <CompanyIntroSection />
      <ServicesOverviewSection />
      <WhyMPITSection />
      <IndustriesSection />
      <TechStackSection />
      <CaseStudiesPreviewSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
