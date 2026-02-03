import { ArrowRight } from "lucide-react";

export function FigureContainer({ 
    children, 
    color = "orange",
    className = "" 
}: { 
    children: React.ReactNode, 
    color?: string,
    className?: string
}) {
    const colorGradients: Record<string, string> = {
        orange: "from-orange-500/10",
        blue: "from-blue-500/10",
        purple: "from-purple-500/10",
        emerald: "from-emerald-500/10",
        amber: "from-amber-500/10",
        indigo: "from-indigo-500/10",
    };

    return (
        <div className={`flex items-center justify-center min-h-[320px] max-h-[380px] md:max-h-[450px] h-full relative z-10 w-full p-6 overflow-hidden ${className}`}>
            {/* Unified Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#27272a_1px,transparent_1px),linear-gradient(to_bottom,#27272a_1px,transparent_1px)] bg-[size:20px_20px] opacity-10 pointer-events-none" />
            
            {/* Color Accent Gradient */}
            <div className={`absolute inset-0 bg-gradient-to-br ${colorGradients[color] || 'from-zinc-500/10'} to-transparent`} />
            
            {children}
        </div>
    );
}

export function FlowItem({ icon, label, highlight = false, color = "orange" }: { 
    icon: any, 
    label: string, 
    highlight?: boolean, 
    color?: string 
}) {
    const colorClasses: Record<string, string> = {
        orange: "border-orange-500/50 bg-orange-500/10 text-orange-500",
        blue: "border-blue-500/50 bg-blue-500/10 text-blue-500",
        purple: "border-purple-500/50 bg-purple-500/10 text-purple-500",
        emerald: "border-emerald-500/50 bg-emerald-500/10 text-emerald-500",
        amber: "border-amber-500/50 bg-amber-500/10 text-amber-500",
        indigo: "border-indigo-500/50 bg-indigo-500/10 text-indigo-500",
    };

    const activeClass = colorClasses[color] || colorClasses.orange;
    
    return (
        <div className={`flex flex-col items-center gap-2 p-3 border ${highlight ? activeClass : 'border-zinc-800 bg-zinc-950'} rounded-sm w-28 md:w-32 shrink-0 transition-all hover:border-zinc-500`}>
            <div className={`${highlight ? '' : 'text-zinc-400'}`}>
                {icon}
            </div>
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-wider text-center line-clamp-1">{label}</span>
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
