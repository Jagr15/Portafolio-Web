export const profileData = {
  hero: {
    headline: "Software Engineer & Backend Specialist",
    subheadline: "Diseñando arquitecturas robustas y escalables. Especializado en Java (Spring Boot) y PHP (Laravel) para transformar reglas de negocio complejas en microservicios resilientes, APIs seguras y despliegues orquestados.",
    availability: "Disponible para nuevos retos",
    metrics: [
      { label: "+4 Años", description: "Experiencia Profesional" },
      { label: "Java & Laravel", description: "Ecosistemas Core" },
      { label: "Microservicios", description: "Arquitectura & APIs" },
      { label: "Docker & K8s", description: "Infraestructura Cloud" }
    ]
  },
  about: {
    summary: "Ingeniero de Software enfocado en el desarrollo Backend y Fullstack. Mi experiencia abarca desde la arquitectura de microservicios corporativos hasta la modernización de sistemas integrales de gestión. Me especializo en la construcción de APIs RESTful seguras, la optimización profunda de consultas en bases de datos relacionales (MySQL, PostgreSQL) y la garantía de confiabilidad del código mediante automatización de pruebas (JUnit, Testcontainers). Acostumbrado a operar en todo el ciclo de vida del software, incluyendo soporte de Nivel 3 (L3) para resolución de incidentes críticos en producción.",
    focusAreas: [
      "Arquitectura Backend & APIs",
      "Optimización de Bases de Datos",
      "Calidad de Software (Testing)",
      "Despliegues en Contenedores"
    ]
  },
  experience: [
    {
      company: "Supra Solutions",
      role: "Fullstack Engineer (Java & Laravel)",
      period: "Noviembre 2025 – Mayo 2026",
      summary: "Desarrollo de aplicaciones web empresariales mediante integración de sistemas híbridos, construcción de APIs REST y optimización de procesos transaccionales backend."
    },
    {
      company: "Proyecto Independiente (Más Salud)",
      role: "Lead Fullstack Developer (Laravel)",
      period: "Enero 2025 – Septiembre 2025",
      summary: "Liderazgo y desarrollo end-to-end de un sistema integral de gestión de usuarios y expedientes clínicos, implementando controles de acceso estrictos y frontend reactivo."
    },
    {
      company: "Uniti Consulting",
      role: "Desarrollador Java Backend",
      period: "Enero 2024 – Diciembre 2024",
      summary: "Evolución de microservicios críticos en entornos de alta disponibilidad, soporte técnico L3 a producción y aseguramiento de calidad con pruebas automatizadas."
    },
    {
      company: "Instituto Nacional de Astrofísica, Óptica y Electrónica (INAOE)",
      role: "Programador de Software Jr.",
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
      title: "TuCondominio",
      category: "Plataforma SaaS",
      description: "Plataforma para administración condominal con backend orientado a negocio, control de accesos y módulos operativos integrados.",
      impact: "Centralizó procesos operativos y mejoró la trazabilidad de información para residentes, administración y seguridad.",
      techStack: ["PHP", "Laravel", "MySQL", "APIs REST", "Blade", "Bootstrap"],
      image: "/images/projects/tucondominio/screenshot-1.png",
      status: "En operación",
      githubUrl: "",
      liveUrl: "",
      featured: true
    },
    {
      title: "Taller MVP",
      category: "Sistema de Negocio",
      description: "Aplicación para gestión de órdenes de servicio y seguimiento de procesos internos de taller.",
      impact: "Mejoró el control de órdenes y permitió seguimiento claro de cada servicio desde recepción hasta entrega.",
      techStack: ["Java", "Spring Boot", "PostgreSQL", "SQL", "APIs REST"],
      image: "/images/projects/taller/Captura desde 2026-04-11 23-05-48.png",
      status: "MVP",
      githubUrl: "",
      liveUrl: "",
      featured: true
    },
    {
      title: "Integraciones empresariales SOAP/XML",
      category: "Integración Empresarial",
      description: "Desarrollo de integraciones backend con servicios SOAP y estructuras XML para intercambio de información entre plataformas empresariales y sistemas heredados.",
      impact: "Permitió ejecutar integraciones de forma más estable y repetible en procesos críticos de intercambio de información.",
      techStack: ["PHP", "Laravel", "SOAP", "XML", "JSON", "SQL Server"],
      image: "/images/projects/soap-diagram.png",
      status: "Producción",
      githubUrl: "",
      liveUrl: "",
      featured: false
    },
    {
      title: "APIs REST Core",
      category: "Backend e Integración",
      description: "Conjunto de servicios REST para procesos core de negocio, diseñado para integrar aplicaciones internas y sistemas externos con contratos claros y mantenimiento continuo.",
      impact: "Facilitó la integración entre módulos y redujo fricción operativa al contar con servicios centralizados y mantenibles.",
      techStack: ["PHP", "Laravel", "APIs REST", "MySQL", "SQL Server", "Docker"],
      image: "/images/projects/api-diagram.png",
      status: "Producción",
      githubUrl: "",
      liveUrl: "",
      featured: false
    }
  ],
  skills: [
    {
      category: "Backend",
      items: ["Java", "Spring Boot", "PHP", "Laravel", "Node.js", "APIs REST", "Microservicios", "Convex"]
    },
    {
      category: "Frontend",
      items: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap", "Blade", "React Native"]
    },
    {
      category: "Bases de Datos",
      items: ["MySQL", "PostgreSQL", "SQL", "Modelado relacional", "Optimización de consultas"]
    },
    {
      category: "Cloud & DevOps",
      items: ["Docker", "Kubernetes", "Git", "GitLab", "Linux", "Principios de AWS"]
    },
    {
      category: "Testing & Calidad",
      items: ["JUnit", "Testcontainers", "Pruebas unitarias", "Pruebas de integración"]
    },
    {
      category: "CMS & Web",
      items: ["WordPress", "Desarrollo de sitios web", "Optimización web básica"]
    }
  ],
  cta: {
    title: "¿Listo para escalar tu infraestructura?",
    subtitle: "Actualmente abierto a nuevas oportunidades como Software Engineer o Backend Developer en equipos orientados al producto.",
    email: "artglezrodriguez@gmail.com",
    linkedin: "https://linkedin.com/in/tu-perfil",
    github: "https://github.com/Jagr15"
  }
};
