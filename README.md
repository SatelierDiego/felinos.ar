# Felinos.Ar

> Sitio de divulgación sobre los felinos silvestres de Argentina con fines educativos y de conservación.

[felinos.ar](https://felinos.ar)

## Sobre el proyecto

Argentina es uno de los países con mayor diversidad de félidos del mundo. Sin embargo, muchas de estas especies —como el Gato Andino, el Margay o el Yaguarundí— no cuentan con la misma visibilidad que otras más conocidas.

**Felinos.Ar** nace para cubrir esa brecha: una herramienta simple y accesible para conocer las especies de felinos que habitan nuestro territorio, sus características y los desafíos que enfrentan para su supervivencia.

## Contenido

El sitio recopila información sobre las **11 especies de felinos silvestres** presentes en Argentina:

- Yaguareté (*Panthera onca*)
- Puma (*Puma concolor*)
- Ocelote (*Leopardus pardalis*)
- Margay (*Leopardus wiedii*)
- Tigrina (*Leopardus tigrinus*)
- Tirica (*Leopardus guttulus*)
- Gato Andino (*Leopardus jacobitus*)
- Gato del Pajonal (*Leopardus colocolo*)
- Gato Montes (*Leopardus geoffroyi*)
- Gato Huiña (*Leopardus guigna*)
- Yaguarundí (*Herpailurus yagouaroundi*)

Cada especie cuenta con ficha detallada, fotografías, mapa de distribución y estado de conservación.

## Stack

| Capa | Tecnología |
|------|-----------|
| Framework | [Astro](https://astro.build/) v6 (SSG) |
| Estilos | [Tailwind CSS](https://tailwindcss.com/) v4 |
| Lenguaje | [TypeScript](https://www.typescriptlang.org/) (strict) |
| Fuentes | [Fontsource](https://fontsource.org/) — Open Sans + Quicksand |
| Mapas | [Leaflet](https://leafletjs.com/) |
| Imágenes | [Sharp](https://sharp.pixelplumbing.com/) + `astro:assets` |
| Iconos | [astro-icon](https://github.com/natemoo-re/astro-icon) |
| Linting | [Prettier](https://prettier.io/) |

## Desarrollo

### Requisitos

- **Node.js** >= 22.12.0
- **pnpm** (recomendado) o npm

### Comandos

| Comando | Descripción |
|---------|-------------|
| `pnpm dev` | Servidor de desarrollo en `localhost:4321` |
| `pnpm build` | Genera el sitio estático en `dist/` |
| `pnpm preview` | Previsualiza el build localmente |
| `pnpm astro` | CLI de Astro |

### Estructura

```
src/
├── assets/          # Imágenes, SVGs e iconos
├── components/      # Componentes reutilizables
├── content/         # Contenido en Markdown (colecciones)
│   ├── felinos/     # Fichas de especies
│   ├── fotografos/  # Créditos fotográficos
│   ├── home/        # Contenido de la página principal
│   └── libros/      # Sección de libros
├── layouts/         # Layouts base
└── pages/           # Rutas del sitio
```

## Arquitectura

El sitio es **100% estático** (SSG). Todo el contenido se gestiona mediante **Colecciones de Astro** con schemas validados por Zod en Markdown. No hay base de datos ni backend.

## Licencia

El contenido fotográfico pertenece a sus respectivos autores y no puede ser reutilizado sin su consentimiento.

---

Hecho con dedicación para la conservación de los felinos silvestres de Argentina.
