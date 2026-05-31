export const profileData = {
  hero: {
    headline: "Software Engineer | Java Backend & Fullstack Developer",
    subheadline: "Especializado en el diseño de arquitecturas robustas y empresariales. Experto en construir APIs REST seguras, microservicios resilientes e integraciones corporativas utilizando Java (Spring Boot) y PHP (Laravel) sobre infraestructura en Docker y Kubernetes.",
    availability: "Disponible para nuevos retos",
    metrics: [
      { label: "Java & Laravel", description: "Ecosistemas Core" },
      { label: "APIs REST", description: "Microservicios & APIs" },
      { label: "Integraciones", description: "Software Empresarial" },
      { label: "Docker & K8s", description: "Infraestructura Cloud" }
    ]
  },
  about: {
    summary: "Software Engineer especializado en ecosistemas Java Backend y Fullstack. Mi experiencia abarca desde el diseño de microservicios y arquitectura de APIs RESTful, hasta la modernización de sistemas de gestión integrales. Aporto un profundo conocimiento en optimización de bases de datos relacionales (MySQL, PostgreSQL) y garantía de calidad mediante pruebas automatizadas (JUnit, Testcontainers). Acostumbrado a operar en todo el ciclo de vida del desarrollo, incluyendo soporte técnico L3 para sistemas críticos empresariales.",
    focusAreas: [
      "Arquitectura Backend & APIs",
      "Microservicios e Integraciones",
      "Docker, K8s & DevOps",
      "Soporte L3 & Calidad de Software"
    ]
  },
  experience: [
    {
      company: "Supra Solutions",
      role: "Desarrollador Fullstack Laravel & Java",
      period: "Octubre 2025 – Mayo 2026",
      summary: "Desarrollo de aplicaciones web empresariales mediante integración de sistemas híbridos, construcción de APIs REST y optimización de procesos transaccionales backend."
    },
    {
      company: "Proyecto Freelance Más Salud",
      role: "Desarrollador Fullstack Laravel",
      period: "Enero 2025 – Agosto 2025",
      summary: "Desarrollo end-to-end de un sistema integral de gestión de usuarios y expedientes clínicos, implementando controles de acceso estrictos y frontend reactivo."
    },
    {
      company: "Uniti Consulting",
      role: "Programador Java Backend",
      period: "Enero 2024 – Diciembre 2024",
      summary: "Evolución de microservicios críticos en entornos de alta disponibilidad, soporte técnico L3 a producción y aseguramiento de calidad con pruebas automatizadas."
    },
    {
      company: "INAOE",
      role: "Programador de Software Jr",
      period: "Febrero 2022 – Diciembre 2023",
      summary: "Mantenimiento y desarrollo de soluciones de software para plataformas internas de la institución, colaborando en requerimientos y optimización de bases de código legacy."
    }
  ],
  caseStudies: [
    {
      title: "Arquitectura Híbrida Empresarial",
      context: "Supra Solutions",
      problem: "Desconexión entre sistemas corporativos heterogéneos y latencia elevada en procesos de negocio clave.",
      solution: "Diseño de APIs RESTful e integración de sistemas combinando la robustez del ecosistema Spring Boot con la agilidad de Laravel.",
      impact: "Estandarización de la comunicación inter-sistemas y optimización significativa del rendimiento transaccional general.",
      techStack: ["Java", "Spring Boot", "Laravel", "MySQL", "Docker", "APIs REST"]
    },
    {
      title: "Sistema Integral de Gestión Clínica",
      context: "Proyecto Freelance (Más Salud)",
      problem: "Necesidad de digitalizar el ciclo de vida de pacientes con estrictos controles de acceso (RBAC) y rendimiento fluido en el manejo de grandes volúmenes de datos médicos.",
      solution: "Desarrollo end-to-end de una plataforma web segura utilizando Laravel Sanctum para autenticación y un frontend optimizado.",
      impact: "Digitalización total del flujo clínico, garantizando la privacidad de los datos y mejorando la eficiencia administrativa del centro.",
      techStack: ["PHP", "Laravel", "MySQL", "Sanctum", "Bootstrap", "Blade", "DataTables"]
    },
    {
      title: "Ecosistema Transaccional de Alta Disponibilidad",
      context: "Uniti Consulting",
      problem: "Sistemas con alto volumen de operaciones requerían tolerancia a fallos, despliegues sin interrupción y mitigación inmediata de incidentes en producción.",
      solution: "Implementación de microservicios orquestados en contenedores, testeados exhaustivamente y respaldados por scripts de monitoreo proactivo.",
      impact: "Reducción drástica de fallos post-despliegue mediante pruebas automatizadas y resolución acelerada de incidentes (L3) cumpliendo SLAs estrictos.",
      techStack: ["Java 8/17", "Spring Boot", "Kubernetes", "Docker", "Testcontainers", "JUnit", "Python"]
    }
  ],
  portfolioProjects: [
    {
      title: "Hotel Admin Suite — PMS Hotelero",
      category: "SaaS / Hospitality Tech",
      description: "Sistema web de administración hotelera desarrollado para optimizar la operación diaria de recepción, control de habitaciones, reservas, check-in, check-out y reportes administrativos.",
      problem: "Hoteles pequeños y medianos suelen operar con herramientas fragmentadas para reservas, ocupación, habitaciones y reportes, lo que genera duplicidad de trabajo y poca visibilidad operativa.",
      solution: "Desarrollo de un PMS hotelero con panel del día, rack visual de habitaciones, reservas, check-in, check-out, reportes e inventario desde una plataforma centralizada.",
      architecture: "Frontend en React + Vite con estado global usando Zustand, renderizado eficiente con TanStack Virtual y base preparada para drag & drop con DnD Kit. Backend en Laravel con API REST, Eloquent ORM, migraciones, seeders y MySQL.",
      impact: "Centraliza la operación diaria de recepción y ofrece una vista clara del estado de habitaciones, reservas y ocupación, reduciendo fricción operativa y mejorando la toma de decisiones del personal.",
      techStack: ["React", "Vite", "JavaScript", "CSS Modules", "Zustand", "TanStack Virtual", "DnD Kit", "Laravel", "PHP", "MySQL", "API REST", "Eloquent ORM"],
      image: "/projects/hotel/Captura desde 2026-05-31 10-16-45.png",
      gallery: [
        "/projects/hotel/Captura desde 2026-05-31 10-16-53.png",
        "/projects/hotel/Captura desde 2026-05-31 10-16-57.png",
        "/projects/hotel/Captura desde 2026-05-31 10-17-00.png",
        "/projects/hotel/Captura desde 2026-05-31 10-17-04.png",
        "/projects/hotel/Captura desde 2026-05-31 10-17-08.png",
        "/projects/hotel/Captura desde 2026-05-31 10-17-11.png",
        "/projects/hotel/Captura desde 2026-05-31 10-17-18.png",
        "/projects/hotel/Captura desde 2026-05-31 10-17-26.png",
        "/projects/hotel/Captura desde 2026-05-31 10-17-30.png",
        "/projects/hotel/Captura desde 2026-05-31 10-17-34.png"
      ],
      status: "Demo funcional / En desarrollo",
      featured: true,
      githubUrl: "",
      liveUrl: ""
    },
    {
      title: "Sistema de Punto de Venta y Gestión Operativa",
      category: "Retail / POS / ERP Operativo",
      description: "Aplicación web integral para administrar operaciones comerciales, rutas, bodegas, usuarios, permisos, proveedores, ventas, gastos e ingresos desde una plataforma centralizada.",
      problem: "El sistema requería controlar inventario, rutas, bodegas, usuarios, permisos y movimientos operativos evitando accesos incorrectos o inconsistencias entre autenticación y perfiles internos.",
      solution: "Desarrollo de un sistema administrativo con roles, permisos personalizados, gestión operativa y backend serverless en tiempo real utilizando Convex y autenticación integrada.",
      architecture: "Frontend en Next.js con React y TypeScript, estilos con Tailwind CSS, backend en Convex con validaciones reales de permisos, Convex Auth para autenticación, despliegue en Vercel y control de versiones con Git.",
      impact: "Fortalece la seguridad del sistema, mejora la estabilidad de roles y permisos, corrige perfiles huérfanos y permite operar módulos administrativos desde una plataforma centralizada.",
      techStack: ["Next.js", "React", "TypeScript", "Convex", "Convex Auth", "Tailwind CSS", "Vercel", "Git"],
      image: "/projects/rutas/Captura desde 2026-05-31 10-12-55.png",
      gallery: [
        "/projects/rutas/Captura desde 2026-05-31 10-13-08.png",
        "/projects/rutas/Captura desde 2026-05-31 10-13-14.png",
        "/projects/rutas/Captura desde 2026-05-31 10-13-20.png",
        "/projects/rutas/Captura desde 2026-05-31 10-13-27.png",
        "/projects/rutas/Captura desde 2026-05-31 10-13-31.png",
        "/projects/rutas/Captura desde 2026-05-31 10-13-37.png",
        "/projects/rutas/Captura desde 2026-05-31 10-13-46.png",
        "/projects/rutas/Captura desde 2026-05-31 10-13-50.png",
        "/projects/rutas/Captura desde 2026-05-31 10-13-57.png",
        "/projects/rutas/Captura desde 2026-05-31 10-14-04.png"
      ],
      status: "MVP / Pruebas en producción",
      featured: true,
      githubUrl: "",
      liveUrl: ""
    },
    {
      title: "C&E Comercializadora — Plataforma Corporativa B2B Multipaís",
      category: "WordPress / B2B / Plataforma Corporativa",
      description: "Diseño, desarrollo, optimización y puesta en producción de una plataforma corporativa para una comercializadora internacional enfocada en empaques, insumos y soluciones para cadenas de restaurantes, cafeterías, hoteles y operaciones de gran escala.",
      problem: "La empresa necesitaba una plataforma corporativa escalable para operar en múltiples países, manejar contenido bilingüe y organizar un catálogo de productos preparado para crecimiento regional.",
      solution: "Desarrollo WordPress custom con arquitectura modular, catálogo escalable por país, categoría, SKU e idioma, internacionalización ES/EN, QA funcional, optimización responsive y migración a producción.",
      architecture: "WordPress con tema personalizado, PHP, JavaScript, HTML5, CSS3, WPForms, lógica de contenido regional, rutas localizadas, configuración DNS/cPanel y validaciones de producción.",
      impact: "Plataforma preparada para expansión regional, catálogo organizado para crecimiento por país y producto, experiencia bilingüe consistente e infraestructura migrada correctamente a dominio productivo.",
      techStack: ["WordPress", "PHP", "JavaScript", "HTML5", "CSS3", "WPForms", "cPanel", "DNS", "Cloudflare", "Git", "SEO Técnico", "Responsive Design"],
      image: "/projects/wordpress/Captura desde 2026-05-31 10-08-36.png",
      gallery: [
        "/projects/wordpress/Captura desde 2026-05-31 10-08-50.png",
        "/projects/wordpress/Captura desde 2026-05-31 10-08-53.png",
        "/projects/wordpress/Captura desde 2026-05-31 10-08-57.png",
        "/projects/wordpress/Captura desde 2026-05-31 10-08-59.png",
        "/projects/wordpress/Captura desde 2026-05-31 10-09-04.png",
        "/projects/wordpress/Captura desde 2026-05-31 10-09-08.png",
        "/projects/wordpress/Captura desde 2026-05-31 10-09-12.png"
      ],
      status: "Producción / Proyecto corporativo",
      featured: true,
      githubUrl: "",
      liveUrl: ""
    },
    {
      title: "TuCondominio",
      category: "Plataforma SaaS",
      description: "Plataforma para administración condominal con backend orientado a negocio, control de accesos y módulos operativos integrados.",
      problem: "",
      solution: "",
      architecture: "",
      impact: "Centralizó procesos operativos y mejoró la trazabilidad de información para residentes, administración y seguridad.",
      techStack: ["PHP", "Laravel", "MySQL", "APIs REST", "Blade", "Bootstrap"],
      image: "/images/projects/tucondominio/screenshot-1.png",
      gallery: [
        "/images/projects/tucondominio/screenshot-2.png",
        "/images/projects/tucondominio/screenshot-3.png",
        "/images/projects/tucondominio/screenshot-4.png",
        "/images/projects/tucondominio/screenshot-5.png",
        "/images/projects/tucondominio/screenshot-6.png",
        "/images/projects/tucondominio/screenshot-7.png",
        "/images/projects/tucondominio/screenshot-8.png",
        "/images/projects/tucondominio/screenshot-9.png",
        "/images/projects/tucondominio/screenshot-10.png",
        "/images/projects/tucondominio/screenshot-11.png",
        "/images/projects/tucondominio/screenshot-12.png",
        "/images/projects/tucondominio/screenshot-13.png",
        "/images/projects/tucondominio/screenshot-14.png"
      ],
      status: "En operación",
      featured: false,
      githubUrl: "",
      liveUrl: ""
    },
    {
      title: "Taller MVP",
      category: "Sistema de Negocio",
      description: "Aplicación para gestión de órdenes de servicio y seguimiento de procesos internos de taller.",
      problem: "",
      solution: "",
      architecture: "",
      impact: "Mejoró el control de órdenes y permitió seguimiento claro de cada servicio desde recepción hasta entrega.",
      techStack: ["Java", "Spring Boot", "PostgreSQL", "SQL", "APIs REST"],
      image: "/images/projects/taller/Captura desde 2026-04-11 23-05-48.png",
      gallery: [],
      status: "MVP",
      featured: false,
      githubUrl: "",
      liveUrl: ""
    },
    {
      title: "APIs REST Core",
      category: "Backend e Integración",
      description: "Conjunto de servicios REST para procesos core de negocio, diseñado para integrar aplicaciones internas y sistemas externos con contratos claros y mantenimiento continuo.",
      problem: "",
      solution: "",
      architecture: "",
      impact: "Facilitó la integración entre módulos y redujo fricción operativa al contar con servicios centralizados y mantenibles.",
      techStack: ["PHP", "Laravel", "APIs REST", "MySQL", "SQL Server", "Docker"],
      image: "/images/projects/api-diagram.png",
      gallery: [],
      status: "Producción",
      featured: false,
      githubUrl: "",
      liveUrl: ""
    },
    {
      title: "Integraciones Empresariales SOAP/XML",
      category: "Integración Empresarial",
      description: "Desarrollo de integraciones backend con servicios SOAP y estructuras XML para intercambio de información entre plataformas empresariales y sistemas heredados.",
      problem: "",
      solution: "",
      architecture: "",
      impact: "Permitió ejecutar integraciones de forma más estable y repetible en procesos críticos de intercambio de información.",
      techStack: ["PHP", "Laravel", "SOAP", "XML", "JSON", "SQL Server"],
      image: "/images/projects/soap-diagram.png",
      gallery: [],
      status: "Producción",
      featured: false,
      githubUrl: "",
      liveUrl: ""
    }
  ],
  certifications: [
    {
      title: "Cloud Computing",
      issuer: "",
      category: "Cloud & Infrastructure",
      year: "",
      description: "Fundamentos de computación en la nube, servicios cloud, escalabilidad e infraestructura moderna para aplicaciones web.",
      skills: ["Cloud Computing", "Infrastructure", "Scalability", "Digital Services"],
      fileUrl: "/certifications/Cloud Computing.pdf",
      featured: true
    },
    {
      title: "Backend Development: Node.js, Express, MongoDB & REST APIs",
      issuer: "",
      category: "Backend Development",
      year: "",
      description: "Desarrollo de APIs REST y servicios backend con Node.js, Express y MongoDB, enfocado en arquitectura de servicios web.",
      skills: ["Node.js", "Express", "MongoDB", "REST APIs", "Backend"],
      fileUrl: "/certifications/Backend Development_ Node.js, Express, MongoDB & REST APIs.pdf",
      featured: true
    },
    {
      title: "Python Essentials 1",
      issuer: "",
      category: "Programming",
      year: "",
      description: "Fundamentos de programación con Python, estructuras de control, funciones y lógica aplicada al desarrollo de software.",
      skills: ["Python", "Programming Fundamentals", "Logic", "Automation"],
      fileUrl: "/certifications/Python_Essentials_1_certificate.pdf",
      featured: true
    },
    {
      title: "DOMINA EL ANÁLISIS CON SQL",
      issuer: "",
      category: "Databases & Analytics",
      year: "",
      description: "Uso de SQL para extracción, análisis y transformación de información orientada a toma de decisiones y consultas relacionales.",
      skills: ["SQL", "Data Analysis", "Queries", "Databases"],
      fileUrl: "/certifications/DOMINA EL ANÁLISIS CON SQL_ Extracción,  transformación y optimización..pdf",
      featured: true
    },
    {
      title: "React en Acción",
      issuer: "",
      category: "Frontend Development",
      year: "",
      description: "Desarrollo de interfaces modernas con React, componentes reutilizables, manejo de estado y construcción de aplicaciones frontend.",
      skills: ["React", "JavaScript", "Components", "Frontend"],
      fileUrl: "/certifications/React en acción_.pdf",
      featured: true
    },
    {
      title: "The Bits and Bytes of Computer Networking",
      issuer: "",
      category: "Networking",
      year: "",
      description: "Fundamentos de redes, comunicación entre sistemas, TCP/IP, DNS y conceptos esenciales de infraestructura digital.",
      skills: ["Networking", "TCP/IP", "DNS", "Infrastructure"],
      fileUrl: "/certifications/The Bits and Bytes of Computer Networking.pdf",
      featured: true
    },
    {
      title: "Web Development Mastery: HTML, CSS & JavaScript Fundamentals",
      issuer: "",
      category: "Frontend Development",
      year: "",
      description: "Fundamentos de desarrollo web con HTML, CSS y JavaScript para creación de interfaces responsive.",
      skills: ["HTML", "CSS", "JavaScript", "Web Development"],
      fileUrl: "/certifications/Web Development Mastery_ HTML, CSS & JavaScript Fundamentals.pdf",
      featured: false
    },
    {
      title: "Curso de Introducción al Desarrollo Web (1/2)",
      issuer: "",
      category: "Web Development",
      year: "",
      description: "Bases de desarrollo web, estructura HTML, estilos CSS y fundamentos de maquetación.",
      skills: ["HTML", "CSS", "Web Fundamentals"],
      fileUrl: "/certifications/Curso de introducción al desarrollo  web_ HTML y CSS (1_2).pdf",
      featured: false
    },
    {
      title: "Curso de Introducción al Desarrollo Web (2/2)",
      issuer: "",
      category: "Web Development",
      year: "",
      description: "Continuación del desarrollo web frontend, buenas prácticas de maquetación y construcción de páginas web.",
      skills: ["HTML", "CSS", "Responsive Design"],
      fileUrl: "/certifications/Curso de introducción al desarrollo  web_ HTML y CSS (2_2).pdf",
      featured: false
    },
    {
      title: "PHP Mastery: Build Web Apps",
      issuer: "",
      category: "Backend Development",
      year: "",
      description: "Desarrollo de aplicaciones web con PHP, lógica backend y fundamentos para construcción de sistemas dinámicos.",
      skills: ["PHP", "Backend", "Web Apps"],
      fileUrl: "/certifications/PHP Mastery_ Build Web Apps.pdf",
      featured: false
    },
    {
      title: "SQL Para Principiantes",
      issuer: "",
      category: "Databases",
      year: "",
      description: "Fundamentos de SQL, consultas básicas, operaciones CRUD y manejo inicial de bases de datos relacionales.",
      skills: ["SQL", "Databases", "CRUD"],
      fileUrl: "/certifications/SQL Para Principiantes.pdf",
      featured: false
    },
    {
      title: "Power BI",
      issuer: "",
      category: "Data & Reporting",
      year: "",
      description: "Creación de dashboards, visualización de datos y reportes para análisis de información.",
      skills: ["Power BI", "Dashboards", "Reporting", "Data Visualization"],
      fileUrl: "/certifications/Power Bi.pdf",
      featured: false
    },
    {
      title: "Business Analytics en Big Data",
      issuer: "",
      category: "Data & Analytics",
      year: "",
      description: "Aplicación de análisis empresarial y uso de datos para toma de decisiones en contextos de Big Data.",
      skills: ["Business Analytics", "Big Data", "Data Analysis"],
      fileUrl: "/certifications/Business Analytics en Big Data.pdf",
      featured: false
    },
    {
      title: "Big Data Fundamentals",
      issuer: "",
      category: "Data & Analytics",
      year: "",
      description: "Fundamentos del ecosistema Big Data, procesamiento de datos y conceptos clave de análisis a gran escala.",
      skills: ["Big Data", "Data Processing", "Analytics"],
      fileUrl: "/certifications/Big Data Fundamentals.pdf",
      featured: false
    },
    {
      title: "Protege tu Negocio: Ciberseguridad en el Teletrabajo",
      issuer: "",
      category: "Cybersecurity",
      year: "",
      description: "Buenas prácticas de seguridad digital, protección de información y prevención de riesgos en entornos remotos.",
      skills: ["Cybersecurity", "Remote Work Security", "Risk Prevention"],
      fileUrl: "/certifications/Protege tu Negocio_ Ciberseguridad en  el Teletrabajo.pdf",
      featured: false
    }
  ],
  skills: [
    {
      category: "Backend",
      items: ["Java", "Spring Boot", "PHP", "Laravel", "Node.js", "APIs REST", "Microservicios", "Hibernate", "JPA"]
    },
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "Bootstrap", "Blade", "React Native"]
    },
    {
      category: "Bases de Datos",
      items: ["MySQL", "PostgreSQL", "SQL", "Modelado Relacional", "Optimización SQL"]
    },
    {
      category: "Cloud & DevOps",
      items: ["Docker", "Kubernetes", "Git", "GitLab CI/CD", "Linux", "AWS Fundamentals"]
    },
    {
      category: "Testing",
      items: ["JUnit", "Testcontainers", "Pruebas Unitarias", "Pruebas de Integración"]
    },
    {
      category: "Otros",
      items: ["Arquitectura de Software", "Diseño Técnico", "Integraciones Empresariales", "Soporte L3", "WordPress", "Convex"]
    }
  ],
  cta: {
    title: "¿Listo para escalar tu infraestructura?",
    subtitle: "Actualmente abierto a oportunidades como Software Engineer, Backend Developer, Java Developer o Fullstack Developer.",
    email: "artglezrodriguez@gmail.com",
    linkedin: "https://www.linkedin.com/in/artglezrodriguez",
    github: "https://github.com/Jagr15"
  }
};
