import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "gray" | "outline" | "glow" | "gradient";
  size?: "sm" | "md";
  className?: string;
}

export function Badge({
  children,
  variant = "blue",
  size = "md",
  className,
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center font-medium rounded-full tracking-wide transition-colors";

  const variants = {
    blue: "bg-[#38A3DC]/15 dark:bg-[#38A3DC]/20 text-[#1B365D] dark:text-[#60BBEF] border border-[#38A3DC]/30 dark:border-[#38A3DC]/30",
    gradient: "bg-gradient-to-r from-[#38A3DC]/20 to-[#1B365D]/15 text-[#1B365D] dark:text-[#60BBEF] border border-[#38A3DC]/35 shadow-sm",
    gray: "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-white/10",
    outline: "bg-transparent text-slate-700 dark:text-slate-300 border border-slate-300 dark:border-white/15",
    glow: "bg-[#38A3DC]/20 dark:bg-[#38A3DC]/25 text-[#1B365D] dark:text-[#60BBEF] border border-[#38A3DC]/40 dark:border-[#38A3DC]/40 shadow-[0_0_15px_rgba(56,163,220,0.25)]",
  };

  const sizes = {
    sm: "text-[11px] px-2.5 py-0.5",
    md: "text-xs px-3.5 py-1",
  };

  return (
    <span className={cn(baseStyles, variants[variant], sizes[size], className)}>
      {children}
    </span>
  );
}
