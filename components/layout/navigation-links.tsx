import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navigation } from "@/lib/constants";

export function NavigationLinks() {
  return (
    <div className="hidden md:flex items-center space-x-8">
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="text-gray-700 hover:text-blue-600 transition-colors"
        >
          {item.name}
        </Link>
      ))}
      <Button asChild>
        <Link href="/contact">Get Started</Link>
      </Button>
    </div>
  );
}