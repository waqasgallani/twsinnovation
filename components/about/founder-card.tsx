import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Founder } from "@/lib/types";

interface FounderCardProps {
  founder: Founder;
}

export function FounderCard({ founder }: FounderCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="relative w-32 h-32 mx-auto mb-4">
          <Image
            src={founder.image}
            alt={founder.name}
            fill
            className="object-cover rounded-full"
          />
        </div>
        <h3 className="text-xl font-semibold text-center mb-2">
          {founder.name}
        </h3>
        <p className="text-blue-600 text-center mb-4">{founder.role}</p>
        <p className="text-gray-600 text-center">
          {founder.description}
        </p>
      </CardContent>
    </Card>
  );
}