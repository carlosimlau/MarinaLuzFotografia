# PROJETO: Portfólio de Fotografia de Casamentos - Marina Luz Fotografia

## CONTEXTO
Criar um site portfólio completo para uma fotógrafa de casamentos fictícia chamada Marina Luz, baseada em São Paulo. Este é um projeto educacional com dados mockados para ensino de desenvolvimento web.

## REQUISITOS TÉCNICOS

### Stack Tecnológico
- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS
- Bibliotecas adicionais permitidas: 
  - react-icons ou lucide-react (ícones)
  - framer-motion (animações)
  - swiper ou embla-carousel (carrosséis)
  - react-hook-form (formulários)
  - yet-another-react-lightbox (galeria de fotos)

### Estrutura de Pastas
```
/src
  /app
    /page.tsx (Home)
    /sobre/page.tsx
    /portfolio/page.tsx
    /servicos/page.tsx
    /contato/page.tsx
    /layout.tsx
  /components
    /Header.tsx
    /Footer.tsx
    /Hero.tsx
    /ServiceCard.tsx
    /TestimonialCard.tsx
    /PhotoGallery.tsx
    /ContactForm.tsx
    /MobileMenu.tsx
  /data
    /services.ts (dados mockados dos serviços)
    /testimonials.ts (depoimentos mockados)
    /portfolio.ts (galeria mockada)
  /styles
    /globals.css
  /lib
    /utils.ts
/public
  /images
    /portfolio (imagens mockadas)
    /hero
    /about
```

## IDENTIDADE VISUAL

### Paleta de Cores
```css
/* Cores principais */
--primary-beige: #F5F1E8;
--primary-sage: #8B9D83;
--primary-gold: #C9B687;
--primary-terracota: #D4A59A;

/* Cores neutras */
--off-white: #FAFAF9;
--dark-gray: #2C2C2C;
--light-gray: #F5F5F5;
```

### Tipografia
- Heading: 'Playfair Display' ou 'Cormorant Garamond' (elegante, serif)
- Body: 'Inter' ou 'Poppins' (moderna, sans-serif)

## PÁGINAS E CONTEÚDO MOCKADO

### 1. HOME PAGE
**Hero Section:**
- Título: "Cada momento do seu casamento merece ser eterno"
- Subtítulo: "Fotografia autoral de casamentos em São Paulo. Capturando emoções genuínas e histórias de amor únicas."
- CTA Button: "Vamos conversar sobre o seu grande dia"
- Background: Imagem hero elegante (usar placeholder como Unsplash)

**Seção "Por que escolher a Marina?"**
- 3 cards com ícones:
  1. "8+ anos de experiência" - Ícone de câmera
  2. "500+ casais felizes" - Ícone de coração
  3. "Cobertura em SP e região" - Ícone de localização

**Mini Portfólio (6 fotos em grid)**
- Link para página completa de portfólio

**Depoimentos (2-3 cards em carrossel)**

**CTA Final:**
- "Pronto para eternizar seu amor?"
- Botão para página de contato

### 2. SOBRE MIM
**Conteúdo:**
```
Olá, eu sou Marina!

Há mais de 8 anos fotografo casamentos em São Paulo com um olhar sensível e apaixonado por histórias reais. Acredito que cada casal tem uma narrativa única, e meu trabalho é capturar a essência do amor de vocês de forma natural e atemporal.

Minha abordagem combina momentos espontâneos com composições cuidadosas, criando um acervo de memórias que vocês vão guardar para sempre. Trabalho com luz natural sempre que possível e valorizo as emoções genuínas acima de poses artificiais.

Baseada em São Paulo, atendo casamentos em toda a região metropolitana e destinos especiais.

"A fotografia é a arte de congelar o tempo e eternizar sentimentos. É uma honra fazer parte do dia mais importante da vida de cada casal." - Marina Luz
```

**Elementos visuais:**
- Foto de perfil da fotógrafa (placeholder)
- 2-3 fotos de bastidores/trabalho
- Timeline profissional (mockada)

### 3. PORTFÓLIO
**Galeria de Fotos:**
- Grid responsivo (3 colunas desktop, 2 tablet, 1 mobile)
- 24-30 fotos mockadas organizadas por categorias:
  - Cerimônia (8 fotos)
  - Festa (8 fotos)
  - Ensaio Pré-Wedding (8 fotos)
  - Detalhes (6 fotos)
