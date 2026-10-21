import React from 'react';
import { 
  CheckCircle2, 
  Sparkles, 
  Code, 
  Layout, 
  Gauge, 
  HeartHandshake, 
  Compass, 
  Layers,
  ArrowRight
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Layout className="w-5 h-5 text-indigo-400" />,
      title: "UI/UX & Design Precision",
      description: "Crafting wireframes, Figma prototypes, and complete design systems that prioritize user flow, aesthetics, and accessibility."
    },
    {
      icon: <Layers className="w-5 h-5 text-purple-400" />,
      title: "Wix & Wix Studio Mastery",
      description: "Harnessing fluid proportional scaling, dynamic CMS collections, custom Velo JavaScript code, and tailored client solutions."
    },
    {
      icon: <Code className="w-5 h-5 text-cyan-400" />,
      title: "Modern React & Next.js",
      description: "Writing scalable, clean, and maintainable code with modern hooks, TypeScript, and Tailwind CSS for blisteringly fast web apps."
    },
    {
      icon: <Gauge className="w-5 h-5 text-emerald-400" />,
      title: "SEO & Core Web Vitals",
      description: "Engineering every layout to achieve 90+ Lighthouse performance scores, fluid responsiveness, and high conversion rates."
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-xs font-semibold text-indigo-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Bridging Creative Design with Robust Engineering
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A developer who understands design. A designer who knows how code works.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Bio Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900 group">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
                alt="Workspace"
                className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-2">
                <div className="text-xs uppercase font-bold tracking-widest text-indigo-400">
                  Developer & Designer
                </div>
                <h3 className="text-xl font-bold text-white">
                  Creating Impactful Digital Products
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Based in San Francisco with remote collaboration with clients, startups, and agencies across the globe.
                </p>
              </div>
            </div>

            {/* Quick Checkmarks Card */}
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3">
              <h4 className="text-sm font-semibold text-slate-200">What I Bring to the Table</h4>
              <ul className="space-y-2.5 text-xs text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Turnkey Wix Studio development with custom Velo scripting</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Modern, modular Next.js / React application architecture</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Interactive Figma design systems & prototype handoffs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Zero-compromise responsiveness across mobile, tablet & desktop</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: In-depth Story & Pillars */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                Hello! I'm <span className="text-white font-semibold">{personalInfo.name}</span>. Over the last   years, I have specialized in building modern web interfaces that don't just look visually breathtaking, but also deliver tangible business results.
              </p>
              <p>
                Too often, design and code exist in separate silos—leading to compromised design execution, clunky responsiveness, or difficult-to-maintain codebases. I operate seamlessly across both worlds: crafting high-fidelity design prototypes in <strong className="text-white">Figma</strong>, creating flexible client platforms in <strong className="text-white">Wix Studio</strong>, and engineering complex web applications with <strong className="text-white">React, Next.js, and Tailwind CSS</strong>.
              </p>
              <p>
                Whether you need a bespoke luxury brand website built on Wix Studio with custom databases, or a scalable SaaS frontend powered by Next.js, I treat each project with pixel-level devotion.
              </p>
            </div>

            {/* Core Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800/80 hover:border-slate-700 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-10 h-10 rounded-xl bg-slate-800/90 flex items-center justify-center mb-3">
                    {pillar.icon}
                  </div>
                  <h4 className="text-base font-bold text-white mb-1.5">{pillar.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-2">
              <a
                href="#skills"
                className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold text-sm group"
              >
                <span>View my complete skill set and tech stack</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
