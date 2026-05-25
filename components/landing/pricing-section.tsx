"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function PricingSection() {
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
    <section id="pricing" ref={sectionRef} className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Pricing
          </span>
          <h2
            className={`text-4xl lg:text-6xl font-display tracking-tight transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Simple, flat-rate pricing.
          </h2>
          <p className={`text-lg text-muted-foreground mt-4 max-w-2xl transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            No metered billing. No per-Mbps-saved auditing.<br />One price per Gateway, per month.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-foreground/10 mb-12">
          <div
            className={`bg-background p-8 lg:p-12 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-display mb-2">Monthly</h3>
            <p className="text-5xl lg:text-6xl font-display tracking-tight mb-6">
              $1,200<span className="text-2xl text-muted-foreground font-sans">/mo</span>
            </p>
            <p className="text-sm text-muted-foreground mb-8">per Gateway. Cancel anytime.</p>
            <ul className="space-y-3 mb-8">
              {[
                "Jetson Orin NX/AGX hardware lease",
                "Sentinel codec license",
                "Email and Slack support",
                "OTA model updates",
              ].map((item) => (
                <li key={item} className="text-sm flex items-start gap-3">
                  <span className="text-muted-foreground mt-0.5">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`bg-background p-8 lg:p-12 border-l-0 md:border-l border-t md:border-t-0 border-foreground/10 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h3 className="text-2xl font-display mb-2">Annual</h3>
            <p className="text-5xl lg:text-6xl font-display tracking-tight mb-6">
              $1,000<span className="text-2xl text-muted-foreground font-sans">/mo</span>
            </p>
            <p className="text-sm text-muted-foreground mb-8">per Gateway, billed annually. ~17% discount.</p>
            <ul className="space-y-3 mb-8">
              {[
                "Everything in Monthly, plus:",
                "Locked-in rate for 12 months",
                "Priority support",
                "Early access to new features",
              ].map((item) => (
                <li key={item} className="text-sm flex items-start gap-3">
                  <span className="text-muted-foreground mt-0.5">-</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-6 border border-foreground/10 bg-foreground/[0.02] mb-8">
          <h4 className="font-display text-lg mb-2">What's not included</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>Satellite/VSAT link service (you keep your existing provider)</li>
            <li>Cloud storage or compute (we compress the stream; your existing cloud bill is separate)</li>
            <li>On-site installation (self-install via setup guide; remote hands available at cost)</li>
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

        <p className="text-xs text-muted-foreground mt-6 font-mono">
          Introductory pricing. Rates may change after the first 5 design partners. Lock in your rate with an annual agreement.
        </p>
      </div>
    </section>
  );
}
