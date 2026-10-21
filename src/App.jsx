import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import WixProjects from './components/WixProjects';
import ReactProjects from './components/ReactProjects';
import UiUxProjects from './components/UiUxProjects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500 selection:text-white">
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        {/* 1. Home (Hero) */}
        <Hero />

        {/* 2. About Me */}
        <About />

        {/* 3. Skills */}
        <Skills />

        {/* 4. Wix / Wix Studio Projects */}
        <WixProjects onSelectProject={setSelectedProject} />

        {/* 5. React / Next.js Projects */}
        <ReactProjects onSelectProject={setSelectedProject} />

        {/* 6. UI/UX Projects */}
        <UiUxProjects onSelectProject={setSelectedProject} />

        {/* 7. Experience */}
        <Experience />

        {/* 8. Contact */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* In-depth Project Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
