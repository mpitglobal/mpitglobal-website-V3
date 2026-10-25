import React from "react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Sparkles, Mail, Phone, Globe, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="py-10 bg-transparent relative overflow-hidden border-t border-slate-200/80 dark:border-white/[0.08]">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-[radial-gradient(circle_at_center,rgba(0,102,255,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight leading-tight max-w-3xl mx-auto">
          Ready to Grow <span className="text-mpit-blue dark:text-[#38A3DC]">Your Business?</span>
        </h2>

        <p className="mt-4 sm:mt-6 text-lg sm:text-2xl font-bold text-slate-800 dark:text-slate-100 max-w-2xl mx-auto leading-snug">
          Let’s build something amazing together.
        </p>

        <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
          Contact our UK team today for a free project consultation, custom website proposal, or digital growth strategy.
        </p>

        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button href="/contact" variant="primary" size="lg" showArrow>
            Let&apos;s Build Together
          </Button>
          <Button href="/services" variant="outline" size="lg">
            Explore All Services
          </Button>
        </div>

        {/* Contact Info Pills */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-3xl mx-auto">
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="p-4 rounded-2xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] hover:border-mpit-blue dark:hover:border-[#38A3DC]/50 shadow-xs flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-mpit-blue transition-colors"
          >
            <Mail className="w-4 h-4 text-mpit-blue dark:text-[#38A3DC]" />
            <span>{COMPANY_INFO.email}</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="p-4 rounded-2xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] hover:border-mpit-blue dark:hover:border-[#38A3DC]/50 shadow-xs flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-mpit-blue transition-colors"
          >
            <Phone className="w-4 h-4 text-mpit-blue dark:text-[#38A3DC]" />
            <span>{COMPANY_INFO.phone}</span>
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-mpit-blue dark:text-[#38A3DC]" />
            UK Professional Standards
          </span>
          <span className="flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-mpit-blue dark:text-[#38A3DC]" />
            Free Consultation & Audit
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-mpit-blue animate-ping" />
            Fast Response within 24 Hours
          </span>
        </div>
      </div>
    </section>
  );
}
