"use client";

import { ArrowRight, Globe, Cpu, Server, Layers, Mic, Speaker } from "lucide-react";
import Link from "next/link";

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
          {/* Project 1: GANI */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
                <div className="text-orange-500 font-mono text-xs">EXPERIMENTAL // AI ASSISTANT</div>
                <h2 className="text-4xl font-bold text-zinc-100">GANI: Hausa Voice Assistant</h2>
                <div className="text-zinc-400 leading-relaxed font-mono text-sm space-y-2">
                    <p>• Developed a Progressive Web App (PWA) to bridge the digital divide for over 80 million Hausa speakers.</p>
                    <p>• Engineered the TTS Server: Built the text-to-speech infrastructure to convert Gemini-generated Hausa responses into natural audio.</p>
                    <p>• AI Integration: Leveraged Gemini AI for natural language processing and Hausa-specific response generation.</p>
                </div>
                
                {/* Tech Stack List */}
                <div className="border border-zinc-800 bg-zinc-950/50 p-4 font-mono text-xs mt-4">
                    <p className="text-zinc-500 border-b border-zinc-800 pb-2 mb-2">Technical Stack</p>
                    <ul className="space-y-1 text-zinc-300">
                        <li className="flex items-center gap-2"><span className="text-orange-500">&gt;</span> Next.js</li>
                        <li className="flex items-center gap-2"><span className="text-orange-500">&gt;</span> Tailwind CSS</li>
                        <li className="flex items-center gap-2"><span className="text-orange-500">&gt;</span> Gemini AI</li>
                        <li className="flex items-center gap-2"><span className="text-orange-500">&gt;</span> Flask Hausa TTS</li>
                    </ul>
                </div>

                <div className="pt-4">
                    <Link href="https://github.com/ogayanfe/ganibot" target="_blank" className="inline-flex items-center gap-2 text-zinc-100 font-mono text-sm hover:text-orange-500 transition-colors group">
                        View Repository (Codefest Hackathon) <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Architecture Flowchart Visual */}
            <div className="lg:col-span-7 bg-zinc-900/30 border border-zinc-800 p-8 rounded-sm relative group order-1 lg:order-2">
                {/* Flowchart Overlay */}
                <div className="absolute top-2 right-2 flex gap-1">
                    <div className="w-2 h-2 bg-zinc-700 rounded-full animate-pulse" />
                    <div className="w-2 h-2 bg-zinc-700 rounded-full" />
                </div>

                <div className="flex flex-col gap-8 items-center justify-center h-full relative z-10">
                    <div className="text-xs font-mono text-zinc-500 absolute top-0 left-0">Architecture schema: fluid_data_flow_v2_docker</div>
                    
                    {/* The Flow */}
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
                        {/* 1. User Voice */}
                        <FlowItem icon={<Mic size={20} />} label="User Voice" />
                        
                        <FlowArrow />
                        
                        {/* 2. Next.js */}
                        <FlowItem icon={<Globe size={20} />} label="Next.js PWA" highlight />
                        
                        <FlowArrow />
                        
                        {/* 3. Gemini AI */}
                        <FlowItem icon={<Cpu size={20} />} label="Gemini AI" />
                    </div>
                    
                    <div className="h-8 w-px bg-zinc-700/50 hidden md:block" />
                    
                    <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
                        {/* 6. Audio Out */}
                        <FlowItem icon={<Speaker size={20} />} label="Audio Output" />
                        
                        <FlowArrow reverse />
                        
                        {/* 5. HF Model */}
                        <FlowItem icon={<Layers size={20} />} label="HF Model" />
                        
                        <FlowArrow reverse />
                        
                        {/* 4. Flask TTS */}
                        <FlowItem icon={<Server size={20} />} label="Flask (Docker)" highlight />
                    </div>
                </div>

                {/* Background Grid inside card */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 -z-0 pointer-events-none" />
            </div>
          </div>

          {/* Project 2: Websandbox */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
             <div className="lg:col-span-7 bg-zinc-900/30 border border-zinc-800 p-8 rounded-sm relative overflow-hidden flex items-center justify-center">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
                 {/* Visual Representation */}
                 <div className="w-full max-w-sm border border-zinc-700 bg-zinc-950 p-4 font-mono text-xs text-zinc-400 shadow-2xl">
                    <div className="flex justify-between border-b border-zinc-800 pb-2 mb-2">
                        <span>root@browser:~#</span>
                        <div className="flex gap-1">
                            <div className="w-2 h-2 rounded-full bg-zinc-700" />
                        </div>
                    </div>
                    <div className="space-y-1">
                        <p>&gt; webcontainer.mount(files)</p>
                        <p className="text-zinc-500">Booting Node.js in browser...</p>
                        <p className="text-green-500">✓ File system ready</p>
                        <p className="text-green-500">✓ Dev server started on :3000</p>
                        <p className="text-blue-400">Ready for code execution.</p>
                        <p className="animate-pulse">_</p>
                    </div>
                 </div>
             </div>
             
             <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="text-blue-500 font-mono text-xs">INFRASTRUCTURE // BROWSER RUNTIME</div>
                <h2 className="text-4xl font-bold text-zinc-100">Websandbox</h2>
                <div className="text-zinc-400 leading-relaxed font-mono text-sm space-y-2">
                    <p>• Engineered an in-browser IDE capable of running Node.js entirely client-side using WebContainers.</p>
                    <p>• Achieved millisecond startup times by eliminating server-side container orchestration.</p>
                    <p>• Implemented real-time preview and file system manipulation.</p>
                </div>
                 <div className="border border-zinc-800 bg-zinc-950/50 p-4 font-mono text-xs mt-4">
                    <p className="text-zinc-500 border-b border-zinc-800 pb-2 mb-2">Technical Stack</p>
                    <ul className="space-y-1 text-zinc-300">
                        <li className="flex items-center gap-2"><span className="text-blue-500">&gt;</span> StackBlitz WebContainers</li>
                        <li className="flex items-center gap-2"><span className="text-blue-500">&gt;</span> React & Vite</li>
                        <li className="flex items-center gap-2"><span className="text-blue-500">&gt;</span> Monaco Editor</li>
                        <li className="flex items-center gap-2"><span className="text-blue-500">&gt;</span> Service Workers</li>
                    </ul>
                </div>
                 <div className="pt-4 flex flex-wrap gap-4">
                    <Link href="https://websandboxx.netlify.app/" target="_blank" className="inline-flex items-center gap-2 text-zinc-100 font-mono text-sm hover:text-blue-500 transition-colors group">
                        Live Demo <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="https://github.com/ogayanfe/websandbox" target="_blank" className="inline-flex items-center gap-2 text-zinc-400 font-mono text-sm hover:text-zinc-100 transition-colors group">
                        View Repository <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FlowItem({ icon, label, highlight = false }: { icon: any, label: string, highlight?: boolean }) {
    return (
        <div className={`flex flex-col items-center gap-3 p-4 border ${highlight ? 'border-orange-500/50 bg-orange-500/10' : 'border-zinc-800 bg-zinc-950'} rounded-sm w-32 shrink-0 transition-all hover:border-zinc-500`}>
            <div className={`${highlight ? 'text-orange-500' : 'text-zinc-400'}`}>
                {icon}
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-center">{label}</span>
        </div>
    )
}

function FlowArrow({ reverse = false }: {reverse?: boolean}) {
    return (
        <div className={`hidden md:flex items-center justify-center text-zinc-700 ${reverse ? 'rotate-180' : ''}`}>
            <ArrowRight size={16} />
        </div>
    )
}
