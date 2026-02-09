import ContactForm from "@/components/ContactForm";
import ContactInfo from "@/components/ContactInfo";

export const metadata = {
  title: "Contato",
  description:
    "Entre em contato com Marina Luz Fotografia. Orçamento para casamentos em São Paulo e região.",
};

const contactInfo = [
  {
    icon: "mail" as const,
    label: "Email",
    value: "contato@marinaluzfoto.com.br",
    href: "mailto:contato@marinaluzfoto.com.br",
  },
  {
    icon: "phone" as const,
    label: "WhatsApp",
    value: "(11) 98765-4321",
    href: "https://wa.me/5511987654321",
  },
  {
    icon: "instagram" as const,
    label: "Instagram",
    value: "@marinaluzfotografia",
    href: "https://instagram.com/marinaluzfotografia",
  },
  {
    icon: "map" as const,
    label: "Atendimento",
    value: "São Paulo - SP (toda região metropolitana)",
    href: null,
  },
];

export default function ContatoPage() {
  return (
    <>
      <section className="py-16 md:py-24 bg-primary-beige/50">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-dark-gray mb-4">
            Contato
          </h1>
          <p className="text-lg text-neutral-dark-gray/80">
            Estou ansiosa para conhecer a história de vocês. Preencha o
            formulário ou entre em contato diretamente.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Formulário */}
            <div>
              <h2 className="font-playfair text-2xl font-semibold text-neutral-dark-gray mb-6">
                Envie sua mensagem
              </h2>
              <ContactForm />
            </div>

            {/* Informações */}
            <div>
              <h2 className="font-playfair text-2xl font-semibold text-neutral-dark-gray mb-6">
                Informações de contato
              </h2>
              <ContactInfo items={contactInfo} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
