"use client";

import { MessageSquare, Zap, User, Clock } from "lucide-react";

export default function ChatVisual() {
  return (
    <div className="flex items-center justify-center h-full relative z-10 w-full p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent" />
        
        {/* Chat Stream Visualization */}
        <div className="w-full max-w-sm space-y-3">
            {/* WebSocket Connection Badge */}
            <div className="flex items-center gap-2 font-mono text-[9px] text-amber-500/70 mb-4 self-start">
                <Zap size={10} className="animate-pulse" />
                <span className="uppercase tracking-[0.2em]">WebSocket // ws_connected_secure</span>
            </div>

            {/* Message Bubbles */}
            <div className="flex flex-col gap-3">
                <div className="flex items-start gap-2 self-end">
                    <div className="bg-amber-500/10 border border-amber-500/20 text-[10px] text-zinc-300 p-2 rounded-lg rounded-tr-none px-3 font-mono">
                        Is this message delivery real-time?
                        <div className="text-[8px] text-amber-500/40 mt-1 text-right italic">ws_push // 11:20:01</div>
                    </div>
                </div>

                <div className="flex items-start gap-2">
                    <div className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700">
                        <User size={14} className="text-zinc-500" />
                    </div>
                    <div className="bg-zinc-900 border border-zinc-800 text-[10px] text-zinc-400 p-2 rounded-lg rounded-tl-none px-3 font-mono">
                        Confirmed. Delivered via Django Channels.
                        <div className="text-[8px] text-zinc-600 mt-1">recv // 11:20:02</div>
                    </div>
                </div>

                {/* Handshake Animation */}
                <div className="flex items-center gap-2 pt-2 grayscale opacity-40">
                    <div className="h-px bg-zinc-800 flex-grow" />
                    <div className="flex items-center gap-1 font-mono text-[8px] text-zinc-500 uppercase tracking-widest">
                        <Clock size={8} /> Syncing Data Stream
                    </div>
                    <div className="h-px bg-zinc-800 flex-grow" />
                </div>
            </div>
        </div>
    </div>
  );
}
