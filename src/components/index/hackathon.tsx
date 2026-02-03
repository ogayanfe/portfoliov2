"use client";

import Image from "next/image";
import Link from "next/link";
import { Trophy, ExternalLink, Award, Medal } from "lucide-react";

// Import the local image
import certificateImg from "./codefest-hackathon-certificate.png";

export default function Hackathon() {
  return (
    <section className="py-24 border-t border-zinc-900 bg-zinc-950 relative overflow-hidden">
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-3xl" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-orange-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-4 mb-16">
           <div className="h-px bg-zinc-800 flex-grow max-w-[100px]" />
           <span className="text-zinc-500 font-mono text-sm tracking-wider uppercase">01.5 // Achievement Unlocked</span>
           <div className="h-px bg-zinc-800 flex-grow" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="flex flex-col gap-6">
                <div className="inline-flex items-center gap-2 text-yellow-500 font-mono text-xs border border-yellow-500/20 bg-yellow-500/5 px-3 py-1 rounded-full w-fit">
                    <Trophy size={14} />
                    <span>Top 12 Finalist - Nigeria</span>
                </div>
                
                <h2 className="text-3xl md:text-5xl font-bold font-heading text-zinc-100 leading-tight">
                    Guinness World Record Attempt: <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Codefest 2025</span>
                </h2>
                
                <p className="text-zinc-400 text-lg leading-relaxed border-l-2 border-zinc-800 pl-4">
                    Participated in the world's longest online hackathon attempt. Selected as one of the <strong>Top 12 Teams</strong> out of a massive competitive pool for the development of <span className="text-orange-500 font-mono">GANI</span>.
                </p>

                <div className="flex flex-col gap-3 mt-2">
                    <div className="flex items-center gap-3 text-zinc-300 font-mono text-sm">
                        <Award size={18} className="text-purple-400" />
                        <span>Global Hackathon Finalist</span>
                    </div>
                    <div className="flex items-center gap-3 text-zinc-300 font-mono text-sm">
                        <Medal size={18} className="text-purple-400" />
                        <span>Excellence in AI Innovation</span>
                    </div>
                </div>

                <div className="pt-4">
                    <Link 
                        href="https://github.com/ogayanfe/ganibot" 
                        target="_blank"
                        className="inline-flex items-center gap-2 bg-zinc-100 text-zinc-950 font-mono font-bold px-6 py-3 rounded-sm hover:bg-purple-500 hover:text-white transition-all group"
                    >
                        View Project GANI
                        <ExternalLink size={16} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                    </Link>
                </div>
            </div>

            {/* Certificate Visual */}
            <div className="relative group animate-float">
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-orange-500/20 rounded-lg blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                <div className="relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-2 backdrop-blur-sm overflow-hidden shadow-2xl skew-y-1 group-hover:skew-y-0 transition-transform duration-700 ease-out">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500" />
                    <Image 
                        src={certificateImg} 
                        alt="Codefest Hackathon Certificate" 
                        className="rounded-sm w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity"
                    />
                    
                    {/* Overlay Badge */}
                    <div className="absolute bottom-4 right-4 bg-zinc-950/90 border border-zinc-800 px-4 py-2 rounded-md flex items-center gap-2 shadow-lg">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                        <span className="text-xs font-mono text-zinc-300">Verified Credential</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
