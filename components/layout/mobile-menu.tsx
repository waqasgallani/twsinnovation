import Link from "next/link";
import { navigation } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden">
      <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b">
        {navigation.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block px-3 py-2 text-gray-700 hover:text-blue-600"
            onClick={onClose}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}