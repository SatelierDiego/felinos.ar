# AGENTS.md

## Estado del proyecto

Felinos.Ar es un sitio estático de divulgación sobre los félidos silvestres de Argentina.
El proyecto está en fase de **mantenimiento y refinamiento**. La arquitectura está consolidada y no debe modificarse.

Cualquier intervención debe ser **mínima, quirúrgica y consistente** con lo ya construido.

---

## Regla principal

**No toques lo que funciona.**

Si la tarea no requiere modificar un archivo, no lo modifiques.
Si la tarea no requiere un nuevo componente, no lo crees.
Si la tarea no requiere una nueva dependencia, no la agregues.

---

## Stack (inamovible)

| Capa             | Tecnología                                                          |
| ---------------- | ------------------------------------------------------------------- |
| Framework        | Astro v6 — SSG únicamente                                           |
| Estilos          | Tailwind CSS v4 via `@tailwindcss/vite`                             |
| Lenguaje         | TypeScript strict (`astro/tsconfigs/strict`)                        |
| Contenido        | Astro Content Collections + Zod                                     |
| Fuentes          | Fontsource (Open Sans + Quicksand) via `fontProviders.fontsource()` |
| Mapas            | Leaflet (client-only, lazy)                                         |
| Galería          | GLightbox                                                           |
| Markdown runtime | marked                                                              |
| Iconos           | astro-icon desde `src/assets/icons/tabler/outline`                  |
| Imágenes         | sharp + `astro:assets`                                              |
| Package manager  | pnpm                                                                |

No agregar librerías. No reemplazar tecnologías. No actualizar versiones salvo que se solicite explícitamente.

---

## Arquitectura (no modificar)

```
src/
├── assets/              # Imágenes, SVGs, iconos
├── components/          # Componentes Astro reutilizables
├── content/             # Markdown por colección
│   ├── felinos/         # Una entrada por especie (11 archivos)
│   ├── fotografos/
│   ├── home/
│   └── libros/
├── content.config.ts    # Schemas Zod — única fuente de verdad del contenido
├── layouts/
│   └── Layout.astro     # Layout único
├── pages/               # Rutas estáticas y dinámicas
├── site.config.ts       # Constante SITE — metadatos globales del sitio
├── styles/
│   └── global.css       # Tokens @theme, utilities, sistema bento
├── types/               # Tipos TypeScript por componente y layout
└── utils/
    └── reveal.ts        # IntersectionObserver para animaciones scroll
```

**Rutas existentes:** `/`, `/felinos`, `/felinos/[slug]` (11 rutas), `/fotografos`, `/libros`.

---

## Convenciones establecidas

### Metadatos del sitio

- Los datos globales (nombre, URL, OG, Twitter, etc.) viven en `src/site.config.ts`.
- Importar `SITE` desde allí. No hardcodear `'Felinos.Ar'` ni `'https://felinos.ar'` en ningún otro archivo.

### Contenido

- Todo el contenido viene del frontmatter de los archivos Markdown.
- El cuerpo (`body`) de los `.md` no se usa para datos estructurales.
- Cualquier campo nuevo requiere su correspondiente definición Zod en `content.config.ts`.

### Componentes

- Reciben datos únicamente por props.
- Sus tipos están definidos en `src/types/components/`.
- Todo componente nuevo requiere su archivo de tipos en ese directorio.

### Imágenes

- Usar `<Image>` de `astro:assets` siempre.
- Excepción permitida: cuando `src` es una URL en runtime (e.g. portadas de libros externas). En ese caso usar `<img>` con un comentario que lo justifique.
- `loading="eager"` + `fetchpriority="high"` solo para imágenes above-the-fold.
- `loading="lazy"` para todo lo demás.
- `alt=""` + `aria-hidden="true"` solo para imágenes puramente decorativas.

### Estilos

- Solo clases de Tailwind v4.
- Los tokens de diseño (colores, tipografía, spacing) están definidos en `@theme` dentro de `global.css`. No crear tokens nuevos salvo que sea estrictamente necesario.
- Sin estilos inline. Sin clases arbitrarias fuera del sistema de diseño.

### JavaScript

- Mínimo indispensable.
- Los scripts de interactividad (menú, dropdown, lightbox, mapa) están en `<script>` dentro del componente que los necesita.
- Leaflet es la única isla real del sitio — no agregar más hidratación.
- Las animaciones scroll usan `src/utils/reveal.ts` (`initReveal()`). No agregar otra librería de animaciones.

### SEO

- Cada página pasa `title`, `description` y opcionalmente `jsonLd` al componente `<SEO>` via el layout.
- El JSON-LD de la home define WebSite y Organization. Las páginas de especies definen Article.
- El sitemap se genera automáticamente via `@astrojs/sitemap`.

### Mapas

- El componente `LeafletMap` es client-only. No modificar para SSR.

---

## Al agregar contenido

### Nueva especie

1. Crear `src/content/felinos/[slug].md` siguiendo exactamente la estructura de los archivos existentes.
2. El schema Zod en `content.config.ts` es la referencia. No omitir campos requeridos.
3. No crear ningún archivo de página — la ruta `/felinos/[slug]` se genera dinámicamente.

### Nuevo libro

- Agregar la entrada al array `books` en `src/content/libros/libros.md`.

### Nuevo fotógrafo

- Agregar la entrada al array `fotografos` en `src/content/fotografos/fotografos.md`.

---

## Al modificar componentes existentes

- Mantener la firma de props existente. Si hay que agregar una prop, hacerla opcional con valor por defecto.
- Actualizar el tipo correspondiente en `src/types/components/`.
- No cambiar el marcado HTML salvo que sea necesario para la tarea.
- No reemplazar clases de Tailwind por otras equivalentes si no es parte de la tarea.

---

## Checklist antes de finalizar

- [ ] `pnpm build` sin errores
- [ ] Sin errores de TypeScript
- [ ] Sin hardcoded strings de marca (usar `SITE.*`)
- [ ] Sin `<img>` sin justificación
- [ ] Sin JavaScript innecesario
- [ ] Contenido proviene de colecciones, no de código
- [ ] Tipos actualizados si se modificaron props

---

## Lo que NO se debe hacer

- Rediseñar componentes existentes sin pedido explícito
- Cambiar tokens de diseño sin pedido explícito
- Agregar páginas, rutas o secciones no solicitadas
- Reemplazar o actualizar dependencias
- Modificar `content.config.ts` salvo para agregar campos solicitados
- Inventar contenido o texto de relleno
- Agregar comentarios explicativos al código salvo que se soliciten
