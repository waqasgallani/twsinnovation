import { Code, Smartphone, Palette, BarChart3 } from "lucide-react";
import type { Service } from "@/lib/types/service";

export const services: Service[] = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with cutting-edge technologies. We specialize in responsive design, progressive web apps, and scalable solutions.",
    features: [
      "Custom Web Applications",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "API Development",
    ],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
    features: [
      "iOS Development",
      "Android Development",
      "Cross-platform Solutions",
      "App Store Optimization",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design solutions that combine aesthetics with functionality to create engaging digital experiences.",
    features: [
      "User Interface Design",
      "User Experience Design",
      "Wireframing & Prototyping",
      "Design Systems",
    ],
  },
  {
    icon: BarChart3,
    title: "Business Solutions",
    description: "Strategic consulting and digital transformation services to help your business succeed in the digital age.",
    features: [
      "Digital Strategy",
      "Process Automation",
      "Data Analytics",
      "Cloud Solutions",
    ],
  },
];