import PhotoGallery from "@/components/PhotoGallery";
import { portfolioImages, categories } from "@/data/portfolio";

export const metadata = {
  title: "Portfólio",
  description:
    "Galeria de fotos de casamentos - cerimônia, festa, pré-wedding e detalhes. Veja o trabalho da Marina Luz Fotografia.",
};

export default function PortfolioPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-primary-beige/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-dark-gray text-center mb-4">
            Portfólio
          </h1>
          <p className="text-center text-neutral-dark-gray/80 max-w-2xl mx-auto">
            Conheça alguns dos momentos especiais que tive o prazer de
            fotografar.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <PhotoGallery
            images={portfolioImages}
            categories={categories}
            showFilters={true}
            columns="responsive"
          />
        </div>
      </section>
    </>
  );
}
