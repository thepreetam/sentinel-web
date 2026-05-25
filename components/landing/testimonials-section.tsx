"use client";

const useCases = [
  {
    vertical: "Offshore Oil & Gas Platform",
    desc: "20 cameras x 10 Mbps = 200 Mbps backhaul",
    before: "200 Mbps @ $38K/mo",
    after: "70-100 Mbps @ $13-19K/mo",
    savings: "$228-300K/yr",
    payback: "1-4 months",
  },
  {
    vertical: "Remote Pipeline Compressor Station",
    desc: "40 cameras x 10 Mbps = 400 Mbps backhaul",
    before: "2+ Gbps @ $190K/mo",
    after: "700-1000 Mbps @ $67-95K/mo",
    savings: "$456-600K/yr",
    payback: "1-3 months",
  },
  {
    vertical: "Island / Maritime Operations",
    desc: "15 cameras x 10 Mbps = 150 Mbps backhaul",
    before: "300 Mbps @ $57K/mo",
    after: "105-150 Mbps @ $20-29K/mo",
    savings: "$171-222K/yr",
    payback: "1-4 months",
  },
  {
    vertical: "Remote Electrical Substation",
    desc: "10 cameras x 10 Mbps = 100 Mbps backhaul",
    before: "150 Mbps @ $28.5K/mo",
    after: "53-75 Mbps @ $10-14K/mo",
    savings: "$114-150K/yr",
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
            Remote infrastructure where connectivity costs money. Typical deployments: 10-40 cameras per site on satellite/VSAT backhaul.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-foreground/10">
          {useCases.map((uc, i) => (
            <div key={uc.vertical} className="bg-background p-8">
              <h3 className="text-xl font-display mb-2">{uc.vertical}</h3>
              <p className="text-sm text-muted-foreground mb-6 font-mono">{uc.desc}</p>
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
        <div className="mt-8 p-4 border border-foreground/10 bg-foreground/[0.02]">
          <p className="text-xs text-muted-foreground">
            Savings estimates assume VSAT/satellite pricing of $150-250 per Mbps per month. Your actual backhaul pricing may differ. Gateway hardware lease cost is separate — see pricing section for current rates. Contact us for a site-specific ROI model.
          </p>
        </div>
      </div>
    </section>
  );
}
