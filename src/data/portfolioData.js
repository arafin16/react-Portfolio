export const personalInfo = {
  name: "Arafin Alam",
  title: "Frontend Developer & UI/UX Specialist",
  tagline: "Crafting exceptional digital experiences across React, Next.js, Wix Studio, and User-Centric Design.",
  bio: "I am a multi-disciplinary web developer and UI/UX designer with 5+ years of experience transforming creative visions into pixel-perfect, highly responsive, and performant web applications. From custom React/Next.js SaaS platforms to luxury Wix Studio client experiences and Figma design systems, I bridge the gap between design aesthetic and engineering excellence.",
  email: "arafinalam.raj11@gmail.com",
  phone: "+880 1303645008",
  location: "Rajshahi, Bangladesh (Open to Remote Worldwide)",
  status: "Available for  projects & full-time roles",
  stats: [
    { label: "Years Experience", value: "1+" },
    { label: "Projects Completed", value: "5+" },
    { label: "Wix & Wix Studio Sites", value: "6+" },
    { label: "Client Satisfaction", value: "99%" },
  ],
  socials: {
    github: "https://github.com/arafin16",
    linkedin: "https://www.linkedin.com/in/md-arafin-alam-17458b26b/",
    dribbble: "https://dribbble.com",
    behance: "https://behance.net",
    twitter: "https://twitter.com",
  }
};

export const skillsData = {
  frontend: [
    { name: "React.js", level: 95, icon: "Code2" },
    { name: "Next.js (App Router)", level: 90, icon: "Globe" },
    { name: "JavaScript (ES6+)", level: 95, icon: "FileCode" },
    { name: "TypeScript", level: 85, icon: "FileText" },
    { name: "Tailwind CSS", level: 95, icon: "Palette" },
    { name: "HTML5 & CSS3 / SCSS", level: 98, icon: "Layout" },
    { name: "Redux Toolkit & Zustand", level: 88, icon: "Cpu" },
    { name: "REST APIs & GraphQL", level: 90, icon: "Server" },
  ],
  wixEcosystem: [
    { name: "Wix Studio (Responsive Canvas)", level: 98, icon: "Layers" },
    { name: "Wix Classic Editor", level: 95, icon: "Monitor" },
    { name: "Velo by Wix (JavaScript API)", level: 92, icon: "Terminal" },
    { name: "Wix CMS & Dynamic Pages", level: 95, icon: "Database" },
    { name: "Wix eCommerce & Stores", level: 90, icon: "ShoppingBag" },
    { name: "Wix Bookings & Events", level: 88, icon: "Calendar" },
    { name: "Custom Interactions & Animations", level: 94, icon: "Sparkles" },
    { name: "Third-party Integrations / Webhooks", level: 85, icon: "Workflow" },
  ],
  uiux: [
    { name: "Figma (Auto-layout, Components)", level: 95, icon: "Figma" },
    { name: "UI Design & Design Systems", level: 92, icon: "LayoutTemplate" },
    { name: "Wireframing & Prototyping", level: 94, icon: "Compass" },
    { name: "User Research & User Flow", level: 86, icon: "Users" },
    { name: "Mobile-First Responsive Design", level: 98, icon: "Smartphone" },
    { name: "Adobe XD & Photoshop", level: 85, icon: "Image" },
    { name: "Micro-interactions & UX Motion", level: 90, icon: "PlaySquare" },
  ],
  toolsAndWorkflow: [
    { name: "Git & GitHub", level: 92, icon: "GitBranch" },
    { name: "Vercel & Netlify Deployment", level: 90, icon: "Cloud" },
    { name: "SEO & Core Web Vitals Optimization", level: 92, icon: "TrendingUp" },
    { name: "Cross-browser & Responsive QA", level: 96, icon: "CheckCircle2" },
    { name: "Vite & Modern Bundlers", level: 90, icon: "Zap" },
  ]
};

