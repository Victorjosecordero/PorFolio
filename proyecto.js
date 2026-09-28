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
