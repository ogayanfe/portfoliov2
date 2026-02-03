"use client";

import { X, ChevronLeft, ChevronRight, Maximize2, Terminal } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface GalleryOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  projectName: string;
  projectColor: string;
}

export default function GalleryOverlay({ isOpen, onClose, images, projectName, projectColor }: GalleryOverlayProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setCurrentIndex(0);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  if (!isOpen || !images.length) return null;

  const nextImage = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prevImage = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  const colorMap: Record<string, string> = {
    orange: "text-orange-500 border-orange-500/30",
    blue: "text-blue-500 border-blue-500/30",
    purple: "text-purple-500 border-purple-500/30",
    emerald: "text-emerald-500 border-emerald-500/30",
    amber: "text-amber-500 border-amber-500/30",
    indigo: "text-indigo-500 border-indigo-500/30",
  };

  const activeColor = colorMap[projectColor] || "text-zinc-400 border-zinc-800";

  return (
    <div className="fixed inset-0 z-[100] bg-zinc-950/95 backdrop-blur-sm flex flex-col items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
      {/* Background Micro-grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b_1px,transparent_1px),linear-gradient(to_bottom,#18181b_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none" />

      {/* Header Info */}
      <div className="absolute top-0 left-0 w-full p-6 flex items-center justify-between z-20">
        <div className="flex flex-col">
          <div className={`font-mono text-[10px] uppercase tracking-[0.3em] ${activeColor.split(" ")[0]}`}>
             Technical Visuals // {projectName}
          </div>
          <div className="font-mono text-[9px] text-zinc-500 mt-1 uppercase flex items-center gap-2">
            <Terminal size={10} /> {images[currentIndex]}
          </div>
        </div>
        <button 
          onClick={onClose}
          className="w-10 h-10 rounded-full border border-zinc-800 bg-zinc-900/50 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all"
        >
          <X size={20} />
        </button>
      </div>

      {/* Main Image Container */}
      <div className="relative w-full h-full max-w-6xl flex items-center justify-center mt-12 mb-8">
        <div className={`relative w-full h-full transition-all duration-500 ${isZoomed ? 'scale-125 cursor-zoom-out' : 'scale-100 cursor-zoom-in'}`}
             onClick={() => setIsZoomed(!isZoomed)}
        >
          {images[currentIndex] ? (
            <Image 
              src={images[currentIndex]} 
              alt={`${projectName} demo ${currentIndex + 1}`}
              fill
              className="object-contain drop-shadow-[0_0_50px_rgba(0,0,0,0.5)]"
              priority
            />
          ) : (
            <div className="flex items-center justify-center h-full text-zinc-700 font-mono text-xs uppercase tracking-widest">
                [ Asset_Not_Found ]
            </div>
          )}
        </div>

        {/* Navigation Arrows (Desktop) */}
        {images.length > 1 && (
          <>
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-0 md:-left-12 p-3 text-zinc-500 hover:text-zinc-100 transition-colors hidden md:block"
            >
              <ChevronLeft size={48} strokeWidth={1} />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-0 md:-right-12 p-3 text-zinc-500 hover:text-zinc-100 transition-colors hidden md:block"
            >
              <ChevronRight size={48} strokeWidth={1} />
            </button>
          </>
        )}
      </div>

      {/* Thumbnail Carousel */}
      <div className="w-full max-w-5xl mb-8 z-20 overflow-hidden">
        <div className="flex items-center justify-center gap-2 overflow-x-auto no-scrollbar px-4 py-2">
            {images.map((img, idx) => (
                <button 
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`relative flex-shrink-0 w-16 h-10 md:w-20 md:h-12 border overflow-hidden transition-all duration-300 ${
                    idx === currentIndex 
                    ? `border-current ${activeColor.split(' ')[0]} scale-110 z-10` 
                    : 'border-zinc-800 opacity-40 hover:opacity-100'
                  }`}
                >
                    <Image 
                        src={img} 
                        alt={`Thumbnail ${idx}`}
                        fill
                        className="object-cover"
                    />
                    {idx === currentIndex && (
                        <div className="absolute inset-0 bg-white/5 pointer-events-none" />
                    )}
                </button>
            ))}
        </div>
      </div>

      {/* Footer / Controls */}
      <div className="w-full max-w-xl flex flex-col items-center gap-4 z-20">
        <div className="flex items-center gap-8">
            <button onClick={prevImage} className="text-zinc-500 hover:text-white transition-colors">
                <ChevronLeft size={32} strokeWidth={1} />
            </button>
            
            <div className="flex flex-col items-center">
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest mb-1">Asset Stream</span>
                <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-400">
                    <span className={activeColor.split(' ')[0]}>{String(currentIndex + 1).padStart(2, '0')}</span>
                    <span className="opacity-30">/</span>
                    <span>{String(images.length).padStart(2, '0')}</span>
                </div>
            </div>

            <button onClick={nextImage} className="text-zinc-500 hover:text-white transition-colors">
                <ChevronRight size={32} strokeWidth={1} />
            </button>
        </div>
      </div>

      {/* Mobile Hint */}
      <div className="md:hidden absolute bottom-12 text-[10px] font-mono text-zinc-700 animate-pulse tracking-widest text-center w-full uppercase">
        Use arrows to cycle architecture
      </div>
    </div>
  );
}
