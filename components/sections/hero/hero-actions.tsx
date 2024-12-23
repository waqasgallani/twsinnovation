"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroActions() {
  return (
    <div className="flex justify-center gap-4">
      <Button asChild size="lg">
        <Link href="/contact">Get Started</Link>
      </Button>
      <Button variant="outline" size="lg" asChild>
        <Link href="/portfolio">View Our Work</Link>
      </Button>
    </div>
  );
}