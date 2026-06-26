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
  },

  {
    slug:'servel-eficiencia-conteo-votos-una-hora',
    cat:'gente',
    catLabelEs:'Institucionalidad', catLabelEn:'Institutions',
    regionEs:'Nacional', regionEn:'Nationwide',
    titleEs:'98,53% de las actas contadas en una hora: el récord del Servel que el mundo mira de reojo',
    titleEn:'98.53% of ballots counted in one hour: the Servel record the world watches with envy',
    excerptEs:'Mientras potencias como Estados Unidos tardan días o semanas en proyectar un ganador, Chile cierra mesas a las 18:00 y a las 20:00 ya tiene casi todo escrutado. No es magia: es ingeniería de procesos y un siglo de institucionalidad.',
    excerptEn:'While powers like the United States take days or weeks to project a winner, Chile closes polling stations at 6 PM and has nearly everything counted by 8 PM. It is not magic: it is process engineering and a century of institutions.',
    image:'',
    imageCredit:'',
    readMin:7,
    featured:false,
    date:'2026-06-25',
    bodyEs:`El domingo 14 de diciembre de 2025, las mesas de votación de la segunda vuelta presidencial cerraron a las 18:00 horas. Cuarenta y cinco minutos más tarde, a las 18:45, el Servicio Electoral de Chile ya publicaba un primer cómputo oficial. A las 20:00 horas, con apenas dos horas transcurridas, el 98,53% de las actas del país ya estaba escrutado y publicado. Para dimensionar la cifra: 40.888 de las 40.900 mesas instaladas dentro y fuera de Chile fueron contabilizadas esa misma noche, un 99,97% del total. Ningún resultado mágico explica esta velocidad. La explican un diseño de procesos afinado durante décadas y una arquitectura institucional que ya cumplió cien años.

## La ingeniería detrás de la velocidad

El secreto del Servel no está en una sola tecnología, sino en un **flujo de trabajo descentralizado** que arranca en el mismo instante en que cierran las urnas. Apenas termina la votación, los vocales de cada mesa cuentan los sufragios de forma pública, frente a apoderados de los distintos pactos. Ese conteo manual y presencial, lejos de ser una rémora, es el primer pilar de la confianza: cualquier ciudadano puede presenciarlo.

Una vez cerrado el conteo en mesa, se generan tres actas idénticas. Una viaja al Tribunal Calificador de Elecciones, otra al colegio escrutador, y la tercera se entrega de inmediato a los **digitadores**, una figura clave presente en cada local de votación del país. Estos operadores ingresan los datos al **Sistema de Cómputos Electorales (SCE)**, el motor oficial de recuento, respaldado en paralelo por el **Sistema de Integridad Electoral (SIE)**, que actúa como verificación cruzada. El sistema publica resultados actualizados cada quince minutos, lo que permite que medios, partidos y ciudadanos sigan la evolución casi en tiempo real. La combinación de conteo manual transparente con transmisión digital inmediata es lo que produce ese resultado de clase mundial.

> Mientras Chile proyecta a su presidente electo 90 minutos después de cerrar las mesas, otras democracias consolidadas conviven con semanas de incertidumbre y la desinformación que florece en ese vacío.

## El contraste que define el liderazgo

La proeza chilena se aprecia mejor por contraste. En Estados Unidos, la descentralización electoral en cincuenta estados con reglas distintas, seis husos horarios y un creciente voto por correo convierte el escrutinio en un proceso que se extiende durante días. En 2020, Joe Biden fue proclamado ganador **cuatro días después** de la votación, una vez confirmado el resultado de Pensilvania, estado que ni siquiera permite procesar los votos por correo antes del día de la elección. En jurisdicciones como Arizona, las boletas de último momento pueden retrasar el recuento hasta diez días. El plazo legal para que los estados certifiquen sus resultados llegó a fijarse para el 11 de diciembre, más de un mes después de los comicios.

Esa velocidad chilena tiene un correlato directo en la confianza ciudadana. Según el Informe Latinobarómetro 2024, mientras la confianza promedio en las instituciones electorales de América Latina cayó al 34%, Chile lidera la región junto a Uruguay con un 60% de confianza en su organismo electoral. El dato es más notable aún si se considera que el 61% de los latinoamericanos cree que las elecciones en su país son fraudulentas. El Servel rema en sentido contrario a la corriente regional.

[chart:tiempo-resultados-comparado]

Detrás de estas cifras hay una historia institucional larga. El Servel cumplió cien años el 17 de marzo de 2025, como continuador del Registro Electoral creado en 1925, y el Tribunal Calificador de Elecciones nació en el mismo período para garantizar la legalidad de los resultados. La reforma política de 2014 a 2016 modernizó el sistema y su financiamiento, dejando las bases del modelo vigente. Que un país pueda contar trece millones de votos en una noche, con transparencia y sin que nadie cuestione el resultado, no es producto del azar sino de un siglo de planificación institucional sostenida, y esa es una de las razones por las que somos bacanes.`,
    bodyEn:`On Sunday, December 14, 2025, polling stations for the presidential runoff closed at 6:00 PM. Forty-five minutes later, at 6:45 PM, Chile's Electoral Service was already publishing an official first count. By 8:00 PM, with barely two hours elapsed, 98.53% of the country's ballot records were counted and published. To grasp the figure: 40,888 of the 40,900 polling tables set up inside and outside Chile were tallied that same night, 99.97% of the total. No magical result explains this speed. It is explained by a process design refined over decades and an institutional architecture that has now turned one hundred.

## The engineering behind the speed

Servel's secret lies not in a single technology but in a **decentralized workflow** that begins the very moment the polls close. As soon as voting ends, the poll workers at each table count the ballots publicly, in front of representatives from the different coalitions. That manual, in-person count, far from being a drag, is the first pillar of trust: any citizen can witness it.

Once the table count is complete, three identical records are generated. One travels to the Electoral Qualifying Court, another to the tallying board, and the third goes immediately to the **data entry operators**, a key figure present at every voting location in the country. These operators feed the data into the **Electoral Computing System (SCE)**, the official counting engine, backed in parallel by the **Electoral Integrity System (SIE)**, which acts as a cross-check. The system publishes updated results every fifteen minutes, allowing media, parties, and citizens to follow the evolution almost in real time. The combination of transparent manual counting with immediate digital transmission is what produces this world-class result.

> While Chile projects its president-elect 90 minutes after polls close, other established democracies live with weeks of uncertainty and the disinformation that thrives in that vacuum.

## The contrast that defines leadership

The Chilean feat is best appreciated by contrast. In the United States, electoral decentralization across fifty states with different rules, six time zones, and growing mail-in voting turns vote counting into a process that stretches over days. In 2020, Joe Biden was declared the winner **four days after** the vote, once Pennsylvania's result was confirmed, a state that does not even allow mail-in votes to be processed before election day. In jurisdictions like Arizona, last-minute ballots can delay the count by up to ten days. The legal deadline for states to certify their results was set for December 11, more than a month after the election.

That Chilean speed has a direct correlate in public trust. According to the 2024 Latinobarómetro Report, while average trust in Latin America's electoral institutions fell to 34%, Chile leads the region alongside Uruguay with 60% trust in its electoral body. The figure is even more striking considering that 61% of Latin Americans believe elections in their country are fraudulent. Servel rows against the regional current.

[chart:tiempo-resultados-comparado]

Behind these numbers lies a long institutional story. Servel turned one hundred on March 17, 2025, as the successor to the Electoral Registry created in 1925, and the Electoral Qualifying Court was born in the same period to guarantee the legality of results. The political reform of 2014 to 2016 modernized the system and its financing, laying the foundations of the current model. That a country can count thirteen million votes in a single night, transparently and without anyone questioning the result, is no accident but the product of a century of sustained institutional planning, and that is one of the reasons we are bacán.`,
    charts:[
      {
        id:'tiempo-resultados-comparado',
        titleEs:'Tiempo hasta proyectar un ganador presidencial',
        titleEn:'Time to project a presidential winner',
        sourceEs:'Servel y Brennan Center for Justice, 2025',
        sourceEn:'Servel and Brennan Center for Justice, 2025',
        bars:[
          {labelEs:'Chile (2025)', labelEn:'Chile (2025)', value:2, display:'~1,5 horas', highlight:true},
          {labelEs:'EE.UU. (2020)', labelEn:'USA (2020)', value:96, display:'4 días'}
        ]
      },
      {
        id:'confianza-electoral-region',
        titleEs:'Confianza en la institución electoral (Latinobarómetro 2024)',
        titleEn:'Trust in the electoral institution (Latinobarómetro 2024)',
        sourceEs:'Informe Latinobarómetro 2024',
        sourceEn:'Latinobarómetro Report 2024',
        bars:[
          {labelEs:'Chile', labelEn:'Chile', value:60, display:'60%', highlight:true},
          {labelEs:'Promedio América Latina', labelEn:'Latin America average', value:34, display:'34%'}
        ]
      }
    ],
    sources:[
      {name:'¿Por qué el sistema electoral chileno es tan rápido?', publisher:'EVoting', url:'https://evoting.com/2025/12/16/por-que-el-sistema-electoral-chileno-es-tan-rapido/', accessed:'junio 2026'},
      {name:'Resultados Segunda Votación Presidencial 2025', publisher:'Servicio Electoral de Chile', url:'https://www.servel.cl/2025/12/14/resultados-segunda-votacion-presidencial-2025/', accessed:'junio 2026'},
      {name:'Servicio Electoral de Chile es referente en confianza institucional en la región', publisher:'Marca Chile / Latinobarómetro 2024', url:'https://www.marcachile.cl/servicio-electoral-de-chile-es-referente-en-confianza-institucional-en-la-region/', accessed:'junio 2026'},
      {name:'Resultados oficiales de las elecciones de Estados Unidos: cuándo se dan', publisher:'Brennan Center for Justice', url:'https://www.brennancenter.org/es/our-work/research-reports/resultados-oficiales-elecciones-estados-unidos-cuando-se-dan', accessed:'junio 2026'}
    ]
  },

  {
    slug:'carretera-austral-1240-kilometros-ingenieria-patagonia',
    cat:'natura',
    catLabelEs:'Ingeniería y territorio', catLabelEn:'Engineering & territory',
    regionEs:'Los Lagos y Aysén', regionEn:'Los Lagos and Aysén',
    titleEs:'1.240 kilómetros contra lo imposible: cómo Chile clavó una carretera en la Patagonia más indomable',
    titleEn:'1,240 kilometers against the impossible: how Chile carved a road into the wildest Patagonia',
    excerptEs:'Glaciares, fiordos y campos de hielo decían que no se podía. La Ruta 7 unió por tierra a Puerto Montt con Villa O\'Higgins atravesando uno de los terrenos más hostiles del planeta, y hoy es la columna vertebral de la mayor red de parques nacionales de Sudamérica.',
    excerptEn:'Glaciers, fjords, and ice fields said it couldn\'t be done. Route 7 connected Puerto Montt to Villa O\'Higgins by land across one of the planet\'s most hostile terrains, and today it is the backbone of South America\'s largest network of national parks.',
    image:'',
    imageCredit:'',
    readMin:7,
    featured:false,
    date:'2026-06-25',
    bodyEs:`Antes de 1976, llegar a la Región de Aysén por tierra significaba salir de Chile. La única ruta longitudinal terrestre disponible era la carretera 40 argentina, y las comunidades del extremo austral dependían del barco o del avión para mantenerse conectadas con el resto del país. La decisión de clavar un camino propio a través de los Andes patagónicos, los fiordos y los campos de hielo fue, antes que una obra vial, una apuesta de integración territorial sobre uno de los terrenos más hostiles del planeta. El resultado son los 1.240 kilómetros de la Ruta 7, conocida como Carretera Austral, que hoy unen Puerto Montt con Villa O'Higgins.

## Una obra contra la geografía

La magnitud del desafío de ingeniería no admite comparaciones fáciles. La ruta atraviesa una geografía donde se acumulan glaciares, lagos de origen glacial, ríos caudalosos, montañas y un sistema de fiordos que se cuenta entre los más extensos del mundo. Buena parte del trazado debió abrirse a través de bosque denso y laderas de granito, en una zona donde las **condiciones climáticas extremas** dañan el camino cada invierno y obligan a una mantención permanente. Según el Ministerio de Obras Públicas, en el corredor priorizado entre Puerto Montt y Villa O'Higgins se han pavimentado 614,5 kilómetros desde 1995, un **58% del trazado**, mientras los 443,5 kilómetros restantes siguen en ripio, sobre todo en el extremo sur. El camino se resiste a la uniformidad, y esa textura mixta de asfalto y tierra es parte de su carácter.

[chart:pavimentacion-carretera-austral]

Para acelerar lo que falta, en 2026 el Estado anunció el plan **Ruta Austral: Soberanía que Conecta**, una inversión cercana a los 800.393 millones de pesos para el período 2026-2030 que quintuplica el ritmo histórico de inversión y busca un estándar de pavimento uniforme entre Puerto Montt y Cochrane.

La construcción movilizó a más de 10.000 soldados a través del **Cuerpo Militar del Trabajo**, el cuerpo de ingenieros del Ejército creado en 1953, junto al Ministerio de Obras Públicas y su Dirección de Vialidad. La primera etapa, denominada Red Básica Austral, se ejecutó entre 1976 y 1982. La segunda corrió entre 1982 y 1989. Hacia fines de ese año, sumando la red de caminos transversales, el proyecto completo alcanzaba unos 2.420 kilómetros de caminos construidos, con un costo aproximado de 300 millones de dólares de la época. La conexión final hasta Villa O'Higgins se completó en los años noventa, y el ramal a la singular Caleta Tortel se abrió en 2003.

> Donde la geografía dictaba aislamiento, la ingeniería respondió con un camino que hoy es la puerta de entrada a la Patagonia más salvaje del mundo.

## Del aislamiento a la columna vertebral verde

La Carretera Austral nunca se completó del todo, y ese carácter inconcluso terminó siendo una virtud. Los campos de hielo Sur, con sus altas montañas y glaciares, vuelven materialmente imposible prolongar el camino de forma continua hacia el extremo austral, lo que obliga a integrar transbordos marítimos a lo largo de fiordos como el Comau y el Reñihué. Esa mezcla de asfalto, ripio y barcaza es hoy parte esencial de su atractivo y un caso de estudio sobre cómo adaptar la infraestructura al territorio en lugar de imponerse sobre él.

Medio siglo después de iniciada, la ruta cambió de función sin perder su esencia. Dejó de ser solo una herramienta de conectividad para convertirse en la columna vertebral de la **Ruta de los Parques de la Patagonia**, una visión territorial impulsada por la fundación Rewilding Chile, heredera de Tompkins Conservation, junto a CONAF y SERNATUR. Esa red escénica recorre 2.800 kilómetros entre Puerto Montt y Cabo de Hornos, conecta 17 parques nacionales y protege 11,8 millones de hectáreas, lo que representa cerca del 91% del territorio chileno bajo categoría de parque nacional. Es, después de la cuenca del Amazonas, uno de los mayores reservorios de almacenamiento de carbono de Sudamérica.

[chart:parques-protegidos-patagonia]

El arco completo de esta historia es notable: un camino concebido para integrar por tierra un territorio que parecía inconquistable terminó habilitando el corredor de conservación más ambicioso del continente, donde por cada dólar invertido en áreas protegidas se estima un retorno de varios dólares para las economías locales. Que una obra nacida del enfrentamiento con la geografía más brutal se haya transformado en una plataforma de turismo de naturaleza de clase mundial demuestra que la planificación de largo plazo y la voluntad de construir donde otros ven solo obstáculos rinden frutos por décadas, y por eso somos bacanes.`,
    bodyEn:`Before 1976, reaching the Aysén Region by land meant leaving Chile. The only available longitudinal land route was Argentina's Route 40, and the communities of the far south depended on boats or planes to stay connected to the rest of the country. The decision to carve a road of their own through the Patagonian Andes, the fjords, and the ice fields was, before being a road project, a bet on territorial integration over one of the most hostile terrains on the planet. The result is the 1,240 kilometers of Route 7, known as the Carretera Austral, which today connect Puerto Montt to Villa O'Higgins.

## A work against geography

The scale of the engineering challenge defies easy comparison. The route crosses a geography where glaciers, glacial lakes, powerful rivers, mountains, and one of the most extensive fjord systems in the world all pile up. Much of the path had to be opened through dense forest and granite slopes, in a zone where **extreme weather conditions** damage the road every winter and demand constant maintenance. According to the Ministry of Public Works, along the priority corridor between Puerto Montt and Villa O'Higgins, 614.5 kilometers have been paved since 1995, **58% of the route**, while the remaining 443.5 kilometers are still gravel, especially in the far south. The road resists uniformity, and that mixed texture of asphalt and dirt is part of its character.

[chart:pavimentacion-carretera-austral]

To speed up what remains, in 2026 the State announced the plan **Ruta Austral: Soberanía que Conecta**, an investment of close to 800,393 million pesos for the 2026-2030 period that multiplies the historical investment pace fivefold and seeks a uniform paving standard between Puerto Montt and Cochrane.

Construction mobilized more than 10,000 soldiers through the **Military Labor Corps**, the Army's engineering body created in 1953, alongside the Ministry of Public Works and its Roads Directorate. The first stage, called the Basic Austral Network, ran from 1976 to 1982. The second stretched from 1982 to 1989. By the end of that year, counting the transversal road network, the complete project reached some 2,420 kilometers of built roads, at an approximate cost of 300 million dollars at the time. The final connection to Villa O'Higgins was completed in the nineties, and the branch to the singular Caleta Tortel opened in 2003.

> Where geography dictated isolation, engineering answered with a road that is today the gateway to the wildest Patagonia in the world.

## From isolation to the green backbone

The Carretera Austral was never fully completed, and that unfinished character ended up being a virtue. The Southern Ice Fields, with their high mountains and glaciers, make it materially impossible to extend the road continuously toward the far south, which forces the integration of maritime crossings along fjords like the Comau and the Reñihué. That mix of asphalt, gravel, and ferry is today an essential part of its appeal and a case study in how to adapt infrastructure to the territory rather than impose it.

Half a century after it began, the route changed function without losing its essence. It stopped being merely a connectivity tool and became the backbone of the **Route of Parks of Patagonia**, a territorial vision driven by the Rewilding Chile foundation, heir to Tompkins Conservation, alongside CONAF and SERNATUR. That scenic network runs 2,800 kilometers between Puerto Montt and Cape Horn, connects 17 national parks, and protects 11.8 million hectares, representing close to 91% of Chilean territory under the national park category. After the Amazon Basin, it is one of South America's largest carbon storage reservoirs.

[chart:parques-protegidos-patagonia]

The full arc of this story is remarkable: a road conceived to integrate by land a territory that seemed unconquerable ended up enabling the most ambitious conservation corridor on the continent, where every dollar invested in protected areas is estimated to return several dollars to local economies. That a work born from the confrontation with the most brutal geography has transformed into a world-class nature tourism platform shows that long-term planning and the will to build where others see only obstacles bear fruit for decades, and that is why we are bacán.`,
    charts:[
      {
        id:'parques-protegidos-patagonia',
        titleEs:'Territorio protegido por la Ruta de los Parques de la Patagonia',
        titleEn:'Territory protected by the Route of Parks of Patagonia',
        sourceEs:'Fundación Rewilding Chile, 2025',
        sourceEn:'Rewilding Chile Foundation, 2025',
        bars:[
          {labelEs:'Hectáreas protegidas (millones)', labelEn:'Protected hectares (millions)', value:118, display:'11,8 M ha', highlight:true},
          {labelEs:'Parques nacionales conectados', labelEn:'Connected national parks', value:17, display:'17 parques', highlight:true}
        ]
      },
      {
        id:'pavimentacion-carretera-austral',
        titleEs:'Estado de pavimentación de la Carretera Austral',
        titleEn:'Paving status of the Carretera Austral',
        sourceEs:'Ministerio de Obras Públicas, 2026',
        sourceEn:'Ministry of Public Works, 2026',
        bars:[
          {labelEs:'Pavimentado', labelEn:'Paved', value:58, display:'58% · 614,5 km', highlight:true},
          {labelEs:'Por pavimentar (ripio)', labelEn:'Unpaved (gravel)', value:42, display:'42% · 443,5 km'}
        ]
      }
    ],
    sources:[
      {name:'Carretera Austral', publisher:'Wikipedia', url:'https://es.wikipedia.org/wiki/Carretera_Austral', accessed:'junio 2026'},
      {name:'Carretera Austral: Viaje al Indómito Sur de Chile', publisher:'KMS Travel', url:'https://kmstravel.cl/es/carretera-austral-viaje-al-indomito-sur-de-chile/', accessed:'junio 2026'},
      {name:'Ruta de los Parques de la Patagonia', publisher:'Fundación Rewilding Chile', url:'https://www.rewildingchile.org/proyectos/ruta-de-los-parques-de-la-patagonia/', accessed:'junio 2026'},
      {name:'La ruta de los Parques Nacionales de la Patagonia chilena', publisher:'Chile Travel', url:'https://chile.travel/blog/ruta-parques-patagonia/', accessed:'junio 2026'}
    ]
  }

];
