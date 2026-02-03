"use client";

import { CheckCircle2, Terminal } from "lucide-react";

const experiences = [
  {
    id: "exp_01",
    role: "Freelance Web Developer",
    company: "Self-Employed",
    date: "Nov 2024 — Present",
    status: "Active",
    tech: ["Next.js", "AI Integration", "Cloud Deployment", "Django"],
    logs: [
      "Designing and deploying full-stack web solutions for various clients, focusing on scalability and performance.",
      "Integrating AI features such as Large Language Models (LLMs) and Text-to-Speech (TTS) into web applications.",
      "Managing the end-to-end development lifecycle, from initial requirement gathering to cloud deployment.",
    ],
  },
  {
    id: "exp_02",
    role: "Web Developer",
    company: "Tanta Innovatives",
    date: "Jun 2024 — Nov 2024",
    status: "Completed",
    tech: ["TypeScript", "Next.js", "Remote Collaboration"],
    logs: [
      "Developed high-performance, responsive user interfaces for diverse freelance projects using TypeScript and Next.js.",
      "Collaborated with remote teams to deliver scalable web solutions within tight deadlines.",
      "Specialized in implementing clean, maintainable code for complex client requirements.",
    ],
  },
];

export default function Experience() {

  return (
    <section className="py-24 border-t border-zinc-900 bg-zinc-950/50 relative overflow-hidden">
        {/* Background Decorative */}
        <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Terminal size={400} />
        </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-4 mb-16">
          <div className="h-px bg-zinc-800 flex-grow max-w-[100px]" />
          <span className="text-zinc-500 font-mono text-sm tracking-wider uppercase">
            02 // Execution History
          </span>
          <div className="h-px bg-zinc-800 flex-grow" />
        </div>

        <div className="flex flex-col space-y-12 lg:mr-20">
          {experiences.map((exp, index) => (
            <div key={exp.id} className="group relative">
                {/* Connector Line */}
                {index !== experiences.length - 1 && (
                    <div className="absolute left-[19px] top-12 bottom-[-48px] w-px bg-zinc-800 group-hover:bg-zinc-700 transition-colors" />
                )}
                
              <div className="flex gap-8">
                {/* Status Indicator */}
                <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 rounded-full border border-zinc-800 bg-zinc-950 flex items-center justify-center shrink-0 z-10 ${exp.status === 'Active' ? 'text-green-500 shadow-[0_0_10px_rgba(34,197,94,0.2)]' : 'text-zinc-500'}`}>
                        <CheckCircle2 size={18} />
                    </div>
                </div>

                {/* Content Card */}
                <div className="flex-grow pt-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                        <div>
                            <h3 className="text-2xl font-bold text-zinc-100 font-heading group-hover:text-orange-500 transition-colors">
                            {exp.role} <span className="text-zinc-500 text-lg font-normal">@ {exp.company}</span>
                            </h3>
                            <div className="flex items-center gap-2 mt-1">
                                <span className="text-xs font-mono text-zinc-500 px-2 py-0.5 border border-zinc-800 rounded-full bg-zinc-900/50">{exp.id}</span>
                                <span className="text-sm font-mono text-zinc-400">{exp.date}</span>
                            </div>
                        </div>
                        {/* Tech Tag */}
                        <div className="flex gap-2">
                             {exp.tech.map(t => (
                                 <span key={t} className="hidden md:inline-block text-[10px] uppercase font-mono text-zinc-500 border border-zinc-800 px-2 py-1 rounded-xs">
                                     {t}
                                 </span>
                             ))}
                        </div>
                    </div>

                    {/* Logs */}
                    <div className="font-mono text-sm text-zinc-400 space-y-3 pl-4 border-l-2 border-zinc-800/50 hover:border-orange-500/30 transition-colors bg-zinc-900/10 p-4 rounded-r-md">
                        {exp.logs.map((log, i) => (
                        <div key={i} className="flex gap-3">
                            <span className="text-zinc-600 select-none">$</span>
                            <p className="leading-relaxed">{log}</p>
                        </div>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
