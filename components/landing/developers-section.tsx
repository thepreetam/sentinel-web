"use client";

import { useState, useEffect, useRef } from "react";

const teamMembers = [
  { 
    name: "Preetam Mukherjee", 
    role: "Co-Founder, CEO",
    bio: "Designed and implemented SENTINEL from first principles. Focused on reproducible, edge-deployable results."
  },
  { 
    name: "Soumyajit Mandal, Ph.D. MIT", 
    role: "Co-Founder, CTO",
    bio: "175+ publications, 26 patents, ~7,600 citations. Expert in custom ASIC design, edge deployment, and SBIR pathways."
  },
];

export function DevelopersSection() {
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
    <section id="team" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-12 lg:mb-16">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Team
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            Team
          </h2>
        </div>

        {/* Team Members Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`p-8 border border-foreground/10 hover:border-foreground/20 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <h3 className="text-2xl font-display mb-1">{member.name}</h3>
              <p className="text-sm font-mono text-muted-foreground mb-4">{member.role}</p>
              <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
