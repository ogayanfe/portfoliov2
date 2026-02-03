"use client";

export default function WebsandboxPreview() {
  return (
    <div className="flex items-center justify-center h-full relative z-10 w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
        <div className="w-full max-w-sm border border-zinc-700 bg-zinc-950 p-4 font-mono text-xs text-zinc-400 shadow-2xl">
            <div className="flex justify-between border-b border-zinc-800 pb-2 mb-2">
                <span>root@browser:~#</span>
                <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-zinc-700" />
                </div>
            </div>
            <div className="space-y-1">
                <p>&gt; webcontainer.mount(files)</p>
                <p className="text-zinc-500">Booting Node.js in browser...</p>
                <p className="text-green-500">✓ File system ready</p>
                <p className="text-green-500">✓ Dev server started on :3000</p>
                <p className="text-blue-400">Ready for code execution.</p>
                <p className="animate-pulse">_</p>
            </div>
        </div>
    </div>
  );
}
