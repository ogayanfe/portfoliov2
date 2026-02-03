import { Mic, Globe, Cpu, Speaker, Layers, Server } from "lucide-react";
import { FlowItem, FlowArrow, FigureContainer } from "./shared";

export default function GaniSchema() {
  return (
    <FigureContainer color="orange" className="flex-col gap-8">
        <div className="text-[10px] font-mono text-zinc-500 absolute top-4 left-6 uppercase tracking-widest opacity-50">Architecture schema: fluid_data_flow_v2</div>
        
        <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center scale-90 md:scale-100 mt-8 md:mt-0">
            <FlowItem icon={<Mic size={20} />} label="User Voice" />
            <FlowArrow />
            <FlowItem icon={<Globe size={20} />} label="Next.js PWA" highlight color="orange" />
            <FlowArrow />
            <FlowItem icon={<Cpu size={20} />} label="Gemini AI" />
        </div>
        
        <div className="h-4 md:h-8 w-px bg-zinc-700/50" />
        
        <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-center scale-90 md:scale-100">
            <FlowItem icon={<Speaker size={20} />} label="Audio Output" />
            <FlowArrow reverse />
            <FlowItem icon={<Layers size={20} />} label="HF Model" />
            <FlowArrow reverse />
            <FlowItem icon={<Server size={20} />} label="Flask (Docker)" highlight color="orange" />
        </div>
    </FigureContainer>
  );
}
