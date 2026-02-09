# Marina Luz Fotografia

Site portfólio para fotógrafa de casamentos fictícia - Marina Luz. Projeto educacional com dados mockados para ensino de desenvolvimento web.

## Tecnologias

- **Next.js 14+** (App Router)
- **React 18+**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações)
- **Embla Carousel** (carrossel de depoimentos)
- **React Hook Form** + **Zod** (formulário e validação)
- **Yet Another React Lightbox** (galeria de fotos)
- **Lucide React** (ícones)

## Como rodar

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Rodar produção
npm start
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura do projeto

```
/src
  /app              # Rotas e páginas (App Router)
  /components       # Componentes reutilizáveis
  /data             # Dados mockados (serviços, depoimentos, portfólio)
  /lib              # Utilitários
  /styles           # Estilos globais
/public             # Arquivos estáticos
```

## Páginas

- **/** - Home (Hero, Sobre, Por que escolher, Mini Portfólio, Depoimentos, CTA)
- **/sobre** - Sobre mim (perfil, citação, timeline, bastidores)
- **/portfolio** - Galeria com filtros e lightbox
- **/servicos** - Pacotes e serviços avulsos
- **/contato** - Formulário e informações

## Scripts

| Script | Descrição |
|--------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build para produção |
| `npm start` | Servidor de produção |
| `npm run lint` | Linter ESLint |

## Observações

- **Projeto educacional** com dados fictícios
- O formulário de contato simula o envio (sem backend)
- Imagens do portfólio são placeholders do [Unsplash](https://unsplash.com) - créditos aos fotógrafos originais

## Deploy

O projeto está pronto para deploy na **Vercel**. Push para o repositório conectado dispara deploy automático.

---

Projeto desenvolvido seguindo o escopo do SUPERPROMPT_MARINA_LUZ_FOTOGRAFIA.md
