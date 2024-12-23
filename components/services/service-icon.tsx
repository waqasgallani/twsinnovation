"use client";

import { LucideIcon } from "lucide-react";

interface ServiceIconProps {
  icon: LucideIcon;
}

export function ServiceIcon({ icon: Icon }: ServiceIconProps) {
  return <Icon className="h-12 w-12 text-blue-600" />;
}