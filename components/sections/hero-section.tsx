"use client";

import { HeroTitle } from "./hero/hero-title";
import { HeroDescription } from "./hero/hero-description";
import { HeroActions } from "./hero/hero-actions";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <HeroTitle />
          <HeroDescription />
          <HeroActions />
        </div>
      </div>
    </section>
  );
}