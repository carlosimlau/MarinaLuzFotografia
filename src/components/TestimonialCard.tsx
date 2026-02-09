"use client";

import Image from "next/image";
import { Star } from "lucide-react";

export interface TestimonialCardProps {
  name: string;
  date: string;
  text: string;
  rating: number;
  photo?: string;
}

export default function TestimonialCard({
  name,
  date,
  text,
  rating,
  photo,
}: TestimonialCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 md:p-8 border border-primary-beige h-full flex flex-col">
      {/* Aspas decorativas */}
      <span
        className="font-playfair text-6xl text-primary-sage/30 leading-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <p className="text-neutral-dark-gray -mt-4 mb-6 flex-1">{text}</p>

      <div className="flex items-center gap-4">
        {photo && (
          <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={photo}
              alt={`${name} - casal`}
              fill
              className="object-cover"
              sizes="56px"
            />
          </div>
        )}
        <div>
          <p className="font-semibold text-neutral-dark-gray">{name}</p>
          <p className="text-sm text-neutral-dark-gray/70">{date}</p>
          <div className="flex gap-1 mt-1" aria-label={`${rating} estrelas`}>
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 fill-primary-gold text-primary-gold"
                aria-hidden
              />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
