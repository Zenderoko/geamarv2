# GeamarV2.0

**Clone oficial de [www.geamar.cl](https://www.geamar.cl)** — sitio corporativo de **Geamar SpA** (consultoría, logística y transporte marítimo–portuario, acuícola y portuario), reconstruido con un stack moderno y exportado como sitio **100 % estático**.

> 📦 Repositorio: **https://github.com/Zenderoko/geamarv2**
> 📅 Versión: **2.0.0** — 27 de noviembre de 2026

---

## Stack tecnológico

| Tecnología | Rol |
|---|---|
| **Next.js 16** (App Router + Turbopack) | Framework, SSG con `output: export` → genera `out/` estático |
| **React 19** | UI en componentes |
| **TypeScript** | Tipado estricto en todo el código |
| **Tailwind CSS 4** | Estilos utility-first (config vía CSS `@theme`) |
| **ESLint** (flat config) | Lint y consistencia |
| **Poppins** (`next/font/google`, 400/500/600) | Tipografía oficial del sitio original (Astra + Google Fonts) |
| **lucide-react** | Iconos (flechas, cierre, chevrons) |

---

## Requisitos

- **Node.js 20+**
- npm 10+ (incluido con Node)

## Comandos

```bash
npm install        # instalar dependencias
npm run dev        # desarrollo → http://localhost:3000
npm run lint       # ESLint (debe quedar en 0 errores)
npm run build      # build de producción → genera out/
npx serve out      # servir la versión estática localmente
```

El sitio resultante en `out/` puede desplegarse en **cualquier hosting estático** (GitHub Pages, Netlify, Vercel, S3, nginx…).

---

## Estructura del proyecto

```
GeamarV2.0/
├── public/
│   └── images/                  # 23 assets del export original (imágenes + 2 videos)
├── src/
│   ├── app/
│   │   ├── layout.tsx           # <html lang="es">, fuente Poppins, metadata SEO,
│   │   │                        #   widgets globales (WhatsApp + ScrollToTop)
│   │   ├── page.tsx             # Orden de secciones (idéntico al sitio original)
│   │   ├── globals.css          # Paleta Astra exacta, animaciones, scroll-margin
│   │   └── favicon.ico
│   ├── lib/
│   │   └── content.ts           # 👈 Fuente única de contenido: servicios con sus
│   │                            #    modales, timeline, logos, menú y contacto
│   └── components/
│       ├── Header.tsx           # Header fijo + menú animado + botón Contacto
│       ├── Hero.tsx             # Hero con logo redondo y texto typewriter
│       ├── Nosotros.tsx         # Sección con video + fondo parallax
│       ├── VisionMision.tsx     # Video full-width + banners VISIÓN / MISIÓN
│       ├── Servicios.tsx        # Banner verde + slider de 6 servicios + modales
│       ├── Sostenibilidad.tsx   # Banner "Conectamos" + timeline de plataforma
│       ├── ParallaxBand.tsx     # Banda parallax entre Sostenibilidad y Clientes
│       ├── Clientes.tsx         # Sección verde + carrusel de logos
│       ├── Contacto.tsx         # Título + bloque de contacto
│       ├── Footer.tsx           # Footer oscuro centrado y amigable
│       ├── WhatsAppButton.tsx   # Widget estilo Joinchat (burbujas + wa.me)
│       └── ScrollToTop.tsx      # Botón volver arriba
├── eslint.config.mjs
├── next.config.ts               # output: 'export'
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

---

## Secciones de la página (orden idéntico al original)

| # | Sección | Ancla | Componente | Detalle clave |
|---|---|---|---|---|
| 1 | Header | — | `Header` | Fijo, bg blanco, borde `#d5ead8`, menú con subrayado verde animado, botón Contacto (radio 40px) |
| 2 | Hero | `#hero` | `Hero` | Foto `7-Voigue.jpg` + overlay `rgba(52,58,64,.4)`, padding 180/120 (desktop) y 75/100 (mobile), **logo redondo a la izquierda**, título typewriter con sombra verde `rgba(39,195,130,1)` |
| 3 | Nosotros | `#nosotros` | `Nosotros` | Título 70px `#17511c`, separador 50×5 `#379237`, texto + video `barcaza2.mp4`, **fondo parallax** (`nosotros-bg.jpg` + overlay blanco 80 %) |
| 4 | Video + Visión/Misión | `#Vision-Mision`, `#mensaje` | `VisionMision` | Video `videonosotros2.mp4` (600/350px), banner **VISIÓN** verde `#17511c` con texto blanco (mb 100px), **MISIÓN** fondo blanco con texto `#17511c` |
| 5 | Nuestros Servicios | `#ofrecemos` | `Servicios` | **Banner verde full-width** estilo VISIÓN (min-h 322px) con icono briefcase + slider de **6 servicios** (flechas 46px, paginación) y **modales "Ver más"** (600px, overlay 0.75) |
| 6 | Tecnología y Sostenibilidad | `#tecnologia` | `Sostenibilidad` | Banner "Conectamos" verde, título 70px, caja con **degradado** `#379237→#FFF` y **timeline both-sided** de 3 ítems (línea roja `#d91b3e` al 40 %, flechas y tarjetas blancas alternadas) |
| 7 | Banda parallax | — | `ParallaxBand` | Foto `motornueva2-scaled.jpg` con `background-attachment: fixed` en desktop |
| 8 | Nuestros Clientes | `#Clientes` | `Clientes` | Sección verde `#17511c` con sombra, icono users, **carrusel de 6 logos** (autoplay 2 s, loop, pause en hover, 5/3/2 por vista) |
| 9 | Contacto | `#contacto` | `Contacto` | Icono WhatsApp verde, título `#0C1406`, bloque de contacto (nombre, rol, correo, teléfono) |
| 10 | Footer | — | `Footer` | `#212121`, borde `#d5ead8`, logo + menú **horizontal centrado** con hover verde y copyright |
| 11 | Widgets | — | `WhatsAppButton`, `ScrollToTop` | Joinchat (burbujas a los 3 s + `wa.me/56979799006`) y botón volver arriba `#54B435` |

---

## Tokens de diseño (paleta Astra original)

| Token | Valor | Uso |
|---|---|---|
| `--color-0` | `#54B435` | Verde primario: botones, scroll-top, hovers |
| `--color-1` | `#379237` | Verde hover / separadores de títulos (50×5px) |
| `--color-3` | `#2F3B40` | Texto del menú header |
| `--color-4` | `#FFFFFF` | Texto sobre fondos verdes |
| `--color-6` | `#0C1406` | Título "Contacto" |
| `--color-7` | `#D5EAD8` | Bordes (header, footer) |
| Verde oscuro | `#17511C` | Banners, títulos, sección Clientes |
| Footer | `#212121` | Fondo del pie |
| Timeline | `#D91B3E` | Línea, iconos y flechas del timeline (40 % opacidad en línea) |

**Tipografía:** Poppins — títulos de sección **70px desktop / 30px mobile**, peso 600; cuerpo 16px / line-height 1.65.

**Anclas:** `scroll-margin-top: 90px` en todo elemento con `id` para compensar el header fijo.
**Anclas:** `scroll-margin-top: 90px` en todo elemento con `id` para compensar el header fijo.

---

## Contenido y assets

- **Textos** extraídos textualmente del export `simply-static` de geamar.cl (guardado en `geamar2/`): títulos de servicios, contenido completo de los 6 modales, ítems del timeline, logos de clientes y datos de contacto — centralizados en `src/lib/content.ts`.
- **Imágenes y videos** copiados de `geamar2/wp-content/uploads/`:
  - Slider de servicios: `motornueva-scaled.jpg`, `camion.png`, `grupo.jpg`, `autoridad.jpg`, `barcaza.jpg`, `orawell.png`
  - Timeline: `movil.png`, `plataforma.png`, `menufleet.png`
  - Logos: `cultivos-azules.jpg`, `yaganchile.jpg`, `marinepatagonioa.jpg` *(typo original)*, `australis.jpg`, `primepatagonia.jpg`, `multix.jpg`
  - Videos: `barcaza2.mp4` (Nosotros), `videonosotros2.mp4` (Visión)
  - Parallax: `nosotros-bg.jpg` (foto `DSC04066` reescalada 1920px), `parallax-band.jpg` (foto `motornueva2-scaled` reescalada 1920px)
- Todos los JPG de fondo se reescalaron a **máx. 1920px de ancho, calidad 78** para mantener el peso del repo razonable (~41 MB en `public/`).

---

## Decisiones de implementación (y desviaciones del original)

| Tema | Decisión |
|---|---|
| Slider de servicios | Carrusel propio (transform + transición) en lugar de la librería Swiper del plugin UAGB — mismas flechas, paginación y modales |
| Botón "Contacto" del header | Apunta a `#contacto`; en el original apuntaba a `#whatsapp`, ancla inexistente (rota) |
| Teléfonos | Se mantienen **ambos** tal cual el original: visible `+56 9 90183819` y WhatsApp/Joinchat `56979799006` |
| Sección `#Motor` | Originalmente un `div` vacío — no se reproduce (invisible) |
| Parallax | `background-attachment: fixed` solo en `md:` (iOS Safari no lo soporta; en móvil actúa como fondo normal) |
| Footer | Rediseño friendly: menú **horizontal centrado** + copyright (el original tenía menú vertical pegado a la derecha) |
| Logo del Hero | Redondo con anillo blanco, desplazado a la izquierda (petición de diseño v2.0) |
| Banner "Nuestros Servicios" | Verde **full-width** estilo VISIÓN (el original era una caja verde sobre blanco) |
| Metadata SEO | El original tiene `<title>` vacío; aquí se definió título/descripción/OG reales |

---

## Validación (CI local)

```text
npm run lint   →  0 errores, 0 warnings
npm run build  →  exit 0  (Next.js 16, 4 páginas estáticas generadas)
serve out      →  HTTP 200 con todo el contenido verificado
```

Checks manuales en el HTML servido: anclas `#nosotros/#ofrecemos/#tecnologia/#contacto`, los 6 servicios con modales, timeline, logos, `wa.me/56979799006`, assets de parallax (200 OK).

---

## Changelog

### 2.0.0 — 2026-11-27
- **Primera publicación** del clone completo en este repositorio.
- Stack Next.js 16 + TS + Tailwind 4 con export estático.
- 11 bloques de UI replicando geamar.cl (estructura, textos, colores y assets originales).
- Mejoras de diseño v2.0: banner "Nuestros Servicios" full-width, logo Hero redondo a la izquierda, fondos parallax en Nosotros y banda intermedia (`motornueva2`), footer centrado y amigable.
- Widgets: Joinchat/WhatsApp y scroll-to-top.
- README detallado (este archivo).

---

## Licencia / provenance

Contenido y marcas de **Geamar SpA** — este repositorio es una **reconstrucción técnica de demostración** del sitio público geamar.cl. No afiliado ni respaldado por Geamar SpA.

