"use client";

import { useEffect, useState, useRef } from "react";

const integrationCategories = {
  vms: [
    { name: "Milestone XProtect", status: "MIP SDK plugin (in development)" },
    { name: "Genetec Security Center", status: "SDK plugin (in development)" },
    { name: "Axis / ONVIF cameras", status: "RTSP native compatibility" },
    { name: "Legacy VMS", status: "RTSP fallback for basic ingestion" },
  ],
  hardware: [
    { name: "NVIDIA Jetson Orin", status: "Pre-loaded gateway" },
    { name: "AMD Ryzen AI", status: "In validation" },
    { name: "NVIDIA T4 / A100", status: "Cloud deployments" },
    { name: "NVMe storage", status: "256 GB standard, expandable" },
  ],
  storage: [
    { name: "Base Layer → S3-compatible", status: "Cloud VMS integration" },
    { name: "Enhancement Layer → NVMe", status: "Local gateway storage" },
    { name: "Secure EL fetch", status: "On-demand via tunnel" },
    { name: "S3 lifecycle policies", status: "Native compatibility" },
  ],
};

export function IntegrationsSection() {
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
    <section id="integrations" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div
          className={`mb-16 lg:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Integrations
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Fits into your existing infrastructure.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Sentinel sits between your cameras and your satellite link. We integrate with your VMS, your storage, and your network — not the other way around.
          </p>
        </div>

        {/* Three-column integration table */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-6 mb-12">
          {/* Video Management Systems */}
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h3 className="text-2xl font-display mb-6 pb-4 border-b border-foreground/10">
              Video Management
            </h3>
            <div className="space-y-4">
              {integrationCategories.vms.map((item) => (
                <div key={item.name} className="p-4 border border-foreground/10 hover:border-foreground/20 hover:bg-foreground/[0.02] transition-all">
                  <div className="font-medium mb-1">{item.name}</div>
                  <div className="text-sm text-muted-foreground">{item.status}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Edge Hardware */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h3 className="text-2xl font-display mb-6 pb-4 border-b border-foreground/10">
              Edge Hardware
            </h3>
            <div className="space-y-4">
              {integrationCategories.hardware.map((item) => (
                <div key={item.name} className="p-4 border border-foreground/10 hover:border-foreground/20 hover:bg-foreground/[0.02] transition-all">
                  <div className="font-medium mb-1">{item.name}</div>
                  <div className="text-sm text-muted-foreground">{item.status}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Storage & Network */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <h3 className="text-2xl font-display mb-6 pb-4 border-b border-foreground/10">
              Storage & Network
            </h3>
            <div className="space-y-4">
              {integrationCategories.storage.map((item) => (
                <div key={item.name} className="p-4 border border-foreground/10 hover:border-foreground/20 hover:bg-foreground/[0.02] transition-all">
                  <div className="font-medium mb-1">{item.name}</div>
                  <div className="text-sm text-muted-foreground">{item.status}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div
          className={`mt-12 p-8 border border-foreground/10 bg-foreground/[0.02] transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <p className="text-center text-muted-foreground">
            Custom MIP and Security Center plugins are included with Gateway Pilot deployments. Our engineering team handles the integration — not yours.
          </p>
        </div>
      </div>
    </section>
  );
}
