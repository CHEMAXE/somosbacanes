/* ============================================================
   SOMOS BACANES · BASE DE DATOS DE ARTÍCULOS DEL BLOG (BILINGÜE)
   ============================================================
   Este es el ÚNICO archivo que editas para sumar artículos al blog.
   Cada objeto { ... } es un artículo completo, en ESPAÑOL e INGLÉS.

   CÓMO AGREGAR UN ARTÍCULO NUEVO:
   1. Copia un bloque { ... } completo (con su coma final).
   2. Pégalo dentro de [ ].
   3. Cambia los valores. Guarda. Aparece solo en el blog.
   IMPORTANTE: cada artículo debe tener sus textos en los DOS idiomas
   (campos que terminan en "Es" para español y "En" para inglés).

   CAMPOS:
   - slug      : la "dirección" del artículo en la URL. Solo minúsculas,
                 sin espacios ni tildes (usa guiones). Debe ser ÚNICO.
   - cat       : categoría (define el color). 'recursos'|'cielo'|'natura'|'gente'
   - catLabelEs / catLabelEn : etiqueta de la categoría en cada idioma.
   - regionEs / regionEn : nombre de la región (contexto) en cada idioma.
   - titleEs / titleEn   : título del artículo (clave para Google).
   - excerptEs / excerptEn : resumen corto (2-3 líneas) en cada idioma.
   - image     : URL de la foto destacada. VACÍA ('') = degradado de color.
   - imageCredit : crédito de la foto (ej 'Foto: Juan Pérez / Unsplash').
   - readMin   : minutos de lectura (un número).
   - featured  : true en UN solo artículo (el destacado grande de arriba).
   - date      : fecha 'AAAA-MM-DD' (ordena del más nuevo al más viejo).
   - bodyEs / bodyEn : cuerpo en cada idioma. Marcadores:
                 ## Subtítulo   ·  **negrita**  ·  > Cita  ·  - lista
                 [chart:id]     → inserta un gráfico (ver 'charts')
   - charts    : (opcional) gráficos de barras. Cada uno:
                 id, titleEs/titleEn, sourceEs/sourceEn, y bars:
                 cada barra: labelEs/labelEn, value, display, highlight
                 Se inserta escribiendo [chart:su-id] en el body.
   - sources   : (opcional) fuentes al final. Cada una:
                 name, publisher (opc), url (opc, específica), accessed (opc).
   ============================================================ */

