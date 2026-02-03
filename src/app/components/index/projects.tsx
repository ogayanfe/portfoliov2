"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { projects } from "../projects/data";

export default function Projects() {

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
           <div className="h-px bg-zinc-800 flex-grow max-w-[100px]" />
           <span className="text-zinc-500 font-mono text-sm tracking-wider uppercase">01 // Selected Works</span>
           <div className="h-px bg-zinc-800 flex-grow" />
        </div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <div key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
               {/* Project Info */}
               <div className={`lg:col-span-5 flex flex-col gap-6 ${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-2'}`}>
                  <div className={`${project.color === 'orange' ? 'text-orange-500' : 'text-blue-500'} font-mono text-xs uppercase`}>
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
                      <ul className="space-y-1 text-zinc-300">
                          {project.techStack.map(tech => (
                            <li key={tech} className="flex items-center gap-2">
                              <span className={project.color === 'orange' ? 'text-orange-500' : 'text-blue-500'}>&gt;</span> 
                              {tech}
                            </li>
                          ))}
                      </ul>
                  </div>

                  <div className="pt-4 flex flex-wrap gap-4">
                      {project.links.map(link => (
                        <Link 
                          key={link.label} 
                          href={link.href} 
                          target="_blank"
                          className={`inline-flex items-center gap-2 font-mono text-sm transition-colors group ${
                            link.primary ? 'text-zinc-100' : 'text-zinc-400 hover:text-zinc-100'
                          } ${project.color === 'orange' ? 'hover:text-orange-500' : 'hover:text-blue-500'}`}
                        >
                          {link.label} <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                      ))}
                  </div>
               </div>

               {/* Figure Visual */}
               <div className={`lg:col-span-7 bg-zinc-900/30 border border-zinc-800 p-8 rounded-sm relative group overflow-hidden ${index % 2 === 0 ? 'order-1 lg:order-2' : 'order-1'}`}>
                  {/* Flowchart Overlay for Schema variants */}
                  {project.id === 'gani' && (
                    <div className="absolute top-2 right-2 flex gap-1">
                        <div className="w-2 h-2 bg-zinc-700 rounded-full animate-pulse" />
                        <div className="w-2 h-2 bg-zinc-700 rounded-full" />
                    </div>
                  )}
                  
                  {project.figure}

                  {/* Background Grid inside card */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 -z-0 pointer-events-none" />
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

