"use client";

import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@heroui/button";

export interface ServiceCardProps {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

export default function ServiceCard({
  name,
  price,
  features,
  popular = false,
}: ServiceCardProps) {
  return (
    <article
      className={`relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 md:p-8 border ${
        popular ? "border-primary-sage ring-2 ring-primary-sage/30" : "border-primary-beige"
      }`}
    >
      {popular && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary-sage text-white text-sm font-medium px-4 py-1 rounded-full">
          Mais Popular
        </span>
      )}

      <h3 className="font-playfair text-2xl md:text-3xl font-semibold text-neutral-dark-gray mb-2">
        {name}
      </h3>
      <p className="text-2xl md:text-3xl font-bold text-primary-sage mb-6">
        A partir de R$ {price}
      </p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary-sage flex-shrink-0 mt-0.5" aria-hidden />
            <span className="text-neutral-dark-gray">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        as={Link}
        href="/contato"
        className="flex w-full items-center justify-center bg-primary-terracota hover:bg-primary-terracota/90 text-white font-medium py-3 px-6 rounded-lg min-h-[44px] transition-all duration-300"
      >
        Solicitar orçamento
      </Button>
    </article>
  );
}
