"use client";

import { Heart, MessageCircle, Share2, UserPlus } from "lucide-react";

export default function BirdieVisual() {
  return (
    <div className="flex items-center justify-center h-full relative z-10 w-full p-4">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />
        
        {/* Social Feed Mockup */}
        <div className="w-full max-w-sm space-y-4">
            {/* Post Card 1 */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center text-[10px] font-bold text-purple-400">OA</div>
                    <div className="flex flex-col">
                        <span className="text-xs font-bold text-zinc-200">Grandeur</span>
                        <span className="text-[10px] text-zinc-500 font-mono">@ogayanfe // 2m ago</span>
                    </div>
                </div>
                <div className="h-2 w-full bg-zinc-900 rounded-full mb-2" />
                <div className="h-2 w-[80%] bg-zinc-900 rounded-full mb-4" />
                <div className="flex items-center justify-between text-zinc-500 pt-2 border-t border-zinc-900">
                    <div className="flex gap-4">
                        <div className="flex items-center gap-1 text-[10px]"><Heart size={12} className="text-pink-500" /> 124</div>
                        <div className="flex items-center gap-1 text-[10px]"><MessageCircle size={12} /> 12</div>
                    </div>
                    <Share2 size={12} />
                </div>
            </div>

            {/* Post Card 2 (Partial) */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-lg p-4 shadow-xl translate-x-12 opacity-50 hidden md:block">
                <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 border border-zinc-700" />
                    <div className="flex flex-col gap-1">
                        <div className="h-2 w-16 bg-zinc-800 rounded-full" />
                        <div className="h-1.5 w-10 bg-zinc-900 rounded-full" />
                    </div>
                    <button className="ml-auto text-[10px] border border-purple-500/30 text-purple-400 px-2 py-0.5 rounded-full flex items-center gap-1">
                        <UserPlus size={10} /> Follow
                    </button>
                </div>
            </div>
        </div>
        
        {/* Floating Tags */}
        <div className="absolute top-4 right-4 bg-purple-500/10 border border-purple-500/30 px-2 py-1 rounded font-mono text-[9px] text-purple-400 uppercase tracking-widest animate-pulse">
            Real-time Feed
        </div>
    </div>
  );
}
