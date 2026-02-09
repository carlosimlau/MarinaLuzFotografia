"use client";

import { Mail, Phone, MapPin, Instagram } from "lucide-react";

const iconMap = {
  mail: Mail,
  phone: Phone,
  map: MapPin,
  instagram: Instagram,
};

interface ContactItem {
  icon: keyof typeof iconMap;
  label: string;
  value: string;
  href: string | null;
}

interface ContactInfoProps {
  items: ContactItem[];
}

export default function ContactInfo({ items }: ContactInfoProps) {
  return (
    <ul className="space-y-6">
      {items.map((item) => {
        const Icon = iconMap[item.icon];
        return (
          <li key={item.label} className="flex gap-4">
            <div className="w-10 h-10 flex-shrink-0 rounded-full bg-primary-sage/10 flex items-center justify-center text-primary-sage">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <p className="font-medium text-neutral-dark-gray">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    item.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="text-primary-sage hover:underline"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-neutral-dark-gray/80">{item.value}</p>
              )}
            </div>
          </li>
        );
      })}
    </ul>
  );
}
