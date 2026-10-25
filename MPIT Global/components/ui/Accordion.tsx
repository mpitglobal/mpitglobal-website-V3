"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
  className?: string;
  defaultOpenIndex?: number;
}

export function Accordion({ items, className, defaultOpenIndex = 0 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={cn(
              "rounded-2xl border transition-all duration-300 overflow-hidden",
              isOpen
                ? "bg-white dark:bg-[#0c1626] border-[#38A3DC] dark:border-[#38A3DC]/50 shadow-md shadow-[#38A3DC]/10"
                : "bg-white/80 dark:bg-[#0c1626]/80 border-slate-200/80 dark:border-white/[0.06] hover:border-slate-300 dark:hover:border-white/[0.15]"
            )}
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
              aria-expanded={isOpen}
            >
              <span className="font-bold text-base sm:text-lg text-slate-900 dark:text-white pr-4">
                {item.question}
              </span>
              <div
                className={cn(
                  "shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300",
                  isOpen
                    ? "bg-gradient-to-r from-[#38A3DC] to-[#1B365D] text-white rotate-180"
                    : "bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400"
                )}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>
            <div
              className={cn(
                "transition-all duration-300 ease-in-out px-5 sm:px-6",
                isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 pb-0 opacity-0 pointer-events-none"
              )}
            >
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/[0.06] pt-4">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
