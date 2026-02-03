"use client";

import { ArrowRight, ChevronDown, ChevronUp, Image as ImageIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { projects } from "../projects/data";
import GalleryOverlay from "../projects/GalleryOverlay";

interface ProjectLink {
  label: string;
  href: string;
  primary?: boolean;
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [activeGallery, setActiveGallery] = useState<{ isOpen: boolean; images: string[]; name: string; color: string }>({
    isOpen: false,
    images: [],
    name: '',
    color: ''
  });

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  const openGallery = (project: any) => {
    setActiveGallery({
        isOpen: true,
        images: project.gallery || [],
        name: project.title,
        color: project.color
    });
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
           <div className="h-px bg-zinc-800 flex-grow max-w-[100px]" />
           <span className="text-zinc-500 font-mono text-sm tracking-wider uppercase">01 // Selected Works</span>
           <div className="h-px bg-zinc-800 flex-grow" />
        </div>

        <div className="flex flex-col gap-32">
          {displayedProjects.map((project, index) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               {/* Project Info */}
               <div className={`lg:col-span-5 flex flex-col gap-6 ${index % 2 === 1 ? 'order-2' : 'order-2 lg:order-1'}`}>
                  <div className={`font-mono text-xs uppercase ${
                    project.color === 'orange' ? 'text-orange-500' : 
                    project.color === 'blue' ? 'text-blue-500' : 
                    project.color === 'purple' ? 'text-purple-500' : 
                    project.color === 'emerald' ? 'text-emerald-500' : 
                    project.color === 'amber' ? 'text-amber-500' : 
                    'text-indigo-500'
                  }`}>
                    {project.tag}
                  </div>
                  <h2 className="text-4xl font-bold text-zinc-100">{project.title}</h2>
                  <div className="text-zinc-400 leading-relaxed font-mono text-sm space-y-2">
                      {project.description.map((line, i) => (
                        <p key={i}>• {line}</p>
                      ))}
                  </div>
                  
                  {/* Tech Stack List */}
                  <div className="border border-zinc-800 bg-zinc-950/50 p-4 font-mono text-xs mt-4">
                      <p className="text-zinc-500 border-b border-zinc-800 pb-2 mb-2">Technical Stack</p>
                      <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-zinc-300">
                          {project.techStack.map(tech => (
                            <li key={tech} className="flex items-center gap-2">
                              <span className={`text-[10px] ${
                                project.color === 'orange' ? 'text-orange-500' : 
                                project.color === 'blue' ? 'text-blue-500' : 
                                project.color === 'purple' ? 'text-purple-500' : 
                                project.color === 'emerald' ? 'text-emerald-500' : 
                                project.color === 'amber' ? 'text-amber-500' : 
                                'text-indigo-500'
                              }`}>&gt;</span> 
                              {tech}
                            </li>
                          ))}
                      </ul>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                      {project.links.map((link: ProjectLink) => (
                        <Link 
                          key={link.label} 
                          href={link.href} 
                          target="_blank"
                          className={`inline-flex items-center gap-2 font-mono text-sm transition-colors group ${
                            link.primary ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-100'
                          } ${
                            project.color === 'orange' ? 'hover:text-orange-500' : 
                            project.color === 'blue' ? 'hover:text-blue-500' : 
                            project.color === 'purple' ? 'hover:text-purple-500' : 
                            project.color === 'emerald' ? 'hover:text-emerald-500' : 
                            project.color === 'amber' ? 'hover:text-amber-500' : 
                            'hover:text-indigo-500'
                          }`}
                        >
                          {link.label} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ))}
                  </div>
               </div>

               {/* Figure Visual Container */}
               <div className={`lg:col-span-7 bg-zinc-900/30 border border-zinc-800 rounded-sm relative group overflow-hidden ${index % 2 === 1 ? 'order-1' : 'order-1 lg:order-2'}`}>
                  {project.figure}

                  {/* Gallery Trigger Badge */}
                  {project.gallery && project.gallery.length > 0 && (
                    <button 
                        onClick={() => openGallery(project)}
                        className={`absolute bottom-4 right-4 z-20 flex items-center gap-2 px-3 py-1.5 border bg-zinc-950 font-mono text-[10px] uppercase tracking-wider transition-all hover:scale-105 active:scale-95 ${
                            project.color === 'orange' ? 'border-orange-500/30 text-orange-500 hover:border-orange-500/60 shadow-[0_0_15px_rgba(249,115,22,0.1)]' : 
                            project.color === 'blue' ? 'border-blue-500/30 text-blue-500 hover:border-blue-500/60 shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 
                            project.color === 'purple' ? 'border-purple-500/30 text-purple-500 hover:border-purple-500/60 shadow-[0_0_15px_rgba(168,85,247,0.1)]' : 
                            project.color === 'emerald' ? 'border-emerald-500/30 text-emerald-500 hover:border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.1)]' : 
                            project.color === 'amber' ? 'border-amber-500/30 text-amber-500 hover:border-amber-500/60 shadow-[0_0_15px_rgba(245,158,11,0.1)]' : 
                            'border-indigo-500/30 text-indigo-500 hover:border-indigo-500/60 shadow-[0_0_15px_rgba(99,102,241,0.1)]'
                        }`}
                    >
                        <ImageIcon size={12} />
                        [ Preview_UI ] // {String(project.gallery.length).padStart(2, '0')}_assets
                    </button>
                  )}
               </div>
            </div>
          ))}
        </div>

        {/* View More Controller */}
        <div className="mt-24 flex flex-col items-center gap-6">
            <div className="h-px bg-zinc-900 w-full mb-8" />
            <button 
                onClick={() => setShowAll(!showAll)}
                className="group flex flex-col items-center gap-3 transition-all"
            >
                <div className="text-[10px] font-mono text-zinc-500 uppercase tracking-[0.3em] group-hover:text-zinc-300">
                    {showAll ? 'Collapse Archive' : 'View Full Case Studies'}
                </div>
                <div className="w-12 h-12 rounded-full border border-zinc-800 flex items-center justify-center group-hover:border-orange-500/50 group-hover:bg-orange-500/5 transition-all">
                    {showAll ? <ChevronUp size={20} className="text-zinc-500 group-hover:text-orange-500" /> : <ChevronDown size={20} className="text-zinc-500 group-hover:text-orange-500" />}
                </div>
            </button>
        </div>
      </div>

      {/* Gallery Overlay */}
      <GalleryOverlay 
        isOpen={activeGallery.isOpen}
        onClose={() => setActiveGallery(prev => ({ ...prev, isOpen: false }))}
        images={activeGallery.images}
        projectName={activeGallery.name}
        projectColor={activeGallery.color}
      />
    </section>
  );
}



