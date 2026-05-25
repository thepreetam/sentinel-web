"use client";

import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

export function ArchitectureSection() {
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
    <section id="architecture" ref={sectionRef} className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Architecture
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            One stream for AI.
            <br />
            <span className="text-muted-foreground">Two streams for the courtroom.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div
            className={`p-8 border border-foreground/10 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-display mb-4">Base Layer</h3>
            <p className="text-muted-foreground mb-6">
              4-bit, 64-channel semantic latents. Streamed continuously to the cloud at 38% of original bitrate.
            </p>
            <ul className="space-y-3">
              {["Always-on cloud streaming", "Minimal bandwidth cost", "Native inference-ready"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`p-8 border border-foreground/10 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-display mb-4">Enhancement Layer</h3>
            <p className="text-muted-foreground mb-6">
              8-bit, 128-channel residuals. Stored on local NVMe. Fetched on-demand when a human needs to see.
            </p>
            <ul className="space-y-3">
              {["On-device forensic storage", "Full frame reconstruction", "Deterministic (not generative)"].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className={`mt-8 p-6 border border-foreground/10 bg-foreground/[0.02] transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm text-muted-foreground">
            Full frame reconstruction from BL+EL is deterministic — not generative. Supports strong chain-of-custody via cryptographic hashing and local storage, which can help meet authentication standards such as FRE 901. Admissibility is determined on a case-by-case basis.
          </p>
        </div>
      </div>
    </section>
  );
}
