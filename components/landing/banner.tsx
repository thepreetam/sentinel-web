"use client";

export function Banner() {
  return (
    <div className="w-full bg-foreground/[0.03] border-b border-foreground/10 py-3">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <p className="text-center text-sm text-muted-foreground font-mono">
          Product Vision — In Development. Current research release available on{" "}
          <a href="#" className="text-foreground hover:underline">
            GitHub
          </a>
          .
        </p>
      </div>
    </div>
  );
}