const ARTICULOS = [

  {
    slug:'desierto-atacama-cielos',
    cat:'cielo',
    catLabelEs:'Cielo y ciencia', catLabelEn:'Sky & science',
    regionEs:'Antofagasta', regionEn:'Antofagasta',
    titleEs:'Construimos el ojo más grande de la humanidad',
    titleEn:'We are building the biggest eye of humanity',
    excerptEs:'En el desierto de Atacama se levanta el telescopio más grande del mundo. Bajo el cielo más limpio del planeta, Chile mira el universo por todos.',
    excerptEn:'In the Atacama Desert rises the largest telescope in the world. Under the clearest sky on the planet, Chile looks at the universe for everyone.',
    image:'',
    imageCredit:'',
    readMin:6,
    featured:true,
    date:'2026-06-20',
    bodyEs:`El desierto de Atacama no es solo el más seco del mundo: es también la ventana más clara que tiene la humanidad hacia el universo. La combinación de cielos despejados casi todo el año, altitud, sequedad extrema y baja contaminación lumínica lo convierte en el mejor lugar del planeta para mirar las estrellas.

## Por qué acá y no en otra parte

Para estudiar el cosmos, los astrónomos necesitan tres cosas: aire seco, cielos oscuros y muchas noches despejadas. Atacama tiene las tres como ningún otro lugar de la Tierra.

**La sequedad** del desierto significa que hay muy poco vapor de agua en la atmósfera, que es lo que distorsiona y bloquea la luz de las estrellas. La **altitud** de la cordillera pone a los telescopios por encima de buena parte de la atmósfera. Y la **escasa población** mantiene los cielos libres de la contaminación lumínica que arruina la observación en las ciudades.

## El telescopio más grande jamás construido

En Cerro Armazones se levanta el Extremely Large Telescope (ELT), que cuando esté completo será el telescopio óptico más grande del mundo, con un espejo principal de casi 40 metros de diámetro.

> No es un telescopio chileno: es un telescopio del mundo, construido en Chile, porque este es el mejor lugar del planeta para mirar el cielo.

## Lo que esto significa para Chile

Esta década, cerca del 70% de la capacidad de observación astronómica del planeta estará concentrada en suelo chileno. Eso convierte al país en un protagonista silencioso de los grandes descubrimientos sobre el origen del universo, los exoplanetas y la materia oscura.

[chart:astro]

No es casualidad ni suerte: es geografía privilegiada aprovechada con inteligencia. Y es, sin duda, una de las cosas más bacanes de Chile.`,
    bodyEn:`The Atacama Desert is not only the driest in the world: it is also the clearest window humanity has into the universe. The combination of clear skies almost all year round, altitude, extreme dryness and low light pollution makes it the best place on the planet to look at the stars.

## Why here and nowhere else

To study the cosmos, astronomers need three things: dry air, dark skies and many clear nights. Atacama has all three like nowhere else on Earth.

**The dryness** of the desert means there is very little water vapor in the atmosphere, which is what distorts and blocks the light of the stars. **The altitude** of the Andes puts the telescopes above much of the atmosphere. And the **sparse population** keeps the skies free of the light pollution that ruins observation in cities.

## The largest telescope ever built

On Cerro Armazones rises the Extremely Large Telescope (ELT), which when complete will be the largest optical telescope in the world, with a main mirror almost 40 meters in diameter.

> It is not a Chilean telescope: it is a telescope of the world, built in Chile, because this is the best place on the planet to look at the sky.

## What this means for Chile

This decade, close to 70% of the planet's astronomical observation capacity will be concentrated on Chilean soil. That makes the country a quiet protagonist of the great discoveries about the origin of the universe, exoplanets and dark matter.

[chart:astro]

It is not chance or luck: it is privileged geography used with intelligence. And it is, without a doubt, one of the most bacán things about Chile.`,
    charts:[
      {
        id:'astro',
        titleEs:'Capacidad de observación astronómica mundial (proyección década)',
        titleEn:'Global astronomical observation capacity (decade projection)',
        sourceEs:'Estimaciones de la industria astronómica',
        sourceEn:'Astronomy industry estimates',
        bars:[
          {labelEs:'Chile', labelEn:'Chile', value:70, display:'≈70%', highlight:true},
          {labelEs:'Resto del mundo', labelEn:'Rest of the world', value:30, display:'≈30%'}
        ]
      }
    ],
    sources:[
      {name:'Extremely Large Telescope (ELT): el telescopio óptico más grande del mundo', publisher:'ESO', url:'https://www.eso.org/public/teles-instr/elt/', accessed:'junio 2026'},
      {name:'Paranal Observatory y el Very Large Telescope (VLT)', publisher:'ESO', url:'https://www.eso.org/public/teles-instr/paranal-observatory/', accessed:'junio 2026'},
      {name:'Atacama como análogo de Marte para pruebas de tecnología', publisher:'NASA', url:'https://www.nasa.gov/', accessed:'junio 2026'}
    ]
  },

  {
    slug:'momias-chinchorro',
    cat:'gente',
    catLabelEs:'Gente y cultura', catLabelEn:'People & culture',
    regionEs:'Arica y Parinacota', regionEn:'Arica y Parinacota',
    titleEs:'7.000 años: las momias más antiguas del mundo',
    titleEn:'7,000 years: the oldest mummies in the world',
    excerptEs:'Dos mil años más antiguas que las egipcias, las momias Chinchorro del norte de Chile son Patrimonio de la Humanidad. La historia de un pueblo que venció al tiempo.',
    excerptEn:'Two thousand years older than the Egyptian ones, the Chinchorro mummies of northern Chile are a World Heritage treasure. The story of a people who beat time.',
    image:'',
    imageCredit:'',
    readMin:5,
    featured:false,
    date:'2026-06-19',
    bodyEs:`Cuando pensamos en momias, casi todos imaginamos Egipto. Pero las momias más antiguas del mundo no están en el valle del Nilo: están en el norte de Chile, y son unos dos mil años más antiguas que las egipcias.

## Quiénes fueron los Chinchorro

El pueblo Chinchorro habitó la costa del actual norte de Chile y sur de Perú hace más de siete mil años. Eran pescadores y recolectores que desarrollaron una práctica funeraria asombrosa: momificaban a sus muertos con una sofisticación técnica que sorprende a los científicos hasta hoy.

A diferencia de los egipcios, que momificaban principalmente a la realeza, **los Chinchorro momificaban a todos**: hombres, mujeres, niños y hasta fetos. Era una práctica profundamente igualitaria y cargada de cariño hacia los que se iban.

## Un reconocimiento mundial

En 2021, la UNESCO declaró el asentamiento y la momificación artificial de la cultura Chinchorro como Patrimonio de la Humanidad, reconociendo su valor único para entender la historia de la humanidad.

Es una genialidad chilena que casi nadie conoce: en este rincón del mundo, hace siete mil años, un pueblo de pescadores le ganó una batalla al tiempo.`,
    bodyEn:`When we think of mummies, almost everyone pictures Egypt. But the oldest mummies in the world are not in the Nile valley: they are in northern Chile, and they are about two thousand years older than the Egyptian ones.

## Who were the Chinchorro

The Chinchorro people inhabited the coast of present-day northern Chile and southern Peru more than seven thousand years ago. They were fishers and gatherers who developed an astonishing funerary practice: they mummified their dead with a technical sophistication that surprises scientists to this day.

Unlike the Egyptians, who mummified mainly royalty, **the Chinchorro mummified everyone**: men, women, children and even fetuses. It was a deeply egalitarian practice, full of care for those who passed away.

## A worldwide recognition

In 2021, UNESCO declared the settlement and artificial mummification of the Chinchorro culture a World Heritage treasure, recognizing its unique value for understanding the history of humanity.

It is a Chilean wonder that almost no one knows about: in this corner of the world, seven thousand years ago, a people of fishers won a battle against time.`,
    sources:[
      {name:'UNESCO. Asentamiento y momificación de la cultura Chinchorro', publisher:'UNESCO', url:'https://whc.unesco.org/', accessed:'junio 2026'},
      {name:'Museo Arqueológico San Miguel de Azapa, Universidad de Tarapacá', publisher:'Universidad de Tarapacá', url:'', accessed:'junio 2026'}
    ]
  }

