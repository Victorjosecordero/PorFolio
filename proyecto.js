const projects = {
  friday: {
    number: '01', type: 'ASISTENTE DE VOZ · IA', title: 'Friday', accent: 'coral',
    lead: 'Un asistente personal que escucha, entiende y actúa dentro de Windows.',
    overview: 'Friday nace para llevar la interacción con el ordenador más allá del teclado. Se activa mediante una palabra clave, responde por voz y conecta tareas cotidianas en una única experiencia conversacional.',
    challenge: 'Integrar reconocimiento y síntesis de voz, servicios externos y acciones del sistema sin perder fluidez. El asistente también debía permitir interrupciones mientras habla y confirmar las operaciones delicadas.',
    solution: 'Construí una arquitectura modular en Python que separa la escucha, el enrutado de intenciones y la ejecución. Puede consultar el clima, leer Gmail, gestionar un calendario local, abrir aplicaciones, reproducir música y responder preguntas mediante IA.',
    features: ['Activación por palabra clave y escucha continua', 'Interrupción de voz o barge-in', 'Integración con Gmail, clima y modelos de IA', 'Calendario local y automatización de Windows'],
    stack: ['Python', 'OpenAI API', 'SpeechRecognition', 'TTS', 'Automatización Windows'],
    learning: 'Este proyecto me permitió trabajar con flujos asíncronos, tolerancia a errores, diseño conversacional e integración de distintos servicios dentro de una experiencia coherente.'
  },
  clarity: {
    number: '02', type: 'VISIÓN ARTIFICIAL · WEB APP', title: 'Clarity', accent: 'cyan',
    lead: 'Mejora de imágenes hasta 2K y 4K sin enviarlas a servicios externos.',
    overview: 'Clarity es una aplicación web local para ampliar y restaurar fotografías e ilustraciones. El objetivo fue ofrecer una interfaz sencilla para una tarea técnicamente compleja, manteniendo la privacidad del archivo.',
    challenge: 'Los modelos de superresolución pueden inventar detalle o producir texturas poco naturales. Además, la aplicación debía funcionar incluso cuando el motor de IA aún no estuviera instalado.',
    solution: 'Integré Real-ESRGAN mediante NCNN/Vulkan con perfiles separados para fotografía e ilustración. Tres niveles de intensidad mezclan el resultado restaurado con el reescalado fiel. Un modo básico con Lanczos actúa como alternativa.',
    features: ['Salida exacta a 2560 o 3840 píxeles', 'Perfiles para fotografía e ilustración', 'Comparador interactivo antes y después', 'Procesamiento temporal y eliminación automática'],
    stack: ['Python', 'Real-ESRGAN', 'Pillow', 'JavaScript', 'HTML/CSS'],
    learning: 'Aprendí a integrar herramientas nativas con una interfaz web, gestionar archivos de forma segura y diseñar opciones de IA comprensibles para usuarios no técnicos.'
  },
  'victor-ia': {
    number: '03', type: 'BACKEND · MONITORIZACIÓN', title: 'Víctor IA', accent: 'violet',
    lead: 'Un backend para observar, comprender y controlar el estado del ordenador.',
    overview: 'Víctor IA centraliza información del sistema y la pone a disposición de un asistente inteligente. Expone una API organizada para consultar hardware, procesos, repositorios y estado de la base de datos.',
    challenge: 'La monitorización produce datos continuamente y necesita límites, historial y alertas útiles. También exige separar con claridad el acceso al sistema, la persistencia y la capa HTTP.',
    solution: 'Desarrollé el backend con Java 21 y Spring Boot, aplicando servicios y controladores especializados. SQLite conserva el histórico del hardware y tareas programadas evalúan alertas y cambios de estado.',
    features: ['Historial persistente de hardware', 'Alertas configurables y monitorización programada', 'Herramientas para procesos, archivos y Git', 'API REST modular preparada para una interfaz'],
    stack: ['Java 21', 'Spring Boot', 'SQLite', 'JDBC', 'REST API'],
    learning: 'El proyecto reforzó mis conocimientos de diseño por capas, persistencia, validación, tareas programadas y construcción de APIs mantenibles.'
  },
  filmoteca: {
    number: '04', type: 'PRODUCTO WEB · API', title: 'Mi Filmoteca', accent: 'coral',
    lead: 'Una biblioteca personal para descubrir y organizar películas.',
    overview: 'Mi Filmoteca reúne búsqueda, descubrimiento y seguimiento en una interfaz adaptada a móvil. Permite crear una colección propia y registrar qué títulos están vistos o descargados.',
    challenge: 'Había que presentar mucha información visual sin sobrecargar la experiencia, gestionar búsquedas remotas y conservar los datos personales del usuario de forma sencilla.',
    solution: 'Construí una aplicación estática que consume TMDB y guarda preferencias en el navegador. También desarrollé una experiencia especial de cuenta atrás y progreso para Road to Doomsday.',
    features: ['Búsqueda de películas mediante TMDB', 'Colección y estados personalizados', 'Persistencia en el navegador', 'Diseño responsive y despliegue estático'],
    stack: ['JavaScript', 'TMDB API', 'Supabase', 'LocalStorage', 'HTML/CSS'],
    learning: 'Trabajé consumo de APIs, estados de interfaz, persistencia cliente y diseño responsive orientado a contenido visual.'
  },
  gastos: {
    number: '05', type: 'PWA · PRODUCTIVIDAD', title: 'Control de gastos', accent: 'cyan',
    lead: 'Suscripciones y gastos fijos bajo control desde una aplicación instalable.',
    overview: 'Esta PWA ayuda a comprender cuánto se paga cada mes y cada año. Organiza los cobros, calcula totales por categoría y avisa antes de las próximas fechas.',
    challenge: 'Los gastos anuales y mensuales debían compararse correctamente y los datos tenían que seguir disponibles sin servidor. Las copias de seguridad también debían poder recuperarse sin duplicar información.',
    solution: 'Implementé cálculos normalizados, filtros, ordenación, notificaciones, exportación e importación con modos de reemplazo y fusión. Un service worker permite instalar la aplicación y usarla como producto independiente.',
    features: ['Totales mensuales, anuales y por categoría', 'Alertas previas a cada cobro', 'Importación, fusión y exportación de datos', 'Instalación como PWA y funcionamiento local'],
    stack: ['JavaScript', 'PWA', 'Service Worker', 'LocalStorage', 'Notifications API'],
    learning: 'Profundicé en aplicaciones offline-first, manejo de fechas, consistencia de datos y diseño de herramientas financieras fáciles de entender.'
  },
  toolkit: {
    number: '06', type: 'SCRIPTS · UTILIDADES', title: 'Toolkit de automatización', accent: 'gold',
    lead: 'Pequeñas herramientas que eliminan tareas repetitivas del día a día.',
    overview: 'Este conjunto reúne scripts de Python para organizar archivos y procesar contenido multimedia. Cada utilidad resuelve un flujo concreto y puede usarse de forma interactiva o desde la terminal.',
    challenge: 'Los archivos y URLs reales contienen formatos, nombres y errores muy variados. Las herramientas necesitaban validación, mensajes claros y opciones seguras antes de modificar contenido.',
    solution: 'Creé utilidades con argumentos de línea de comandos, detección de plataformas, modo de simulación y vigilancia continua. La integración con yt-dlp y FFmpeg permite seleccionar calidad, convertir formatos y evitar descargas repetidas.',
    features: ['Organización automática por tipo de archivo', 'Modo simulación y monitorización continua', 'Descarga de vídeo y extracción de audio', 'Historial para evitar contenido duplicado'],
    stack: ['Python', 'yt-dlp', 'FFmpeg', 'argparse', 'Automatización'],
    learning: 'Estos scripts reforzaron mi capacidad para crear herramientas resistentes, reutilizables y centradas en ahorrar tiempo real.'
  },
  'pokemon-anil': {
    number: '07', type: 'MODDING · GAME SYSTEMS', title: 'Pokémon Añil — Edición GK', accent: 'indigo',
    lead: 'Una modificación personalizada que lleva los sistemas de Pokémon Añil hacia una experiencia más profunda, legible y configurable.',
    overview: 'Pokémon Añil — Edición GK es una modificación integral construida sobre Pokémon Añil. El trabajo amplía sus sistemas de aleatorización, combate y progresión, y reúne herramientas de calidad de vida pensadas para reducir fricción sin imponer una única forma de jugar.',
    challenge: 'La ampliación debía convivir con las reglas existentes, mantener la compatibilidad con partidas antiguas y ofrecer más información táctica sin saturar la interfaz. Cada ayuda, además, tenía que poder desactivarse de forma independiente para preservar la experiencia elegida por cada jugador.',
    solution: 'Depuré el pool del modo Random y habilité 125 MT desde el inicio, junto con movimientos por nivel sin restricciones de nivel o potencia y manteniendo la prioridad STAB. Diseñé tres perfiles de IA —Clásica, Competitiva y Suprema, inspirada en Run &amp; Bun— y añadí indicadores opcionales de eficacia, daño estimado y golpes necesarios para el KO.',
    features: ['Pool Random depurada, 125 MT iniciales y movimientos por nivel sin límites de nivel o potencia, con prioridad STAB', 'Tres modos de IA seleccionables: Clásica, Competitiva y Suprema', 'Indicadores opcionales de eficacia, daño estimado y golpes para KO', 'Editor rápido de EV para el equipo y las cajas del PC', 'Buscador avanzado del PC, recordador de movimientos, analizador de debilidades y zona de pruebas', 'Registro de entrenadores, resumen de decisiones de IA y mapa de progreso con viaje a objetivos', 'Compatibilidad con partidas antiguas y controles independientes para desactivar cada función'],
    stack: ['Ruby', 'Pokémon Essentials', 'IA de combate', 'Diseño de sistemas', 'UX/QOL'],
    learning: 'La modificación exigió entender un sistema de juego existente, extenderlo sin romper su equilibrio y convertir lógica compleja de combate en información clara, opcional y útil para el jugador.'
  },
  'road-to-doomsday': {
    number: '08', type: 'EXPERIENCIA WEB · CINE', title: 'Road to Doomsday', accent: 'coral',
    lead: 'Una experiencia cinematográfica para convertir la espera en parte del viaje.',
    overview: 'Road to Doomsday combina cuenta atrás, catálogo y seguimiento de visionado en una experiencia temática pensada para preparar un recorrido personal hasta el estreno.',
    challenge: 'Había que reunir información visual, progreso y fechas sin perder la atmósfera cinematográfica, y conseguir que el estado del usuario se mantuviera sincronizado entre sesiones y dispositivos.',
    solution: 'Diseñé una interfaz responsive con identidad propia, conectada a datos de películas y a una capa de persistencia. La experiencia destaca el siguiente objetivo, el progreso acumulado y el tiempo restante de un vistazo.',
    features: ['Cuenta atrás dinámica hasta el estreno', 'Roadmap de películas y progreso de visionado', 'Filmoteca temática con información visual', 'Persistencia de estado mediante Supabase'],
    stack: ['JavaScript', 'Supabase', 'TMDB API', 'HTML/CSS'],
    url: 'https://victorjosecordero.github.io/road-to-doomsday/index.html',
    learning: 'El proyecto reforzó mi forma de unir narrativa visual, datos externos y persistencia en una experiencia web que invita a volver.'
  },
  lienzo: {
    number: '09', type: 'UTILIDAD WEB · IMÁGENES', title: 'Lienzo', accent: 'cyan',
    lead: 'Conversión y optimización de imágenes directamente en el navegador.',
    overview: 'Lienzo permite transformar lotes de imágenes entre PNG, JPG y WebP, controlar su peso y dimensiones y descargar los resultados sin subir archivos a un servidor.',
    challenge: 'El flujo debía ser rápido con varias imágenes, explicar con claridad cómo afectan la calidad y el tamaño, y mantener la privacidad de principio a fin.',
    solution: 'Aproveché Canvas y APIs del navegador para recodificar y redimensionar archivos localmente. La interfaz agrupa las opciones esenciales y permite descargar cada resultado o el lote completo.',
    features: ['Conversión por lotes entre PNG, JPG y WebP', 'Control de calidad y dimensiones máximas', 'Eliminación de metadatos al recodificar', 'Descarga individual o agrupada en ZIP'],
    stack: ['JavaScript', 'Canvas API', 'JSZip', 'HTML/CSS'],
    url: 'https://victorjosecordero.github.io/conversor-imagenes/',
    learning: 'Profundicé en procesamiento binario en el navegador, rendimiento con múltiples archivos y diseño de herramientas privadas y fáciles de comprender.'
  },
  qrama: {
    number: '10', type: 'GENERADOR · PRODUCTIVIDAD', title: 'QRama', accent: 'violet',
    lead: 'Códigos QR personalizados, listos para usar y sin salir del navegador.',
    overview: 'QRama genera códigos para enlaces, texto, redes Wi-Fi y contactos vCard, con controles visuales y exportación preparada tanto para pantalla como para impresión.',
    challenge: 'Los distintos tipos de contenido requieren validaciones propias y el resultado debe seguir siendo legible incluso después de personalizar colores, tamaño y corrección de errores.',
    solution: 'Organicé la creación por casos de uso y añadí una previsualización inmediata. El usuario puede ajustar el aspecto, copiar el resultado o descargarlo como imagen rasterizada o vectorial.',
    features: ['Plantillas para URL, texto, Wi-Fi y vCard', 'Personalización de color, tamaño y corrección', 'Exportación en PNG y SVG', 'Copia directa al portapapeles'],
    stack: ['Vite', 'JavaScript', 'SVG', 'Clipboard API'],
    url: 'https://victorjosecordero.github.io/generador-codigos-qr/',
    learning: 'Trabajé validación orientada a casos de uso, exportación multiformato y una interfaz que mantiene visibles las consecuencias de cada ajuste.'
  },
  'vp-devtools': {
    number: '11', type: 'UTILIDADES · DESARROLLO', title: 'VP DevTools', accent: 'gold',
    lead: 'Herramientas rápidas para resolver tareas habituales sin compartir el código.',
    overview: 'VP DevTools reúne en una sola aplicación un formateador de JSON, generador de UUID, conversor Base64, probador de expresiones regulares y comparador de textos.',
    challenge: 'Cada herramienta maneja entradas y errores diferentes, pero todas debían sentirse parte del mismo producto y dar resultados inmediatos sin depender de un backend.',
    solution: 'Construí módulos independientes sobre una interfaz común, con validación clara, acciones de copiado y procesamiento completamente local.',
    features: ['Formateo y validación de JSON', 'Generación de UUID v4', 'Codificación y decodificación Base64', 'Pruebas RegExp y comparación por líneas'],
    stack: ['JavaScript', 'JSON', 'RegExp', 'Web APIs'],
    url: 'https://victorjosecordero.github.io/vp-devtools/',
    learning: 'Consolidé patrones reutilizables para validación, estados de error y pequeñas herramientas que priorizan velocidad y privacidad.'
  },
  'markdown-editor': {
    number: '12', type: 'EDITOR · PRODUCTIVIDAD', title: 'Markdown Live Editor', accent: 'cyan',
    lead: 'Escribir, previsualizar y exportar Markdown en un flujo continuo.',
    overview: 'Markdown Live Editor ofrece edición y vista previa en tiempo real, una barra de formato, atajos de teclado y exportación a Markdown o HTML autocontenido.',
    challenge: 'La edición debía sentirse inmediata, conservar el trabajo ante cierres accidentales y producir una exportación útil sin añadir dependencias de ejecución.',
    solution: 'Sincronicé editor y previsualización, añadí comandos de formato, persistencia local y dos rutas de exportación para reutilizar el contenido dentro o fuera de la aplicación.',
    features: ['Vista previa en tiempo real', 'Barra de formato y atajos de teclado', 'Autoguardado en el navegador', 'Exportación a Markdown y HTML autocontenido'],
    stack: ['JavaScript', 'Markdown', 'LocalStorage', 'HTML/CSS'],
    url: 'https://victorjosecordero.github.io/markdown-live-editor/',
    learning: 'El editor me permitió profundizar en sincronización de interfaces, selección de texto, atajos accesibles y generación de documentos portables.'
  },
  'vp-diff': {
    number: '13', type: 'COMPARADOR · CÓDIGO', title: 'VP Diff', accent: 'coral',
    lead: 'Dos versiones de un archivo, comparadas con claridad línea a línea.',
    overview: 'VP Diff es una herramienta enfocada para pegar dos bloques de código y entender rápidamente qué líneas se añadieron, eliminaron o conservaron.',
    challenge: 'El algoritmo debía presentar cambios útiles sin bloquear la interfaz, y la visualización tenía que seguir siendo legible tanto en pantallas grandes como en móvil.',
    solution: 'Implementé la comparación en cliente y construí una vista paralela con numeración, colores semánticos y un resumen compacto de cambios.',
    features: ['Comparación línea a línea', 'Resaltado de adiciones y eliminaciones', 'Numeración y resumen de cambios', 'Procesamiento privado en el dispositivo'],
    stack: ['JavaScript', 'Algoritmos Diff', 'HTML/CSS', 'Responsive'],
    url: 'https://victorjosecordero.github.io/comparadorDeCodigo/',
    learning: 'Convertí la salida de un algoritmo en una representación visual clara y reforcé el tratamiento de textos grandes y estados vacíos.'
  },
  'layout-playground': {
    number: '14', type: 'PLAYGROUND · CSS', title: 'Flexbox & Grid Playground', accent: 'violet',
    lead: 'Experimentar con layouts CSS y ver cada cambio al instante.',
    overview: 'Este playground visual permite explorar propiedades de Flexbox y CSS Grid, cambiar el número de elementos, probar varios tamaños y copiar el resultado generado.',
    challenge: 'Era necesario traducir propiedades técnicas a controles comprensibles sin ocultar el CSS real que el usuario quiere aprender.',
    solution: 'Conecté cada control con una vista previa inmediata y un panel de código sincronizado, además de modos de pantalla para comprobar el comportamiento responsive.',
    features: ['Edición visual de Flexbox y Grid', 'Previsualización para escritorio, tablet y móvil', 'Control dinámico del número de elementos', 'Generación y copia de HTML y CSS'],
    stack: ['CSS Grid', 'Flexbox', 'JavaScript', 'Responsive Design'],
    url: 'https://victorjosecordero.github.io/flexbox-grid-playground/',
    learning: 'El proyecto me ayudó a diseñar herramientas educativas que conectan controles visuales con conceptos técnicos y código reutilizable.'
  },
  'dice-roller': {
    number: '15', type: 'WEBGL · JUEGO', title: 'VP Dice Roller', accent: 'gold',
    lead: 'Una mesa 3D para lanzar dados de rol con sensación física.',
    overview: 'VP Dice Roller lleva D4, D6, D8, D10, D12 y D20 a una mesa WebGL con iluminación, sombras, rebotes y una interfaz preparada para partidas de rol.',
    challenge: 'Las tiradas debían resultar visualmente creíbles y a la vez producir resultados fiables, funcionar en móvil y mantener fluidez con reservas de varios dados.',
    solution: 'Integré renderizado y físicas 3D con controles para componer reservas, aplicar modificadores y conservar historial y estadísticas diarias en el navegador.',
    features: ['Seis tipos de dados con físicas 3D', 'Reservas mixtas de hasta catorce dados', 'Modificadores, historial y estadísticas', 'Sonido opcional e interfaz responsive'],
    stack: ['Three.js', 'WebGL', 'Físicas 3D', 'JavaScript'],
    url: 'https://victorjosecordero.github.io/RollAndDice/',
    learning: 'Aprendí a equilibrar realismo visual, precisión de resultados y rendimiento al construir una interacción 3D que también funciona en pantallas pequeñas.'
  },
  'forja-rpg': {
    number: '16', type: 'CREADOR · RPG', title: 'Forja RPG', accent: 'coral',
    lead: 'Personajes de rol completos, desde la primera idea hasta la ficha impresa.',
    overview: 'Forja RPG guía la creación de identidad, historia, atributos, habilidades e inventario y conserva la ficha para continuar editándola más adelante.',
    challenge: 'El reparto de atributos debía respetar reglas, la ficha tenía que admitir contenido variable y el resultado debía funcionar tanto en pantalla como impreso.',
    solution: 'Diseñé un formulario por bloques con presupuesto de puntos visible, colecciones editables, retratos y persistencia automática, además de exportación JSON y estilos de impresión.',
    features: ['Reparto de 27 puntos entre seis atributos', 'Habilidades e inventario editables', 'Retratos incluidos o imagen personalizada', 'Autoguardado, exportación JSON e impresión'],
    stack: ['JavaScript', 'LocalStorage', 'JSON', 'Print CSS'],
    url: 'https://victorjosecordero.github.io/creador-personajes-rpg/',
    learning: 'Practiqué modelado de datos editables, validación con reglas de dominio y adaptación de una misma ficha a interfaz, archivo e impresión.'
  },
  'anime-tracker': {
    number: '17', type: 'TRACKER · ENTRETENIMIENTO', title: 'Anime Tracker', accent: 'cyan',
    lead: 'Una lista personal para llevar cada serie y episodio al día.',
    overview: 'Anime Tracker organiza series por estado, temporada y progreso, añade puntuaciones y facilita encontrar cualquier título mediante búsqueda, filtros y ordenación.',
    challenge: 'La biblioteca debía ser rápida con muchos títulos, mantener datos entre sesiones y ayudar a localizar carátulas sin obligar al usuario a introducirlas manualmente.',
    solution: 'Construí una aplicación local con operaciones completas de alta y edición, controles de progreso y una integración con AniList para buscar imágenes de portada.',
    features: ['Estados viendo, pendiente y completado', 'Progreso episodio a episodio y puntuaciones', 'Búsqueda, filtros y ordenación', 'Carátulas mediante la API pública de AniList'],
    stack: ['JavaScript', 'AniList API', 'LocalStorage', 'HTML/CSS'],
    url: 'https://victorjosecordero.github.io/animeTracker/',
    learning: 'Reforcé gestión de estado persistente, consumo de APIs GraphQL y diseño de bibliotecas personales fáciles de explorar.'
  }
};

