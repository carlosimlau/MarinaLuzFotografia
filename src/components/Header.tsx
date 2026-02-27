"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import MobileMenu from "./MobileMenu";
import { Button } from "@heroui/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre", label: "Sobre" },
  { href: "/portfolio", label: "Portfólio" },
  { href: "/servicos", label: "Serviços" },
  { href: "/contato", label: "Contato" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-primary-beige/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="font-playfair text-xl md:text-2xl font-semibold text-neutral-dark-gray hover:text-primary-sage transition-colors"
            >
              Marina Luz Fotografia
            </Link>

            {/* Desktop Navigation - visible lg+ */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
              {navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`transition-colors font-medium border-b-2 pb-1 ${
                      isActive
                        ? "text-primary-sage border-primary-sage"
                        : "text-neutral-dark-gray hover:text-primary-sage border-transparent"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Hamburger - direita, visível só em mobile */}
            <Button
              isIconOnly
              variant="light"
              onPress={() => setIsMenuOpen((prev) => !prev)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-neutral-dark-gray hover:text-primary-sage focus:outline-none focus:ring-2 focus:ring-primary-sage rounded-lg bg-transparent data-[hover=true]:bg-transparent"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Menu</span>
              <span
                className={`absolute block h-[2px] w-5 bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute block h-[2px] w-5 bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "opacity-0 scale-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute block h-[2px] w-5 bg-current transition-all duration-300 ease-in-out ${
                  isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-1.5"
                }`}
              />
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - dropdown below navbar */}
      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={navLinks}
      />
    </header>
  );
}
