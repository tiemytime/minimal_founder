"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-white pt-16">
      <div
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `radial-gradient(circle, black 1px, transparent 1px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div
        className={`relative z-10 mx-auto max-w-3xl px-6 py-32 text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <h1 className="text-5xl font-medium leading-[1.1] tracking-tight md:text-6xl lg:text-7xl">
          Build exceptional teams with confidence
        </h1>
        <p className="mt-8 text-lg leading-relaxed text-black/60 md:text-xl">
          We combine psychology and precision to help you find founders who will
          drive your vision forward.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="rounded-full px-10 shadow-sm transition-all hover:shadow-md"
          >
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="rounded-full px-10">
            Learn More
          </Button>
        </div>
      </div>

      <button
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
        className="absolute bottom-12 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 transition-all duration-300 hover:translate-y-1 hover:opacity-60"
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