- Lightbox para visualização em tamanho completo
- Filtros por categoria

**Imagens:**
- Use Unsplash API ou placeholders com:
  - https://images.unsplash.com/photo-[id]?w=800&q=80
  - Buscar por: wedding, bride, couple, wedding ceremony

### 4. SERVIÇOS

**Pacote 1: Essencial**
```
Preço: A partir de R$ 3.500
- 8 horas de cobertura
- 1 fotógrafo profissional
- Ensaio pré-wedding (2h)
- Galeria online privada
- 400+ fotos editadas em alta resolução
- Entrega em 60 dias
```

**Pacote 2: Completo**
```
Preço: A partir de R$ 5.500
- 10 horas de cobertura
- 1 fotógrafo + 1 assistente
- Ensaio pré-wedding (3h)
- Making of da noiva
- Galeria online privada
- 600+ fotos editadas em alta resolução
- Álbum digital premium
- Entrega em 45 dias
```

**Pacote 3: Premium**
```
Preço: A partir de R$ 8.500
- 12 horas de cobertura completa
- 2 fotógrafos profissionais
- Ensaio pré-wedding (4h em local especial)
- Making of completo
- Sessão day-after
- Galeria online privada
- 800+ fotos editadas em alta resolução
- Álbum físico 30x30cm (60 páginas)
- Álbum digital premium
- Pendrive personalizado
- Entrega em 30 dias
```

**Serviços Avulsos:**
- Mini-wedding (até 50 convidados) - R$ 2.500
- Apenas ensaio pré-wedding - R$ 800
- Apenas cerimônia (4h) - R$ 2.000
- Ensaio de casal - R$ 600

**Layout:**
- Cards elegantes para cada pacote
- Badge "Mais Popular" no pacote Completo
- Botão CTA em cada card
- Accordion/Tabs para serviços avulsos

### 5. CONTATO

**Formulário:**
- Nome completo (required)
- Email (required)
- Telefone/WhatsApp (required)
- Data do casamento (date picker)
- Tipo de serviço (select com opções)
- Mensagem (textarea)
- Botão: "Enviar mensagem"

**Informações de Contato:**
- Email: contato@marinaluzfoto.com.br (mockado)
- WhatsApp: (11) 98765-4321 (mockado)
- Instagram: @marinaluzfotografia (mockado)
- Endereço: São Paulo - SP (atendimento em toda região metropolitana)

**Mapa:**
- Embed do Google Maps (região de São Paulo) - opcional

## DADOS MOCKADOS

### Depoimentos (criar arquivo /src/data/testimonials.ts)
```typescript
export const testimonials = [
  {
    id: 1,
    name: "Julia & Rafael",
    date: "Casamento em Março 2024",
    text: "A Marina capturou cada emoção do nosso dia de forma mágica! As fotos ficaram lindas e naturais, exatamente como sonhamos. Super recomendamos!",
    rating: 5,
    photo: "/images/testimonials/couple1.jpg"
  },
  {
    id: 2,
    name: "Camila & Bruno",
    date: "Casamento em Janeiro 2024",
    text: "Profissionalismo e sensibilidade únicos! A Marina nos deixou super à vontade e o resultado foi incrível. As fotos transmitem todo o amor e alegria daquele dia.",
    rating: 5,
    photo: "/images/testimonials/couple2.jpg"
  },
  {
    id: 3,
    name: "Amanda & Pedro",
    date: "Casamento em Novembro 2023",
    text: "Não conseguimos escolher apenas algumas fotos favoritas, todas ficaram perfeitas! A atenção aos detalhes e aos momentos especiais foi excepcional.",
    rating: 5,
    photo: "/images/testimonials/couple3.jpg"
  }
]
```

