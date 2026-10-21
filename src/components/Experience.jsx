import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Sparkles, GraduationCap } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-xs font-semibold text-indigo-300">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience & Background
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Track record of driving measurable client outcomes, leading web development initiatives, and delivering high-value digital products.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Timeline Rule */}
          <div className="absolute left-4 md:left-1/2 top-4 bottom-4 -translate-x-1/2 w-0.5 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 opacity-30" />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row gap-8 items-start ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Center Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-slate-900 border-4 border-indigo-500 shadow-md shadow-indigo-500/50 flex items-center justify-center z-10">
                    <div className="w-2 h-2 rounded-full bg-white" />
                  </div>

                  {/* Content Card */}
                  <div className="ml-12 md:ml-0 md:w-1/2">
                    <div className="p-6 sm:p-7 rounded-3xl bg-slate-900/90 border border-slate-800 hover:border-indigo-500/50 shadow-xl transition-all duration-300 space-y-4">
                      
                      {/* Period Badge & Company */}
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-950/80 border border-indigo-800/60 text-xs font-semibold text-indigo-300">
                          <Calendar className="w-3.5 h-3.5" />
                          {exp.period}
                        </span>
                        <span className="text-xs text-slate-400 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-500" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Role & Company */}
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-sm font-semibold text-indigo-400 mt-0.5">
                          {exp.company}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="space-y-2 pt-2 border-t border-slate-800/80">
                        <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Key Impact</span>
                        <ul className="space-y-2">
                          {exp.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2 text-xs text-slate-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                    </div>
                  </div>

                  {/* Empty Spacer on opposite side */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              );
            })}
          </div>

          {/* Education & Certifications Card */}
          <div className="mt-16 p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900/90 to-indigo-950/30 border border-slate-800 shadow-xl">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-indigo-600/20 text-indigo-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Education & Professional Credentials</h3>
                  <p className="text-xs text-slate-400">Certified Web & UX Engineering Standards</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                <div className="text-xs font-bold text-indigo-400">B.S. Computer Science</div>
                <div className="text-xs text-slate-300 mt-1">University of California</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Focus on Software & Human-Computer Interaction</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                <div className="text-xs font-bold text-purple-400">Certified Wix Studio Legend</div>
                <div className="text-xs text-slate-300 mt-1">Wix Studio Partner Program</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Mastery in Velo JS, CMS & Fluid Canvas</div>
              </div>
              <div className="p-4 rounded-2xl bg-slate-800/40 border border-slate-700/50">
                <div className="text-xs font-bold text-pink-400">Meta Frontend Developer</div>
                <div className="text-xs text-slate-300 mt-1">Meta Certified</div>
                <div className="text-[11px] text-slate-500 mt-0.5">React, Next.js, Web Architecture & UI/UX</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
