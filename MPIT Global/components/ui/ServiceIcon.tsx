"use client";

import React from "react";
import {
  TrendingUp,
  Palette,
  Search,
  Code2,
  Smartphone,
  ShieldCheck,
  Cpu,
  Target,
  Sparkles,
  Layers,
  Zap,
  LineChart,
  Globe2,
  Users2,
  Repeat,
  ArrowRight,
  CheckCircle2,
  Check,
  ChevronDown,
  Menu,
  X,
  Building2,
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
  LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  TrendingUp,
  Palette,
  Search,
  Code2,
  Smartphone,
  ShieldCheck,
  Cpu,
  Target,
  Sparkles,
  Layers,
  Zap,
  LineChart,
  Globe2,
  Users2,
  Repeat,
  ArrowRight,
  CheckCircle2,
  Check,
  ChevronDown,
  Menu,
  X,
  Building2,
  Mail,
  Phone,
  MapPin,
  Clock,
  ExternalLink,
};

interface ServiceIconProps {
  name: string;
  className?: string;
}

export function ServiceIcon({ name, className = "w-6 h-6 text-mpit-blue" }: ServiceIconProps) {
  const IconComponent = ICON_MAP[name] || Code2;
  return <IconComponent className={className} />;
}
