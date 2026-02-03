"use client";

import Link from "next/link";
import { Terminal, Home, AlertTriangle, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Background Engineering Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />
      
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-2xl px-4">
        {/* Site Identity Header */}
        <div className="mb-12 flex flex-col items-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.5em] text-zinc-500 mb-2">
                Odule Ayanfeoluwa // Research & Development
            </div>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>

        {/* Floating 404 Status - Clean & Engineered */}
        <div className="mb-12 relative animate-float">
            <div className="relative z-10">
                <h1 className="text-[140px] md:text-[200px] font-bold leading-none tracking-tighter text-zinc-100 select-none drop-shadow-2xl">
                    404
                </h1>
                <div className="absolute top-0 right-0 -mr-4 mt-8 flex flex-col gap-1">
                    <div className="w-2 h-2 rounded-full bg-blue-500" />
                    <div className="w-2 h-2 rounded-full bg-zinc-800" />
                </div>
            </div>
            
            {/* Soft backdrop glow (Subtle) */}
            <div className="absolute inset-0 bg-blue-500/10 blur-[80px] rounded-full -z-10" />
        </div>

        {/* Terminal Info - Standard Log */}
        <div className="w-full max-w-lg bg-zinc-950/50 border border-zinc-900 p-6 rounded-sm font-mono text-left shadow-xl backdrop-blur-sm mb-12">
            <div className="flex items-center justify-between border-b border-zinc-900 pb-3 mb-4">
                <div className="flex items-center gap-2 text-zinc-500">
                    <Terminal size={14} />
                    <span className="text-[10px] uppercase tracking-widest text-zinc-500">System_Log: routing.sys</span>
                </div>
            </div>
            
            <div className="space-y-2 text-xs md:text-sm text-zinc-400">
                <p className="flex gap-3">
                    <span className="text-zinc-600">&gt;</span>
                    <span>Searching for requested resource...</span>
                </p>
                <p className="flex gap-3">
                    <span className="text-zinc-600">&gt;</span>
                    <span>Target not found: <span className="text-red-400">NULL_POINTER_EXCEPTION</span></span>
                </p>
                <p className="flex gap-3 pt-2 text-zinc-500 italic">
                    <span className="text-zinc-700">&gt;</span>
                    <span>"The page you are looking for has been moved or deleted."</span>
                </p>
                <p className="animate-pulse pt-1">_</p>
            </div>
        </div>

        {/* Navigation Actions - Standard Site Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 items-center">
            <Link 
                href="/"
                className="group flex items-center gap-2 px-8 py-3 bg-zinc-100 text-zinc-950 font-mono text-xs uppercase tracking-widest hover:bg-zinc-200 transition-colors rounded-sm"
            >
                <Home size={14} />
                Back to Portfolio
            </Link>
            
            <button 
                onClick={() => window.history.back()}
                className="flex items-center gap-2 px-8 py-3 border border-zinc-800 text-zinc-500 font-mono text-xs uppercase tracking-widest hover:text-zinc-300 hover:border-zinc-700 transition-colors rounded-sm"
            >
                <ArrowLeft size={14} />
                Go Back
            </button>
        </div>

        {/* Footer Metadata */}
        <div className="mt-24 font-mono text-[9px] text-zinc-800 uppercase tracking-[0.4em]">
            System Online // v2.4.0
        </div>
      </div>
    </main>
  );
}
