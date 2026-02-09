import Link from "next/link";
import Hero from "@/components/Hero";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import PhotoGallery from "@/components/PhotoGallery";
import WhyChooseCard from "@/components/WhyChooseCard";
import { testimonials } from "@/data/testimonials";
import { portfolioImages } from "@/data/portfolio";

export const metadata = {
  title: "Marina Luz Fotografia | Fotografia de Casamentos em São Paulo",
  description:
    "Fotografia autoral de casamentos em São Paulo. Capturando emoções genuínas e histórias de amor únicas há mais de 8 anos.",
  keywords: [
    "fotografia casamento",
    "casamento são paulo",
    "fotógrafo casamento sp",
    "fotógrafa casamento",
  ],
};

export default function Home() {
  const miniPortfolio = portfolioImages.slice(0, 6);

  return (
    <>
      <Hero />

      {/* Resumo Sobre */}
      <section className="py-16 md:py-24 bg-neutral-off-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16 text-center">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-dark-gray mb-6">
            Sobre mim
          </h2>
          <p className="text-lg text-neutral-dark-gray/90 mb-8">
            Há mais de 8 anos fotografo casamentos em São Paulo com um olhar
            sensível e apaixonado por histórias reais. Acredito que cada casal
            tem uma narrativa única, e meu trabalho é capturar a essência do amor
            de vocês de forma natural e atemporal.
          </p>
          <Link
            href="/sobre"
            className="inline-block text-primary-sage font-medium hover:underline"
          >
            Saiba mais →
          </Link>
        </div>
      </section>

      {/* Por que escolher a Marina */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-dark-gray text-center mb-12 md:mb-16">
            Por que escolher a Marina?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <WhyChooseCard
              title="10+ anos de experiência"
              icon="camera"
            />
            <WhyChooseCard
              title="500+ casais felizes"
              icon="heart"
            />
            <WhyChooseCard
              title="Cobertura em SP e região"
              icon="map"
            />
          </div>
        </div>
      </section>

      {/* Mini Portfólio */}
      <section className="py-16 md:py-24 bg-primary-beige/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-dark-gray text-center mb-12 md:mb-16">
            Portfólio
          </h2>
          <PhotoGallery
            images={miniPortfolio}
            showFilters={false}
            columns="responsive"
          />
          <div className="text-center mt-10">
            <Link
              href="/portfolio"
              className="inline-block bg-primary-terracota hover:bg-primary-terracota/90 text-white font-medium px-8 py-4 rounded-lg min-h-[44px] transition-all duration-300"
            >
              Ver portfólio completo
            </Link>
          </div>
        </div>
      </section>

      {/* Depoimentos - Carrossel simplificado em grid para desktop */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-dark-gray text-center mb-12 md:mb-16">
            O que dizem os noivos
          </h2>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 md:py-24 bg-primary-sage">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center text-white">
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
            Pronto para eternizar seu amor?
          </h2>
          <p className="text-lg mb-8 text-white/95">
            Vamos conversar sobre o seu grande dia. Estou ansiosa para conhecer a
            história de vocês!
          </p>
          <Link
            href="/contato"
            className="inline-block bg-white text-primary-sage font-medium px-8 py-4 rounded-lg min-h-[44px] hover:bg-primary-beige transition-all duration-300"
          >
            Entre em contato
          </Link>
        </div>
      </section>
    </>
  );
}
