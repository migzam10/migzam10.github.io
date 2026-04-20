const data = {
    menu: ["Inicio", "Sobre mi", "Educación", "Habilidades", "Portafolio", "Servicios", "Contacto"],
    iconosMenu: [
        "fa-solid fa-house",
        "fa-regular fa-user",
        "fa-solid fa-graduation-cap",
        "fa-solid fa-user-check",
        "fa-solid fa-book-open",
        "fa-solid fa-server",
        "fa-solid fa-star",
        "fa-regular fa-envelope"
    ],

    disponible: true, // Cambia a false cuando no tengas cupo

    inicio: {
        saludo: "Hola, soy",
        nombre: "Miguel Zambrano",
        roles: ["Ingeniero de Sistemas", "Desarrollador", "Diseñador UI/UX", "Freelancer", "Fotógrafo"],
        descripcion: "Convierto ideas y problemas reales en software funcional, interfaces limpias y soluciones tecnológicas que generan impacto. +6 años de experiencia en desarrollo, infraestructura y automatización.",
    },

    sobreMi: {
        foto: "img/img.png",
        tagline: "Construyo tecnología que trabaja para ti, no al revés.",
        bio: "Soy Ingeniero de Sistemas con más de 6 años de experiencia trabajando en el ciclo completo de proyectos tecnológicos: desde el análisis de requerimientos hasta el despliegue en producción. He colaborado con IPS, talleres y empresas de servicios para modernizar sus operaciones a través del software.",
        bio2: "Mi diferencial es que entiendo tanto el código como el negocio. No solo construyo lo que me pides; te ayudo a entender qué necesitas realmente y cómo la tecnología puede ahorrarle dinero y tiempo a tu empresa.",
        sitioWeb: "www.migzam.uk",
        correo: "miguel@migzam.uk",
        celular: "+57 300 242 1327",
        profesion: "Ingeniero de Sistemas / Desarrollador",
        stats: [
            { valor: "6+", label: "Años de experiencia" },
            { valor: "10+", label: "Proyectos entregados" },
            { valor: "4+",   label: "Empresas impactadas" },
        ]
    },

    educacionYExperiencia: {
        estudios: [
            { tipo: "Ingeniería de Sistemas", fecha: "Graduado", institucion: "Institución Universitaria Americana" },
            { tipo: "Tecnólogo en Desarrollo de Software", fecha: "2024", institucion: "Institución Universitaria Americana" },
            { tipo: "Curso: Desarrollo Web con PHP", fecha: "2022", institucion: "SENA", detalle: "40 horas" },
            { tipo: "Técnico Profesional en Programación de Computadores", fecha: "2022", institucion: "Institución Universitaria Americana" },
            { tipo: "Diplomado: Programación Kotlin", fecha: "2021", institucion: "Corporación Universitaria Americana", detalle: "120 horas" },
            { tipo: "Curso: Aplicaciones con Interfaz Gráfica – JAVA", fecha: "2021", institucion: "SENA", detalle: "40 horas" },
            { tipo: "Curso: Manejo de Datos en Memoria – JAVA", fecha: "2021", institucion: "SENA", detalle: "40 horas" },
            { tipo: "Curso: Apps Móviles Android", fecha: "2018", institucion: "SENA", detalle: "80 horas" },
            { tipo: "Curso: Fundamentos de HTML", fecha: "2018", institucion: "SENA", detalle: "50 horas" },
            { tipo: "Curso: Metodología SCRUM", fecha: "2018", institucion: "SENA", detalle: "40 horas" },
        ],
        experiencia: [
            { cargo: "Desarrollador de Software e Integración", fecha: "2025 - Presente", empresa: "Freelance", detalle: "Desarrollo de software a medida para extracción y procesamiento de datos de equipos de laboratorio clínico (URIT 3010 y Mindray BA-88A). Diseño e implementación de aplicaciones web para clientes del sector salud." },
            { cargo: "Ingeniero de Sistemas", fecha: "2025 - Presente", empresa: "Freelance", detalle: "Diseño y desarrollo de soluciones de software a medida. Gestión de infraestructura tecnológica, configuración de servidores, despliegue de redes y soporte técnico especializado." },
            { cargo: "Coordinador de Sistemas y Gestión de Información", fecha: "2025", empresa: "Asociacion Los Lomeñitos", detalle: "Administración y reporte en plataformas misionales (Cuéntame). Garantía de seguridad de la información. Soporte técnico y transformación digital de la operación." },
            { cargo: "Coordinador de Mantenimiento y Sistemas", fecha: "2022 - 2024", empresa: "SSO - CRC Servicios de Salud Ocupacional S.A.S.", detalle: "A cargo de toda la infraestructura tecnológica de la IPS: servidores, redes, equipos médicos y de cómputo. Desarrollé y mantuve el sitio web institucional durante 2 años de forma continua." },
            { cargo: "Técnico Correctivo", fecha: "2022", empresa: "E&C Ingenieros S.A.S.", detalle: "Mantenimiento correctivo y preventivo de equipos de cómputo, redes y telecomunicaciones. Soporte técnico de primer y segundo nivel." },
            { cargo: "Auxiliar de Mantenimiento y Sistemas", fecha: "2019 - 2022", empresa: "Servicios de Salud Ocupacional S.A.S.", detalle: "Mantenimiento de equipos, administración de redes y servidor Windows Server 2012, gestión de dominios y hosting, diseño del sitio web institucional y soporte en CCTV y telefonía." },
        ],
        resumen: "Ingeniero de Sistemas con sólida experiencia en el ciclo completo de desarrollo de software y administración de infraestructura tecnológica. Especializado en el diseño de interfaces web modernas y arquitecturas eficientes. Combino programación con conocimiento técnico en bases de datos, servidores y soporte TI para entregar soluciones completas, seguras y escalables."
    },

    habilidades: {
        barras: [
            { nombre: "JavaScript / Frontend", porcentaje: 85 },
            { nombre: "PHP & MySQL",           porcentaje: 85 },
            { nombre: "Python / Java",          porcentaje: 70 },
            { nombre: "GNU/Linux & Windows Server", porcentaje: 90 },
            { nombre: "GIT & Control de versiones", porcentaje: 95 },
            { nombre: "Excel avanzado",         porcentaje: 95 },
        ],
        tecnologias: [
            { nombre: "HTML5",      icono: "fa-brands fa-html5",      color: "#e34f26" },
            { nombre: "CSS3",       icono: "fa-brands fa-css3-alt",   color: "#1572b6" },
            { nombre: "JavaScript", icono: "fa-brands fa-js",         color: "#f7df1e" },
            { nombre: "PHP",        icono: "fa-brands fa-php",        color: "#777bb4" },
            { nombre: "Python",     icono: "fa-brands fa-python",     color: "#3776ab" },
            { nombre: "Git",        icono: "fa-brands fa-git-alt",    color: "#f05032" },
            { nombre: "GitHub",     icono: "fa-brands fa-github",     color: "#f8fafc" },
            { nombre: "Linux",      icono: "fa-brands fa-linux",      color: "#fcc624" },
            { nombre: "Windows",    icono: "fa-brands fa-windows",    color: "#0078d4" },
            { nombre: "MySQL",      icono: "fa-solid fa-database",    color: "#4479a1" },
            { nombre: "Java",       icono: "fa-brands fa-java",  color: "#21759b" },
            { nombre: "Android",    icono: "fa-brands fa-android",    color: "#3ddc84" },
            
        ]
    },

    portafolio: [
        {
            id: 1,
            titulo: "Software de Integración para Equipos de Laboratorio Clínico",
            imagen_principal: "img/portafolio/lis/lis-1.png",
            imagenes_extra: [],
            videos: ["1PVWIR_-WIk","uIrZAx988PI", "XmQI_-Ny4ao"],
            descripcion: "Sistema a medida para la extracción y procesamiento automático de datos desde equipos de laboratorio clínico (URIT 3010 y Mindray BA-88A). Eliminó el registro manual de resultados.",
            resultado: "Proceso manual eliminado — resultados integrados automáticamente al sistema clínico.",
            tecnologias: ["Python", "SQLite", "API Serial"],
            categoria: "Fullstack / Integración",
            fecha: "2025 - Presente",
            url: "https://www.youtube.com/watch?v=1PVWIR_-WIk"
        },
        {
            id: 2,
            titulo: "Aplicación Web para Gestión de ventas e inventario — PerfumesApp",
            imagen_principal: "img/portafolio/perfumesapp/perfumesapp-1.webp",
            imagenes_extra: ["img/portafolio/perfumesapp/perfumesapp-2.png", "img/portafolio/perfumesapp/perfumesapp-3.png", "img/portafolio/perfumesapp/perfumesapp-4.png"],
            descripcion: "Aplicación web para la gestión de ventas e inventario de una perfumería - Asaria Perfumeria. Permite registrar las ventas en línea y a los administradores gestionar el inventario en tiempo real, con alertas de stock bajo y reportes de ventas.",
            resultado: "Aumento del 30% en la eficiencia de gestión de ventas e inventario y reducción del 20% en errores de procesamiento.",
            tecnologias: ["JavaScript", "PHP", "MySQL", "HTML5", "CSS3"],
            categoria: "Web App / UI Design",
            fecha: "2026 - Presente",
            url: "https://instagram.com/asariaperfumes"
        },
        {
            id: 3,
            titulo: "POS Web — Laspizzas",
            imagen_principal: "img/portafolio/laspizzas/laspizzas-1.webp",
            imagenes_extra: ["img/portafolio/laspizzas/laspizzas-2.png", "img/portafolio/laspizzas/laspizzas-3.png", "img/portafolio/laspizzas/laspizzas-4.png"],
            descripcion: "Punto de Venta web optimizado para operación desde dispositivos móviles. Permite registrar pedidos, controlar el inventario de ingredientes. Diseñado para una pizzería local, facilitando la operación sin necesidad de hardware especializado.",
            resultado: "Operación de caja 100% desde el celular, sin computador ni caja registradora.",
            tecnologias: ["JavaScript", "PHP", "MySQL", "CSS3"],
            categoria: "Web App / UI Móvil",
            fecha: "Febrero 2026",
            url: "https://laspizzas.migzam.uk/"
        },
        {
            id: 4,
            titulo: "Sistema de Gestión para Taller Automotriz",
            imagen_principal: "img/portafolio/talleres/taller-1.png",
            imagenes_extra: ["img/portafolio/talleres/taller-2.png", "img/portafolio/talleres/taller-3.png", "img/portafolio/talleres/taller-4.png"],
            descripcion: "Sistema web para la gestión integral de un taller mecánico local. Permite registrar clientes, facturación y control de inventario de repuestos, gestion de cartera, control de ingresos y egresos, informe de ventas. etc.",
            resultado: "Reducción del 60% en el tiempo de gestión administrativa y mejora en el control de inventarios y finanzas del taller.",
            tecnologias: ["JavaScript", "PHP", "MySQL", "HTML5", "CSS3"],
            categoria: "Web App / UI Design",
            fecha: "2026 - Presente",
            url: "https://www.youtube.com/watch?v=7yZxPC-Lvp4"
        
        },
        {
            id: 5,
            titulo: "Sitio Web Institucional — SSO Salud Ocupacional",
            imagen_principal: "img/portafolio/sso/sso-1.jpg",
            imagenes_extra: ["img/portafolio/sso/sso-2.jpg", "img/portafolio/sso/sso-3.jpg"],
            descripcion: "Diseño, desarrollo e implementación del sitio web oficial de la IPS SSO. El sitio lleva activo más de 5 años con actualizaciones continuas, mejorando la imagen digital de la empresa y reduciendo las consultas informales por canales como WhatsApp.",
            resultado: "5 años activo en producción con mantenimiento continuo y presencia digital consolidada.",
            tecnologias: ["HTML5", "CSS3", "JavaScript", "PHP"],
            categoria: "Desarrollo Web",
            fecha: "2019 - 2024",
            url: "https://ssobq.com"
        },
        {
            id: 6,
            titulo: "Sistema de Gestion de tarifas y servicios para IPS",
            imagen_principal: "img/portafolio/proovedoresIPS/tarifas-1.png",
            imagenes_extra: ["img/portafolio/proovedoresIPS/tarifas-2.png", "img/portafolio/proovedoresIPS/tarifas-3.png", "img/portafolio/proovedoresIPS/tarifas-4.png"],
            descripcion: "Sistema web diseñada para gestionar y generar cotizaciones de servicios médicos de diferences IPS conn el fin de llevar control de las tarifas que ofrecen año a año y comparar con otras IPS en la misma ciudad.",
            resultado: "Mejora en la eficiencia de la gestión de tarifas y servicios, con ahorro de costos operativos y mejor control de la información.",
            tecnologias: ["JavaScript", "PHP", "MySQL", "HTML5", "CSS3"],
            categoria: "Web App / UI Design",
            fecha: "2026 - Presente",
            url: "#"
        },
        {
            id: 7,
            titulo: "Sistema de Gestión para Taller de reboninado - Robinar",
            imagen_principal: "img/portafolio/taller-1/taller-1.png",
            imagenes_extra: ["img/portafolio/taller-1/taller-2.png", "img/portafolio/taller-1/taller-3.png", "img/portafolio/taller-1/taller-4.png"],
            descripcion: "Sistema web para la gestión integral de un taller. Permite control de clientes, facturación, gestión de cartera, control de ingresos y egresos, informes de ventas, etc.",
            resultado: "Reducción del 60% en el tiempo de gestión administrativa y mejora en el control de inventarios y finanzas del taller.",
            tecnologias: ["JavaScript", "PHP", "MySQL", "HTML5", "CSS3"],
            categoria: "Web App / UI Design",
            fecha: "2024- Presente",
            url: "#"
        },
        
        {
            id: 8,
            titulo: "Rediseño e Implementación de Infraestructura de Redes",
            imagen_principal: "img/portafolio/red/red-1.webp",
            imagenes_extra: ["img/portafolio/red/red-1.jpg", "img/portafolio/red/red-2.jpg", "img/portafolio/red/red-3.jpg"],
            descripcion: "Rediseño e implementación de infraestructura de red para una IPS. Incluyó cableado estructurado, configuración de routers y switches, instalación de Access Points y mantenimiento preventivo. La red soporta más de 50 dispositivos con alta disponibilidad y seguridad.",
            resultado: "Red estable y segura que soporta la operación diaria de la IPS sin interrupciones, con capacidad para crecimiento futuro.",
            tecnologias: ["Redes LAN/WAN", "TP-Link", "Seguridad de Redes"],
            categoria: "Infraestructura de Redes",
            fecha: "Enero 2026",
            url: "#"
        }
    ],

    servicios: [
        {
            titulo: "Mantenimiento y Soporte TI",
            icono: "fa-solid fa-screwdriver-wrench",
            desde: "Desde $40.000 COP",
            items: [
                "Soporte técnico a equipos de cómputo presencial o remoto.",
                "Mantenimiento preventivo y correctivo a equipos, servidores y cámaras.",
                "Servicios a domicilio y/o remotos con respuesta rápida."
            ]
        },
        {
            titulo: "Diseño y Desarrollo Web",
            icono: "fa-solid fa-palette",
            desde: "Desde $600.000 COP",
            items: [
                "Sitios web a la medida, responsive y optimizados para SEO.",
                "Análisis e implementación de posicionamiento SEO.",
                "Configuración de dominios y hosting incluida."
            ]
        },
        {
            titulo: "Desarrollo de Software",
            icono: "fa-solid fa-code",
            desde: "Cotización personalizada",
            items: [
                "Software a la medida según las necesidades del negocio.",
                "Plataformas web, apps de escritorio y sistemas de gestión.",
                "Integración con equipos, APIs y bases de datos.",
                "Soporte y mantenimiento post-entrega."
            ]
        },
        {
            titulo: "Infraestructura de Redes",
            icono: "fa-solid fa-network-wired",
            desde: "Desde $100.000 COP",
            items: [
                "Cableado estructurado y cuartos de comunicaciones.",
                "Configuración de routers, switches, VLANs y subredes.",
                "Instalación de Access Points, bridges y repetidores.",
                "Mantenimiento preventivo y correctivo."
            ]
        },
        {
            titulo: "Servidores",
            icono: "fa-solid fa-server",
            desde: "Cotización personalizada",
            items: [
                "Servidores físicos y virtuales: Web, FTP, BD, Windows y Linux.",
                "Políticas de acceso, copias de seguridad y almacenamiento."
            ]
        },
        {
            titulo: "Consultoría TI",
            icono: "fa-solid fa-list-check",
            desde: "Desde $100.000 COP",
            items: [
                "Elaboración de Plan Estratégico de TI (PETI).",
                "Consultoría en dominios, alojamientos y correos corporativos.",
                "Evaluación y diseño de redes.",
                "Asesoramiento en herramientas y plataformas tecnológicas."
            ]
        }
    ],

    testimonios: [
        {
            nombre: "Equipo SSO Salud Ocupacional",
            cargo: "IPS — Barranquilla",
            texto: "Miguel gestionó toda nuestra infraestructura tecnológica durante más de 3 años. Su trabajo fue clave para mantener los sistemas funcionando y el sitio web siempre activo. Muy profesional y siempre disponible cuando lo necesitábamos.",
            avatar: "SS",
            placeholder: false
        },
        {
            nombre: "¿Trabajaste conmigo?",
            cargo: "Añade tu testimonio",
            texto: "Tu opinión ayuda a otros clientes a conocer mi trabajo. Escríbeme y con gusto incluyo tu recomendación aquí.",
            avatar: "+",
            placeholder: true
        }
    ]
};

