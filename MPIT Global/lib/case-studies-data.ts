export interface CaseStudyItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: "Web" | "Mobile" | "Marketing & SEO" | "Design" | "Consulting";
  industry: string;
  year: string;
  summary: string;
  challenge: string;
  solution: string;
  results: { metric: string; label: string }[];
  technologies: string[];
  featured: boolean;
}

export const CASE_STUDY_CATEGORIES = [
  "All",
  "Web",
  "Mobile",
  "Marketing & SEO",
  "Design",
  "Consulting",
] as const;

export const CASE_STUDIES_DATA: CaseStudyItem[] = [
  {
    id: "apex-fintech-portal",
    slug: "apex-fintech-portal",
    title: "Next-Gen Enterprise Wealth Management & Trading Terminal",
    client: "Apex Financial Technologies",
    category: "Web",
    industry: "Fintech & WealthTech",
    year: "2025",
    summary:
      "Modernized a high-frequency trading and wealth management web portal with sub-second data streaming and ultra-low latency charts.",
    challenge:
      "Apex's legacy monolithic portal suffered from 4.2-second load times, heavy memory leaks on real-time data feeds, and an outdated user experience that stalled enterprise client onboarding.",
    solution:
      "Engineered an ultra-fast Next.js App Router platform using WebSockets, Web Workers for chart calculation, dynamic server-side rendering, and a tailored dark-mode design system.",
    results: [
      { metric: "-68%", label: "Page Latency Reduction" },
      { metric: "+140%", label: "Enterprise Trial Signups" },
      { metric: "$38M", label: "New Assets Under Management" },
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "WebSockets", "Node.js", "PostgreSQL", "Redis"],
    featured: true,
  },
  {
    id: "novus-health-telemedicine",
    slug: "novus-health-telemedicine",
    title: "HIPAA-Compliant Cross-Platform Telehealth & Patient Care App",
    client: "Novus Health Systems",
    category: "Mobile",
    industry: "Digital Healthcare",
    year: "2025",
    summary:
      "Delivered a secure, cross-platform mobile application facilitating instant video doctor consultations, prescription tracking, and biometric vitals sync.",
    challenge:
      "Patients faced fragmented booking flows, high video drop-off rates on weak mobile signals, and strict regulatory compliance requirements across multiple European jurisdictions.",
    solution:
      "Built a unified React Native application with WebRTC adaptive bitrate video, end-to-end encrypted chat, Apple HealthKit / Google Health Connect integration, and automated calendar sync.",
    results: [
      { metric: "4.9/5", label: "App Store & Play Store Rating" },
      { metric: "280k+", label: "Active Monthly Telehealth Visits" },
      { metric: "99.98%", label: "HIPAA/GDPR Compliance Score" },
    ],
    technologies: ["React Native", "WebRTC", "TypeScript", "AWS Media Services", "Tailwind / NativeWind", "Supabase"],
    featured: true,
  },
  {
    id: "hyperion-global-commerce",
    slug: "hyperion-global-commerce",
    title: "Multi-Region Headless E-Commerce & SEO Dominance Campaign",
    client: "Hyperion Luxury Retail",
    category: "Marketing & SEO",
    industry: "Luxury E-Commerce",
    year: "2024",
    summary:
      "Executed a comprehensive technical SEO overhaul and multi-channel paid acquisition strategy across 12 countries.",
    challenge:
      "Hyperion was losing organic market share to aggressive competitors, burdened by heavy JavaScript bloat that tanked Core Web Vitals and poor paid ad attribution.",
    solution:
      "Implemented a headless Next.js storefront, structured JSON-LD schema architecture, automated international hreflang tags, and high-converting performance PPC funnels.",
    results: [
      { metric: "+320%", label: "Organic Search Traffic Growth" },
      { metric: "3.8x", label: "ROAS on Performance Media" },
      { metric: "< 0.8s", label: "Largest Contentful Paint (LCP)" },
    ],
    technologies: ["Next.js", "Headless Shopify", "Google Ads", "Ahrefs", "Tailwind CSS", "Cloudflare Edge"],
    featured: true,
  },
  {
    id: "stratum-design-system",
    slug: "stratum-design-system",
    title: "Unified Global Design System & Enterprise UX Overhaul",
    client: "Stratum Capital Partners",
    category: "Design",
    industry: "Private Equity & Real Estate",
    year: "2024",
    summary:
      "Crafted a cohesive multi-brand enterprise design system in Figma with 120+ modular components and synchronized CSS tokens.",
    challenge:
      "Inconsistent UI across 5 internal financial tools and 3 public investor portals led to designer-developer bottlenecks and confusing executive dashboards.",
    solution:
      "Created a unified Design Token repository, dark/light theme systems, WCAG 2.1 AA accessible component patterns, and interactive Figma prototypes.",
    results: [
      { metric: "4x Faster", label: "Feature Design-to-Code Delivery" },
      { metric: "100%", label: "Design Token Consistency" },
      { metric: "98.5%", label: "Executive Usability Approval" },
    ],
    technologies: ["Figma", "Design Tokens", "Storybook", "Tailwind CSS", "Motion UI", "WCAG 2.1 AA"],
    featured: true,
  },
  {
    id: "vanguard-cloud-transformation",
    slug: "vanguard-cloud-transformation",
    title: "Zero-Downtime AWS Cloud Migration & Microservices Modernization",
    client: "Vanguard Global Logistics",
    category: "Consulting",
    industry: "Supply Chain & Logistics",
    year: "2024",
    summary:
      "Architected and migrated an on-premise logistics dispatch engine to automated AWS Kubernetes microservices.",
    challenge:
      "Legacy on-premise servers frequently suffered from downtime during holiday freight surges, costing over $200k/hour in delayed cargo dispatches.",
    solution:
      "Migrated infrastructure to AWS EKS with Terraform IaC, automated horizontal pod auto-scaling, Apache Kafka event streaming, and Datadog monitoring.",
    results: [
      { metric: "100%", label: "Uptime During Peak Holiday Volume" },
      { metric: "-45%", label: "Infrastructure Maintenance Costs" },
      { metric: "12ms", label: "Average Dispatch Latency" },
    ],
    technologies: ["AWS (EKS, RDS, S3)", "Terraform", "Kubernetes", "Apache Kafka", "Docker", "Datadog"],
    featured: false,
  },
  {
    id: "aether-ai-platform",
    slug: "aether-ai-platform",
    title: "Enterprise AI Workflow Studio & Generative Data Pipeline",
    client: "Aether AI Labs",
    category: "Web",
    industry: "Artificial Intelligence",
    year: "2025",
    summary:
      "Built a collaborative drag-and-drop node canvas for data scientists to orchestrate enterprise LLM pipelines in real time.",
    challenge:
      "Building a high-performance interactive node canvas in web browsers that could handle 500+ interconnected logic nodes without frame drops.",
    solution:
      "Developed a custom WebGL/Canvas rendering pipeline with React Flow, WebSocket collaboration, and serverless background execution workers.",
    results: [
      { metric: "60 FPS", label: "Canvas Rendering Performance" },
      { metric: "50k+", label: "Pipelines Executed Daily" },
      { metric: "$12M", label: "Series A Funding Raised" },
    ],
    technologies: ["Next.js", "React Flow", "TypeScript", "Tailwind CSS", "Python FastAPI", "WebSockets"],
    featured: false,
  },
];
