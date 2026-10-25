"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS, COMPANY_INFO } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { useTheme } from "@/components/providers/ThemeProvider";
import { Menu, X, ChevronDown, Sun, Moon, ArrowRight, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

import { Logo } from "@/components/ui/Logo";

export function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  // Smart Hide Header on Scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Track if page is scrolled past top threshold
      if (currentScrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide navbar when scrolling down, show when scrolling up
      if (currentScrollY > 100) {
        if (currentScrollY > lastScrollY && !mobileMenuOpen) {
          // Scrolling down
          setIsVisible(false);
        } else {
          // Scrolling up
          setIsVisible(true);
        }
      } else {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, mobileMenuOpen]);

  // Close mobile menu and dropdown on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isVisible ? "translate-y-0" : "-translate-y-full",
        isScrolled
          ? "bg-white/90 dark:bg-[#070E1C]/90 backdrop-blur-xl border-b border-slate-200/80 dark:border-white/[0.08] shadow-sm dark:shadow-2xl py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center group">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              if (link.sublinks) {
                return (
                  <div
                    key={link.name}
                    className="relative group"
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={cn(
                        "px-3.5 py-2 text-sm font-medium transition-all duration-200 flex items-center gap-1.5 relative",
                        isActive
                          ? "text-mpit-blue dark:text-[#38A3DC] font-semibold"
                          : "text-slate-700 dark:text-slate-200 hover:text-mpit-blue dark:hover:text-white"
                      )}
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "w-3.5 h-3.5 transition-transform duration-300",
                          servicesDropdownOpen ? "rotate-180 text-mpit-blue" : "text-slate-400"
                        )}
                      />
                      {isActive && (
                        <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-mpit-blue rounded-full" />
                      )}
                    </Link>

                    {/* Rich Services Dropdown */}
                    <div
                      className={cn(
                        "absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[540px] transition-all duration-200 origin-top pointer-events-none",
                        servicesDropdownOpen
                          ? "opacity-100 scale-100 pointer-events-auto"
                          : "opacity-0 scale-95"
                      )}
                    >
                      <div className="p-4 rounded-2xl bg-white/95 dark:bg-[#0c1626]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/[0.1] shadow-2xl grid grid-cols-2 gap-2">
                        {link.sublinks.map((sub) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-white/[0.06] transition-colors group/sub flex flex-col gap-1 border border-transparent hover:border-mpit-blue/20"
                          >
                            <span className="text-sm font-semibold text-slate-900 dark:text-white group-hover/sub:text-mpit-blue dark:group-hover/sub:text-[#60BBEF] flex items-center justify-between">
                              {sub.name}
                              <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover/sub:opacity-100 group-hover/sub:translate-x-1 transition-all duration-200 text-mpit-blue" />
                            </span>
                            <span className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                              {sub.desc}
                            </span>
                          </Link>
                        ))}
                        <div className="col-span-2 pt-2 border-t border-slate-200 dark:border-white/[0.06] flex items-center justify-between px-2 text-xs text-slate-500 dark:text-slate-400">
                          <span className="flex items-center gap-1 font-medium">
                            <Sparkles className="w-3.5 h-3.5 text-mpit-blue" /> Enterprise Tech Solutions
                          </span>
                          <Link
                            href="/services"
                            className="text-mpit-blue dark:text-[#38A3DC] hover:underline font-bold flex items-center gap-1"
                          >
                            View All Services &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium transition-all duration-200 relative",
                    isActive
                      ? "text-mpit-blue dark:text-[#38A3DC] font-semibold"
                      : "text-slate-700 dark:text-slate-200 hover:text-mpit-blue dark:hover:text-white"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-mpit-blue rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA & Theme Toggle & Mobile Hamburger */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Light / Dark Mode Toggle Button */}
            {/* <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200/80 dark:border-white/10 transition-all duration-300 cursor-pointer focus:outline-none focus:ring-2 focus:ring-mpit-blue"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
              title={`Switch to ${theme === "light" ? "Dark" : "Light"} mode`}
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-[#1B365D] transition-transform duration-300 hover:-rotate-12" />
              ) : (
                <Sun className="w-4 h-4 text-mpit-blue transition-transform duration-300 hover:rotate-45" />
              )}
            </button> */}

            <Button
              href="/contact"
              variant="primary"
              size="md"
              showArrow
              className="hidden sm:inline-flex px-6 py-2.5 font-semibold shadow-md shadow-mpit-blue/25"
            >
              Get Started
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[65px] bottom-0 bg-white/95 dark:bg-[#070E1C]/95 backdrop-blur-2xl border-b border-slate-200 dark:border-white/10 px-6 py-6 overflow-y-auto flex flex-col justify-between animate-fadeIn z-50">
          <div className="space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Menu
              </span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300"
              >
                {theme === "light" ? (
                  <>
                    <Moon className="w-3.5 h-3.5 text-[#1B365D]" /> Switch to Dark Mode
                  </>
                ) : (
                  <>
                    <Sun className="w-3.5 h-3.5 text-[#38A3DC]" /> Switch to Light Mode
                  </>
                )}
              </button>
            </div>

            {NAV_LINKS.map((link) => {
              const isActive =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));

              if (link.sublinks) {
                return (
                  <div key={link.name} className="space-y-2">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "block text-lg font-bold py-1.5",
                        isActive
                          ? "text-[#1B365D] dark:text-[#38A3DC]"
                          : "text-slate-900 dark:text-white"
                      )}
                    >
                      {link.name}
                    </Link>
                    <div className="pl-4 space-y-2 border-l-2 border-[#38A3DC]/30">
                      {link.sublinks.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block text-sm text-slate-600 dark:text-slate-300 hover:text-[#1B365D] dark:hover:text-[#38A3DC] py-1"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block text-lg font-bold py-2 border-b border-slate-100 dark:border-white/5",
                    isActive
                      ? "text-[#1B365D] dark:text-[#38A3DC]"
                      : "text-slate-800 dark:text-slate-200"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/10 space-y-4">
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              className="w-full"
              showArrow
              onClick={() => setMobileMenuOpen(false)}
            >
              Start a Conversation
            </Button>
            <div className="text-center text-xs text-slate-500 dark:text-slate-400">
              <p>{COMPANY_INFO.phone}</p>
              <p className="mt-1">{COMPANY_INFO.email}</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