export const wixProjects = [
  {
    id: "wix-1",
    title: "Aura Luxe - Architecture & Interior Studio",
    category: "Wix Studio",
    subtitle: "Fluid responsive design with custom Velo CMS portfolio filtering",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
    description: "A luxury architectural firm website crafted entirely in Wix Studio. Features fluid proportional scaling across every breakpoint, custom Velo interactive filtering for architectural projects, and integrated CMS case study galleries.",
    tags: ["Wix Studio", "Velo JS", "Dynamic CMS", "Fluid Breakpoints", "Custom Animation"],
    challenge: "The client needed an editorial, ultra-modern luxury feel that looks seamless on ultra-wide iMacs down to compact smartphones without awkward layout jumps.",
    solution: "Used Wix Studio's responsive AI layout engine and custom percentage-based grid units, accompanied by custom Velo scripts for dynamic project filtering and custom cursor interactions.",
    liveUrl: "https://wix.com",
    metrics: "+140% Time-on-site, 98 Google Mobile score"
  },
  {
    id: "wix-2",
    title: "Velvet Bloom - Artisanal Botanicals & eCommerce",
    category: "Wix eCommerce",
    subtitle: "High-converting online store with subscription builder & custom cart",
    image: "https://images.unsplash.com/photo-1545239351-ef35f43d514b?auto=format&fit=crop&w=1000&q=80",
    description: "Full-scale eCommerce solution with custom product bundles, subscription checkout, automated inventory notifications, and bespoke brand typography.",
    tags: ["Wix Studio", "Wix Stores", "Velo eCommerce", "Payment Gateways", "SEO Optimization"],
    challenge: "High cart abandonment and lack of customized recurring subscription delivery options on standard templates.",
    solution: "Built custom Velo checkout logic for personalized recurring floral subscriptions, optimized cart drawer with cross-sells, and tailored mobile checkout.",
    liveUrl: "https://wix.com",
    metrics: "+42% Conversion rate increase within 60 days"
  },
  {
    id: "wix-3",
    title: "Apex Horizon - Venture Capital & Fund Portal",
    category: "Wix Studio",
    subtitle: "Corporate portal with investor resource library and gated content",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    description: "Enterprise venture capital web presence designed on Wix Studio. Features dynamic portfolio investments table, member login area for LP documents, and real-time news CMS.",
    tags: ["Wix Studio", "Member Area", "Velo Database", "CMS Collections", "Fintech"],
    challenge: "Strict corporate branding guidelines and the need for restricted investor-only quarterly report portals.",
    solution: "Implemented Wix Studio custom section components with secured member permissions, dynamic dataset connectors, and automated email notifications.",
    liveUrl: "https://wix.com",
    metrics: "Securely serves 200+ limited partners worldwide"
  },
  {
    id: "wix-4",
    title: "Zenith Wellness & Retreats",
    category: "Wix Bookings",
    subtitle: "Multi-location booking system with synchronized calendar & instructor profiles",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1000&q=80",
    description: "Comprehensive wellness sanctuary website with multi-tier retreat packages, automated calendar scheduling, instructor bio CMS, and integrated Stripe payments.",
    tags: ["Wix Bookings", "Wix Studio", "CMS", "SMS Reminders", "Responsive UI"],
    challenge: "Double bookings and manual schedule coordination across 3 retreat centers.",
    solution: "Automated booking synchronization with Google Calendar, real-time seat availability countdown, and custom thank-you onboarding flow.",
    liveUrl: "https://wix.com",
    metrics: "Over 1,200 monthly bookings handled automatically"
  }
];

export const reactProjects = [
  {
    id: "react-1",
    title: "CloudPulse - DevOps Monitoring & Analytics SaaS",
    category: "Next.js / Full-Stack",
    subtitle: "Real-time infrastructure observability platform built with Next.js 14 and Tailwind",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    description: "Modern cloud monitoring dashboard providing real-time CPU, memory, latency, and incident alerting with sub-second WebSocket updates and interactive telemetry charts.",
    tags: ["Next.js 14", "React", "Tailwind CSS", "TypeScript", "Chart.js", "WebSockets"],
    challenge: "Rendering dense live time-series charts without degrading browser UI responsiveness or battery life.",
    solution: "Utilized Next.js Server Components, custom React memoization hooks, and lightweight WebGL canvas rendering for graph telemetry.",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    metrics: "Handles 10k+ data points/sec with 60 FPS UI"
  },
  {
    id: "react-2",
    title: "NovaFlow - AI Workflow Automation Platform",
    category: "React App",
    subtitle: "Drag-and-drop node-based automation builder with AI agent orchestration",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    description: "An intuitive visual canvas for connecting AI prompts, API endpoints, webhooks, and database triggers. Features custom node snapping, undo/redo state management, and real-time execution preview.",
    tags: ["React", "Tailwind CSS", "React Flow", "Zustand", "REST API", "Lucide Icons"],
    challenge: "Complex node graph relationship management and persistent state undo/redo capabilities.",
    solution: "Leveraged Zustand with local storage persistence and modular node connection schemas with custom SVG paths.",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    metrics: "Trusted by 5,000+ beta developers"
  },
  {
    id: "react-3",
    title: "Lumina Marketplace - Digital Asset Platform",
    category: "Next.js & Tailwind",
    subtitle: "High-performance digital marketplace with instant search and dark mode",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    description: "Curated marketplace for 3D creators, sound designers, and UI kits. Features instant debounce search, multi-facet filtering, audio waveform preview, and Stripe checkout.",
    tags: ["Next.js", "Tailwind CSS", "Stripe API", "Algolia Search", "Framer Motion"],
    challenge: "Instantaneous search filtering across thousands of digital products without server strain.",
    solution: "Implemented edge caching, optimistic UI updates, and instant client-side facets with Tailwind styling.",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    metrics: "99 Core Web Vitals score on mobile & desktop"
  },
  {
    id: "react-4",
    title: "TaskGrid - Collaborative Kanban Workspace",
    category: "React / State Management",
    subtitle: "Real-time team project board with drag-and-drop, rich text & activity logs",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1000&q=80",
    description: "Team productivity tool featuring multi-board management, custom tags, markdown task descriptions, file attachments, and team activity timelines.",
    tags: ["React 19", "Tailwind CSS", "@hello-pangea/dnd", "LocalForage", "TypeScript"],
    challenge: "Providing zero-lag drag-and-drop mechanics even with hundreds of nested cards.",
    solution: "Optimized virtual list rendering and isolated card state updates to prevent re-rendering untouched columns.",
    demoUrl: "https://example.com",
    githubUrl: "https://github.com",
    metrics: "Sub-16ms render response on card drag actions"
  }
];

