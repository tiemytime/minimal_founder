"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white/80 backdrop-blur-sm"} border-b border-black/10`}
    >
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="text-base font-semibold transition-colors hover:text-black/60"
          >
            Logo
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link
              href="#problem"
              className="text-sm font-normal transition-all hover:text-black/60"
            >
              Problem
            </Link>
            <Link
              href="#process"
              className="text-sm font-normal transition-all hover:text-black/60"
            >
              Process
            </Link>
            <Link
              href="#team"
              className="text-sm font-normal transition-all hover:text-black/60"
            >
              Team
            </Link>
            <Button
              size="sm"
              className="rounded-full shadow-sm transition-all hover:shadow-md"
            >
              Start Brief
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex transition-transform hover:scale-110 md:hidden"
            aria-label="Toggle menu"
          >
            <span className="text-2xl">{isOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {isOpen && (
          <div className="animate-in slide-in-from-top border-t border-black/10 py-4 md:hidden">
            <div className="flex flex-col gap-4">
              <Link
                href="#problem"
                className="text-sm font-normal"
                onClick={() => setIsOpen(false)}
              >
                Problem
              </Link>
              <Link
                href="#process"
                className="text-sm font-normal"
                onClick={() => setIsOpen(false)}
              >
                Process
              </Link>
              <Link
                href="#team"
                className="text-sm font-normal"
                onClick={() => setIsOpen(false)}
              >
                Team
              </Link>
              <Button size="sm" className="rounded-full">
                Start Brief
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
