"use client";

import Image from "next/image";
import Link from "next/link";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=80";

export default function Hero({
  title = "Cada momento do seu casamento merece ser eterno",
  subtitle = "Fotografia autoral de casamentos em São Paulo. Capturando emoções genuínas e histórias de amor únicas.",
  ctaText = "Vamos conversar sobre o seu grande dia",
  ctaHref = "/contato",
}: HeroProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Banner principal"
    >
      {/* Background image com overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="Casamento - casal em momento especial"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-neutral-dark-gray/60"
          aria-hidden="true"
        />
      </div>

      {/* Conteúdo centralizado */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center text-white">
        <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-semibold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-lg md:text-xl text-primary-beige/95 mb-8 md:mb-12 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <Link
          href={ctaHref}
          className="inline-block bg-primary-terracota hover:bg-primary-terracota/90 text-white font-medium px-8 py-4 rounded-lg min-h-[44px] transition-all duration-300 hover:shadow-lg"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
