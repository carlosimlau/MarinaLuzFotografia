"use client";

import { Card, CardFooter } from "@heroui/card";
import { Image } from "@heroui/image";

const icons = {
  camera: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
  heart: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=800&auto=format&fit=crop",
  map: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=800&auto=format&fit=crop",
};

interface WhyChooseCardProps {
  title: string;
  description?: string;
  icon: keyof typeof icons;
}

export default function WhyChooseCard({
  title,
  description,
  icon,
}: WhyChooseCardProps) {
  const imageSrc = icons[icon];
  
  return (
    <Card isFooterBlurred className="w-full h-[300px] border-none" radius="lg">
      <Image
        removeWrapper
        alt={title}
        className="z-0 w-full h-full object-cover"
        src={imageSrc}
      />
      <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
        <div>
          <p className="text-white font-medium text-lg drop-shadow-md">{title}</p>
          {description && <p className="text-white/80 text-tiny drop-shadow-md">{description}</p>}
        </div>
      </CardFooter>
    </Card>
  );
}
