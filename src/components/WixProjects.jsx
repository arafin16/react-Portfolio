import React, { useState } from 'react';
import { Layers, ExternalLink, Eye, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { wixProjects } from '../data/portfolioData';

export default function WixProjects({ onSelectProject }) {
  const [filter, setFilter] = useState('All');

  const filterOptions = ['All', 'Wix Studio', 'Wix eCommerce', 'Wix Bookings'];

  const filteredProjects = filter === 'All'
    ? wixProjects
    : wixProjects.filter(p => p.category.toLowerCase().includes(filter.toLowerCase()) || p.tags.some(t => t.toLowerCase().includes(filter.toLowerCase())));

  return (
    <section id="wix-projects" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-xs font-semibold text-indigo-300">
              <Layers className="w-3.5 h-3.5" />
              <span>No-Code & Low-Code Engineering</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Wix & Wix Studio Projects
            </h2>
            <p className="text-slate-400 text-base">
              Crafting bespoke responsive experiences, dynamic Velo JavaScript logic, and robust CMS architectures for international brands and high-growth businesses.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => setFilter(opt)}
                className={`px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                  filter === opt
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                    : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Feature Highlights Banner */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-purple-950/30 to-slate-900 border border-indigo-800/30 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-indigo-500/20 text-indigo-400">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Fluid Responsive Scale</h4>
              <p className="text-xs text-slate-400 mt-1">Seamless proportional scaling across custom 4K down to mobile viewport breakpoints.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-purple-500/20 text-purple-400">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Velo JavaScript Logic</h4>
              <p className="text-xs text-slate-400 mt-1">Custom interactive filters, backend webhooks, third-party payment gateways, and APIs.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-pink-500/20 text-pink-400">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-white">Client-Ready CMS Datasets</h4>
              <p className="text-xs text-slate-400 mt-1">Dynamic collection databases empowering clients to update content easily with zero code.</p>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 flex flex-col"
            >
              {/* Project Card Image Thumbnail */}
              <div className="relative h-64 overflow-hidden bg-slate-950 cursor-pointer" onClick={() => onSelectProject(project)}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-indigo-600/90 text-white backdrop-blur-md shadow-md">
                    {project.category}
                  </span>
                </div>

                {/* Quick View Overlay on hover */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-300">
                  <button 
                    onClick={(e) => { e.stopPropagation(); onSelectProject(project); }}
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white text-slate-900 font-semibold text-xs shadow-lg hover:bg-slate-100 transition-colors"
                  >
                    <Eye className="w-4 h-4" />
                    <span>View Case Study</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 line-clamp-2 leading-relaxed">
                    {project.subtitle}
                  </p>

                  {/* Impact Metric */}
                  <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/50 text-xs text-indigo-300 font-medium">
                    {project.metrics}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded-md bg-slate-800 text-[11px] font-medium text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1.5"
                  >
                    <span>Full Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-medium text-slate-200 hover:text-white transition-colors"
                  >
                    <span>Live Preview</span>
                    <ExternalLink className="w-3.5 h-3.5" />
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
