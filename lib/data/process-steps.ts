interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description: "We analyze your requirements and create a detailed project plan.",
  },
  {
    number: "02",
    title: "Design",
    description: "Our team creates wireframes and designs that align with your vision.",
  },
  {
    number: "03",
    title: "Development",
    description: "We build your solution using the latest technologies and best practices.",
  },
  {
    number: "04",
    title: "Delivery",
    description: "After thorough testing, we deploy and provide ongoing support.",
  },
];