### Serviços (criar arquivo /src/data/services.ts)
```typescript
export const services = [
  {
    id: 1,
    name: "Essencial",
    price: "3.500",
    popular: false,
    features: [
      "8 horas de cobertura",
      "1 fotógrafo profissional",
      "Ensaio pré-wedding (2h)",
      "Galeria online privada",
      "400+ fotos editadas em alta resolução",
      "Entrega em 60 dias"
    ]
  },
  {
    id: 2,
    name: "Completo",
    price: "5.500",
    popular: true,
    features: [
      "10 horas de cobertura",
      "1 fotógrafo + 1 assistente",
      "Ensaio pré-wedding (3h)",
      "Making of da noiva",
      "Galeria online privada",
      "600+ fotos editadas em alta resolução",
      "Álbum digital premium",
      "Entrega em 45 dias"
    ]
  },
  {
    id: 3,
    name: "Premium",
    price: "8.500",
    popular: false,
    features: [
      "12 horas de cobertura completa",
      "2 fotógrafos profissionais",
      "Ensaio pré-wedding (4h em local especial)",
      "Making of completo",
      "Sessão day-after",
      "Galeria online privada",
      "800+ fotos editadas em alta resolução",
      "Álbum físico 30x30cm (60 páginas)",
      "Álbum digital premium",
      "Pendrive personalizado",
      "Entrega em 30 dias"
    ]
  }
]

export const additionalServices = [
  {
    id: 1,
    name: "Mini-wedding",
    description: "Até 50 convidados",
    price: "2.500"
  },
  {
    id: 2,
    name: "Ensaio pré-wedding",
    description: "Apenas ensaio",
    price: "800"
  },
  {
    id: 3,
    name: "Apenas cerimônia",
    description: "4 horas de cobertura",
    price: "2.000"
  },
  {
    id: 4,
    name: "Ensaio de casal",
    description: "Sessão fotográfica",
    price: "600"
  }
]
```

### Portfólio (criar arquivo /src/data/portfolio.ts)
```typescript
export const portfolioImages = [
  // Cerimônia
  {
    id: 1,
    category: "cerimonia",
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
    alt: "Cerimônia de casamento - troca de alianças"
  },
  {
    id: 2,
    category: "cerimonia",
    url: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&q=80",
    alt: "Noiva caminhando até o altar"
  },
  {
    id: 3,
    category: "cerimonia",
    url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=800&q=80",
    alt: "Beijo dos noivos na cerimônia"
  },
  {
    id: 4,
    category: "cerimonia",
    url: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80",
    alt: "Emoção durante a cerimônia"
  },
  {
    id: 5,
    category: "cerimonia",
    url: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80",
    alt: "Decoração da cerimônia"
  },
  {
    id: 6,
    category: "cerimonia",
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80",
    alt: "Saída dos noivos após cerimônia"
  },
  {
    id: 7,
    category: "cerimonia",
    url: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800&q=80",
    alt: "Momento especial da cerimônia"
  },
  {
    id: 8,
    category: "cerimonia",
    url: "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=800&q=80",
    alt: "Convidados emocionados"
  },

  // Festa
  {
    id: 9,
    category: "festa",
    url: "https://images.unsplash.com/photo-1478146059743-1f0b70d08e67?w=800&q=80",
    alt: "Primeira dança dos noivos"
  },
  {
    id: 10,
    category: "festa",
    url: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&q=80",
    alt: "Recepção do casamento"
  },
  {
    id: 11,
    category: "festa",
    url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
    alt: "Mesa decorada para recepção"
  },
  {
    id: 12,
    category: "festa",
    url: "https://images.unsplash.com/photo-1470116945706-e6bf5d5a53ca?w=800&q=80",
    alt: "Pista de dança animada"
  },
  {
    id: 13,
    category: "festa",
    url: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    alt: "Festa de casamento"
  },
  {
    id: 14,
    category: "festa",
    url: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
    alt: "Momento divertido na festa"
  },
  {
    id: 15,
    category: "festa",
    url: "https://images.unsplash.com/photo-1481653125770-b78c206c59d4?w=800&q=80",
    alt: "Brinde dos noivos"
  },
  {
    id: 16,
    category: "festa",
    url: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80",
    alt: "Convidados celebrando"
  },

  // Pré-Wedding
  {
    id: 17,
    category: "pre-wedding",
    url: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=800&q=80",
    alt: "Ensaio pré-wedding romântico"
  },
  {
    id: 18,
    category: "pre-wedding",
    url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
    alt: "Casal abraçado no ensaio"
  },
  {
    id: 19,
    category: "pre-wedding",
    url: "https://images.unsplash.com/photo-1522086098528-16d8d3d927c2?w=800&q=80",
    alt: "Ensaio ao ar livre"
  },
  {
    id: 20,
    category: "pre-wedding",
    url: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&q=80",
    alt: "Momento descontraído do casal"
  },
  {
    id: 21,
    category: "pre-wedding",
    url: "https://images.unsplash.com/photo-1487530811176-3780de880c2d?w=800&q=80",
    alt: "Ensaio pré-casamento"
  },
  {
    id: 22,
    category: "pre-wedding",
    url: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=800&q=80",
    alt: "Casal sorrindo no ensaio"
  },
  {
    id: 23,
    category: "pre-wedding",
    url: "https://images.unsplash.com/photo-1502635385003-ee1e6a1a742d?w=800&q=80",
    alt: "Ensaio na natureza"
  },
  {
    id: 24,
    category: "pre-wedding",
    url: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?w=800&q=80",
    alt: "Momento íntimo do casal"
  },

  // Detalhes
  {
    id: 25,
    category: "detalhes",
    url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
    alt: "Alianças de casamento"
  },
  {
    id: 26,
    category: "detalhes",
    url: "https://images.unsplash.com/photo-1460978812857-470ed1c77af0?w=800&q=80",
    alt: "Buquê da noiva"
  },
  {
    id: 27,
    category: "detalhes",
    url: "https://images.unsplash.com/photo-1535370786987-d03ba1425dae?w=800&q=80",
    alt: "Detalhes do vestido"
  },
  {
    id: 28,
    category: "detalhes",
    url: "https://images.unsplash.com/photo-1525258974676-14a1b611e4c6?w=800&q=80",
    alt: "Sapatos da noiva"
  },
  {
    id: 29,
    category: "detalhes",
    url: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?w=800&q=80",
    alt: "Convite de casamento"
  },
  {
    id: 30,
    category: "detalhes",
    url: "https://images.unsplash.com/photo-1501183007986-d0d080b147f9?w=800&q=80",
    alt: "Decoração e detalhes"
  }
]

export const categories = [
  { id: "todos", name: "Todos" },
  { id: "cerimonia", name: "Cerimônia" },
  { id: "festa", name: "Festa" },
  { id: "pre-wedding", name: "Pré-Wedding" },
  { id: "detalhes", name: "Detalhes" }
]
```

