"use client";

import { useEffect, useRef, useState } from "react";

export function GlobalEdgeSection() {
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

  const deployments = [
    { 
      title: "Offshore Oil & Gas", 
      description: "Substantially lower bandwidth on high-resolution camera feeds, leading to meaningful annual savings."
    },
    { 
      title: "Remote Pipeline Networks", 
      description: "Scales efficiently for high-bandwidth operations, reducing ongoing satellite costs."
    },
    { 
      title: "Island & Archipelago Operations", 
      description: "Helps make continuous monitoring more affordable in remote locations."
    },
    { 
      title: "Remote Electrical Substations", 
      description: "Reliable edge processing where connectivity is limited and expensive."
    },
  ];

  return (
    <section id="deployments" ref={sectionRef} className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section header */}
        <div className="mb-16 lg:mb-20">
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight mb-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Where Sentinel works.
            <br />
            <span className="text-muted-foreground">Real costs. Real savings.</span>
          </h2>
          <p
            className={`text-xl text-muted-foreground max-w-2xl transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Satellite backhaul operators: See your numbers below.
          </p>
        </div>

        {/* Deployments grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {deployments.map((deployment, index) => (
            <div
              key={deployment.title}
              className={`p-8 lg:p-10 border border-foreground/10 hover:border-foreground/20 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-display mb-4">{deployment.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{deployment.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
