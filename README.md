# Eventos WiFi Internet

Sitio corporativo de **Eventos WiFi Internet** (conectividad, ancho de banda y
redes WiFi para eventos y recintos).

## Stack

| Pieza        | Versión   |
| ------------ | --------- |
| React        | 19.2      |
| TypeScript   | 5.7       |
| Vite         | 6.x       |
| Tailwind CSS | 3.4       |
| Swiper       | 12.2      |
| lucide-react | 0.577     |
| react-router-dom | 7.x   |

## Comandos

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # compila a dist/ (tsc + vite)
npm run preview  # sirve dist/ localmente
```

## Estructura

```
src/
├── main.tsx                 # entrada: StrictMode > BrowserRouter > App
├── App.tsx                  # rutas
├── index.css                # directivas de Tailwind + estilos base
├── pages/
│   └── Home.tsx             # compone las 10 secciones en orden
└── sections/
    ├── TopBar.tsx           # barra superior oscura (teléfono / contacto)
    ├── Navbar.tsx           # nav sticky con sombra al hacer scroll + menú mobile
    ├── HeroCarousel.tsx     # carrusel fade a pantalla completa (Swiper)
    ├── Solutions.tsx        # carrusel de 11 tarjetas de soluciones (Swiper)
    ├── ExperientialStories.tsx  # bloque naranja con mosaico 2x2
    ├── Services.tsx         # 3 servicios con iconos circulares
    ├── BandwidthBanner.tsx  # banner con imagen de fondo y texto a la derecha
    ├── Testimonials.tsx     # 3 testimonios con avatar y estrellas
    ├── ClientLogos.tsx      # tira de nombres de clientes
    └── Footer.tsx           # footer de 5 columnas + barra legal

public/assets/               # imágenes .webp referenciadas como /assets/...
```

Los componentes que usan hooks o Swiper llevan estado de cliente; no hay SSR.
Las imágenes viven en `public/assets/` y se referencian con rutas absolutas
(`/assets/hero-slide-2.webp`), por lo que el sitio asume despliegue en la raíz
del dominio.

## Sistema de diseño

La paleta está declarada en `tailwind.config.js` bajo `theme.extend.colors`, de
modo que **se suma** a la escala por defecto de Tailwind (el footer usa
`text-gray-400` y `text-gray-500` nativos junto a las claves propias).

| Clase                  | Valor     | Uso                                  |
| ---------------------- | --------- | ------------------------------------ |
| `orange`               | `#f7941d` | color de marca, CTAs, acentos        |
| `orange-dark`          | `#e0850f` | estado hover de los CTAs             |
| `dark`                 | `#333333` | barra superior, footer, títulos      |
| `dark-light`           | `#444444` | botones sociales y bordes del footer |
| `gray-text`            | `#666666` | texto de cuerpo (color del `body`)   |
| `gray-light`           | `#999999` | notas al pie / texto atenuado        |
| `gray-border`          | `#eeeeee` | bordes de tarjetas y nav             |
| `gray-bg`              | `#f5f5f5` | fondo de la tira de clientes         |

Tipografía: `Inter` con fallback a la pila del sistema. La fuente **no se carga
por Google Fonts** (igual que en el sitio original), así que en la práctica
resuelve al `system-ui` del visitante. Si se quiere Inter de verdad, hay que
añadir el `<link>` en `index.html`.

Breakpoints: los de Tailwind por defecto (`sm` 640, `md` 768, `lg` 1024).

## Notas de despliegue

`vercel.json` compila desde el código fuente (`npm run build` → `dist`) e incluye
un rewrite de SPA para que las rutas de `react-router` no devuelvan 404.
