"use client";

import React, { useState } from "react";
import Link from "next/link";
import { COMPANY_INFO, NAV_LINKS, GLOBAL_OFFICES } from "@/lib/constants";
import { SERVICES_DATA } from "@/lib/services-data";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Mail, Phone, MapPin, CheckCircle2, Shield, Heart } from "lucide-react";

import { Logo } from "@/components/ui/Logo";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  return (
    <footer className="bg-slate-100 dark:bg-[#070E1C] text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-white/[0.08] relative overflow-hidden transition-colors duration-300">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-[radial-gradient(ellipse_at_top,rgba(56,163,220,0.18),transparent_70%)] pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-10 pb-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-10 pb-6 border-b border-slate-200 dark:border-white/[0.06]">
          {/* Brand Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center group">
              <Logo />
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              {COMPANY_INFO.shortDescription}
            </p>


          </div>

          {/* Services Column (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              {SERVICES_DATA.map((srv) => (
                <li key={srv.slug}>
                  <Link
                    href={`/services/${srv.slug}`}
                    className="hover:text-slate-900 dark:hover:text-white transition-colors flex items-center justify-between group"
                  >
                    <span>{srv.shortTitle}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#38A3DC] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Solutions Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  About MPIT Global
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Case Studies & ROI
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Solutions Hub
                </Link>
              </li>
              <li>
                <Link href="/about#values" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Core Values
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
                  Schedule Consultation
                </Link>
              </li>
            </ul>
          </div>

          {/* Global Presence Column (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Global Offices
            </h4>
            <div className="space-y-3 text-xs leading-relaxed">
              <div className="p-3.5 rounded-2xl bg-white dark:bg-[#0c1322] border border-slate-200/80 dark:border-white/[0.06] space-y-1 shadow-xs">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#38A3DC]" />
                  {GLOBAL_OFFICES[0].city} (HQ)
                </span>
                <p className="text-slate-500 dark:text-slate-400">{GLOBAL_OFFICES[0].address}</p>
                <p className="text-slate-500 dark:text-slate-400">{GLOBAL_OFFICES[0].zip}</p>
              </div>

              {/* <div className="p-3.5 rounded-2xl bg-white dark:bg-[#0c1322] border border-slate-200/80 dark:border-white/[0.06] space-y-1 shadow-xs">
                <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#38A3DC]" />
                  {GLOBAL_OFFICES[1].city} (Europe)
                </span>
                <p className="text-slate-500 dark:text-slate-400">{GLOBAL_OFFICES[1].address}</p>
                <p className="text-slate-500 dark:text-slate-400">{GLOBAL_OFFICES[1].zip}</p>
              </div> */}
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            &copy; 2026 MPIT Global. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-slate-900 dark:hover:text-white transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
