"use client";

export function FooterSection() {
  return (
    <footer className="border-t border-foreground/10">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2026 MAHAMAIA Systems. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="https://github.com/MAHAMAIA/lewm-vc" className="hover:text-foreground transition-colors">GitHub (Codec)</a>
            <a href="https://github.com/MAHAMAIA/lewm-eval" className="hover:text-foreground transition-colors">GitHub (Eval)</a>
            <a href="mailto:preetam@mahamaia.com" className="hover:text-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
