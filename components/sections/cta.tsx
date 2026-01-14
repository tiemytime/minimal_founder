import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative py-32 md:py-40">
      <div
        className="absolute inset-0 opacity-[0.01]"
        style={{
          backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative mx-auto max-w-2xl px-6 text-center">
        <h2 className="text-4xl font-medium tracking-tight md:text-5xl">
          Ready to build your team?
        </h2>
        <p className="mt-6 text-lg text-black/60 md:text-xl">
          Start with a brief conversation about your needs and vision.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="rounded-full px-8">
            Start Your Brief
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-8">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
