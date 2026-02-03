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
        rose: "from-rose-500/10",
    };

    return (
        <div className={`flex items-center justify-center min-h-[320px] max-h-[380px] md:max-h-[450px] h-full relative z-10 w-full p-6 md:p-12 overflow-hidden ${className}`}>
            {/* Stationary Background Grid - Stays still while board floats */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:30px_30px] opacity-10 pointer-events-none" />
            
            {/* The Floating Modular Chassis */}
            <div className="relative w-full h-full flex items-center justify-center animate-float">
                
                {/* Board Frame (The dark thick rectangle casing) */}
                <div className="absolute inset-0 border-[10px] md:border-[16px] border-zinc-950 bg-zinc-900/40 rounded-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
                    {/* Inner Accent Bezel */}
                    <div className="absolute inset-0 border border-zinc-800/50" />
                    
                    {/* Color Accent Gradient (Inside the chassis) */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colorGradients[color] || 'from-zinc-500/10'} to-transparent opacity-60`} />
                    
                    {/* Technical Markings */}
                    <div className="absolute top-1 left-2 font-mono text-[7px] text-zinc-600 uppercase tracking-tighter hidden md:block">
                        SYS_MOD // {color?.toUpperCase()}_STRATUM
                    </div>
                    <div className="absolute bottom-1 right-2 font-mono text-[7px] text-zinc-600 uppercase tracking-tighter hidden md:block">
                        REF_ID: 0xFC2A
                    </div>
                </div>

                {/* The Actual Content (The project visual) */}
                <div className="relative z-10 w-full h-full flex items-center justify-center p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}

export function FlowItem({ icon, label, highlight = false, color = "orange" }: { 
    icon: React.ReactNode, 
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
        rose: "border-rose-500/50 bg-rose-500/10 text-rose-500",
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
