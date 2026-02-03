import { Bot, ShoppingCart, CheckCircle2, Layout } from "lucide-react";
import { FigureContainer } from "./shared";

export default function BotstoreVisual() {
  return (
    <FigureContainer color="emerald">
        {/* Marketplace Dashboard Mockup */}
        <div className="w-full max-w-sm bg-zinc-950 border border-zinc-800 rounded-sm overflow-hidden shadow-2xl scale-90 md:scale-100">
            {/* Header */}
            <div className="border-b border-zinc-800 p-3 bg-zinc-900/50 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Layout size={14} className="text-emerald-500" />
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest">Bot Management</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            </div>

            {/* Bot Grid */}
            <div className="p-4 grid grid-cols-2 gap-3">
                <BotCard name="Support Bot" status="Active" icon={<Bot size={16} />} />
                <BotCard name="Store Assistant" status="Installed" icon={<ShoppingCart size={16} />} />
                <div className="col-span-2 border border-dashed border-zinc-800 rounded p-3 flex items-center justify-center text-[10px] text-zinc-600 font-mono">
                    + Deploy New Telegram Mini App
                </div>
            </div>

            {/* Log / Stats */}
            <div className="p-4 border-t border-zinc-800 bg-zinc-900/20 font-mono text-[9px] text-zinc-500">
                <div className="flex justify-between mb-1">
                    <span>API Handshake:</span>
                    <span className="text-emerald-500">200 OK</span>
                </div>
                <div className="flex justify-between">
                    <span>Total Deployments:</span>
                    <span className="text-zinc-300">14 Active</span>
                </div>
            </div>
        </div>
    </FigureContainer>
  );
}

function BotCard({ name, status, icon }: { name: string, status: string, icon: React.ReactNode }) {
    return (
        <div className="bg-zinc-900 border border-zinc-800 p-3 rounded hover:border-emerald-500/50 transition-colors cursor-default group">
            <div className="text-zinc-400 group-hover:text-emerald-500 transition-colors mb-2">
                {icon}
            </div>
            <div className="text-[10px] font-bold text-zinc-200">{name}</div>
            <div className="flex items-center gap-1 text-[8px] text-emerald-500 mt-1">
                <CheckCircle2 size={8} /> {status}
            </div>
        </div>
    );
}
