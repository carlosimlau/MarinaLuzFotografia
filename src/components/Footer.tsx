import Link from "next/link";
import { Instagram } from "lucide-react";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="bg-neutral-dark-gray text-primary-beige">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12 md:py-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="font-playfair text-xl md:text-2xl font-semibold hover:text-primary-gold transition-colors"
          >
            Marina Luz Fotografia
          </Link>

          {/* Quick links */}
          <nav className="flex flex-wrap gap-6" aria-label="Links rápidos">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-primary-gold transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/marinaluzfotografia"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-primary-gold transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20 text-sm text-primary-beige/80">
          <p>© {new Date().getFullYear()} Marina Luz Fotografia. Projeto educacional com dados fictícios.</p>
        </div>
      </div>
    </footer>
  );
}
