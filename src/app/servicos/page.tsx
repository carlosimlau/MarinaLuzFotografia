import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { services, additionalServices } from "@/data/services";

export const metadata = {
  title: "Serviços e Pacotes",
  description:
    "Pacotes de fotografia para casamentos - Essencial, Completo e Premium. Ensaio pré-wedding, cerimônia e mais.",
};

export default function ServicosPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-primary-beige/50">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-dark-gray mb-4">
            Serviços e Pacotes
          </h1>
          <p className="text-lg text-neutral-dark-gray/80">
            Encontre o pacote ideal para o seu casamento. Todos incluem edição
            profissional e galeria online.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {services.map((service) => (
              <ServiceCard key={service.id} {...service} />
            ))}
          </div>

          <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-neutral-dark-gray text-center mb-8">
            Serviços avulsos
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {additionalServices.map((svc) => (
              <div
                key={svc.id}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-6 bg-primary-beige/30 rounded-lg border border-primary-beige"
              >
                <div>
                  <h3 className="font-semibold text-neutral-dark-gray">
                    {svc.name}
                  </h3>
                  <p className="text-sm text-neutral-dark-gray/70">
                    {svc.description}
                  </p>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <span className="font-bold text-primary-sage">
                    R$ {svc.price}
                  </span>
                  <Link
                    href="/contato"
                    className="text-primary-sage font-medium hover:underline"
                  >
                    Solicitar
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-primary-sage">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center text-white">
          <h2 className="font-playfair text-2xl md:text-3xl font-semibold mb-6">
            Dúvidas? Vamos conversar!
          </h2>
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
