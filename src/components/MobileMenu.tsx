"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: NavLink[];
}

export default function MobileMenu({ isOpen, onClose, links }: MobileMenuProps) {
  const pathname = usePathname();

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay - click to close */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            onClick={onClose}
            onKeyDown={(e) => e.key === "Escape" && onClose()}
            aria-hidden="true"
          />

          {/* Slide-in panel from right */}
          <motion.div
            key="panel"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-primary-beige z-50 shadow-xl lg:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
      >
        <div className="flex flex-col h-full pt-20 px-6">
          {/* Close button */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-neutral-dark-gray hover:text-primary-sage focus:outline-none focus:ring-2 focus:ring-primary-sage rounded-lg min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Fechar menu"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation links */}
          <nav className="flex flex-col gap-4" aria-label="Navegação mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={onClose}
                className={`text-lg font-medium py-2 ${
                  pathname === link.href
                    ? "text-primary-sage"
                    : "text-neutral-dark-gray hover:text-primary-sage"
                } transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Social links */}
          <div className="mt-auto pb-8 flex gap-4">
            <a
              href="https://instagram.com/marinaluzfotografia"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-neutral-dark-gray hover:text-primary-sage transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://wa.me/5511987654321"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-primary-sage hover:underline py-2"
              aria-label="WhatsApp"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </>
      )}
    </AnimatePresence>
  );
}
