"use client";

import { useEffect, useRef, useState } from "react";

const platforms = [
  {
    name: "Sentinel Edge Gateway",
    type: "Jetson Orin hardware appliance",
    desc: "Pre-loaded with the Sentinel codec. Ideal for local surveillance processing. Target platform (validation in progress).",
  },
  {
    name: "NVIDIA T4 / A100",
    type: "Cloud GPU (Sentinel codec)",
    desc: "Batch processing, multi-stream surveillance. 80+ fps on single GPU.",
  },
  {
    name: "AMD Ryzen AI",
    type: "Workstation (Sentinel codec)",
    desc: "Runs on latest Ryzen 9 processors. Bring inference to workstations.",
  },
];

export function DeploymentSection() {
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
    <section id="deployment" ref={sectionRef} className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Deployment
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Deploy anywhere.
            <br />
            <span className="text-muted-foreground">Run anywhere.</span>
          </h2>
          <p className={`text-lg text-muted-foreground mt-4 max-w-2xl transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            The Sentinel codec runs as a Docker container. The Sentinel Edge Gateway is a pre-configured Jetson Orin appliance.<br />Same software, your choice of hardware.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-foreground/10">
          {platforms.map((p, i) => (
            <div
              key={p.name}
              className={`bg-background p-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="text-xl font-display mb-1">{p.name}</h3>
              <p className="text-xs font-mono text-muted-foreground mb-4">{p.type}</p>
              <p className="text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
