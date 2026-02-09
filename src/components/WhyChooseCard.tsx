"use client";

import { Camera, Heart, MapPin } from "lucide-react";

const icons = {
  camera: Camera,
  heart: Heart,
  map: MapPin,
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
  const Icon = icons[icon];
  return (
    <article className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-primary-beige text-center hover:shadow-lg transition-all duration-300">
      <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-primary-sage/10 text-primary-sage">
        <Icon className="w-7 h-7" aria-hidden />
      </div>
      <h3 className="font-playfair text-xl md:text-2xl font-semibold text-neutral-dark-gray mb-2">
        {title}
      </h3>
      {description && (
        <p className="text-neutral-dark-gray/80">{description}</p>
      )}
    </article>
  );
}
