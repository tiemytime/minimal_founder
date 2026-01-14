export function Team() {
  return (
    <section id="team" className="relative py-24 md:py-32">
      <div
        className="absolute left-0 top-1/2 h-1/2 w-1/3 -translate-y-1/2 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div className="grid grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-lg bg-black/5" />
            ))}
          </div>

          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
              Built by founders, for founders
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-black/80">
              <p>
                Our team has been through the journey of building companies from
                the ground up. We understand the unique challenges of finding
                the right people to join you on this path.
              </p>
              <p>
                We've experienced the highs of great hires and learned from the
                lows of mismatches. This perspective shapes everything we do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
