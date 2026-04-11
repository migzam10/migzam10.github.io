// ============================================================
//  CONFIGURACIÓN EMAILJS
//  1. Crea cuenta gratis en https://www.emailjs.com
//  2. Agrega un "Email Service" (Gmail, Outlook, etc.)
//  3. Crea un "Email Template" con las variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
//  4. Reemplaza los tres valores de abajo con los tuyos.
// ============================================================
const EMAILJS_PUBLIC_KEY   = 'ReYN3tWlwZ_B1VPc7';     // Account > API Keys
const EMAILJS_SERVICE_ID   = 'service_i3h7fhq';     // Email Services > Service ID
const EMAILJS_TEMPLATE_ID  = 'template_9ei06mm';    // Email Templates > Template ID

// ============================================================
//  BASE DE DATOS DEL PORTAFOLIO
// ============================================================
const data = {
    menu: ["Inicio", "Sobre mi", "Educación", "Habilidades", "Portafolio", "Servicios", "Contacto"],
    iconosMenu: [
        "fa-solid fa-house",
        "fa-regular fa-user",
        "fa-solid fa-graduation-cap",
        "fa-solid fa-user-check",
        "fa-solid fa-book-open",
        "fa-solid fa-server",
        "fa-regular fa-envelope"
    ],
    inicio: {
        saludo: "Hola, soy",
        nombre: "Miguel Zambrano",
        roles: ["Ingeniero de Sistemas", "Desarrollador", "Diseñador", "Freelancer", "Photographer"],
        descripcion: "Transformo ideas complejas en interfaces limpias, modernas y altamente funcionales.",
    },
    sobreMi: {
        bio: "Soy un desarrollador apasionado por crear experiencias digitales excepcionales. Me encanta aprender nuevas tecnologías y aplicarlas en proyectos reales. Mi enfoque es siempre el usuario, buscando soluciones que sean intuitivas y eficientes. Además, disfruto colaborar con otros profesionales para llevar a cabo proyectos innovadores que marquen la diferencia.",
        sitioWeb: "www.migzam.uk",
        correo: "miguel@migzam.uk",
        celular: "+57 300 242 1327",
        profesion: "Ingeniero de Sistemas / Desarrollador"
    },
    educacionYExperiencia: {
        estudios: [
            { tipo: "Ingeniería de Sistemas", fecha: "Graduado", institucion: "Institución Universitaria Americana" },
            { tipo: "Tecnólogo en Desarrollo de Software", fecha: "2024", institucion: "Institución Universitaria Americana" },
            { tipo: "Curso: Desarrollo Web con PHP", fecha: "2022", institucion: "Servicio Nacional de Aprendizaje - SENA", detalle: "40 horas" },
            { tipo: "Técnico Profesional en Programación de Computadores", fecha: "2022", institucion: "Institución Universitaria Americana" },
            { tipo: "Diplomado: Programación Kotlin", fecha: "2021", institucion: "Corporación Universitaria Americana", detalle: "120 horas" },
            { tipo: "Curso: Desarrollo de Aplicaciones con Interfaz Gráfica, Manejo de Eventos, Clases y Objetos – JAVA", fecha: "2021", institucion: "Servicio Nacional de Aprendizaje - SENA", detalle: "40 horas" },
            { tipo: "Curso: Desarrollo de Aplicaciones con Manejo de Datos en la Memoria – JAVA", fecha: "2021", institucion: "Servicio Nacional de Aprendizaje - SENA", detalle: "40 horas" },
            { tipo: "Curso: Desarrollo de Aplicaciones para Dispositivos Móviles con Plataforma Android", fecha: "2018", institucion: "Servicio Nacional de Aprendizaje - SENA", detalle: "80 horas" },
            { tipo: "Curso: Fundamentos de HTML", fecha: "2018", institucion: "Servicio Nacional de Aprendizaje - SENA", detalle: "50 horas" },
            { tipo: "Curso: Aplicación de la metodología SCRUM para proyectos de desarrollo de software", fecha: "2018", institucion: "Servicio Nacional de Aprendizaje - SENA", detalle: "40 horas" },
        ],
        experiencia: [
            { cargo: "Desarrollador de Software e Integración", fecha: "2025 - Presente", empresa: "Proyectos Independientes / Freelance", detalle: "Desarrollo de software a medida para la integración y extracción de datos de equipos de laboratorio clínico (modelos URIT 3010 y Mindray BA-88A). Diseño e implementación de aplicaciones web." },
            { cargo: "Ingeniero de Sistemas", fecha: "2024 - Presente", empresa: "Proyectos Independientes / Freelance", detalle: "Diseño y desarrollo de soluciones de software a medida. Gestión integral de infraestructura tecnológica, abarcando la configuración de servidores, despliegue de redes y mantenimiento de equipos." },
            { cargo: "Coordinador de Mantenimiento y Sistemas", fecha: "2022 - 2024", empresa: "SSO - CRC Servicios de Salud Ocupacional S.A.S.", detalle: "Responsable de la coordinación, mantenimiento y reparación de equipos de cómputo, médicos y de laboratorio; administración del servidor y redes internas; desarrollo, diseño y mantenimiento del sitio web institucional." },
            { cargo: "Técnico Correctivo", fecha: "2022", empresa: "E&C Ingenieros S.A.S.", detalle: "Mantenimiento correctivo y preventivo de equipos de cómputo, redes y sistemas de telecomunicaciones; soporte técnico de primer y segundo nivel a usuarios." },
            { cargo: "Auxiliar de Mantenimiento y Sistemas", fecha: "2019 - 2022", empresa: "Servicios de Salud Ocupacional S.A.S.", detalle: "Mantenimiento de equipos de cómputo, administración de redes y servidor Windows Server 2012, gestión de dominios y hosting, diseño y actualización del sitio web institucional." },
        ],
        resumen: "Ingeniero de Sistemas con sólida experiencia en el ciclo completo de desarrollo de software y administración de infraestructura tecnológica. Especializado en el diseño de interfaces web modernas y arquitecturas eficientes (Frontend y Backend). Combino mis habilidades en programación con un profundo conocimiento técnico en bases de datos, despliegue de servidores y soporte TI para entregar soluciones completas, seguras y altamente escalables."
    },
    habilidades: [
        { nombre: "JavaScript / Frontend", porcentaje: 85 },
        { nombre: "PHP & MySQL", porcentaje: 85 },
        { nombre: "Python - Java", porcentaje: 70 },
        { nombre: "SO: Windows & GNU/Linux Debian", porcentaje: 90 },
        { nombre: "GIT", porcentaje: 95 },
        { nombre: "Excel", porcentaje: 95 },
    ],
    portafolio: [
        {
            id: 1,
            titulo: "Sitio Web Institucional para SSO - Servicios de Salud Ocupacional S.A.S.",
            imagen_principal: "img/portafolio/sso-1.jpg",
            imagenes_extra: ["img/portafolio/sso-2.jpg", "img/portafolio/sso-3.jpg"],
            descripcion: "Diseño, desarrollo e implementación de un sitio web institucional para la IPS SSO, utilizando HTML, CSS, JavaScript y PHP. El sitio cuenta con una interfaz moderna y funcional.",
            categoria: "Desarrollo web frontend",
            fecha: "2019 - 2024",
            url: "https://ssobq.com"
        },
        {
            id: 2,
            titulo: "Software de Integración Clínica",
            imagen_principal: "img/portafolio/portafolio-sso-1.jpg",
            imagenes_extra: [],
            descripcion: "Sistema robusto para la extracción y procesamiento de datos de equipos de laboratorio clínico, integrando modelos como el URIT 3010 y el Mindray BA-88A.",
            categoria: "Desarrollo Fullstack / Integración",
            fecha: "2025 - Presente",
            url: "#"
        },
        {
            id: 3,
            titulo: "POS Web Pizzería Móvil",
            imagen_principal: "https://via.placeholder.com/600x400?text=POS+Pizzeria",
            imagenes_extra: [],
            descripcion: "Aplicación web de Punto de Venta (POS) optimizada para dispositivos móviles, diseñada para la gestión ágil de pedidos en una pizzería.",
            categoria: "Web App / UI Móvil",
            fecha: "Febrero 2026",
            url: "#"
        },
        {
            id: 4,
            titulo: "Plataforma Ghost Kitchen",
            imagen_principal: "https://via.placeholder.com/600x400?text=Ghost+Kitchen",
            imagenes_extra: [],
            descripcion: "Plataforma integral y menú digital para una operación de fast-food tipo Ghost Kitchen operando en Soledad y Barranquilla.",
            categoria: "E-commerce / UI Design",
            fecha: "Enero 2026",
            url: "#"
        }
    ],
    servicios: [
        {
            titulo: "Mantenimiento y Soporte",
            icono: "fa-solid fa-screwdriver-wrench",
            items: [
                "Soporte técnico a equipos de cómputo.",
                "Configuración, instalación y mantenimientos preventivos y correctivos.",
                "Servicios a domicilio y/o remotos."
            ]
        },
        {
            titulo: "Diseño Web",
            icono: "fa-solid fa-palette",
            items: [
                "Diseño, creación e implementación de sitios web a la medida.",
                "Análisis e implementación SEO.",
                "Configuración e implementación de dominios y alojamientos."
            ]
        },
        {
            titulo: "Desarrollo de Software",
            icono: "fa-solid fa-code",
            items: [
                "Desarrollo de software a la medida.",
                "Desarrollo de plataformas y aplicaciones web.",
                "Desarrollo de aplicaciones de escritorio.",
                "Soporte y mantenimiento de software.",
                "Análisis de requerimiento."
            ]
        },
        {
            titulo: "Infraestructura de Redes",
            icono: "fa-solid fa-network-wired",
            items: [
                "Cableado estructurado y cuarto de comunicaciones.",
                "Instalación y configuración de equipos de redes.",
                "Configuración de Routers, Switches, VLANs, Subredes.",
                "Mantenimientos preventivos y correctivos.",
                "Recursos compartidos en la red."
            ]
        },
        {
            titulo: "Servidores",
            icono: "fa-solid fa-server",
            items: [
                "Instalación y configuración de servidores físicos/virtuales.",
                "Web Apache, FTP, MySQL, Windows Server, GNU/Linux Debian.",
                "Almacenamiento de datos, políticas de acceso y copias de seguridad."
            ]
        },
        {
            titulo: "Servicios y Consultoría",
            icono: "fa-solid fa-list-check",
            items: [
                "Asesoramiento para la utilización de programas.",
                "Consultoría e implementación de dominios y alojamientos.",
                "Elaboración de Plan Estratégico de TI - PETI.",
                "Implementación de correos corporativos."
            ]
        }
    ]
};

