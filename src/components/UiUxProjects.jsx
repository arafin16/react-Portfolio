import React from 'react';
import { Palette, ExternalLink, Eye, ArrowRight, Figma, CheckCircle2, Sparkles } from 'lucide-react';
import { uiuxProjects } from '../data/portfolioData';

export default function UiUxProjects({ onSelectProject }) {
  return (
    <section id="uiux-projects" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-950/80 border border-pink-800/60 text-xs font-semibold text-pink-300">
              <Palette className="w-3.5 h-3.5" />
              <span>Visual Design & User Experience</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              UI/UX & Product Design Projects
            </h2>
            <p className="text-slate-400 text-base">
              Human-centered interfaces designed with rigorous usability principles, Figma auto-layout design systems, and delightful micro-interactions.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">Design Tool:</span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-pink-950/60 border border-pink-800/50 text-xs font-semibold text-pink-300">
              <Figma className="w-3.5 h-3.5" /> Figma Professional
            </span>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {uiuxProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-pink-500/50 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-pink-500/10 transition-all duration-300 flex flex-col"
            >
              {/* Image Preview */}
              <div 
                className="relative h-60 overflow-hidden bg-slate-950 cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-600/90 text-white backdrop-blur-md shadow-md">
                    {project.category}
                  </span>
                </div>

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300">
                  <button 
                    onClick={(e) => { e.stopPropagation(); onSelectProject(project); }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-900 font-semibold text-xs shadow-lg hover:bg-slate-100 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Design Study</span>
                  </button>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white group-hover:text-pink-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.subtitle}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="space-y-1.5 pt-1">
                    <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">Deliverables</span>
                    <div className="space-y-1">
                      {project.deliverables.slice(0, 2).map((item, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Summary Metric */}
                  <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 text-[11px] text-pink-300">
                    {project.summary}
                  </div>
                </div>

                {/* Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-pink-400 hover:text-pink-300 inline-flex items-center gap-1"
                  >
                    <span>Read Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-pink-600/20 hover:bg-pink-600 text-pink-300 hover:text-white border border-pink-500/30 text-xs font-medium transition-colors"
                  >
                    <Figma className="w-3.5 h-3.5" />
                    <span>Prototype</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
