"use client";

import { useEffect, useState } from "react";

export function SplashBanner() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const bannerHeight = 300;
      const newOpacity = Math.max(0, 1 - scrollY / bannerHeight);
      setOpacity(newOpacity);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="relative w-full overflow-hidden bg-gradient-to-r from-teal via-teal-light to-coral"
      style={{ opacity }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="relative w-full" style={{ aspectRatio: "1128/191" }}>
          {/* Gradient mesh as placeholder for banner image */}
          <div className="absolute inset-0 bg-gradient-to-br from-teal/90 via-teal-light/70 to-coral/80" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
                TALENTO <span className="text-coral-light">360</span>
              </h1>
              <p className="mt-2 text-white/80 text-sm md:text-base font-medium">
                Tu perfil profesional, potenciado
              </p>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute top-4 left-8 w-16 h-16 rounded-full bg-white/10 blur-xl" />
          <div className="absolute bottom-4 right-12 w-24 h-24 rounded-full bg-coral/20 blur-2xl" />
          <div className="absolute top-1/2 left-1/4 w-32 h-8 rounded-full bg-white/5 blur-lg -translate-y-1/2" />
        </div>
      </div>
    </div>
  );
}
