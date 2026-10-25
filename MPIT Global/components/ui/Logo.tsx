import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  imgClassName?: string;
  variant?: "full" | "mark" | "stacked";
  isDark?: boolean;
  priority?: boolean;
}

export function Logo({
  className,
  imgClassName,
  priority = true,
}: LogoProps) {
  return (
    <div className={cn("relative inline-flex items-center select-none group", className)}>
      <Image
        src="/MPIT_Global-Logo.png"
        alt="MPIT Global"
        width={250}
        height={152}
        priority={priority}
        className={cn(
          "h-9 sm:h-10 md:h-12 w-auto object-contain transition-all duration-300 group-hover:scale-105 dark:brightness-125 dark:contrast-110",
          imgClassName
        )}
      />
    </div>
  );
}