export const uiuxProjects = [
  {
    id: "uiux-1",
    title: "FinPulse - Neo-Banking Mobile App Design",
    category: "Mobile UI/UX",
    subtitle: "End-to-end Figma design system, micro-interactions, and user onboarding flow",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80",
    description: "Complete UI/UX design for a next-generation financial app catering to Gen-Z and freelancers. Includes comprehensive design system with 200+ auto-layout components, dark/light variants, and interactive prototypes.",
    tags: ["Figma", "Design System", "Mobile App UI", "User Research", "Prototyping"],
    deliverables: ["User Persona & Journey Maps", "High-Fidelity Figma Prototype", "Design System & Tokens", "Interactive Micro-interactions"],
    figmaUrl: "https://figma.com",
    summary: "Conducted usability testing across 25 target participants, achieving a 92% System Usability Scale (SUS) score."
  },
  {
    id: "uiux-2",
    title: "HealthSync - Telehealth & Clinical Portal",
    category: "Web & Tablet UI",
    subtitle: "Streamlined consultation dashboard and medical record manager",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1000&q=80",
    description: "Designed a clean, accessibility-first (WCAG AAA) healthcare dashboard enabling physicians to conduct remote video appointments, write prescriptions, and review patient vitals with zero cognitive overload.",
    tags: ["Figma", "Accessible Design (WCAG)", "Design Tokens", "Wireframing", "Healthcare"],
    deliverables: ["Information Architecture", "WCAG 2.1 AAA Contrast System", "Interactive Prototype", "Developer Handoff Specs"],
    figmaUrl: "https://figma.com",
    summary: "Reduced physician administrative documentation time by 35% during clinical user trials."
  },
  {
    id: "uiux-3",
    title: "EcoSphere - Carbon Offset & Smart Living",
    category: "Product Design",
    subtitle: "Gamified environmental tracker with immersive visual dataviz",
    image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1000&q=80",
    description: "An intuitive environmental impact app that helps users monitor home energy usage, calculate carbon footprint, and earn badges for green habits. Includes custom 3D illustration system and micro-animations.",
    tags: ["UI/UX Design", "Figma", "Data Visualization", "Gamification", "UX Copywriting"],
    deliverables: ["Gamification UX Framework", "Custom Iconography System", "Motion Design Guidelines", "Mobile & Tablet Specs"],
    figmaUrl: "https://figma.com",
    summary: "Featured as a Design of the Week showcase on Dribbble with over 15k views."
  }
];

export const experiences = [
  {
    period: "2023 - Present",
    role: "Senior Frontend & Wix Studio Lead Specialist",
    company: "Vanguard Digital Studio",
    location: "San Francisco, CA / Remote",
    description: "Lead the frontend and creative web development department. Architect React/Next.js client applications and build responsive, custom-coded Wix Studio platforms for high-profile clients in fintech, architecture, and luxury brands.",
    achievements: [
      "Delivered 25+ successful client websites with 100% on-time project completion",
      "Pioneered standard Wix Studio + Velo design templates decreasing agency turnaround time by 40%",
      "Mentored junior developers in responsive CSS architecture, Next.js, and design token integration"
    ]
  },
  {
    period: "2021 - 2023",
    role: "Frontend Developer & UI Designer",
    company: "PixelCraft Agency",
    location: "Austin, TX",
    description: "Designed high-fidelity web experiences in Figma and developed responsive React & Tailwind CSS web apps. Collaborated closely with product managers and backend engineers to launch consumer-facing products.",
    achievements: [
      "Engineered reusable React component libraries adopted across 8 agency client projects",
      "Improved mobile conversion rates by 35% through user research and responsive UX audits",
      "Built custom Wix and headless CMS integrations utilizing custom JavaScript and REST APIs"
    ]
  },
  {
    period: "2019 - 2021",
    role: "Web Designer & Junior Frontend Developer",
    company: "Studio Elevate",
    location: "New York, NY",
    description: "Created wireframes, user personas, and visual UI layouts for eCommerce and corporate clients. Converted Figma mockups into accessible, cross-browser compatible HTML5, CSS3, and JavaScript code.",
    achievements: [
      "Designed and launched 30+ client websites on Wix, WordPress, and custom HTML/Tailwind",
      "Conducted usability testing sessions that enhanced client product satisfaction by 28%",
      "Optimized on-page SEO and page performance scores to exceed 90+ on Google Lighthouse"
    ]
  }
];
