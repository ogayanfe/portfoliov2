"use client";

import { ArrowRight } from "lucide-react";

export function FlowItem({ icon, label, highlight = false, color = "orange" }: { icon: any, label: string, highlight?: boolean, color?: "orange" | "blue" }) {
    const activeClass = color === "orange" ? "border-orange-500/50 bg-orange-500/10 text-orange-500" : "border-blue-500/50 bg-blue-500/10 text-blue-500";
    return (
        <div className={`flex flex-col items-center gap-3 p-4 border ${highlight ? activeClass : 'border-zinc-800 bg-zinc-950'} rounded-sm w-32 shrink-0 transition-all hover:border-zinc-500`}>
            <div className={`${highlight ? '' : 'text-zinc-400'}`}>
                {icon}
            </div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-center">{label}</span>
        </div>
    );
}

export function FlowArrow({ reverse = false }: {reverse?: boolean}) {
    return (
        <div className={`hidden md:flex items-center justify-center text-zinc-700 ${reverse ? 'rotate-180' : ''}`}>
            <ArrowRight size={16} />
        </div>
    );
}