// ── Utilidad ─────────────────────────────────────────────────
function crearId(texto) {
    return texto.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '-');
}

function scrollToSection(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ── Renderizar Menú ──────────────────────────────────────────
const menuList = document.getElementById('menu-list');
data.menu.forEach((item, index) => {
    const li = document.createElement('li');
    const targetId = crearId(item);
    li.innerHTML = `
        <a class="menu-item ${index === 0 ? 'active' : ''}" data-target="${targetId}">
            <i class="${data.iconosMenu[index]}"></i> ${item}
        </a>`;
    menuList.appendChild(li);
});

// ── Renderizar Seccion es ─────────────────────────────────────
const mainContent = document.getElementById('main-content');

function renderizarSecciones() {
    let html = '';

    // ── INICIO ────────────────────────────────────────────────
    const badgeColor = data.disponible ? '#4ade80' : '#f87171';
    const badgeText  = data.disponible ? 'Disponible para proyectos' : 'Sin cupos por el momento';

    html += `
        <section id="inicio" class="section visible">
            <div class="badge-disponible" style="--badge-color:${badgeColor}">
                <span class="badge-dot"></span>${badgeText}
            </div>
            <h2 class="hero-saludo">${data.inicio.saludo}</h2>
            <h1 class="hero-nombre">${data.inicio.nombre}</h1>
            <h3 class="hero-typed">
                <span class="typed" style="color:var(--accent);border-right:2px solid var(--accent);padding-right:5px;"></span>
            </h3>
            <p class="hero-desc">${data.inicio.descripcion}</p>
            <div class="hero-ctas">
                <button class="btn-primary" onclick="scrollToSection('portafolio')">
                    <i class="fa-solid fa-book-open"></i> Ver mi trabajo
                </button>
                <button class="btn-outline" onclick="scrollToSection('contacto')">
                    <i class="fa-regular fa-envelope"></i> Contáctame
                </button>
            </div>
            <div class="scroll-hint">
                <span>Desliza para explorar</span>
                <i class="fa-solid fa-chevron-down"></i>
            </div>
        </section>
    `;

    // ── SOBRE MÍ ──────────────────────────────────────────────
    const statsHtml = data.sobreMi.stats.map(s => `
        <div class="stat-item">
            <span class="stat-valor">${s.valor}</span>
            <span class="stat-label">${s.label}</span>
        </div>`).join('');

    html += `
        <section id="sobre-mi" class="section">
            <h2 class="section-title">Sobre mí</h2>
            <div class="sobre-mi-grid">
                <div class="sobre-mi-foto-col">
                    <div class="sobre-mi-foto-wrap">
                        <img src="${data.sobreMi.foto}" alt="Miguel Zambrano" class="sobre-mi-foto">
                    </div>
                    <div class="stats-row">${statsHtml}</div>
                </div>
                <div class="sobre-mi-texto-col">
                    <p class="sobre-mi-tagline">"${data.sobreMi.tagline}"</p>
                    <p class="sobre-mi-bio">${data.sobreMi.bio}</p>
                    <p class="sobre-mi-bio" style="margin-top:1rem;">${data.sobreMi.bio2}</p>
                    <div class="sobre-mi-datos">
                        <div class="dato-item"><i class="fa-solid fa-globe"></i>${data.sobreMi.sitioWeb}</div>
                        <div class="dato-item"><i class="fa-regular fa-envelope"></i>${data.sobreMi.correo}</div>
                        <div class="dato-item"><i class="fa-solid fa-phone"></i>${data.sobreMi.celular}</div>
                        <div class="dato-item"><i class="fa-solid fa-briefcase"></i>${data.sobreMi.profesion}</div>
                    </div>
                    <button class="btn-primary" style="margin-top:2rem;" onclick="scrollToSection('contacto')">
                        <i class="fa-regular fa-paper-plane"></i> Hablemos de tu proyecto
                    </button>
                </div>
            </div>
        </section>
    `;

    // ── EDUCACIÓN ─────────────────────────────────────────────

    let  eduExpHtml = `</div>
        <div style="padding-bottom:2.6rem;">
            <h3 class="sub-section-title" style="margin-bottom:1.5rem;">Perfil Profesional</h3>
            <p class="resumen-perfil">${data.educacionYExperiencia.resumen}</p>
        </div>`;

    eduExpHtml += `<h3 class="sub-section-title" style="padding-bottom:1.2rem;">Estudios</h3><div class="timeline">`;
    
    data.educacionYExperiencia.estudios.forEach(item => {
        eduExpHtml += `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h3>${item.tipo}</h3>
                    <span class="timeline-date">${item.fecha}</span>
                    <p class="timeline-inst">${item.institucion}</p>
                    ${item.detalle ? `<p class="timeline-detail">${item.detalle}</p>` : ''}
                </div>
            </div>`;
    });
    eduExpHtml += `</div><h3 class="sub-section-title" style="margin-top:3rem; padding-bottom:1.2rem;">Experiencia Laboral</h3><div class="timeline">`;
    data.educacionYExperiencia.experiencia.forEach(item => {
        eduExpHtml += `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h3>${item.cargo}</h3>
                    <span class="timeline-date">${item.fecha}</span>
                    <p class="timeline-inst" style="color:var(--accent);font-weight:500;">${item.empresa}</p>
                    <p class="timeline-detail" style="margin-top:0.5rem;line-height:1.6;">${item.detalle}</p>
                </div>
            </div>`;
    });
    
    html += `
        <section id="educacion" class="section">
            <h2 class="section-title">Educación y Experiencia</h2>
            ${eduExpHtml}
        </section>`;

    // ── HABILIDADES ───────────────────────────────────────────
    const barrasHtml = data.habilidades.barras.map(skill => `
        <div style="margin-bottom:1.5rem;">
            <div style="display:flex;justify-content:space-between;margin-bottom:0.4rem;">
                <span>${skill.nombre}</span>
                <span style="color:var(--accent);font-weight:600;">${skill.porcentaje}%</span>
            </div>
            <div class="skill-bar-container">
                <div class="skill-bar" data-width="${skill.porcentaje}"></div>
            </div>
        </div>`).join('');

    const techHtml = data.habilidades.tecnologias.map(t => `
        <div class="tech-badge">
            <i class="${t.icono}" style="color:${t.color};font-size:1.8rem;"></i>
            <span>${t.nombre}</span>
        </div>`).join('');

    html += `
        <section id="habilidades" class="section">
            <h2 class="section-title">Mis Habilidades</h2>
            <div class="habilidades-grid">
                <div>
                    <h3 class="sub-section-title" style="margin-bottom:1.5rem;">Nivel de dominio</h3>
                    ${barrasHtml}
                </div>
                <div>
                    <h3 class="sub-section-title" style="margin-bottom:1.5rem;">Stack tecnológico</h3>
                    <div class="tech-grid">${techHtml}</div>
                </div>
            </div>
        </section>`;

    // ── PORTAFOLIO ────────────────────────────────────────────
    const portafolioHtml = data.portafolio.map(proj => `
        <div class="portfolio-card" onclick="abrirModal(${proj.id})">
            <div class="portfolio-card-img">
                <img src="${proj.imagen_principal}" alt="${proj.titulo}">
                <div class="portfolio-overlay">
                    <span><i class="fa-solid fa-eye"></i> Ver detalles</span>
                </div>
            </div>
            <div class="portfolio-card-body">
                <span class="portfolio-cat">${proj.categoria}</span>
                <h3>${proj.titulo}</h3>
                <p class="portfolio-resultado">
                    <i class="fa-solid fa-circle-check" style="color:#4ade80;"></i> ${proj.resultado}
                </p>
                <div class="portfolio-techs">
                    ${proj.tecnologias.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
            </div>
        </div>`).join('');

    html += `
        <section id="portafolio" class="section">
            <h2 class="section-title">Mi Portafolio</h2>
            <div class="portfolio-grid">${portafolioHtml}</div>
        </section>`;

    // ── SERVICIOS ─────────────────────────────────────────────
    const serviciosHtml = data.servicios.map(serv => `
        <div class="service-card glass-effect">
            <div class="service-icon"><i class="${serv.icono}"></i></div>
            <h3>${serv.titulo}</h3>
            <ul>${serv.items.map(li => `<li>${li}</li>`).join('')}</ul>
            <div class="service-footer">
                <span class="service-desde">${serv.desde}</span>
                <button class="btn-cotizar" onclick="scrollToSection('contacto')">
                    Cotizar <i class="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </div>`).join('');

    html += `
        <section id="servicios" class="section">
            <h2 class="section-title">Mis Servicios</h2>
            <div class="services-grid">${serviciosHtml}</div>
        </section>`;

    // ── TESTIMONIOS ───────────────────────────────────────────
    /*const testimoniosHtml = data.testimonios.map(t => `
        <div class="testimonio-card glass-effect ${t.placeholder ? 'testimonio-placeholder' : ''}">
            <div class="testimonio-quote"><i class="fa-solid fa-quote-left"></i></div>
            <p class="testimonio-texto">${t.texto}</p>
            <div class="testimonio-autor">
                <div class="testimonio-avatar">${t.avatar}</div>
                <div>
                    <strong>${t.nombre}</strong>
                    <span>${t.cargo}</span>
                </div>
            </div>
            ${t.placeholder ? `<button class="btn-cotizar" style="margin-top:1.2rem;" onclick="scrollToSection('contacto')">Escribir recomendación <i class="fa-solid fa-arrow-right"></i></button>` : ''}
        </div>`).join('');

    html += `
        <section id="testimonios" class="section">
            <h2 class="section-title">Lo que dicen de mí</h2>
            <p style="color:var(--text-muted);margin-bottom:3rem;font-size:1.05rem;">
                La confianza se construye con resultados. Aquí algunos comentarios de quienes han trabajado conmigo.
            </p>
            <div class="testimonios-grid">${testimoniosHtml}</div>
        </section>`;*/

    // ── CONTACTO ──────────────────────────────────────────────
    html += `
        <section id="contacto" class="section">
            <h2 class="section-title">Contacto</h2>
            <p class="contact-intro">¿Tienes un proyecto en mente? Escríbeme y te respondo en menos de 24 horas.</p>
            <div class="contact-wrapper">
                <form id="contact-form" class="contact-form" novalidate>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="from_name">Nombre</label>
                            <input type="text" id="from_name" name="from_name" placeholder="Tu nombre completo" required>
                        </div>
                        <div class="form-group">
                            <label for="from_email">Correo electrónico</label>
                            <input type="email" id="from_email" name="from_email" placeholder="tu@correo.com" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="subject">Asunto</label>
                        <input type="text" id="subject" name="subject" placeholder="¿En qué puedo ayudarte?" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Mensaje</label>
                        <textarea id="message" name="message" rows="6" placeholder="Cuéntame los detalles de tu proyecto..." required></textarea>
                    </div>
                    <button type="submit" class="btn-primary btn-send" id="submit-btn">
                        <i class="fa-regular fa-paper-plane"></i>
                        <span>Enviar Mensaje</span>
                    </button>
                    <p id="form-status" class="form-status"></p>
                </form>
                <div class="contact-info">
                    <div class="contact-info-item">
                        <i class="fa-regular fa-envelope"></i>
                        <div><strong>Correo</strong><span>${data.sobreMi.correo}</span></div>
                    </div>
                    <div class="contact-info-item">
                        <i class="fa-solid fa-phone"></i>
                        <div><strong>Celular / WhatsApp</strong><span>${data.sobreMi.celular}</span></div>
                    </div>
                    <div class="contact-info-item">
                        <i class="fa-solid fa-globe"></i>
                        <div><strong>Sitio Web</strong><span>${data.sobreMi.sitioWeb}</span></div>
                    </div>
                    <a href="https://wa.me/573002421327?text=Hola%20Miguel%2C%20vi%20tu%20portafolio%20y%20me%20interesa%20tu%20trabajo"
                       target="_blank" class="btn-whatsapp">
                        <i class="fa-brands fa-whatsapp"></i> Escríbeme por WhatsApp
                    </a>
                </div>
            </div>
        </section>`;

    mainContent.innerHTML = html;
}

// ── Navegación por scroll ─────────────────────────────────────
function inicializarNavegacion() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            scrollToSection(item.getAttribute('data-target'));
        });
    });

    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                if (entry.target.id === 'habilidades') animarHabilidades();
                const id = entry.target.id;
                menuItems.forEach(nav => {
                    nav.classList.remove('active');
                    if (nav.getAttribute('data-target') === id) nav.classList.add('active');
                });
            }
        });
    }, { threshold: 0.2, rootMargin: '0px 0px -60px 0px' });

    sections.forEach(s => observer.observe(s));
}

