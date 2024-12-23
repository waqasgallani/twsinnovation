import Link from "next/link";
import { SocialLinks } from "./social-links";
import { QuickLinks } from "./quick-links";
import { ServicesList } from "./services-list";
import { ContactInfo } from "./contact-info";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">TWS Innovations</h3>
            <p className="text-sm">
              Transforming ideas into innovative digital solutions.
            </p>
          </div>
          <QuickLinks />
          <ServicesList />
          <ContactInfo />
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p>&copy; {new Date().getFullYear()} TWS Innovations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}