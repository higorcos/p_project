# Projeto Cultural Indígena — TCC

Site estático e moderno em React para documentação de um grupo indígena, com vídeos, 
, fotografias e textos sobre história, cultura e cotidiano.

---

## Identidade Visual

| Elemento | Referência |
|---|---|
| Estilo | Editorial longform (NYT, The Intercept) |
| Paleta | Terroso · Vermelho urucum · Roxo genipapo · Bege/areia |
| Grafismos | Listras e padrões geométricos indígenas discretos |
| Tipografia | Moderna, elegante, boa legibilidade |

### Paleta de Cores

```
Urucum       #C0392B  ████
Genipapo     #1A237E  ████
Marrom       #6B4226  ████
Areia        #F5E6C8  ████
Bege escuro  #D4A843  ████
```

---

## Estrutura do Site

```
/                   → Página inicial (hero + destaques)
/videos             → Grid de vídeos com embed YouTube
/longform           → Lista de longform (card com capa, resumo, data)
/longform/:slug     → Crônica individual (longform: texto + fotos + vídeos)
/galeria            → Masonry grid com lightbox
```

---

## Stack Técnica

- **React + Vite**
- **React Router**
- **CSS Modules** ou **Tailwind CSS**
- **Sem backend** — dados em arquivos locais (`videos.js`, `longform.js`, `galeria.js`)

---

## Estrutura de Pastas

```
src/
├── components/        # Componentes reutilizáveis
├── pages/             # Páginas (Home, Videos, Cronicas, Galeria)
├── data/              # videos.js · longform.js · galeria.js
├── assets/            # Imagens, ícones, fontes
└── styles/            # CSS global e variáveis
```

---

## Assets Visuais

### Imagens reais do projeto
```
img/
├── img01.jpeg  (352 KB)   # Usar como hero ou galeria
├── img02.jpeg  (294 KB)
├── img03.jpeg  (163 KB)
├── img04.jpeg  (214 KB)
├── img05.jpeg  (279 KB)
├── img06.jpeg  (468 KB)
├── img07.jpeg  (346 KB)
├── img08.jpeg  (192 KB)
├── img09.jpeg  (188 KB)
├── img10.jpeg  (520 KB)   # Maior — ideal para hero
└── img11.jpeg  (408 KB)
```

### Placeholders SVG (identidade visual: urucum + genipapo + terroso)
```
assets/images/
├── hero-placeholder.svg              # Banner 1200×600 — fundo terroso + grafismo
├── cronica-placeholder.svg           # Card 800×500 — capa de longform
├── galeria-placeholder.svg           # Masonry 600×600 — preview de galeria
└── video-thumbnail-placeholder.svg   # Thumb 640×360 — fundo genipapo + botão play
```

---

## Requisitos

### Responsividade
- Mobile first
- Adaptado para tablets e desktop

### Acessibilidade
- Contraste WCAG AA
- `alt` em todas as imagens
- Navegação por teclado

### Extras
- Animações suaves (fade, slide)
- Scroll suave
- Parallax discreto no hero
- Transições de página
- SEO básico (meta tags)

---

## Prompt Original

> Desenvolva um site estático moderno em React para um projeto cultural sobre um grupo indígena.
>
> Criar uma plataforma de conteúdo longform com vídeos, longform, fotografias e textos sobre a história, cultura e cotidiano de um povo indígena. Visual contemporâneo e elegante, inspirado na cultura indígena brasileira sem parecer estereotipado. Misturar tradição e tecnologia. Design editorial semelhante a grandes reportagens multimídia.
>
> Paleta de cores: tons terrosos predominantes, vermelho indígena (urucum), cor inspirada no genipapo (roxo-azulado escuro), bege/areia/marrom claro para fundos.
>
> Stack: React + Vite + React Router + CSS Modules ou Tailwind. Sem backend. Dados em arquivos locais (arrays JS ou JSON).
