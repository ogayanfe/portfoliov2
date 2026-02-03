import { FigureContainer } from "./shared";

export default function WebsandboxPreview() {
  return (
    <FigureContainer color="blue">
        <div className="w-full max-w-sm border border-zinc-700 bg-zinc-950 p-4 font-mono text-xs text-zinc-400 shadow-2xl scale-90 md:scale-100">
            <div className="flex justify-between border-b border-zinc-800 pb-2 mb-2">
                <span>root@browser:~#</span>
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                </div>
            </div>
            <div className="space-y-1">
                <p>&gt; webcontainer.mount(files)</p>
                <p className="text-zinc-500 text-[10px] md:text-xs">Booting Node.js in browser...</p>
                <p className="text-green-500 text-[10px] md:text-xs">✓ File system ready</p>
                <p className="text-green-500 text-[10px] md:text-xs">✓ Dev server started on :3000</p>
                <p className="text-blue-400 text-[10px] md:text-xs">Ready for code execution.</p>
                <p className="animate-pulse">_</p>
            </div>
        </div>
    </FigureContainer>
  );
}