## REQUISITOS DE DESIGN

### Mobile-First
- Design OBRIGATORIAMENTE responsivo
- Breakpoints: 640px (sm), 768px (md), 1024px (lg), 1280px (xl)
- Menu hamburger mobile
- Galeria adaptável (1 col mobile, 2 tablet, 3 desktop)
- Touch-friendly (botões mínimo 44px)
- Performance otimizada para mobile

### Componentes Essenciais

**Header/Navbar:**
- Logo "Marina Luz Fotografia"
- Menu desktop: Home | Sobre | Portfólio | Serviços | Contato
- Menu mobile: Hamburger menu
- Sticky/Fixed no scroll
- Fundo semi-transparente com blur

**Footer:**
- Logo
- Links rápidos
- Redes sociais (Instagram, WhatsApp)
- Copyright mockado
- Newsletter signup (opcional, mockado)

**Botões CTA:**
- Estilo primário: fundo sage/terracota, hover com animação
- Estilo secundário: outline
- Ícones do WhatsApp onde apropriado

### Animações e Interações
- Scroll suave entre seções
- Fade in ao scroll (Intersection Observer)
- Hover effects em cards e imagens
- Transições suaves (300ms padrão)
- Loading states em formulário

### Acessibilidade
- Alt text em todas as imagens
- Labels em inputs
- Contraste adequado (WCAG AA)
- Navegação por teclado
- Focus states visíveis

## FUNCIONALIDADES

### Galeria de Fotos
- Grid responsivo
- Lightbox para visualização
- Navegação por setas
- Zoom suave
- Fechar com ESC ou click fora

### Formulário de Contato
- Validação client-side
- Mensagens de erro
- Loading state no envio
- Mensagem de sucesso (mockada, sem envio real)
- Reset após "envio"

### Performance
- Next.js Image optimization
- Lazy loading de imagens
- Code splitting automático
- Fonts otimizadas (next/font)

## INSTRUÇÕES PARA O CURSOR

1. **Inicialize o projeto:**
```bash
npx create-next-app@latest marina-luz-fotografia --typescript --tailwind --app
```

2. **Configure o Tailwind com as cores customizadas no tailwind.config.ts:**
```typescript
colors: {
  primary: {
    beige: '#F5F1E8',
    sage: '#8B9D83',
    gold: '#C9B687',
    terracota: '#D4A59A',
  },
  neutral: {
    'off-white': '#FAFAF9',
    'dark-gray': '#2C2C2C',
    'light-gray': '#F5F5F5',
  }
}
```

