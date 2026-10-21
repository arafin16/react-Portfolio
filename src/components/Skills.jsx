import React, { useState } from 'react';
import { 
  Sparkles, 
  Code2, 
  Layers, 
  Palette, 
  Wrench, 
  Globe, 
  FileCode, 
  FileText, 
  Layout, 
  Cpu, 
  Server, 
  Monitor, 
  Terminal, 
  Database, 
  ShoppingBag, 
  Calendar, 
  Workflow, 
  Figma, 
  LayoutTemplate, 
  Compass, 
  Users, 
  Smartphone, 
  Image, 
  PlaySquare, 
  GitBranch, 
  Cloud, 
  TrendingUp, 
  CheckCircle2, 
  Zap 
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

// Map icon string name to Lucide component
const iconMap = {
  Code2,
  Globe,
  FileCode,
  FileText,
  Palette,
  Layout,
  Cpu,
  Server,
  Layers,
  Monitor,
  Terminal,
  Database,
  ShoppingBag,
  Calendar,
  Sparkles,
  Workflow,
  Figma,
  LayoutTemplate,
  Compass,
  Users,
  Smartphone,
  Image,
  PlaySquare,
  GitBranch,
  Cloud,
  TrendingUp,
  CheckCircle2,
  Zap,
};

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', label: 'All Skills', icon: Sparkles },
    { id: 'frontend', label: 'React / Frontend', icon: Code2 },
    { id: 'wix', label: 'Wix & Wix Studio', icon: Layers },
    { id: 'uiux', label: 'UI/UX & Figma', icon: Palette },
    { id: 'tools', label: 'Tools & DevOps', icon: Wrench },
  ];

  const getFilteredSkills = () => {
    switch (activeTab) {
      case 'frontend':
        return [{ title: 'Frontend & Modern Web', skills: skillsData.frontend }];
      case 'wix':
        return [{ title: 'Wix Studio & CMS Ecosystem', skills: skillsData.wixEcosystem }];
      case 'uiux':
        return [{ title: 'UI/UX & Product Design', skills: skillsData.uiux }];
      case 'tools':
        return [{ title: 'Tools & Deployment Workflow', skills: skillsData.toolsAndWorkflow }];
      default:
        return [
          { title: 'Frontend & Modern Web', skills: skillsData.frontend },
          { title: 'Wix Studio & CMS Ecosystem', skills: skillsData.wixEcosystem },
          { title: 'UI/UX & Product Design', skills: skillsData.uiux },
          { title: 'Tools & Deployment Workflow', skills: skillsData.toolsAndWorkflow },
        ];
    }
  };

  return (
    <section id="skills" className="py-24 bg-slate-900/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-950/80 border border-purple-800/60 text-xs font-semibold text-purple-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical & Creative Expertise</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Skills & Technologies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            A comprehensive overview of my capabilities across coding, no-code/low-code CMS, and user interface design.
          </p>

          {/* Interactive Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-600/30'
                      : 'bg-slate-800/60 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700/60'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Skills Group Grid */}
        <div className="space-y-12">
          {getFilteredSkills().map((group, groupIdx) => (
            <div key={groupIdx} className="space-y-5">
              <h3 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-500" />
                {group.title}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {group.skills.map((skill, sIdx) => {
                  const IconComponent = iconMap[skill.icon] || Code2;
                  return (
                    <div
                      key={sIdx}
                      className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-indigo-500/50 hover:bg-slate-800/80 transition-all duration-200 group"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div className="w-9 h-9 rounded-xl bg-slate-800 group-hover:bg-indigo-600/20 text-indigo-400 flex items-center justify-center transition-colors">
                            <IconComponent className="w-4 h-4" />
                          </div>
                          <span className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-xs font-mono font-bold text-slate-400 group-hover:text-indigo-400 transition-colors">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                        <div
                          className="bg-gradient-to-r from-indigo-500 to-purple-500 h-1.5 rounded-full transition-all duration-700 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
