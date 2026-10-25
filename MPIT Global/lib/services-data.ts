export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortTitle: string;
  tagline: string;
  iconName: string;
  heroBadge: string;
  description: string;
  longOverview: string;
  keyBenefits: { title: string; description: string }[];
  features: { name: string; description: string; tag: string }[];
  process: { step: string; title: string; desc: string }[];
  technologies: { category: string; items: string[] }[];
  metricsHighlight: { stat: string; label: string };
  faqs: { question: string; answer: string }[];
  whyChooseUs: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "web-development",
    slug: "web-development",
    number: "01",
    title: "Website Design & Development",
    shortTitle: "Web Development",
    tagline: "Your website is your digital identity — we make it unforgettable.",
    iconName: "Code2",
    heroBadge: "Modern Web Engineering UK",
    description:
      "Clean, modern, mobile-friendly websites built for performance and conversions. Custom WordPress, Shopify, and bespoke web platforms.",
    longOverview:
      "Your website is the heart of your digital presence. MPIT Global creates custom, high-performance websites tailored to UK business standards. Whether you need a lead-generating business website, a Shopify e-commerce store, or a bespoke booking platform, we engineer fast, secure, and SEO-ready solutions that convert visitors into customers.",
    keyBenefits: [
      {
        title: "Professional Online Presence",
        description: "A clean, modern website that makes your business look professional and builds instant customer trust.",
      },
      {
        title: "Higher Conversions",
        description: "Strategically placed CTAs and frictionless user journeys engineered to turn traffic into enquiries and sales.",
      },
      {
        title: "Better User Experience",
        description: "Sub-second load times, mobile-first responsiveness, and smooth navigation on all screen sizes.",
      },
      {
        title: "Stronger Brand Credibility",
        description: "SEO-ready architecture and modern aesthetics that position you ahead of UK competitors.",
      },
    ],
    features: [
      {
        name: "Modern, Clean & Responsive Designs",
        description: "Tailored UI layouts that look stunning across desktop, tablet, and mobile devices.",
        tag: "Design",
      },
      {
        name: "WordPress, Shopify & Custom Development",
        description: "Expert engineering on leading platforms and custom full-stack web architectures.",
        tag: "Development",
      },
      {
        name: "E-Commerce Stores & Payment Gateways",
        description: "Secure Stripe, PayPal, and Apple Pay checkout systems with inventory synchronization.",
        tag: "E-Commerce",
      },
      {
        name: "Booking Systems & Portals",
        description: "Automated appointment scheduling, table reservations, and client management workflows.",
        tag: "Portals",
      },
      {
        name: "SEO-Ready Structure",
        description: "Schema markup, fast Core Web Vitals, and semantic hierarchy for higher Google visibility.",
        tag: "SEO",
      },
      {
        name: "Fast Loading & Secure Hosting",
        description: "Optimized UK cloud servers with SSL encryption, caching, and automated backups.",
        tag: "Hosting",
      },
    ],
    process: [
      { step: "01", title: "Discovery & Blueprint", desc: "Understanding your business goals, target audience, and required website features." },
      { step: "02", title: "Custom UI/UX Design", desc: "Creating modern visual wireframes and prototypes tailored to your brand identity." },
      { step: "03", title: "Development & Integration", desc: "Building clean, responsive code with SEO optimization and content setup." },
      { step: "04", title: "Testing & Review", desc: "Rigorous cross-browser and mobile device testing, speed tuning, and client feedback." },
      { step: "05", title: "Launch & Training", desc: "Domain setup, SSL configuration, go-live deployment, and handover training." },
    ],
    technologies: [
      { category: "Platforms & CMS", items: ["WordPress", "Shopify", "WooCommerce", "Next.js", "React"] },
      { category: "Languages & Styles", items: ["TypeScript", "PHP", "HTML5/CSS3", "Tailwind CSS", "JavaScript"] },
      { category: "Database & Cloud", items: ["MySQL", "PostgreSQL", "AWS", "Vercel", "Cloudflare"] },
      { category: "Payment & Tools", items: ["Stripe", "PayPal", "Google Analytics", "Search Console"] },
    ],
    metricsHighlight: { stat: "100%", label: "Mobile-responsive and SEO-ready on launch" },
    faqs: [
      {
        question: "How long does it take to build our website?",
        answer: "Most business websites and online stores are completed and launched within 7 to 21 days depending on project requirements.",
      },
      {
        question: "Can I easily update my website content after launch?",
        answer: "Yes! We build user-friendly administration dashboards (WordPress or Shopify) and provide full training so you can easily edit text and images.",
      },
      {
        question: "Will our website be mobile-friendly and fast?",
        answer: "Absolutely. All our websites are 100% mobile-responsive, optimized for Google Core Web Vitals, and tested across all major devices.",
      },
    ],
    whyChooseUs: [
      "UK-focused web development tailored to local business expectations",
      "Fast delivery without compromising on visual polish or code quality",
      "Transparent pricing with no hidden surprises",
      "End-to-end service including domain, email, hosting, and SEO",
    ],
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    number: "02",
    title: "Digital Marketing & SEO",
    shortTitle: "Digital Marketing",
    tagline: "Grow your visibility. Grow your customers. Grow your business.",
    iconName: "TrendingUp",
    heroBadge: "Data-Driven UK Growth",
    description:
      "Grow your visibility, attract customers, and increase sales with data-driven marketing, Google ranking improvement, and paid ads.",
    longOverview:
      "In today’s competitive UK market, having a website isn't enough — customers need to find you. MPIT Global delivers comprehensive digital marketing and SEO services designed to increase search rankings, drive high-intent website traffic, and generate consistent enquiries and sales.",
    keyBenefits: [
      {
        title: "More Traffic",
        description: "Rank higher on Google and attract ready-to-buy UK customers seeking your exact services.",
      },
      {
        title: "More Enquiries",
        description: "Targeted campaigns and local search optimization that fill your pipeline with qualified leads.",
      },
      {
        title: "More Sales",
        description: "High-ROI advertising and conversion-focused funnels that translate traffic into tangible revenue.",
      },
      {
        title: "Stronger Brand Awareness",
        description: "Cohesive multi-channel visibility across Google, Meta, and social platforms.",
      },
    ],
    features: [
      {
        name: "Google Ranking Improvement",
        description: "On-page and technical SEO strategies that move your business to the first page of Google.",
        tag: "SEO",
      },
      {
        name: "Local SEO for UK Businesses",
        description: "Google Maps, Google Business Profile optimization, and local citation building in your area.",
        tag: "Local SEO",
      },
      {
        name: "Social Media Management",
        description: "Consistent posting, engaging graphics, and community growth on Instagram, LinkedIn, and Facebook.",
        tag: "Social",
      },
      {
        name: "Paid Ads (Google Ads & Meta Ads)",
        description: "Precision PPC campaigns targeting customers with high purchase intent for maximum ROAS.",
        tag: "Paid Ads",
      },
      {
        name: "Content Strategy & Brand Messaging",
        description: "Compelling copywriting, blog articles, and sales copy that resonate with UK buyers.",
        tag: "Content",
      },
      {
        name: "Analytics & ROI Reporting",
        description: "Transparent bi-weekly reports detailing rankings, visitor numbers, and enquiry conversions.",
        tag: "Analytics",
      },
    ],
    process: [
      { step: "01", title: "Market & Keyword Audit", desc: "Analyzing your local competitors, search intent, and high-value search keywords." },
      { step: "02", title: "Campaign & SEO Blueprint", desc: "Structuring targeted ad funnels, content calendar, and on-page technical fixes." },
      { step: "03", title: "Launch & Ad Management", desc: "Setting up tracking pixels, launching campaigns, and deploying local citations." },
      { step: "04", title: "Optimization & A/B Testing", desc: "Refining ad copy, keywords, and landing pages to reduce CAC and boost conversions." },
      { step: "05", title: "Transparent Reporting", desc: "Clear monthly review of ranking gains, traffic growth, and sales generated." },
    ],
    technologies: [
      { category: "Ad Networks", items: ["Google Ads", "Meta Ads Manager", "Instagram Ads", "LinkedIn Ads", "Bing Ads"] },
      { category: "SEO & Analytics", items: ["Google Search Console", "Google Analytics 4", "Semrush", "Ahrefs", "Looker Studio"] },
      { category: "Social & Content", items: ["Buffer", "Canva Pro", "Grammarly", "Meta Business Suite"] },
    ],
    metricsHighlight: { stat: "+200%", label: "Average increase in inbound enquiries within 90 days" },
    faqs: [
      {
        question: "How fast can we see results from SEO and digital marketing?",
        answer: "Paid Google and Meta Ads start driving targeted traffic and enquiries within 24–48 hours. Organic SEO ranking improvements typically build strong momentum within 30 to 60 days.",
      },
      {
        question: "Do you focus on local SEO for specific UK towns and cities?",
        answer: "Yes! We specialize in local UK SEO for London, Surrey, Crawley, Redhill, and surrounding regions, optimizing Google Map Packs and local keywords.",
      },
      {
        question: "How do you track enquiries and return on investment?",
        answer: "We configure conversion tracking on form submissions, phone calls, and purchases, providing transparent, easy-to-understand reports.",
      },
    ],
    whyChooseUs: [
      "Results-driven approach focused on leads and sales, not vanity metrics",
      "Transparent communication with zero confusing jargon",
      "Affordable monthly packages tailored for UK startups and SMEs",
      "Dedicated marketing specialist managing your campaigns",
    ],
  },
  {
    id: "design",
    slug: "design",
    number: "03",
    title: "Branding & Creative",
    shortTitle: "Branding & Creative",
    tagline: "Your brand is your first impression — make it strong.",
    iconName: "Palette",
    heroBadge: "Visual Identity & Creative Design",
    description:
      "Build a strong, memorable brand identity that sets you apart with custom logo design, visual style guides, and marketing materials.",
    longOverview:
      "In a crowded marketplace, visual consistency builds trust. MPIT Global crafts unforgettable brand identities that resonate with your target audience. From iconic logos and typography palettes to printed marketing collateral and digital assets, we ensure your business looks established and premium.",
    keyBenefits: [
      {
        title: "Professional Brand Image",
        description: "Instantly convey credibility and professionalism to prospective UK clients.",
      },
      {
        title: "Consistent Identity",
        description: "Unified colors, typography, and visual assets across all digital and print mediums.",
      },
      {
        title: "Strong Customer Trust",
        description: "Polished design that instills customer confidence and elevates your pricing power.",
      },
      {
        title: "Standout Market Presence",
        description: "A distinctive, modern look that clearly differentiates you from local competitors.",
      },
    ],
    features: [
      {
        name: "Custom Logo Design",
        description: "Unique, versatile vector logos designed for web, mobile, print, and signage.",
        tag: "Logo",
      },
      {
        name: "Brand Identity Guidelines",
        description: "Curated color palettes, typography pairing, iconography, and usage standards.",
        tag: "Identity",
      },
      {
        name: "Business Cards & Stationery",
        description: "Print-ready business cards, letterheads, invoice templates, and corporate documents.",
        tag: "Print",
      },
      {
        name: "Brochures & Marketing Materials",
        description: "Product catalogs, flyers, promotional banners, and sales presentation decks.",
        tag: "Marketing",
      },
      {
        name: "Social Media Branding",
        description: "Profile avatars, banner headers, and editable social media post templates.",
        tag: "Social",
      },
      {
        name: "Website UI/UX Design",
        description: "High-converting interface layouts and visual prototypes for digital platforms.",
        tag: "UI/UX",
      },
    ],
    process: [
      { step: "01", title: "Brand Consultation", desc: "Exploring your vision, core values, target demographic, and industry style references." },
      { step: "02", title: "Concept Exploration", desc: "Presenting multiple unique logo and visual identity concept directions." },
      { step: "03", title: "Refinement & Polish", desc: "Fine-tuning colors, typography pairing, and spacing based on your feedback." },
      { step: "04", title: "Collateral Development", desc: "Designing business cards, brochures, social templates, and marketing assets." },
      { step: "05", title: "Master File Handover", desc: "Delivering all vector files (AI, EPS, SVG, PNG, PDF) and full brand guideline documentation." },
    ],
    technologies: [
      { category: "Design Tools", items: ["Adobe Illustrator", "Photoshop", "Figma", "InDesign", "Canva Pro"] },
      { category: "Formats Delivered", items: ["Vector (AI, EPS, SVG)", "High-Res PNG/JPG", "Print-Ready PDF", "WebP"] },
    ],
    metricsHighlight: { stat: "100%", label: "Original custom artwork with full copyright ownership" },
    faqs: [
      {
        question: "What files will I receive with my new logo and branding?",
        answer: "You receive complete master vector files (AI, EPS, SVG) suitable for billboards and print, as well as high-resolution PNGs and JPGs for digital and web use.",
      },
      {
        question: "Do I own full copyright to my brand assets?",
        answer: "Yes, once the project is completed, you own 100% full commercial copyright to all approved logos and design assets.",
      },
      {
        question: "Can you help design print materials like business cards and brochures?",
        answer: "Yes, we provide print-ready artwork with bleed and CMYK color profiles, ready to send directly to your printer of choice.",
      },
    ],
    whyChooseUs: [
      "Clean, modern, premium design tailored for the UK market",
      "Fast delivery with collaborative review rounds",
      "Complete package from logo and brand book to marketing collateral",
      "100% bespoke design created from scratch",
    ],
  },
  {
    id: "consulting",
    slug: "consulting",
    number: "04",
    title: "IT Support & Technical Services",
    shortTitle: "IT Support",
    tagline: "Reliable support that keeps your business running smoothly.",
    iconName: "ShieldCheck",
    heroBadge: "UK IT Support & Managed Services",
    description:
      "Reliable technical support, hosting setup, email configuration, website maintenance, and security monitoring whenever you need it.",
    longOverview:
      "Your technology should work seamlessly in the background so you can focus on running your business. MPIT Global provides dependable IT support, secure cloud hosting, professional email setup, regular website maintenance, and rapid troubleshooting for UK businesses.",
    keyBenefits: [
      {
        title: "Peace of Mind",
        description: "Proactive website maintenance and monitoring so you never have to worry about unexpected downtime.",
      },
      {
        title: "Smooth Operations",
        description: "Fast, dependable business email and cloud hosting that ensures daily workflows run without interruption.",
      },
      {
        title: "Quick Issue Resolution",
        description: "Responsive UK technical support ready to troubleshoot and resolve technical glitches fast.",
      },
      {
        title: "Security & Backups",
        description: "Automated daily backups, SSL security, and firewall monitoring protecting your vital business data.",
      },
    ],
    features: [
      {
        name: "Hosting Setup & Proactive Management",
        description: "Fast, reliable UK-optimized cloud hosting with 99.9% uptime guarantees.",
        tag: "Hosting",
      },
      {
        name: "Business Email Configuration",
        description: "Professional Google Workspace and Microsoft 365 setup with custom domain integration.",
        tag: "Email",
      },
      {
        name: "Website Maintenance & Updates",
        description: "Regular plugin, theme, and security updates keeping your web platforms running at peak health.",
        tag: "Maintenance",
      },
      {
        name: "Security Monitoring & Malware Protection",
        description: "Firewall configuration, SSL certificate renewal, and automated vulnerability scanning.",
        tag: "Security",
      },
      {
        name: "Technical Troubleshooting & Helpdesk",
        description: "Rapid assistance for domain issues, DNS updates, broken forms, and software errors.",
        tag: "Support",
      },
      {
        name: "Cloud Backup & Disaster Recovery",
        description: "Scheduled off-site backups with one-click restore options to protect against data loss.",
        tag: "Backups",
      },
    ],
    process: [
      { step: "01", title: "IT Environment Audit", desc: "Reviewing your current domain, hosting, email, and website setup for vulnerabilities." },
      { step: "02", title: "Setup & Optimization", desc: "Configuring secure UK cloud hosting, DNS records, business emails, and SSL certificates." },
      { step: "03", title: "Backup & Security Shield", desc: "Enabling automated daily backups, security firewalls, and monitoring alerts." },
      { step: "04", title: "Ongoing Maintenance", desc: "Performing regular software updates, performance health checks, and database cleanup." },
      { step: "05", title: "Rapid Support Desk", desc: "Available for technical queries, email troubleshooting, and website changes whenever needed." },
    ],
    technologies: [
      { category: "Hosting & Cloud", items: ["AWS", "Cloudflare", "cPanel", "Vercel", "DigitalOcean"] },
      { category: "Email & Productivity", items: ["Google Workspace", "Microsoft 365", "Outlook", "Gmail"] },
      { category: "Security & Monitoring", items: ["Let's Encrypt SSL", "Wordfence", "UptimeRobot", "Sucuri"] },
    ],
    metricsHighlight: { stat: "24/7", label: "Reliable automated security monitoring and backup systems" },
    faqs: [
      {
        question: "Can you help set up professional business emails with our domain?",
        answer: "Yes, we handle complete email configuration for Google Workspace or Microsoft 365, including SPF, DKIM, and DMARC security records for high deliverability.",
      },
      {
        question: "What happens if our website goes down?",
        answer: "Our automated monitoring tools alert us immediately. We investigate and restore your service rapidly, drawing from fresh automated backups if needed.",
      },
      {
        question: "Do you offer monthly maintenance plans for small businesses?",
        answer: "Yes, we offer affordable monthly care packages covering plugin updates, security scans, content edits, and dedicated technical support.",
      },
    ],
    whyChooseUs: [
      "Clear, honest technical communication with no jargon",
      "UK-based support tailored to your business working hours",
      "Affordable plans with no long-term lock-ins",
      "Proactive care that stops problems before they affect your customers",
    ],
  },
];
