"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { heroSlides } from "@/data/heroSlides";

// small hook to detect md+ (Tailwind md breakpoint is 768px)
function useIsMd() {
  const [isMd, setIsMd] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const update = (e: MediaQueryListEvent | MediaQueryList) => setIsMd(e.matches);
    update(mq);
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update as any);
      else mq.removeListener(update as any);
    };
  }, []);
  return isMd;
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timeoutRef = useRef<number | null>(null);
  const isMd = useIsMd();
  
  // Swipe/touch handling for mobile
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    timeoutRef.current = window.setTimeout(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 3500);
    return () => {
      if (timeoutRef.current !== null) window.clearTimeout(timeoutRef.current);
    };
  }, [current, paused]);

  // Touch events for mobile pause and swipe
  const handleMouseEnter = () => setPaused(true);
  const handleMouseLeave = () => setPaused(false);
  
  const handleTouchStart = (e: React.TouchEvent) => {
    setPaused(true);
    touchStartX.current = e.touches[0].clientX;
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };
  
  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) {
      setPaused(false);
      return;
    }
    
    const distance = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50; // Distância mínima para considerar um swipe
    
    if (Math.abs(distance) > minSwipeDistance) {
      if (distance > 0) {
        // Swipe left - próximo
        setCurrent((prev) => (prev + 1) % heroSlides.length);
      } else {
        // Swipe right - anterior
        setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      }
    }
    
    touchStartX.current = null;
    touchEndX.current = null;
    setPaused(false);
  };

  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <div
        className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden bg-[#f5e9b0]"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {heroSlides.map((slide, idx) => {
          const visible = idx === current;
          // Usa srcMobile se existir e estiver em mobile, senão usa src padrão
          const imageSrc = !isMd && slide.srcMobile ? slide.srcMobile : slide.src;
          
          return (
            <div
              key={slide.src}
              className={`absolute inset-0 transition-opacity duration-700 ${
                visible ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
              aria-hidden={!visible}
            >
              <div className="absolute inset-0 overflow-hidden">
                <div
                  style={{
                    width: "100%",
                    height: "100%",
                    transform: (() => {
                      if (!isMd) return undefined;
                      if (slide.objectScaleX || slide.objectScaleY) {
                        const sx = slide.objectScaleX ?? 1;
                        const sy = slide.objectScaleY ?? 1;
                        return `scale(${sx}, ${sy})`;
                      }
                      if (slide.objectScale) return `scale(${slide.objectScale})`;
                      return undefined;
                    })(),
                    transformOrigin: "center",
                  }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={imageSrc}
                    alt={slide.alt}
                    fill
                    priority={idx === 0}
                    sizes="100vw"
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                    className="w-full h-full select-none"
                    draggable={false}
                  />
                </div>
              </div>
            </div>
          );
        })}
        {/* Arrows (hidden on mobile) */}
        <button
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 bg-white/60 rounded-full p-2 hover:bg-white/80 transition"
          style={{ zIndex: 20 }}
          aria-label="Anterior"
          onClick={() => setCurrent((current - 1 + heroSlides.length) % heroSlides.length)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
        </button>
        <button
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 bg-white/60 rounded-full p-2 hover:bg-white/80 transition"
          style={{ zIndex: 20 }}
          aria-label="Próximo"
          onClick={() => setCurrent((current + 1) % heroSlides.length)}
        >
          <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
        </button>
      </div>
      {/* Bullets/dots */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-6 flex gap-3 z-20">
        {heroSlides.map((_: any, idx: number) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full border-2 border-white bg-white/70 transition-all duration-300 ${
              idx === current ? "scale-125 bg-orange-500 border-orange-500" : "opacity-60"
            }`}
            aria-label={`Ir para slide ${idx + 1}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
}
