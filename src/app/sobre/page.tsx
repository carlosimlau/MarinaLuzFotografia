import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Sobre mim",
  description:
    "Conheça Marina Luz, fotógrafa de casamentos em São Paulo com mais de 8 anos de experiência. Abordagem natural e sensível.",
};

const PROFILE_IMAGE =
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80";

const BEHIND_THE_SCENES = [
  "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&q=80",
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&q=80",
  "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=600&q=80",
];

const timeline = [
  { year: "2016", title: "Início da carreira", desc: "Primeiro casamento fotografado em São Paulo." },
  { year: "2018", title: "Especialização", desc: "Cursos em fotografia de casamento e luz natural." },
  { year: "2020", title: "500+ casais", desc: "Marco de 500 casamentos realizados." },
  { year: "2024", title: "Atualmente", desc: "Atuando em SP e região metropolitana." },
];

export default function SobrePage() {
  return (
    <>
      {/* Header com foto */}
      <section className="py-16 md:py-24 bg-primary-beige/50">
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden flex-shrink-0">
              <Image
                src={PROFILE_IMAGE}
                alt="Marina Luz - Fotógrafa de casamentos"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 256px, 320px"
                priority
              />
            </div>
            <div>
              <h1 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-dark-gray mb-4">
                Olá, eu sou Marina!
              </h1>
              <p className="text-lg text-neutral-dark-gray/90">
                Há mais de 8 anos fotografo casamentos em São Paulo com um
                olhar sensível e apaixonado por histórias reais.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Texto principal */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-16 space-y-6 text-lg text-neutral-dark-gray/90">
          <p>
            Acredito que cada casal tem uma narrativa única, e meu trabalho é
            capturar a essência do amor de vocês de forma natural e atemporal.
          </p>
          <p>
            Minha abordagem combina momentos espontâneos com composições
            cuidadosas, criando um acervo de memórias que vocês vão guardar para
            sempre. Trabalho com luz natural sempre que possível e valorizo as
            emoções genuínas acima de poses artificiais.
          </p>
          <p>
            Baseada em São Paulo, atendo casamentos em toda a região
            metropolitana e destinos especiais.
          </p>
        </div>
      </section>

      {/* Citação */}
      <section className="py-16 md:py-24 bg-primary-beige/30">
        <blockquote className="max-w-3xl mx-auto px-4 md:px-8 text-center">
          <p className="font-playfair text-xl md:text-2xl text-neutral-dark-gray italic">
            &ldquo;A fotografia é a arte de congelar o tempo e eternizar
            sentimentos. É uma honra fazer parte do dia mais importante da vida
            de cada casal.&rdquo;
          </p>
          <cite className="block mt-4 font-medium text-primary-sage not-italic">
            — Marina Luz
          </cite>
        </blockquote>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-neutral-dark-gray mb-12 text-center">
            Minha trajetória
          </h2>
          <ul className="space-y-8">
            {timeline.map((item) => (
              <li key={item.year} className="flex gap-6">
                <span className="font-semibold text-primary-sage w-20 flex-shrink-0">
                  {item.year}
                </span>
                <div>
                  <h3 className="font-semibold text-neutral-dark-gray mb-1">
                    {item.title}
                  </h3>
                  <p className="text-neutral-dark-gray/80">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Galeria bastidores */}
      <section className="py-16 md:py-24 bg-primary-beige/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <h2 className="font-playfair text-2xl md:text-3xl font-semibold text-neutral-dark-gray mb-12 text-center">
            Bastidores
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {BEHIND_THE_SCENES.map((url, i) => (
              <div
                key={i}
                className="relative aspect-[4/3] rounded-lg overflow-hidden"
              >
                <Image
                  src={url}
                  alt={`Bastidores do trabalho - foto ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-primary-sage">
        <div className="max-w-3xl mx-auto px-4 md:px-8 text-center text-white">
          <h2 className="font-playfair text-2xl md:text-3xl font-semibold mb-6">
            Vamos conversar sobre o seu casamento?
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
