/* ============================================================
   SOMOS BACANES — BASE DE DATOS DE ARTÍCULOS DEL BLOG
   ============================================================
   Este es el ÚNICO archivo que editas para sumar artículos al blog.
   Cada objeto { ... } es un artículo completo.

   CÓMO AGREGAR UN ARTÍCULO NUEVO:
   1. Copia un bloque { ... } completo (con su coma final).
   2. Pégalo dentro de [ ].
   3. Cambia los valores. Guarda. Aparece solo en el blog.

   CAMPOS:
   - slug    : la "dirección" del artículo en la URL. Solo minúsculas,
               sin espacios ni tildes (usa guiones). Debe ser ÚNICO.
               Ej: 'desierto-atacama' → somosbacanes.cl/blog/desierto-atacama
   - cat     : categoría (define el color). 'recursos'|'cielo'|'natura'|'gente'
   - catLabel: etiqueta visible de la categoría.
   - region  : nombre de la región (se muestra como contexto).
   - title   : título del artículo (lo más importante para Google).
   - excerpt : resumen corto (2-3 líneas). Aparece en la tarjeta y en Google.
   - image   : URL de la foto destacada. DÉJALA VACÍA ('') y se mostrará
               un degradado de color. Cuando tengas la foto (ej. de Unsplash),
               pega aquí su URL.
   - imageCredit : crédito de la foto (ej: 'Foto: Juan Pérez / Unsplash').
   - readMin : minutos de lectura aproximados (un número).
   - featured: true en UN solo artículo (el destacado grande de arriba).
   - date    : fecha 'AAAA-MM-DD'. Para ordenar del más nuevo al más viejo.
   - linkCard: (opcional) el 'big' o label de la carta del mapa a la que
               se conecta, para enlazarlos. Puedes dejarlo vacío.
   - body    : el cuerpo del artículo. Usa estos marcadores simples:
               ## Subtítulo      → un subtítulo de sección
               Párrafo normal    → solo escribe el texto, deja una línea en blanco entre párrafos
               **texto**         → negrita
               > Cita            → una cita destacada
               - item            → viñeta de lista
   ============================================================ */

const ARTICULOS = [

  {
    slug:'desierto-atacama-cielos',
    cat:'cielo', catLabel:'Cielo y ciencia',
    region:'Antofagasta',
    title:'Construimos el ojo más grande de la humanidad',
    excerpt:'En el desierto de Atacama se levanta el telescopio más grande del mundo. Bajo el cielo más limpio del planeta, Chile mira el universo por todos.',
    image:'',
    imageCredit:'',
    readMin:6,
    featured:true,
    date:'2026-06-20',
    linkCard:'≈70%',
    body:`El desierto de Atacama no es solo el más seco del mundo: es también la ventana más clara que tiene la humanidad hacia el universo. La combinación de cielos despejados casi todo el año, altitud, sequedad extrema y baja contaminación lumínica lo convierte en el mejor lugar del planeta para mirar las estrellas.

## Por qué acá y no en otra parte

Para estudiar el cosmos, los astrónomos necesitan tres cosas: aire seco, cielos oscuros y muchas noches despejadas. Atacama tiene las tres como ningún otro lugar de la Tierra.

**La sequedad** del desierto significa que hay muy poco vapor de agua en la atmósfera, que es lo que distorsiona y bloquea la luz de las estrellas. La **altitud** de la cordillera pone a los telescopios por encima de buena parte de la atmósfera. Y la **escasa población** mantiene los cielos libres de la contaminación lumínica que arruina la observación en las ciudades.

## El telescopio más grande jamás construido

En Cerro Armazones se levanta el Extremely Large Telescope (ELT), que cuando esté completo será el telescopio óptico más grande del mundo, con un espejo principal de casi 40 metros de diámetro.

> No es un telescopio chileno: es un telescopio del mundo, construido en Chile, porque este es el mejor lugar del planeta para mirar el cielo.

## Lo que esto significa para Chile

Esta década, cerca del 70% de la capacidad de observación astronómica del planeta estará concentrada en suelo chileno. Eso convierte al país en un protagonista silencioso de los grandes descubrimientos sobre el origen del universo, los exoplanetas y la materia oscura.

No es casualidad ni suerte: es geografía privilegiada aprovechada con inteligencia. Y es, sin duda, una de las cosas más bacanes de Chile.`
  },

  {
    slug:'momias-chinchorro',
    cat:'gente', catLabel:'Gente y cultura',
    region:'Arica y Parinacota',
    title:'7.000 años: las momias más antiguas del mundo',
    excerpt:'Dos mil años más antiguas que las egipcias, las momias Chinchorro del norte de Chile son Patrimonio de la Humanidad. La historia de un pueblo que venció al tiempo.',
    image:'',
    imageCredit:'',
    readMin:5,
    featured:false,
    date:'2026-06-19',
    linkCard:'7.000',
    body:`Cuando pensamos en momias, casi todos imaginamos Egipto. Pero las momias más antiguas del mundo no están en el valle del Nilo: están en el norte de Chile, y son unos dos mil años más antiguas que las egipcias.

## Quiénes fueron los Chinchorro

El pueblo Chinchorro habitó la costa del actual norte de Chile y sur de Perú hace más de siete mil años. Eran pescadores y recolectores que desarrollaron una práctica funeraria asombrosa: momificaban a sus muertos con una sofisticación técnica que sorprende a los científicos hasta hoy.

A diferencia de los egipcios, que momificaban principalmente a la realeza, **los Chinchorro momificaban a todos**: hombres, mujeres, niños y hasta fetos. Era una práctica profundamente igualitaria y cargada de cariño hacia los que se iban.

## Un reconocimiento mundial

En 2021, la UNESCO declaró el asentamiento y la momificación artificial de la cultura Chinchorro como Patrimonio de la Humanidad, reconociendo su valor único para entender la historia de la humanidad.

Es una genialidad chilena que casi nadie conoce: en este rincón del mundo, hace siete mil años, un pueblo de pescadores le ganó una batalla al tiempo.`
  }

];
