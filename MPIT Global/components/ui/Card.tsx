import React from "react";
import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glow?: boolean;
  hoverEffect?: boolean;
  className?: string;
}

export function Card({
  children,
  glow = false,
  hoverEffect = true,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white/90 dark:bg-[#0e1626]/80 backdrop-blur-md border border-slate-200/80 dark:border-white/[0.08] p-6 sm:p-8 transition-all duration-300 shadow-sm dark:shadow-none text-slate-800 dark:text-slate-100",
        glow && "relative overflow-hidden before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_top_right,rgba(56,163,220,0.18),transparent_65%)] before:pointer-events-none",
        hoverEffect && "hover:border-[#38A3DC] dark:hover:border-[#38A3DC]/50 hover:bg-white dark:hover:bg-[#102038] hover:shadow-[0_16px_36px_-10px_rgba(56,163,220,0.22)] dark:hover:shadow-[0_16px_36px_-10px_rgba(27,54,93,0.45)] hover:-translate-y-1",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
