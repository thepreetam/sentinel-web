"use client";

const useCases = [
  {
    vertical: "Offshore Oil & Gas",
    before: "200 Mbps @ $38K/mo",
    after: "74 Mbps @ $14K/mo",
    savings: "$288K/yr",
    payback: "<1 month",
  },
  {
    vertical: "Remote Pipeline Networks",
    before: "2+ Gbps @ $190K/mo",
    after: "750 Mbps @ $71K/mo",
    savings: "$1.43M/yr",
    payback: "<2 weeks",
  },
  {
    vertical: "Island & Archipelago Ops",
    before: "300 Mbps @ $57K/mo",
    after: "110 Mbps @ $21K/mo",
    savings: "$432K/yr",
    payback: "<1 month",
  },
  {
    vertical: "Remote Substations",
    before: "150 Mbps @ $28.5K/mo",
    after: "55 Mbps @ $10.5K/mo",
    savings: "$216K/yr",
    payback: "<1 month",
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
            Where Sentinel works.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Remote infrastructure where connectivity costs money. Every location we support saves $12,000–$60,000/month in satellite and backhaul fees.
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
