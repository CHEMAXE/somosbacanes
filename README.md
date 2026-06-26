# Somos Bacanes

Sitio web bilingüe (ES/EN) que recopila las genialidades de Chile con datos verificados y fuentes reales. Desde Arica a Magallanes, todo lo que nos hace bacanes.

🌐 **Sitio:** [somosbacanes.cl](https://somosbacanes.cl)

## Qué es

Un mapa interactivo de las 16 regiones de Chile con 80 genialidades (datos, cifras y logros), más un blog editorial con artículos a fondo. Todo con fuentes verificadas, en español e inglés.

## Estructura de archivos

| Archivo | Qué es |
|---------|--------|
| `index.html` | Página principal: mapa interactivo + genialidades |
| `blog.html` | Blog con artículos bilingües |
| `genialidades.js` | Base de datos de las 80 genialidades del mapa |
| `articulos.js` | Base de datos de los artículos del blog |
| `favicon.svg` | Ícono del sitio |
| `og-image.png` | Imagen de previsualización al compartir |
| `assets/` | Logos oficiales de la marca (SVG) |
| `vercel.json` | Configuración de URLs limpias |

## Cómo agregar contenido

**Una genialidad nueva al mapa:** edita `genialidades.js` y agrega un objeto con su región, cifra y descripción.

**Un artículo nuevo al blog:** edita `articulos.js` siguiendo el instructivo que está dentro del archivo (cada artículo va en español e inglés).

Tras editar, sube los cambios a GitHub y el sitio se actualiza solo.

## Tecnología

Sitio estático (HTML + CSS + JavaScript), sin dependencias. Hospedado en Vercel con despliegue automático desde GitHub.

---

Hecho en Chile, con harto cariño y chispeza. #SomosBacanes
