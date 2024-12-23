import { PageHeader } from "@/components/shared/page-header";
import { ServiceGrid } from "@/components/services/service-grid";
import { ServiceProcess } from "@/components/services/service-process";

export default function Services() {
  return (
    <div className="pt-16">
      <PageHeader
        title="Our Services"
        description="Comprehensive digital solutions tailored to your business needs"
      />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ServiceGrid />
        </div>
      </section>

      <ServiceProcess />
    </div>
  );
}