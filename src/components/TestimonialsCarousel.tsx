"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import type { TestimonialCardProps } from "./TestimonialCard";

interface TestimonialsCarouselProps {
  testimonials: TestimonialCardProps[];
}

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)": { slidesToScroll: 3 },
    },
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    onSelect();

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6 -ml-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex-[0_0_100%] md:flex-[0_0_calc(33.333%-16px)] min-w-0 pl-6"
            >
              <TestimonialCard {...t} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 md:-translate-x-16 z-10 p-2 rounded-full bg-primary-sage text-white hover:bg-primary-sage/80 transition-colors hidden md:block"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 md:translate-x-16 z-10 p-2 rounded-full bg-primary-sage text-white hover:bg-primary-sage/80 transition-colors hidden md:block"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (emblaApi) {
                emblaApi.scrollTo(index);
              }
            }}
            className={`h-2 rounded-full transition-all ${
              index === selectedIndex
                ? "bg-primary-sage w-6"
                : "bg-primary-sage/30 w-2"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
            aria-current={index === selectedIndex}
          />
        ))}
      </div>
    </div>
  );
}
