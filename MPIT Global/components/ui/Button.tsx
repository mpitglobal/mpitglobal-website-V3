import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, Play } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient" | "video";
  size?: "sm" | "md" | "lg";
  href?: string;
  showArrow?: boolean;
  showPlay?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  showArrow = false,
  showPlay = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none cursor-pointer select-none";

  const variants = {
    primary:
      "bg-mpit-blue hover:bg-mpit-blue-hover text-white shadow-md hover:shadow-lg shadow-mpit-blue/25 border border-transparent hover:scale-[1.02]",
    gradient:
      "bg-mpit-blue hover:bg-mpit-blue-hover text-white shadow-md hover:shadow-lg shadow-mpit-blue/25 border border-transparent hover:scale-[1.02]",
    secondary:
      "bg-white dark:bg-[#0c1626] text-mpit-blue border border-mpit-blue hover:bg-mpit-blue/5 dark:hover:bg-mpit-blue/10 shadow-xs hover:scale-[1.02]",
    outline:
      "bg-white dark:bg-[#0c1626] text-mpit-blue border border-mpit-blue hover:bg-mpit-blue/5 dark:hover:bg-mpit-blue/10 shadow-xs hover:scale-[1.02]",
    video:
      "bg-white dark:bg-[#0c1626] text-mpit-blue border border-mpit-blue hover:bg-mpit-blue/5 dark:hover:bg-mpit-blue/10 shadow-xs hover:scale-[1.02]",
    ghost:
      "bg-transparent text-mpit-blue hover:text-mpit-blue-hover hover:bg-mpit-blue/5",
  };

  const sizes = {
    sm: "text-xs px-5 py-2 gap-2",
    md: "text-sm sm:text-base px-6 py-2.5 sm:py-3 gap-2.5",
    lg: "text-base sm:text-lg px-7 py-3 sm:py-3.5 gap-3",
  };

  const combinedClasses = cn(baseStyles, variants[variant], sizes[size], className);

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
      )}
      {(showPlay || variant === "video") && (
        <span className="w-5 h-5 rounded-full bg-mpit-blue text-white flex items-center justify-center shrink-0 ml-1 transition-transform duration-300 group-hover:scale-110">
          <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(combinedClasses, "group")}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(combinedClasses, "group")} {...props}>
      {content}
    </button>
  );
}