const id = new URLSearchParams(location.search).get('id');
const project = projects[id] || projects.friday;
document.title = `${project.title} — Proyecto de Víctor Peña`;
document.querySelector('meta[name="description"]').content = project.lead;

document.querySelector('#case-study').innerHTML = `
  <article class="case ${project.accent}">
    <header class="case-hero">
      <p class="project-type">${project.number} — ${project.type}</p>
      <h1>${project.title}</h1>
      <p class="case-lead">${project.lead}</p>
      <div class="case-tags">${project.stack.map(item => `<span>${item}</span>`).join('')}</div>
      ${project.url ? `<a class="case-live-link" href="${project.url}" target="_blank" rel="noreferrer">Abrir proyecto <span>↗</span></a>` : ''}
    </header>
    <div class="case-marquee" aria-hidden="true"><span>${project.title} · DISEÑO · DESARROLLO · SOLUCIÓN · </span></div>
    <section class="case-intro">
      <p class="case-label">EL PROYECTO</p>
      <p>${project.overview}</p>
    </section>
    <section class="case-columns">
      <div><p class="case-label">01 — EL RETO</p><h2>Convertir una necesidad en una experiencia útil.</h2><p>${project.challenge}</p></div>
      <div><p class="case-label">02 — LA SOLUCIÓN</p><h2>Diseño, código y atención al detalle.</h2><p>${project.solution}</p></div>
    </section>
    <section class="case-features">
      <div><p class="case-label">03 — FUNCIONES</p><h2>Lo que construí.</h2></div>
      <ol>${project.features.map(item => `<li><span>✓</span>${item}</li>`).join('')}</ol>
    </section>
    <section class="case-learning"><p class="case-label">04 — APRENDIZAJE</p><blockquote>${project.learning}</blockquote></section>
    <nav class="case-navigation" aria-label="Navegación entre proyectos"><a href="index.html#proyectos">← Volver al portfolio</a><a href="${nextProject(id)}">Siguiente proyecto →</a></nav>
  </article>`;

function nextProject(current) {
  const ids = Object.keys(projects);
  const index = Math.max(0, ids.indexOf(current));
  return `proyecto.html?id=${ids[(index + 1) % ids.length]}`;
}

document.querySelector('#year').textContent = new Date().getFullYear();