3. **Configure as fontes no layout.tsx usando next/font/google:**
```typescript
import { Playfair_Display, Inter } from 'next/font/google'

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})
```

4. **Crie a estrutura de pastas completa conforme especificado**

5. **Desenvolva componente por componente, começando por:**
   - Layout base (Header + Footer)
   - Home page
   - Componentes reutilizáveis
   - Demais páginas

6. **Implemente responsividade MOBILE-FIRST**
   - Comece pelos estilos mobile
   - Use breakpoints para desktop progressivamente

7. **Use placeholder images do Unsplash para:**
   - Hero: wedding photography, bride walking
   - Portfolio: Use as URLs fornecidas no arquivo portfolio.ts
   - About: photographer at work, camera

8. **Adicione comentários explicativos** para fins educacionais em partes importantes do código

9. **Implemente SEO básico:**
```typescript
// Em cada page.tsx
export const metadata = {
  title: 'Marina Luz Fotografia | Fotografia de Casamentos em São Paulo',
  description: 'Fotografia autoral de casamentos em São Paulo. Capturando emoções genuínas e histórias de amor únicas há mais de 8 anos.',
  keywords: 'fotografia casamento, casamento são paulo, fotógrafo casamento sp',
}
```

10. **Crie um README.md completo** com:
   - Descrição do projeto
   - Screenshot (opcional)
   - Tecnologias utilizadas
   - Como rodar localmente
   - Estrutura do projeto
   - Scripts disponíveis
   - Observação sobre dados mockados
   - Créditos (Unsplash para imagens)

## COMPONENTES ESPECÍFICOS

### Header Component
```typescript
// Exemplo de estrutura
- Logo (link para home)
- Nav desktop (visible lg+)
- Hamburger button (visible até lg)
- Mobile menu (slide-in from right)
- Sticky positioning
- Background blur effect on scroll
```

### Hero Component
```typescript
// Características
- Background image com overlay
- Texto centralizado
- Heading grande e impactante
- Subtítulo menor
- CTA button proeminente
- Altura: min-h-screen no mobile, ajustável no desktop
- Parallax suave (opcional)
```

### ServiceCard Component
```typescript
// Props
interface ServiceCardProps {
  name: string;
  price: string;
  features: string[];
  popular?: boolean;
}

// Features
- Badge "Mais Popular" condicional
- Lista de features com checkmarks
- Botão CTA
- Hover effect elegante
- Border/shadow suave
```

### TestimonialCard Component
```typescript
// Props
interface TestimonialCardProps {
  name: string;
  date: string;
  text: string;
  rating: number;
  photo?: string;
}

// Features
- Estrelas de rating
- Aspas decorativas
- Foto do casal (opcional)
- Design clean e elegante
```

### PhotoGallery Component
```typescript
// Features
- Masonry ou grid layout
- Lazy loading
- Click para abrir lightbox
- Categorias filtráveis
- Responsive (1/2/3 colunas)
- Smooth transitions
```

### ContactForm Component
```typescript
// Fields
- Nome completo
- Email
- Telefone
- Data do casamento (date picker)
- Tipo de serviço (select)
- Mensagem (textarea)

// Validation
- Required fields
- Email format
- Phone format (BR)
- Error messages em português

// Behavior
- Loading state durante "envio"
- Success message após submit
- Form reset
- Não envia email real (mockado)
```

### MobileMenu Component
```typescript
// Features
- Slide-in animation from right
- Overlay backdrop (click to close)
- Lista de links
- Close button
- Social media icons
- Smooth transitions
```

## PÁGINAS DETALHADAS

### Home (/)
**Seções na ordem:**
1. Hero Section
2. Sobre (resumo com link "Saiba mais")
3. Por que escolher (3 cards com ícones)
4. Mini Portfólio (grid 2x3)
5. Depoimentos (carrossel)
6. CTA Final

### Sobre (/sobre)
**Seções:**
1. Header com foto
2. Texto principal
3. Citação destacada
4. Timeline/Experiência
5. Galeria de bastidores (3-4 fotos)
6. CTA para contato

### Portfólio (/portfolio)
**Seções:**
1. Header/título
2. Filtros de categoria
3. Grid de fotos (masonry ou grid)
4. Lightbox functionality
5. Load more (opcional)

### Serviços (/servicos)
**Seções:**
1. Header
2. Grid de pacotes (3 cards)
3. Tabela comparativa (opcional)
4. Serviços avulsos (accordion ou cards menores)
5. FAQ (opcional)
6. CTA para contato

