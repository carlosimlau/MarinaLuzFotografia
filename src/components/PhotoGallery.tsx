"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { Button } from "@heroui/button";

export interface PortfolioImage {
  id: number;
  category: string;
  url: string;
  alt: string;
}

interface PhotoGalleryProps {
  images: PortfolioImage[];
  categories?: { id: string; name: string }[];
  columns?: 1 | 2 | 3 | "responsive";
  showFilters?: boolean;
}

export default function PhotoGallery({
  images,
  categories = [],
  columns = "responsive",
  showFilters = true,
}: PhotoGalleryProps) {
  const [activeCategory, setActiveCategory] = useState("todos");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const filteredImages =
    activeCategory === "todos"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const slides = filteredImages.map((img) => ({
    src: img.url.replace("w=800", "w=1200"),
    alt: img.alt,
  }));

  return (
    <section aria-label="Galeria de fotos">
      {showFilters && categories.length > 0 && (
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((cat) => (
            <Button
              key={cat.id}
              onPress={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 min-h-[44px] ${
                activeCategory === cat.id
                  ? "bg-primary-sage text-white"
                  : "bg-primary-beige text-neutral-dark-gray hover:bg-primary-sage/20"
              }`}
            >
              {cat.name}
            </Button>
          ))}
        </div>
      )}

      <div
        className={`grid gap-4 ${
          columns === "responsive"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            : columns === 1
            ? "grid-cols-1"
            : columns === 2
            ? "grid-cols-1 sm:grid-cols-2"
            : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {filteredImages.map((img, index) => (
          <button
            key={img.id}
            type="button"
            onClick={() => openLightbox(index)}
            className="relative aspect-[4/3] overflow-hidden rounded-lg group focus:outline-none focus:ring-2 focus:ring-primary-sage focus:ring-offset-2"
          >
            <Image
              src={img.url}
              alt={img.alt}
              fill
              priority={index < 6}
              quality={85}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div
              className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"
              aria-hidden="true"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        index={lightboxIndex}
        slides={slides}
      />
    </section>
  );
}