// ============================================================
//  UTILIDADES
// ============================================================

/** Crea un ID limpio sin acentos a partir de un texto. */
function crearId(texto) {
    return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/\s+/g, '-');
}

// ============================================================
//  RENDERIZAR MENÚ
// ============================================================
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

// ============================================================
//  RENDERIZAR SECCIONES
// ============================================================
const mainContent = document.getElementById('main-content');

function renderizarSecciones() {
    let html = '';

    // INICIO
    html += `
        <section id="inicio" class="section">
            <h2 style="color: var(--accent); font-size: 1.5rem; margin-bottom: 0.5rem; font-weight: 500;">${data.inicio.saludo}</h2>
            <h1 style="font-size: 4.5rem; margin: 0; font-weight: 700; letter-spacing: -1px;">${data.inicio.nombre}</h1>
            <h3 style="font-size: 2rem; margin-top: 1rem; color: var(--text-muted); font-weight: 400;">
                <span class="typed" style="color: var(--accent); border-right: 2px solid var(--accent); padding-right: 5px;"></span>
            </h3>
            <p style="margin-top: 2rem; max-width: 600px; color: var(--text-muted); line-height: 1.8; font-size: 1.1rem;">${data.inicio.descripcion}</p>
        </section>
    `;

    // SOBRE MÍ
    html += `
        <section id="sobre-mi" class="section">
            <h2 class="section-title">Sobre mí</h2>
            <div style="display: flex; gap: 4rem;">
                <p style="flex: 1; line-height: 1.8; color: var(--text-muted);">${data.sobreMi.bio}</p>
                <div style="flex: 1;">
                    <p><strong>Sitio Web:</strong> ${data.sobreMi.sitioWeb}</p><br>
                    <p><strong>Correo:</strong> ${data.sobreMi.correo}</p><br>
                    <p><strong>Celular:</strong> ${data.sobreMi.celular}</p><br>
                    <p><strong>Profesión:</strong> ${data.sobreMi.profesion}</p>
                </div>
            </div>
        </section>
    `;

    // EDUCACIÓN Y EXPERIENCIA
    let eduExpHtml = '';

    eduExpHtml += `<h3 class="sub-section-title">Estudios</h3><div class="timeline">`;
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
            </div>
        `;
    });
    eduExpHtml += `</div>`;

    eduExpHtml += `<h3 class="sub-section-title" style="margin-top: 3rem;">Experiencia Laboral</h3><div class="timeline">`;
    data.educacionYExperiencia.experiencia.forEach(item => {
        eduExpHtml += `
            <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div class="timeline-content">
                    <h3>${item.cargo}</h3>
                    <span class="timeline-date">${item.fecha}</span>
                    <p class="timeline-inst" style="color: var(--accent); font-weight: 500;">${item.empresa}</p>
                    <p class="timeline-detail" style="margin-top: 0.5rem; line-height: 1.6;">${item.detalle}</p>
                </div>
            </div>
        `;
    });
    eduExpHtml += `</div>`;

    eduExpHtml += `
        <div style="margin-top: 4rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1);">
            <h3 class="sub-section-title" style="margin-bottom: 1.5rem;">Perfil Profesional</h3>
            <p class="resumen-perfil">${data.educacionYExperiencia.resumen}</p>
        </div>
    `;

    html += `
        <section id="educacion" class="section">
            <h2 class="section-title">Educación y Experiencia</h2>
            ${eduExpHtml}
        </section>
    `;

    // HABILIDADES
    let skillsHtml = data.habilidades.map(skill => `
        <div style="margin-bottom: 1.5rem;">
            <div style="display: flex; justify-content: space-between;">
                <span>${skill.nombre}</span>
                <span>${skill.porcentaje}%</span>
            </div>
            <div class="skill-bar-container">
                <div class="skill-bar" data-width="${skill.porcentaje}"></div>
            </div>
        </div>
    `).join('');

    html += `
        <section id="habilidades" class="section">
            <h2 class="section-title">Mis Habilidades</h2>
            <div style="max-width: 600px;">${skillsHtml}</div>
        </section>
    `;

    // PORTAFOLIO
    let portafolioHtml = data.portafolio.map(proj => `
        <div class="portfolio-card" onclick="abrirModal(${proj.id})">
            <img src="${proj.imagen_principal}" alt="${proj.titulo}">
            <div style="padding: 1.5rem;">
                <h3 style="margin-bottom: 0.5rem;">${proj.titulo}</h3>
                <p style="color: var(--accent); font-size: 0.9rem;">${proj.categoria}</p>
            </div>
        </div>
    `).join('');

    html += `
        <section id="portafolio" class="section">
            <h2 class="section-title">Mi Portafolio</h2>
            <div class="portfolio-grid">${portafolioHtml}</div>
        </section>
    `;

    // SERVICIOS
    let serviciosHtml = data.servicios.map(serv => `
        <div class="service-card glass-effect">
            <div class="service-icon"><i class="${serv.icono}"></i></div>
            <h3>${serv.titulo}</h3>
            <ul>${serv.items.map(li => `<li>${li}</li>`).join('')}</ul>
        </div>
    `).join('');

    html += `
        <section id="servicios" class="section">
            <h2 class="section-title">Mis Servicios</h2>
            <div class="services-grid">${serviciosHtml}</div>
        </section>
    `;

    // CONTACTO
    html += `
        <section id="contacto" class="section">
            <h2 class="section-title">Contacto</h2>
            <div class="contact-wrapper">

                <!-- Info de contacto -->
                <div class="contact-info">
                    <div class="contact-info-item">
                        <i class="fa-regular fa-envelope"></i>
                        <div>
                            <h4>Correo</h4>
                            <a href="mailto:${data.sobreMi.correo}">${data.sobreMi.correo}</a>
                        </div>
                    </div>
                    <div class="contact-info-item">
                        <i class="fa-solid fa-phone"></i>
                        <div>
                            <h4>Celular / WhatsApp</h4>
                            <a href="https://wa.me/573002421327" target="_blank">${data.sobreMi.celular}</a>
                        </div>
                    </div>
                    <div class="contact-info-item">
                        <i class="fa-solid fa-globe"></i>
                        <div>
                            <h4>Sitio Web</h4>
                            <a href="https://${data.sobreMi.sitioWeb}" target="_blank">${data.sobreMi.sitioWeb}</a>
                        </div>
                    </div>
                    <div class="contact-info-item">
                        <i class="fa-solid fa-location-dot"></i>
                        <div>
                            <h4>Ubicación</h4>
                            <p>Barranquilla, Colombia</p>
                        </div>
                    </div>
                </div>

                <!-- Formulario -->
                <form id="contact-form" class="contact-form" novalidate>
                    <div class="form-row">
                        <div class="form-group">
                            <label for="from_name">Nombre</label>
                            <input type="text" id="from_name" name="from_name" placeholder="Tu nombre" required>
                        </div>
                        <div class="form-group">
                            <label for="from_email">Correo electrónico</label>
                            <input type="email" id="from_email" name="from_email" placeholder="tu@correo.com" required>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="subject">Asunto</label>
                        <input type="text" id="subject" name="subject" placeholder="¿En qué te puedo ayudar?" required>
                    </div>
                    <div class="form-group">
                        <label for="message">Mensaje</label>
                        <textarea id="message" name="message" rows="6" placeholder="Escribe tu mensaje aquí..." required></textarea>
                    </div>

                    <div id="form-status" class="form-status"></div>

                    <button type="submit" class="btn-send" id="btn-send">
                        <i class="fa-solid fa-paper-plane"></i> Enviar mensaje
                    </button>
                </form>
            </div>
        </section>
    `;

    mainContent.innerHTML = html;
}

// ============================================================
//  EFECTO TYPED.JS
// ============================================================
function inicializarEfectoEscritura() {
    const elementoTyped = document.querySelector('.typed');
    if (elementoTyped) {
        new Typed('.typed', {
            strings: data.inicio.roles,
            typeSpeed: 50,
            backSpeed: 10,
            backDelay: 1500,
            loop: true,
            showCursor: false
        });
    }
}

// ============================================================
//  NAVEGACIÓN — SCROLL CONTINUO + SCROLL SPY
// ============================================================

/**
 * Navegación al hacer clic en un ítem del menú.
 * Usa scrollIntoView para desplazamiento suave nativo.
 */
function inicializarNavegacion() {
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.getAttribute('data-target');
            const seccion = document.getElementById(targetId);
            if (seccion) {
                seccion.scrollIntoView({ behavior: 'smooth' });
            }

            // Cerrar menú en móvil al navegar
            if (window.innerWidth <= 992) {
                const rightMenu = document.getElementById('right-menu');
                const menuToggle = document.querySelector('.mobile-nav-toggle');
                if (rightMenu) rightMenu.classList.remove('active');
                if (menuToggle) {
                    menuToggle.classList.add('bi-list');
                    menuToggle.classList.remove('bi-x');
                }
            }
        });
    });
}

/**
 * Scroll Spy con IntersectionObserver.
 * Actualiza el ítem activo del menú según la sección visible.
 */
function inicializarScrollSpy() {
    const sections = document.querySelectorAll('.section');
    const menuItems = document.querySelectorAll('.menu-item');

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Quitar activo de todos los ítems
                    menuItems.forEach(nav => nav.classList.remove('active'));

                    // Activar el ítem correspondiente a esta sección
                    const id = entry.target.getAttribute('id');
                    const activeItem = document.querySelector(`.menu-item[data-target="${id}"]`);
                    if (activeItem) activeItem.classList.add('active');
                }
            });
        },
        {
            // La sección se considera "activa" cuando ocupa al menos el 40% de la pantalla
            threshold: 0.4
        }
    );

    sections.forEach(section => observer.observe(section));
}

/**
 * Anima las barras de habilidades cuando la sección entra en el viewport.
 * Evita que las barras se animen antes de que el usuario las vea.
 */
function inicializarAnimacionSkills() {
    const skillSection = document.getElementById('habilidades');
    if (!skillSection) return;

    const skillObserver = new IntersectionObserver(
        (entries) => {
            if (entries[0].isIntersecting) {
                document.querySelectorAll('.skill-bar').forEach(bar => {
                    bar.style.width = bar.getAttribute('data-width') + '%';
                });
                skillObserver.disconnect(); // Solo anima una vez
            }
        },
        { threshold: 0.3 }
    );

    skillObserver.observe(skillSection);
}

// ============================================================
//  FORMULARIO DE CONTACTO — EMAILJS
// ============================================================
function inicializarFormularioContacto() {
    // Inicializar EmailJS con tu clave pública
    emailjs.init(EMAILJS_PUBLIC_KEY);

    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const btn    = document.getElementById('btn-send');
        const status = document.getElementById('form-status');

        // Validación básica de campos
        const nombre  = form.from_name.value.trim();
        const email   = form.from_email.value.trim();
        const asunto  = form.subject.value.trim();
        const mensaje = form.message.value.trim();

        if (!nombre || !email || !asunto || !mensaje) {
            mostrarEstado(status, 'Por favor, completa todos los campos antes de enviar.', 'error');
            return;
        }

        // Estado de carga
        btn.disabled = true;
        btn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
        status.className = 'form-status'; // Resetear clases
        status.style.display = 'none';

        try {
            await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form);
            mostrarEstado(status, '¡Mensaje enviado con éxito! Te responderé pronto.', 'success');
            form.reset();
        } catch (error) {
            console.error('Error al enviar:', error);
            mostrarEstado(status, 'Ocurrió un error al enviar. Por favor intenta de nuevo o escríbeme directamente.', 'error');
        } finally {
            btn.disabled = false;
            btn.innerHTML = '<i class="fa-solid fa-paper-plane"></i> Enviar mensaje';
        }
    });
}

function mostrarEstado(elemento, mensaje, tipo) {
    elemento.textContent = mensaje;
    elemento.className = `form-status ${tipo}`;
}

// ============================================================
//  MODAL DE PORTAFOLIO
// ============================================================
function abrirModal(id) {
    const modal     = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');

    const proyecto = data.portafolio.find(p => p.id === id);
    if (!proyecto) return;

    let galeriaHtml = '';
    if (proyecto.imagenes_extra && proyecto.imagenes_extra.length > 0) {
        galeriaHtml += `
            <div style="margin-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 1.5rem;">
                <h3 style="color: var(--accent); margin-bottom: 1rem; font-size: 1.2rem;">Galería del Proyecto</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
        `;
        proyecto.imagenes_extra.forEach(rutaImg => {
            galeriaHtml += `<img src="${rutaImg}" alt="Imagen extra" style="width: 100%; height: 150px; object-fit: cover; border-radius: 8px;">`;
        });
        galeriaHtml += `</div></div>`;
    }

    modalBody.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
            <h2 style="font-size: 2rem; color: var(--text-main); margin-bottom: 0.5rem;">${proyecto.titulo}</h2>
            <span class="tag">${proyecto.categoria || 'Portafolio'}</span>
            <span class="tag" style="margin-left: 0.5rem;"><i class="fa-regular fa-calendar"></i> ${proyecto.fecha}</span>
        </div>
        <img src="${proyecto.imagen_principal}" alt="${proyecto.titulo}" style="width: 100%; height: auto; border-radius: 8px; margin-bottom: 1.5rem;">
        <div style="color: var(--text-muted); line-height: 1.8; font-size: 1.05rem;">
            <p>${proyecto.descripcion || ''}</p>
        </div>
        ${galeriaHtml}
        <div style="text-align: right; margin-top: 2rem;">
            <a href="${proyecto.url || '#'}" target="_blank" class="btn-primary">Ver Proyecto</a>
        </div>
    `;

    modal.classList.add('modal-show');
    document.body.style.overflow = 'hidden';
}

function cerrarModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.remove('modal-show');
    document.body.style.overflow = 'auto';
}

// Cerrar con X
document.querySelector('.close-btn').addEventListener('click', cerrarModal);

// Cerrar al hacer clic fuera del contenido
window.addEventListener('click', (e) => {
    const modal = document.getElementById('project-modal');
    if (e.target === modal) cerrarModal();
});

// ============================================================
//  MENÚ HAMBURGUESA (MÓVIL)
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.mobile-nav-toggle');
    const rightMenu  = document.getElementById('right-menu');

    if (menuToggle && rightMenu) {
        menuToggle.addEventListener('click', () => {
            rightMenu.classList.toggle('active');
            if (menuToggle.classList.contains('bi-list')) {
                menuToggle.classList.replace('bi-list', 'bi-x');
            } else {
                menuToggle.classList.replace('bi-x', 'bi-list');
            }
        });
    }
});

// ============================================================
//  INICIALIZAR TODO
// ============================================================
renderizarSecciones();
inicializarNavegacion();
inicializarEfectoEscritura();
inicializarScrollSpy();
inicializarAnimacionSkills();
inicializarFormularioContacto();