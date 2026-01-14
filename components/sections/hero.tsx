"use client";

import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-white">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="text-5xl font-medium leading-tight tracking-tight md:text-6xl lg:text-7xl">
          Build exceptional teams with confidence
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-black/60 md:text-xl">
          We combine psychology and precision to help you find founders who will
          drive your vision forward.
        </p>
        <Button size="lg" className="mt-8 rounded-full px-8">
          Get Started
        </Button>
      </div>

      <button
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 transition-opacity hover:opacity-60"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-wider text-black/40">
          Scroll
        </span>
        <span className="text-xl">↓</span>
      </button>
    </section>
  );
}
