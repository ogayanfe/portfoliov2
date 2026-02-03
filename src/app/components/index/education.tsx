"use client";

import { GraduationCap, Award, ExternalLink, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function Education() {
  const certifications = [
    {
      title: "Guinness World Record Attempt (Codefest 2025)",
      issuer: "Top 12 Finalist Certificate",
      date: "2025",
      link: "https://drive.google.com/file/d/1KwitSdo_WaPDSeAIQBMmYSr_3W9EmVVT/view?usp=sharing", 
      category: "Hackathon"
    },
    {
      title: "Legacy JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      date: "2024",
      link: "https://www.freecodecamp.org/certification/O_A_Grandeur/javascript-algorithms-and-data-structures",
      category: "Algorithm Design"
    },
    {
      title: "Responsive Web Design",
      issuer: "FreeCodeCamp",
      date: "2023",
      link: "https://www.freecodecamp.org/certification/O_A_Grandeur/responsive-web-design",
      category: "Frontend"
    }
  ];

  return (
    <section className="py-24 border-t border-zinc-900 bg-zinc-950/20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center gap-4 mb-16">
           <div className="h-px bg-zinc-800 flex-grow max-w-[100px]" />
           <span className="text-zinc-500 font-mono text-sm tracking-wider uppercase">04 // Credentials & Modules</span>
           <div className="h-px bg-zinc-800 flex-grow" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Education */}
            <div className="lg:col-span-12 xl:col-span-5 flex flex-col gap-8">
                <div className="flex items-center gap-3">
                    <GraduationCap className="text-orange-500" size={24} />
                    <h2 className="text-2xl font-bold font-heading">Academic Path</h2>
                </div>
                
                <div className="relative border border-zinc-800 bg-zinc-900/30 p-8 rounded-sm overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/5 blur-3xl rounded-full" />
                    <div className="relative z-10 flex flex-col gap-4">
                        <div className="text-orange-500 font-mono text-xs uppercase tracking-widest">In Progress // 2022 - 2026</div>
                        <h3 className="text-2xl font-bold text-zinc-100 font-heading">B.ENG Electrical and Electronics Engineering</h3>
                        <p className="text-lg text-zinc-400 font-mono tracking-tight">
                            Federal University of Agriculture, Abeokuta (FUNAAB)
                        </p>
                        <div className="flex items-center gap-2 mt-2 text-zinc-500 font-mono text-sm">
                            <ShieldCheck size={14} />
                            <span>Academic Registry Verified</span>
                        </div>
                    </div>
                    {/* Bottom Indicator */}
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-zinc-800">
                        <div className="w-[75%] h-full bg-orange-500 animate-pulse" />
                    </div>
                </div>
            </div>

            {/* Certifications */}
            <div className="lg:col-span-12 xl:col-span-7 flex flex-col gap-8">
                <div className="flex items-center gap-3">
                    <Award className="text-orange-500" size={24} />
                    <h2 className="text-2xl font-bold font-heading">Verified Certifications</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {certifications.map((cert) => (
                        <div key={cert.title} className="group border border-zinc-800 bg-zinc-950/50 p-6 rounded-sm hover:border-orange-500/50 transition-all flex flex-col justify-between">
                            <div className="space-y-3">
                                <div className="flex justify-between items-start">
                                    <span className="text-[10px] font-mono uppercase bg-zinc-900 text-zinc-500 px-2 py-0.5 rounded-xs border border-zinc-800">
                                        {cert.category}
                                    </span>
                                    <span className="text-[10px] font-mono text-zinc-600">{cert.date}</span>
                                </div>
                                <h3 className="text-sm font-bold text-zinc-200 leading-snug group-hover:text-zinc-100 transition-colors">
                                    {cert.title}
                                </h3>
                                <p className="text-xs text-zinc-500 font-mono">{cert.issuer}</p>
                            </div>
                            
                            <div className="mt-6">
                                <Link 
                                    href={cert.link} 
                                    target="_blank"
                                    className="inline-flex items-center gap-2 text-[10px] font-mono text-zinc-400 hover:text-orange-500 transition-colors uppercase tracking-widest"
                                >
                                    Verify Credential <ExternalLink size={10} />
                                </Link>
                            </div>
                        </div>
                    ))}
                    {/* Placeholder for more */}
                    <div className="border border-zinc-800 border-dashed p-6 rounded-sm flex items-center justify-center opacity-40">
                         <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Awaiting New Modules...</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
