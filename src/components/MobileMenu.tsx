"use client";

import { useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Instagram } from "lucide-react";
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

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close menu on route change
  useEffect(() => {
    onClose();
  }, [pathname]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden="true"
          />

          {/* Dropdown menu panel */}
          <motion.div
            key="menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{
              duration: 0.3,
              ease: [0.4, 0, 0.2, 1],
            }}
            className="relative z-50 overflow-hidden border-b border-primary-beige/50 shadow-lg lg:hidden"
            style={{ backgroundColor: "#F5F1E8" }}
          >
            <div className="px-6 py-4 space-y-1">
              {/* Navigation links */}
              {links.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: 0.05 * index,
                    duration: 0.25,
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className={`block w-full text-lg font-medium py-3 px-3 rounded-lg transition-colors ${
                      pathname === link.href
                        ? "text-primary-sage bg-primary-sage/10"
                        : "text-neutral-dark-gray hover:text-primary-sage hover:bg-primary-sage/5"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* Divider */}
              <div className="border-t border-primary-sage/20 my-3" />

              {/* Social links */}
              <motion.div
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.05 * links.length,
                  duration: 0.25,
                }}
                className="flex items-center gap-4 px-3 py-3"
              >
                <a
                  href="https://instagram.com/marinaluzfotografia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-neutral-dark-gray hover:text-primary-sage transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                  <span className="text-sm font-medium">Instagram</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
