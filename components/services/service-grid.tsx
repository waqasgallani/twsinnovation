"use client";

import { ServiceCard } from "./service-card";
import { services } from "@/lib/data/services";

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {services.map((service) => (
        <ServiceCard key={service.title} service={service} />
      ))}
    </div>
  );
}