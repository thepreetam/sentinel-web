"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const steps = [
  { number: "1", title: "Share your footage", desc: "Send 2-3 one-minute clips from your typical remote site scenes. We provide an SFTP link upon application." },
  { number: "2", title: "See the comparison", desc: "We run Sentinel vs H.265 on your data and send you a side-by-side bitrate and accuracy report within 48 hours." },
  { number: "3", title: "Pilot on-site", desc: "If the numbers work, we ship a Sentinel Edge Gateway to your site. 90-day pilot, no upfront hardware cost." },
];

export function CtaSection() {
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
    <section id="design-partners" ref={sectionRef} className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Gateway Trial
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Design Partner Program
          </h2>
          <p className={`text-lg text-muted-foreground mt-4 max-w-2xl transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            For remote infrastructure operators: offshore energy, pipeline networks, island/maritime facilities, remote substations. We are not accepting urban surveillance, smart city, or retail deployments at this time.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-foreground/10 mb-12">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`bg-background p-8 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <span className="font-mono text-sm text-muted-foreground">Step {step.number}</span>
              <h3 className="text-xl font-display mt-2 mb-3">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
            </div>
          ))}
        </div>

        <div className="mb-8 p-6 border border-foreground/10 bg-foreground/[0.02]">
          <h4 className="font-display text-lg mb-2">Who should apply</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Operations Manager responsible for remote site bandwidth budgets</li>
            <li>Infrastructure Engineer managing satellite/VSAT backhaul</li>
            <li>Security Director at offshore, pipeline, or island operations</li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Button
            size="lg"
            className="bg-foreground hover:bg-foreground/90 text-background px-8 h-14 text-base rounded-full group"
            asChild
          >
            <a href="mailto:preetam@mahamaia.com">
              Apply for Design Partner Program
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
