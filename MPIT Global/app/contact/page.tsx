"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { COMPANY_INFO, GLOBAL_OFFICES, GENERAL_FAQS } from "@/lib/constants";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  Send,
  Sparkles,
  ShieldCheck,
  Building2,
  Calendar,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SERVICES_LIST = [
  "Web Development",
  "Mobile App Development",
  "UI/UX & Graphic Design",
  "Search Engine Optimization (SEO)",
  "Digital Marketing & Growth",
  "Strategic IT Consulting & Cloud",
  "Other / Custom Inquiry",
];

const BUDGET_RANGES = [
  "< $10k",
  "$10k – $25k",
  "$25k – $50k",
  "$50k – $100k",
  "$100k+",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: SERVICES_LIST[0],
    budget: BUDGET_RANGES[2],
    message: "",
  });

  const [honeypot, setHoneypot] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (loading) return;

    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          honeypot,
        }),
      });

      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result?.error || "We could not deliver your message at this time. Please try again later."
        );
      }

      setSubmitted(true);
    } catch (err: any) {
      setErrorMessage(
        err?.message || "An unexpected error occurred while sending your message. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSubmitted(false);
    setErrorMessage(null);
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      service: SERVICES_LIST[0],
      budget: BUDGET_RANGES[2],
      message: "",
    });
    setHoneypot("");
  };

  return (
    <div className="pt-8 sm:pt-12 bg-transparent">
      {/* Hero Header */}
      <section className="relative py-10 overflow-hidden border-b border-slate-200/80 dark:border-white/[0.08]">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] hero-glow-bg blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-slate-900 dark:text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Get in <span className="text-mpit-blue dark:text-[#38A3DC]">Touch</span>
          </h1>

          <p className="mt-6 text-base sm:text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We’re here to help your business grow. Reach out to us for enquiries, quotes, or project discussions.
          </p>
        </div>
      </section>

      {/* Main Contact Form & Direct Channels Grid */}
      <section className="py-10 bg-slate-50/50 dark:bg-[#070B14]/60 border-b border-slate-200/80 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Contact Info & Value Badges (5 Cols) */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Let’s Build Something Amazing Together
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  Fast delivery, transparent communication, and dedicated UK support with clear quotes and no hidden fees.
                </p>
              </div>

              {/* Direct channels cards */}
              <div className="space-y-4">
                <div className="p-5 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-mpit-blue/10 dark:bg-mpit-blue/20 text-mpit-blue dark:text-[#38A3DC] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Email Address</span>
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="text-base font-semibold text-slate-900 dark:text-white hover:text-mpit-blue dark:hover:text-[#38A3DC] transition-colors"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="p-5 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-mpit-blue/10 dark:bg-mpit-blue/20 text-mpit-blue dark:text-[#38A3DC] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">Phone Support</span>
                    <a
                      href={`tel:${COMPANY_INFO.phone}`}
                      className="text-base font-semibold text-slate-900 dark:text-white hover:text-mpit-blue dark:hover:text-[#38A3DC] transition-colors"
                    >
                      {COMPANY_INFO.phone}
                    </a>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block mt-0.5">
                      UK Direct Line &bull; Mon - Fri 9:00 - 18:00 GMT
                    </span>
                  </div>
                </div>

                <div className="p-5 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] shadow-xs flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-mpit-blue/10 dark:bg-mpit-blue/20 text-mpit-blue dark:text-[#38A3DC] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 dark:text-slate-400 block font-medium">UK Headquarters</span>
                    <span className="text-sm font-semibold text-slate-900 dark:text-white block">
                      London &bull; Serving Surrey, Crawley, Redhill & across UK
                    </span>
                  </div>
                </div>
              </div>

              {/* NDA & Trust Box */}
              <div className="p-6 rounded-3xl bg-slate-100/80 dark:bg-black/40 border border-slate-200 dark:border-white/[0.08] space-y-3">
                <div className="flex items-center gap-2 text-slate-900 dark:text-white font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#38A3DC] dark:text-[#60BBEF]" />
                  <span>Enterprise Security & NDA Protected</span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  All shared concepts, requirements, and RFPs are strictly protected under our mutual standard non-disclosure agreement.
                </p>
              </div>
            </div>

            {/* Right: Comprehensive Interactive RFP Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] p-8 sm:p-12 relative overflow-hidden shadow-xl">
                {submitted ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="w-16 h-16 rounded-full bg-[#38A3DC]/20 border border-[#38A3DC]/50 flex items-center justify-center text-[#1B365D] dark:text-[#38A3DC] mx-auto animate-bounce">
                      <CheckCircle2 className="w-8 h-8 text-[#38A3DC]" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
                      Message Successfully Dispatched!
                    </h3>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-md mx-auto leading-relaxed">
                      Thank you for contacting MPIT Global, <strong className="text-slate-900 dark:text-white">{formData.name}</strong>. 
                      One of our principal architects is reviewing your requirements and will reach out to <strong className="text-slate-900 dark:text-white">{formData.email}</strong> within 24 hours.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={handleReset}
                        className="px-6 py-2.5 rounded-full bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-900 dark:text-white text-xs font-semibold transition-colors cursor-pointer"
                      >
                        Submit Another Inquiry
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Invisible Honeypot anti-spam trap */}
                    <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
                      <label htmlFor="contact_hp_website">Please leave this field empty</label>
                      <input
                        id="contact_hp_website"
                        type="text"
                        name="website_hp"
                        tabIndex={-1}
                        autoComplete="off"
                        value={honeypot}
                        onChange={(e) => setHoneypot(e.target.value)}
                      />
                    </div>

                    {/* Submission Error Banner */}
                    {errorMessage && (
                      <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-700 dark:text-rose-300 text-xs sm:text-sm flex items-start gap-3 animate-fadeIn">
                        <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-rose-600 dark:text-rose-400" />
                        <div className="flex-1">
                          <p className="font-semibold text-rose-800 dark:text-rose-200">Submission Notice</p>
                          <p className="mt-0.5 text-rose-700/90 dark:text-rose-300/90">{errorMessage}</p>
                        </div>
                      </div>
                    )}

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-1">
                        Request a Consultation & Proposal
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        Please fill out the details below to help us prepare for our initial discussion.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          minLength={2}
                          placeholder="e.g. Alex Morgan"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-[#111f38] text-slate-900 dark:text-white text-sm px-4 py-3 rounded-2xl border border-slate-200 dark:border-white/10 focus:border-[#38A3DC] focus:outline-none placeholder:text-slate-400 transition-colors"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-2">
                          Corporate Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="alex@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-[#111f38] text-slate-900 dark:text-white text-sm px-4 py-3 rounded-2xl border border-slate-200 dark:border-white/10 focus:border-[#38A3DC] focus:outline-none placeholder:text-slate-400 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-[#111f38] text-slate-900 dark:text-white text-sm px-4 py-3 rounded-2xl border border-slate-200 dark:border-white/10 focus:border-[#38A3DC] focus:outline-none placeholder:text-slate-400 transition-colors"
                        />
                      </div>

                      {/* Company */}
                      <div>
                        <label className="block text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-2">
                          Company / Organization *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Acme Corp"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full bg-slate-50 dark:bg-[#111f38] text-slate-900 dark:text-white text-sm px-4 py-3 rounded-2xl border border-slate-200 dark:border-white/10 focus:border-[#38A3DC] focus:outline-none placeholder:text-slate-400 transition-colors"
                        />
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-2">
                        Primary Service Needed *
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-[#111f38] text-slate-900 dark:text-white text-sm px-4 py-3 rounded-2xl border border-slate-200 dark:border-white/10 focus:border-[#38A3DC] focus:outline-none transition-colors cursor-pointer"
                      >
                        {SERVICES_LIST.map((srv, idx) => (
                          <option key={idx} value={srv} className="bg-white dark:bg-[#111f38] text-slate-900 dark:text-white">
                            {srv}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Budget Selection Pills */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-2">
                        Estimated Budget Range
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {BUDGET_RANGES.map((b) => {
                          const isSelected = formData.budget === b;
                          return (
                            <button
                              type="button"
                              key={b}
                              onClick={() => setFormData({ ...formData, budget: b })}
                              className={cn(
                                "px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer",
                                isSelected
                                  ? "bg-mpit-blue text-white shadow-md shadow-mpit-blue/25 border border-transparent"
                                  : "bg-slate-100 dark:bg-[#111f38] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10 hover:border-mpit-blue hover:text-mpit-blue"
                              )}
                            >
                              {b}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-slate-800 dark:text-white uppercase tracking-wider mb-2">
                        Project Overview & Goals *
                      </label>
                      <textarea
                        required
                        minLength={5}
                        rows={4}
                        placeholder="Tell us about your project requirements, target goals, timelines, or existing systems..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-[#111f38] text-slate-900 dark:text-white text-sm px-4 py-3 rounded-2xl border border-slate-200 dark:border-white/10 focus:border-mpit-blue focus:outline-none placeholder:text-slate-400 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-3.5 sm:py-4 rounded-full bg-mpit-blue hover:bg-mpit-blue-hover text-white font-semibold text-sm sm:text-base transition-all duration-300 shadow-md shadow-mpit-blue/25 hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 hover:scale-[1.01]"
                    >
                      {loading ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Processing Inquiry...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit Request to Solutions Team</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Locations Map / Office Grid */}
      <section className="py-10 bg-transparent border-b border-slate-200/80 dark:border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Global Hubs"
            title="Our Innovation Centers Worldwide"
            highlightedWord="Worldwide"
            subtitle="Strategically located across premier global technology capitals to support around-the-clock enterprise delivery."
            align="center"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GLOBAL_OFFICES.map((office, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white dark:bg-[#0c1626] border border-slate-200/80 dark:border-white/[0.08] hover:border-[#38A3DC] shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-[#1B365D] dark:text-[#38A3DC] uppercase tracking-wider">{office.badge}</span>
                  <Building2 className="w-5 h-5 text-[#38A3DC] dark:text-[#60BBEF]" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-1">{office.city}</h3>
                <p className="text-xs text-[#1B365D] dark:text-[#38A3DC] font-semibold mb-4">{office.region}</p>
                <div className="text-xs text-slate-600 dark:text-slate-400 space-y-1.5 pt-4 border-t border-slate-100 dark:border-white/[0.06]">
                  <p>{office.address}</p>
                  <p>{office.zip}</p>
                  <p className="pt-2 text-slate-900 dark:text-white font-semibold">{office.phone}</p>
                  <p className="text-[#1B365D] dark:text-[#38A3DC]">{office.email}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-10 bg-slate-50/50 dark:bg-[#070B14]/60 border-b border-slate-200/80 dark:border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Client FAQs"
            title="Frequently Asked Questions"
            highlightedWord="Questions"
            subtitle="Answers to common questions regarding our discovery process, contracting, and engagement terms."
            align="center"
          />

          <Accordion items={GENERAL_FAQS} />
        </div>
      </section>
    </div>
  );
}
