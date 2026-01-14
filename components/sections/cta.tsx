import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative py-32 md:py-48">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl">
          Ready to build your team?
        </h2>
        <p className="mt-8 text-xl leading-relaxed text-black/60 md:text-2xl">
          Start with a brief conversation about your needs and vision.
        </p>
        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            size="lg"
            className="rounded-full px-10 shadow-md transition-all hover:shadow-lg"
          >
            Start Your Brief
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-10">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