// ── Habilidades ───────────────────────────────────────────────
function animarHabilidades() {
    document.querySelectorAll('.skill-bar').forEach(bar => {
        bar.style.width = bar.getAttribute('data-width') + '%';
    });
}


function inicializarEfectoEscritura() {
    if (document.querySelector('.typed')) {
        new Typed('.typed', {
            strings: data.inicio.roles,
            typeSpeed: 50, backSpeed: 10, backDelay: 1500,
            loop: true, showCursor: false
        });
    }
}


const EMAILJS_PUBLIC_KEY   = 'ReYN3tWlwZ_B1VPc7';     // Account > API Keys
const EMAILJS_SERVICE_ID   = 'service_i3h7fhq';     // Email Services > Service ID
const EMAILJS_TEMPLATE_ID  = 'template_9ei06mm';    // Email Templates > Template ID

function inicializarFormulario() {
    if (typeof emailjs !== 'undefined') emailjs.init(EMAILJS_PUBLIC_KEY);

    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const submitBtn = document.getElementById('submit-btn');
        const statusEl  = document.getElementById('form-status');

        submitBtn.disabled = true;
        submitBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> <span>Enviando...</span>';
        statusEl.textContent = '';
        statusEl.className = 'form-status';

        if (EMAILJS_PUBLIC_KEY === 'TU_PUBLIC_KEY') {
            statusEl.textContent = '⚠ Configura tus credenciales de EmailJS en app.js para activar el envío.';
            statusEl.className = 'form-status status-error';
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fa-regular fa-paper-plane"></i> <span>Enviar Mensaje</span>';
            return;
        }

        try {
            await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
            statusEl.textContent = '✓ Mensaje enviado. ¡Gracias por escribirme!';
            statusEl.className = 'form-status status-success';
            form.reset();
        } catch (err) {
            statusEl.textContent = '✗ Error al enviar. Escríbeme directamente a ' + data.sobreMi.correo;
            statusEl.className = 'form-status status-error';
        } finally {
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fa-regular fa-paper-plane"></i> <span>Enviar Mensaje</span>';
        }
    });
}

