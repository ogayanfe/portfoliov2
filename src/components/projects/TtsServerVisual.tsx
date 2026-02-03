import { Activity, Database, FileAudio, ArrowRight } from "lucide-react";
import { FigureContainer } from "./shared";

export default function TtsServerVisual() {
  return (
    <FigureContainer color="indigo">
        {/* API Microservice Mockup */}
        <div className="w-full max-w-md bg-zinc-950/80 border border-zinc-800 rounded shadow-2xl overflow-hidden font-mono scale-90 md:scale-100">
            {/* Endpoint Bar */}
            <div className="bg-zinc-900/50 p-2 px-3 border-b border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className="text-[9px] bg-zinc-800 text-zinc-400 px-1 rounded">POST</span>
                    <span className="text-[10px] text-zinc-500">/v1/synthesis/hausa</span>
                </div>
                <div className="flex gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-700" />
                </div>
            </div>

            {/* Processing Flow */}
            <div className="p-4 flex flex-col items-center gap-4">
                {/* Input Payload */}
                <div className="w-full bg-zinc-900/50 p-2 rounded border border-zinc-800 text-[9px] text-zinc-500">
                    <span className="text-indigo-400">{"{"}</span><br />
                    &nbsp;&nbsp;"text": "Ina kwana",<br />
                    &nbsp;&nbsp;"lang": "ha",<br />
                    &nbsp;&nbsp;"format": "wav"<br />
                    <span className="text-indigo-400">{"}"}</span>
                </div>

                <div className="text-zinc-800 animate-bounce">
                    <ArrowRight size={14} className="rotate-90" />
                </div>

                {/* Waveform Visualization */}
                <div className="w-full h-12 flex items-center justify-center gap-[2px]">
                    {[0.4, 0.7, 1, 0.5, 0.8, 0.3, 0.6, 0.9, 0.5, 0.2, 0.7, 0.4].map((h, i) => (
                        <div 
                            key={i} 
                            className="w-1 bg-indigo-500/40 rounded-full animate-pulse" 
                            style={{ height: `${h * 100}%`, animationDelay: `${i * 0.1}s` }} 
                        />
                    ))}
                </div>

                <div className="flex items-center gap-2 text-[9px] text-indigo-400/80 border-t border-zinc-900 pt-3 w-full">
                    <FileAudio size={12} />
                    <span>audio_stream_256kbps.wav</span>
                    <Database size={12} className="ml-auto opacity-50" />
                    <span className="opacity-50">Saved to Cache</span>
                </div>
            </div>
        </div>
    </FigureContainer>
  );
}
