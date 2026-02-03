import { Terminal, Folder, FileCode } from "lucide-react";
import { FigureContainer } from "./shared";

export default function PortfolioVisual() {
  return (
    <FigureContainer color="rose">
       <div className="w-full max-w-sm bg-zinc-950/90 border border-zinc-800 rounded font-mono text-[10px] md:text-xs shadow-2xl overflow-hidden scale-90 md:scale-100">
          {/* Header */}
          <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800 bg-zinc-900/50">
             <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-500/20 border border-rose-500/50" />
                <div className="w-2.5 h-2.5 rounded-full bg-zinc-700/20 border border-zinc-700/50" />
             </div>
             <span className="text-zinc-500">portfoliov2 — fish</span>
          </div>

          {/* Content Split */}
          <div className="flex h-48">
              {/* Sidebar */}
              <div className="w-1/3 border-r border-zinc-800 p-3 space-y-2 bg-zinc-900/10">
                 <div className="flex items-center gap-1.5 text-zinc-400">
                    <Folder size={12} className="text-rose-500" />
                    <span>src</span>
                 </div>
                 <div className="pl-3 space-y-1.5 text-zinc-500">
                    <div className="flex items-center gap-1.5">
                       <Folder size={12} className="text-zinc-600" />
                       <span>app</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                       <Folder size={12} className="text-zinc-600" />
                       <span>components</span>
                    </div>
                    <div className="flex items-center gap-1.5 text-zinc-300 bg-zinc-800/50 rounded px-1 py-0.5">
                       <FileCode size={12} className="text-blue-400" />
                       <span>page.tsx</span>
                    </div>
                 </div>
              </div>

              {/* Editor Area */}
              <div className="w-2/3 p-4 text-zinc-400 space-y-1">
                 <div className="flex gap-2">
                    <span className="text-zinc-700 select-none">1</span>
                    <span><span className="text-purple-400">export default</span> <span className="text-blue-400">function</span> <span className="text-yellow-400">Home</span>() {"{"}</span>
                 </div>
                 <div className="flex gap-2">
                    <span className="text-zinc-700 select-none">2</span>
                    <span className="pl-4"><span className="text-purple-400">return</span> (</span>
                 </div>
                 <div className="flex gap-2">
                    <span className="text-zinc-700 select-none">3</span>
                    <span className="pl-8">&lt;<span className="text-rose-400">MainInterface</span> /&gt;</span>
                 </div>
                 <div className="flex gap-2">
                    <span className="text-zinc-700 select-none">4</span>
                    <span className="pl-4">);</span>
                 </div>
                 <div className="flex gap-2">
                    <span className="text-zinc-700 select-none">5</span>
                    <span>{"}"}</span>
                 </div>

                 {/* Terminal Pop-up */}
                 <div className="mt-4 pt-3 border-t border-zinc-800">
                    <div className="flex items-center gap-2 mb-2 text-rose-500">
                       <Terminal size={12} />
                       <span className="text-[9px] uppercase tracking-wider">Terminal Output</span>
                    </div>
                    <div className="space-y-1 text-zinc-500">
                       <div><span className="text-green-500">✓</span> Ready in 1245ms</div>
                       <div className="animate-pulse">_</div>
                    </div>
                 </div>
              </div>
          </div>
       </div>
    </FigureContainer>
  );
}
