import Link from "next/link";

export function QuickLinks() {
  return (
    <div>
      <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
        <li><Link href="/services" className="hover:text-blue-400">Services</Link></li>
        <li><Link href="/portfolio" className="hover:text-blue-400">Portfolio</Link></li>
        <li><Link href="/contact" className="hover:text-blue-400">Contact</Link></li>
      </ul>
    </div>
  );
}