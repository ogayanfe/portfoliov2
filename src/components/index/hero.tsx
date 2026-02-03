"use client";

import Link from "next/link";
import { ArrowRight, Terminal, LayoutTemplate, Zap, Github, Linkedin, Twitter, Mail, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20">
       
       <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
         
         {/* Left: Text */}
         <div className="flex flex-col space-y-8">
            <div className="inline-flex items-center space-x-2 text-orange-500 font-mono text-sm tracking-wider uppercase border border-orange-500/20 bg-orange-500/5 px-3 py-1 rounded-sm w-fit">
                <Terminal size={14} />
                <span>System Status: Online</span>
            </div>
            
            <div className="space-y-2">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight font-heading text-zinc-100">
                    Odule Ayanfeoluwa Grandeur
                </h1>
                <h2 className="text-2xl md:text-3xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600 font-mono">
                    Software Developer
                </h2>
            </div>
            
            <p className="text-lg text-zinc-400 max-w-xl leading-relaxed font-mono text-sm md:text-base border-l-2 border-zinc-800 pl-4">
                Specializing in building accessible, pixel-perfect, and performant web experiences. Focused on modern React ecosystems and scalable web architecture.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-6 text-zinc-500">
                <SocialLink href="https://github.com/ogayanfe" icon={<Github size={20} />} label="Github" target='_blank'/>
                <SocialLink href="https://linkedin.com/in/ogayanfe" icon={<Linkedin size={20} />} label="LinkedIn" target='_blank'/>
                <SocialLink href="https://x.com/ogayanfe" icon={<Twitter size={20} />} label="Twitter" target='_blank' />
                <SocialLink href="mailto:ogayanfe.me@gmail.com" icon={<Mail size={20} />} label="Email" target='_blank'/>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-4">
                <Link
                    href="#projects"
                    className="group bg-zinc-100 text-zinc-950 font-mono font-bold px-6 py-3 rounded-sm hover:bg-orange-500 transition-colors flex items-center gap-2"
                >
                    View Projects
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                    href="#contact"
                    className="px-6 py-3 rounded-sm font-mono font-medium text-zinc-400 border border-zinc-800 hover:border-orange-500 hover:text-orange-500 transition-colors"
                >
                    Contact Me
                </Link>
                <Link
                    href="/resume.pdf"
                    target="_blank"
                    className="px-6 py-3 rounded-sm font-mono font-medium text-zinc-400 border border-zinc-800 hover:border-zinc-100 hover:text-zinc-100 hover:bg-zinc-900 transition-colors flex items-center gap-2"
                >
                    <FileText size={18} />
                    Resume
                </Link>
            </div>
         </div>

         {/* Right: Code Visualizer */}
         <div className="relative group animate-float">
            <CodeTerminal />
            
            {/* Glow Behind */}
            <div className="absolute -inset-4 bg-blue-500/10 blur-3xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-teal-500/20 blur-xl -z-10 rounded-lg opacity-40" />
         </div>
       </div>
    </section>
  );
}

function SocialLink({ icon, href, label, target }: { icon: React.ReactNode; href: string; label: string; target?: string }) {
  return (
    <Link href={href} aria-label={label} className="hover:text-orange-500 hover:-translate-y-1 transition-all duration-300" target={target}>
      {icon}
    </Link>
  );
}

function CodeTerminal() {
    return (
        <div className="rounded-lg border border-zinc-800 bg-zinc-950/90 backdrop-blur-md overflow-hidden shadow-2xl relative z-10 transition-transform duration-500 group-hover:-translate-y-2">
            {/* Title Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-zinc-900/50 border-b border-zinc-800">
                <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
                    <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                </div>
                <div className="text-xs font-mono text-zinc-500 flex items-center gap-2">
                    <LayoutTemplate size={12} />
                    components/ui/interface.tsx
                </div>
                <div className="w-12" /> {/* Spacer */}
            </div>
            
            {/* Code Content */}
            <div className="p-6 overflow-x-auto text-sm font-mono leading-relaxed">
                <div className="flex">
                    <div className="flex flex-col text-zinc-700 select-none pr-4 text-right border-r border-zinc-900 mr-4 font-mono">
                        {/* Line numbers */}
                        {Array.from({ length: 15 }).map((_, i) => (
                            <span key={i}>{i + 1}</span>
                        ))}
                    </div>
                    <CodeSnippet />
                </div>
            </div>
            
            {/* Status Bar */}
            <div className="px-4 py-2 bg-zinc-900/50 border-t border-zinc-800 flex justify-between items-center text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 text-blue-400"><Zap size={12} /> TypeScript</span>
                    <span className="flex items-center gap-1 text-orange-400"> Next.js 15</span>
                </div>
                <span>Ln 14, Col 2</span>
            </div>
        </div>
    );
}

function CodeSnippet() {
    return (
        <div className="text-zinc-300 whitespace-nowrap">
            <div><span className="text-purple-400">import</span> {"{ motion }"} <span className="text-purple-400">from</span> <span className="text-green-400">&quot;framer-motion&quot;</span>;</div>
            <div className="h-5" />
            <div><span className="text-purple-400">interface</span> <span className="text-yellow-400">Props</span> {"{"}</div>
            <div className="pl-4">children: React.ReactNode;</div>
            <div className="pl-4">className?: <span className="text-blue-400">string</span>;</div>
            <div>{"}"}</div>
            <div className="h-5" />
            <div><span className="text-purple-400">export const</span> <span className="text-blue-300">GlassPanel</span> = ({"{"} children, className {"}"}: Props) =&gt; (</div>
            <div className="pl-4"><span className="text-yellow-400">&lt;motion.div</span></div>
            <div className="pl-8">initial=<span className="text-blue-400">{"{{ opacity: 0, y: 20 }}"}</span></div>
            <div className="pl-8">animate=<span className="text-blue-400">{"{{ opacity: 1, y: 0 }}"}</span></div>
            <div className="pl-8">className={`backdrop-blur-md border border-zinc-800 ${"{"}className{"}"}`}</div>
            <div className="pl-4"><span className="text-yellow-400">&gt;</span></div>
            <div className="pl-8">{"{"}children{"}"}</div>
            <div className="pl-4"><span className="text-yellow-400">&lt;/motion.div&gt;</span></div>
            <div>);</div>
        </div>
    );
}
