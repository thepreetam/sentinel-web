"use client";

import { useEffect, useRef, useState } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DemoSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section title */}
        <div className="mb-16 lg:mb-20">
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            See SENTINEL in action
          </h2>
        </div>

        {/* Demo video embed */}
        <div
          className={`relative transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative w-full aspect-video bg-foreground/5 border border-foreground/10 rounded-lg overflow-hidden group">
            {/* Dark background for video */}
            <div className="absolute inset-0 bg-black/80" />
            
            {/* Placeholder content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="mb-6 flex justify-center">
                  <div className="w-20 h-20 rounded-full bg-foreground/10 flex items-center justify-center group-hover:bg-foreground/20 transition-colors">
                    <Play className="w-8 h-8 text-foreground fill-foreground" />
                  </div>
                </div>
                <p className="text-foreground text-lg font-medium">2-Minute Demo</p>
                <p className="text-foreground/60 text-sm mt-2">Raw surveillance → Semantic compression</p>
              </div>
            </div>

            {/* Hover overlay */}
            <div className="absolute inset-0 bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        {/* CTA button below video */}
        <div className="mt-8 flex justify-center">
          <Button
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
          >
            <Play className="w-4 h-4 mr-2 fill-background" />
            Play Demo
          </Button>
        </div>
      </div>
    </section>
  );
}
