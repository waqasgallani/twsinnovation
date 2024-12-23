import { ServiceHeader } from "./services/service-header";
import { ServiceGrid } from "./services/service-grid";

export function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ServiceHeader />
        <ServiceGrid />
      </div>
    </section>
  );
}