### Contato (/contato)
**Seções:**
1. Header
2. Formulário (lado esquerdo)
3. Informações de contato (lado direito)
4. Mapa incorporado (opcional)
5. Links sociais

## ESTILO E DESIGN GUIDELINES

### Espaçamento
```css
/* Padding/Margin padrões */
- Seções: py-16 md:py-24
- Containers: px-4 md:px-8 lg:px-16
- Entre elementos: mb-8 md:mb-12
- Cards: p-6 md:p-8
```

### Tipografia
```css
/* Tamanhos de texto */
- H1: text-4xl md:text-5xl lg:text-6xl
- H2: text-3xl md:text-4xl lg:text-5xl
- H3: text-2xl md:text-3xl
- H4: text-xl md:text-2xl
- Body: text-base md:text-lg
- Small: text-sm
```

### Sombras e Bordas
```css
/* Padrões */
- Cards: shadow-md hover:shadow-lg
- Imagens: shadow-sm
- Inputs: border border-gray-300 focus:border-sage
- Border radius: rounded-lg (padrão)
```

### Transições
```css
/* Padrões */
- Hover: transition-all duration-300
- Fade in: opacity-0 animate-fade-in
- Slide in: translate-x-full transition-transform
```

## BOAS PRÁTICAS DE CÓDIGO

### TypeScript
- Use interfaces para props
- Type safety em todos os componentes
- Evite 'any'
- Use tipos para dados mockados

### React
- Use 'use client' apenas quando necessário
- Componentes server-side por padrão
- Custom hooks para lógica reutilizável
- Props destructuring

### Performance
- Lazy loading de imagens
- Dynamic imports para componentes pesados
- Memoization quando apropriado
- Otimização de re-renders

### Acessibilidade
- Semantic HTML
- ARIA labels onde necessário
- Keyboard navigation
- Focus management
- Alt text descritivo

## OBSERVAÇÕES IMPORTANTES

- Este é um projeto **EDUCACIONAL** com dados **FICTÍCIOS**
- Nenhuma funcionalidade de backend real é necessária
- O formulário de contato apenas simula o envio
- Todas as imagens devem ser placeholders do Unsplash
- Priorize código limpo e bem comentado para aprendizado
- Foque em boas práticas de React e Next.js
- Performance e SEO são importantes (meta tags, sitemap)
- **Mobile-first é OBRIGATÓRIO**

## ENTREGA ESPERADA

Um projeto Next.js completo, responsivo, com:
- ✅ 5 páginas funcionais (Home, Sobre, Portfólio, Serviços, Contato)
- ✅ Navegação fluida e intuitiva
- ✅ Design elegante e profissional
- ✅ Totalmente mobile-friendly (CRÍTICO)
- ✅ Dados mockados realistas
- ✅ Código comentado para fins educacionais
- ✅ README completo
- ✅ Pronto para deploy (Vercel/Netlify)
- ✅ Performance otimizada
- ✅ SEO básico implementado
- ✅ Acessibilidade seguindo WCAG

## SCRIPTS PACKAGE.JSON

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

## DEPLOY

O projeto deve estar pronto para deploy em:
- **Vercel** (recomendado para Next.js)
- Netlify
- GitHub Pages (com adaptações)

Incluir arquivo `.env.example` se houver variáveis de ambiente.

---

## CHECKLIST FINAL

Antes de considerar o projeto completo, verificar:

- [ ] Todas as 5 páginas funcionando
- [ ] Header e Footer em todas as páginas
- [ ] Navegação mobile funcionando
- [ ] Galeria com lightbox funcionando
- [ ] Formulário com validação
- [ ] Design responsivo em todos os breakpoints
- [ ] Imagens otimizadas (Next Image)
- [ ] Sem erros no console
- [ ] Sem warnings do TypeScript
- [ ] README completo
- [ ] Código comentado
- [ ] Dados mockados realistas
- [ ] Performance: Lighthouse > 90
- [ ] Acessibilidade: Lighthouse > 90
- [ ] SEO: Meta tags em todas as páginas
- [ ] Build sem erros (`npm run build`)

---

**IMPORTANTE:** Comece criando a estrutura base e depois desenvolva cada seção progressivamente. Priorize a experiência mobile em todas as decisões de design. Teste em diferentes tamanhos de tela constantemente durante o desenvolvimento.

**BOA SORTE! 🚀📸**