// ── Modal Portafolio ──────────────────────────────────────────
const modal    = document.getElementById('project-modal');
const closeBtn = document.querySelector('.close-btn');

function abrirModal(id) {
    const modalBody = document.getElementById('modal-body');
    const proyecto = data.portafolio.find(p => p.id === id);
    if (!proyecto) return;

    // --- Lógica Nueva para Galería Mixta ---
    let contenidoGaleria = '';

    // Procesar Imágenes Extra
    if (proyecto.imagenes_extra && proyecto.imagenes_extra.length > 0) {
        contenidoGaleria += proyecto.imagenes_extra.map(img => 
            `<img src="${img}" style="width:100%;height:100%;display:block;border-radius:8px;object-fit:cover;border-radius:8px;">`
        ).join('');
    }

    // Procesar Videos (YouTube)
    // En lugar del iframe, genera una miniatura con link
    if (proyecto.videos && proyecto.videos.length > 0) {
        contenidoGaleria = proyecto.videos.map(videoId => `
            <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank"
            style="display:block;position:relative;border-radius:8px;overflow:hidden;cursor:pointer;">
                <img src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg"
                    style="width:100%;display:block;border-radius:8px;">
                <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;
                            background:rgba(0,0,0,0.4);">
                    <div style="width:64px;height:64px;background:#ff0000;border-radius:50%;
                                display:flex;align-items:center;justify-content:center;">
                        <i class="fa-solid fa-play" style="color:#fff;font-size:1.4rem;margin-left:4px;"></i>
                    </div>
                </div>
            </a>
        `).join('');
    }

    // Unificar en el contenedor de Galería
    const galeriaHtml = contenidoGaleria !== '' 
        ? `<div style="margin-top:2rem;border-top:1px solid rgba(255,255,255,0.1);padding-top:1.5rem;">
               <h3 style="color:var(--accent);margin-bottom:1rem;">Galería y Multimedia</h3>
               <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem;">
                   ${contenidoGaleria}
               </div></div>`
        : '';
    // --- Fin Lógica Nueva ---

    const techsHtml = proyecto.tecnologias.map(t => `<span class="tech-tag">${t}</span>`).join('');

    modalBody.innerHTML = `
        <div style="margin-bottom:1.5rem;">
            <h2 style="font-size:1.8rem;color:var(--text-main);margin-bottom:0.8rem;">${proyecto.titulo}</h2>
            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">
                <span class="tag">${proyecto.categoria}</span>
                <span class="tag"><i class="fa-regular fa-calendar"></i> ${proyecto.fecha}</span>
            </div>
        </div>
        <img src="${proyecto.imagen_principal}" alt="${proyecto.titulo}" style="width:100%;height:auto;border-radius:8px;margin-bottom:1.5rem;">
        <div style="background:rgba(74,222,128,0.08);border:1px solid rgba(74,222,128,0.2);border-radius:8px;padding:1rem;margin-bottom:1.5rem;">
            <p style="color:#4ade80;font-weight:600;margin-bottom:0.3rem;"><i class="fa-solid fa-circle-check"></i> Resultado</p>
            <p style="color:var(--text-muted);">${proyecto.resultado}</p>
        </div>
        <p style="color:var(--text-muted);line-height:1.8;margin-bottom:1.5rem;">${proyecto.descripcion}</p>
        <div style="margin-bottom:1.5rem;">
            <p style="font-weight:600;margin-bottom:0.6rem;font-size:0.9rem;">Tecnologías usadas:</p>
            <div style="display:flex;gap:0.5rem;flex-wrap:wrap;">${techsHtml}</div>
        </div>
        ${galeriaHtml}
        <div style="text-align:right;margin-top:2rem;">
            <a href="${proyecto.url || '#'}" target="_blank" class="btn-primary">Ver Proyecto en vivo</a>
        </div>`;

    modal.classList.add('modal-show');
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    modal.classList.remove('modal-show');
    document.body.style.overflow = '';
}

closeBtn.addEventListener('click', cerrarModal);
window.addEventListener('click', (e) => { if (e.target === modal) cerrarModal(); });

// ── Menú hamburguesa ──────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.mobile-nav-toggle');
    const rightMenu  = document.getElementById('right-menu');

    if (menuToggle && rightMenu) {
        menuToggle.addEventListener('click', () => {
            rightMenu.classList.toggle('active');
            menuToggle.classList.contains('bi-list')
                ? menuToggle.classList.replace('bi-list', 'bi-x')
                : menuToggle.classList.replace('bi-x', 'bi-list');
        });
    }

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('menu-item') && window.innerWidth <= 992) {
            rightMenu.classList.remove('active');
            menuToggle.classList.replace('bi-x', 'bi-list');
        }
    });
});

// ── Arrancar ──────────────────────────────────────────────────
renderizarSecciones();
inicializarNavegacion();
inicializarEfectoEscritura();
inicializarFormulario();