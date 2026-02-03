"use client";

import { Mic, Globe, Cpu, Speaker, Layers, Server } from "lucide-react";
import { FlowItem, FlowArrow } from "./shared";

export default function GaniSchema() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center h-full relative z-10">
        <div className="text-xs font-mono text-zinc-500 absolute top-0 left-0 text-center md:text-left">Architecture schema: fluid_data_flow_v2_docker</div>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
            <FlowItem icon={<Mic size={20} />} label="User Voice" />
            <FlowArrow />
            <FlowItem icon={<Globe size={20} />} label="Next.js PWA" highlight color="orange" />
            <FlowArrow />
            <FlowItem icon={<Cpu size={20} />} label="Gemini AI" />
        </div>
        <div className="h-8 w-px bg-zinc-700/50 hidden md:block" />
        <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center">
            <FlowItem icon={<Speaker size={20} />} label="Audio Output" />
            <FlowArrow reverse />
            <FlowItem icon={<Layers size={20} />} label="HF Model" />
            <FlowArrow reverse />
            <FlowItem icon={<Server size={20} />} label="Flask (Docker)" highlight color="orange" />
        </div>
    </div>
  );
}
