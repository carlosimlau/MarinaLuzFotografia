"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback } from "react";
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

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

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
    </div>
  );
}
