"use client";

const useCases = [
  {
    vertical: "Offshore Oil & Gas",
    before: "200 Mbps @ $38K/mo",
    after: "70-100 Mbps @ $13-19K/mo",
    savings: "$228-300K/yr",
    payback: "1-4 months",
  },
  {
    vertical: "Remote Pipeline Networks",
    before: "2+ Gbps @ $190K/mo",
    after: "700-1000 Mbps @ $67-95K/mo",
    savings: "$1.1-1.5M/yr",
    payback: "1-3 months",
  },
  {
    vertical: "Island & Archipelago Ops",
    before: "300 Mbps @ $57K/mo",
    after: "105-150 Mbps @ $20-29K/mo",
    savings: "$336-444K/yr",
    payback: "1-4 months",
  },
  {
    vertical: "Remote Substations",
    before: "150 Mbps @ $28.5K/mo",
    after: "53-75 Mbps @ $10-14K/mo",
    savings: "$174-222K/yr",
    payback: "1-4 months",
  },
];

export function TestimonialsSection() {
  return (
    <section id="use-cases" className="relative py-24 lg:py-32 border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 lg:mb-20">
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Use cases
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-4">
            Where the Sentinel Edge Gateway works.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Remote infrastructure where connectivity costs money. Typical savings of 40-65% on satellite backhaul, varying by deployment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-foreground/10">
          {useCases.map((uc, i) => (
            <div key={uc.vertical} className="bg-background p-8">
              <h3 className="text-xl font-display mb-6">{uc.vertical}</h3>
              <div className="grid grid-cols-2 gap-6 text-sm">
                <div>
                  <p className="text-muted-foreground mb-1">Before</p>
                  <p className="font-mono">{uc.before}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">After</p>
                  <p className="font-mono">{uc.after}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Annual Savings</p>
                  <p className="font-mono text-foreground font-medium">{uc.savings}</p>
                </div>
                <div>
                  <p className="text-muted-foreground mb-1">Payback</p>
                  <p className="font-mono">{uc.payback}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
