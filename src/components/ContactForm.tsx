"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("Email inválido"),
  phone: z
    .string()
    .regex(
      /^\(?[1-9]{2}\)? ?9?\d{4}-?\d{4}$/,
      "Telefone inválido. Use formato: (11) 98765-4321"
    ),
  weddingDate: z.string().min(1, "Informe a data do casamento"),
  serviceType: z.string().min(1, "Selecione o tipo de serviço"),
  message: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const serviceOptions = [
  { value: "", label: "Selecione..." },
  { value: "essencial", label: "Pacote Essencial" },
  { value: "completo", label: "Pacote Completo" },
  { value: "premium", label: "Pacote Premium" },
  { value: "mini-wedding", label: "Mini-wedding" },
  { value: "pre-wedding", label: "Ensaio pré-wedding" },
  { value: "cerimonia", label: "Apenas cerimônia" },
  { value: "casal", label: "Ensaio de casal" },
];

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async () => {
    setIsSubmitting(true);
    setSubmitSuccess(false);

    // Simula envio - projeto educacional sem backend
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitSuccess(true);
    reset();
  };

  if (submitSuccess) {
    return (
      <div className="bg-primary-sage/10 border border-primary-sage rounded-lg p-6 md:p-8 text-center">
        <p className="text-lg font-medium text-primary-sage mb-2">
          Mensagem enviada com sucesso!
        </p>
        <p className="text-neutral-dark-gray">
          Em breve entraremos em contato. Obrigada pelo interesse!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-neutral-dark-gray mb-2">
          Nome completo *
        </label>
        <input
          id="name"
          type="text"
          {...register("name")}
          className="w-full px-4 py-3 border border-neutral-light-gray rounded-lg focus:border-primary-sage focus:ring-2 focus:ring-primary-sage/20 outline-none transition-colors"
          placeholder="Seu nome"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="mt-1 text-sm text-red-600" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-dark-gray mb-2">
          Email *
        </label>
        <input
          id="email"
          type="email"
          {...register("email")}
          className="w-full px-4 py-3 border border-neutral-light-gray rounded-lg focus:border-primary-sage focus:ring-2 focus:ring-primary-sage/20 outline-none transition-colors"
          placeholder="seu@email.com"
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-dark-gray mb-2">
          Telefone / WhatsApp *
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className="w-full px-4 py-3 border border-neutral-light-gray rounded-lg focus:border-primary-sage focus:ring-2 focus:ring-primary-sage/20 outline-none transition-colors"
          placeholder="(11) 98765-4321"
          aria-invalid={!!errors.phone}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="weddingDate" className="block text-sm font-medium text-neutral-dark-gray mb-2">
          Data do casamento *
        </label>
        <input
          id="weddingDate"
          type="date"
          {...register("weddingDate")}
          className="w-full px-4 py-3 border border-neutral-light-gray rounded-lg focus:border-primary-sage focus:ring-2 focus:ring-primary-sage/20 outline-none transition-colors"
          aria-invalid={!!errors.weddingDate}
        />
        {errors.weddingDate && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.weddingDate.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="serviceType" className="block text-sm font-medium text-neutral-dark-gray mb-2">
          Tipo de serviço *
        </label>
        <select
          id="serviceType"
          {...register("serviceType")}
          className="w-full px-4 py-3 border border-neutral-light-gray rounded-lg focus:border-primary-sage focus:ring-2 focus:ring-primary-sage/20 outline-none transition-colors bg-white"
          aria-invalid={!!errors.serviceType}
        >
          {serviceOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {errors.serviceType && (
          <p className="mt-1 text-sm text-red-600" role="alert">
            {errors.serviceType.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-dark-gray mb-2">
          Mensagem
        </label>
        <textarea
          id="message"
          rows={4}
          {...register("message")}
          className="w-full px-4 py-3 border border-neutral-light-gray rounded-lg focus:border-primary-sage focus:ring-2 focus:ring-primary-sage/20 outline-none transition-colors resize-none"
          placeholder="Conte-me sobre o seu casamento..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary-terracota hover:bg-primary-terracota/90 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium py-3 px-6 rounded-lg min-h-[44px] transition-all duration-300"
      >
        {isSubmitting ? "Enviando..." : "Enviar mensagem"}
      </button>
    </form>
  );
}
