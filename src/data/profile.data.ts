export const profileData = {
  name: "Jorge Arturo Gonzalez Rodriguez",
  role: "Desarrollador Backend Java | Microservicios | Soporte L3 | Entornos Productivos",
  location: "Acapulco, Guerrero, México",
  email: "artglezrodriguez@gmail.com",
  phone: "+52 729-922-0102",
  summary:
    "Desarrollador Backend Senior con experiencia en Java y Spring Boot, especializado en desarrollo y mantenimiento de microservicios y APIs REST en entornos productivos. Experiencia en soporte L3, análisis de incidencias críticas, revisión de logs, validación de despliegues y seguimiento de continuidad operativa. Con sólidos conocimientos en Docker, Kubernetes, SQL y buenas prácticas de desarrollo para sistemas empresariales enfocados en escalabilidad y mitigación de fallos.",
  stack: [
    {
      category: "Stack Principal",
      items: ["Java (17, 21)", "Spring Boot", "Microservicios", "APIs REST", "JPA/Hibernate", "SQL"],
    },
    {
      category: "Infra y Bases de Datos",
      items: ["PostgreSQL", "MySQL", "Docker", "Kubernetes", "GitLab CI", "Maven"],
    },
    {
      category: "Soporte, Testing y Analítica",
      items: ["Soporte L3", "Análisis de logs", "Troubleshooting", "JUnit", "Testcontainers"],
    },
    {
      category: "Stack Complementario",
      items: ["PHP 8+", "Laravel", "Python", "FastAPI"],
    },
    {
      category: "Herramientas de Trabajo",
      items: ["Git", "IntelliJ IDEA", "Postman", "Linux", "pgAdmin"],
    },
  ],
  experience: [
    {
      company: "Softtek",
      role: "Soporte L3 Java, Microservicios",
      period: "Reciente",
      summary: "Resolución de incidencias críticas y análisis en entornos productivos.",
      responsibilities: [
        "Monitoreo constante e identificación de cuellos de botella.",
        "Revisión de logs en Kibana/Splunk para trazabilidad.",
        "Validación de continuidad operativa y post-despliegues.",
      ],
      technologies: ["Java", "Spring Boot", "Microservicios", "Logs", "Soporte L3"],
      achievements: [
        "Acompañamiento exitoso en pases a producción críticos sin rollback.",
      ],
      description: [
        "Resolución de incidencias críticas y análisis en entornos productivos.",
        "Monitoreo constante, revisión de logs y validación de continuity operativa.",
        "Acompañamiento en pases a producción y validación post-despliegue.",
      ],
    },
    {
      company: "Uniti Consulting",
      role: "Desarrollador Java Backend",
      period: "Previo",
      summary: "Diseño, desarrollo y mantenimiento de componentes backend usando Java y frameworks empresariales.",
      responsibilities: [
        "Implementación de APIs REST seguras y refactorización de código legado.",
        "Optimización de consultas complejas en base de datos.",
        "Integración de servicios de terceros.",
      ],
      technologies: ["Java", "Spring Boot", "JPA/Hibernate", "SQL", "APIs REST"],
      achievements: [
        "Reducción del tiempo de respuesta en endpoints críticos mediante optimización de queries.",
      ],
      description: [
        "Diseño, desarrollo y mantenimiento de componentes backend usando Java y Spring Boot.",
        "Implementación de APIs REST y refactorización de código legado.",
        "Optimización de consultas en base de datos para mejorar tiempos de respuesta.",
      ],
    },
    {
      company: "INAOE",
      role: "Programador de Software Jr",
      period: "Previo",
      summary: "Apoyo en el desarrollo e integración de módulos funcionales para proyectos de investigación.",
      responsibilities: [
        "Colaboración en el diseño de modelos de datos.",
        "Implementación de scripts y mantenimiento de código.",
      ],
      technologies: ["PHP", "SQL", "Python"],
      achievements: [],
      description: [
        "Desarrollo e integración de módulos funcionales.",
        "Colaboración en el diseño de modelos de datos.",
      ],
    },
    {
      company: "Freelance",
      role: "Proyectos Web / SaaS / Laravel",
      period: "Varios",
      summary: "Consultor independiente enfocado en creación de soluciones web a medida y sistemas multi-tenant.",
      responsibilities: [
        "Desarrollo full-stack de sistemas SaaS desde cero.",
        "Diseño de arquitectura multi-tenant y seguridad de datos.",
        "Consultor técnico para integraciones complejas.",
      ],
      technologies: ["Laravel", "PHP", "MySQL", "TailwindCSS"],
      achievements: [
        "Entrega de proyectos SaaS completos operando en producción.",
      ],
      description: [
        "Creación de soluciones a medida, incluyendo sistemas multi-tenant y APIs a terceros.",
        "Consultor técnico en integraciones complejas.",
      ],
    },
  ],
  projects: [
    {
      title: "TuCondominio",
      id: "tucondominio",
      type: "SaaS Multi-tenant",
      coverImage: "/images/projects/tucondominio/screenshot-1.png",
      imagePosition: "top",
      description:
        "Plataforma de gestión condominal completa. Incluye manejo de roles y permisos granulares, generación de pases QR para visitas, sistema de reservaciones de áreas comunes, control de paquetería y arquitectura base de datos separada/mixta por tenant.",
      problem: "La administración condominal tradicional dependía de procesos manuales, registros en libretas, y generaba cuellos de botella en el control de accesos.",
      solution: "Se diseñó y desarrolló un sistema centralizado en la nube (SaaS) que digitaliza la gestión financiera y automatiza el control de ingresos mediante códigos QR temporales.",
      contribution: "Arquitectura completa de backend y frontend de la plataforma, diseño e implementación multi-tenant.",
      impact: "Redujo la carga operativa administrativa en un 60% y digitalizó la seguridad de accesos.",
      techStack: ["Laravel", "PHP", "MySQL", "TailwindCSS"],
      screenshots: Array.from({length: 14}, (_, i) => `/images/projects/tucondominio/screenshot-${i+1}.png`),
    },
    {
      title: "Taller MVP",
      id: "taller-mvp",
      type: "Aplicación Empresarial",
      coverImage: "/images/projects/taller/Captura desde 2026-04-11 23-05-48.png",
      imagePosition: "center",
      description:
        "Sistema de control para órdenes de taller automotriz. Manejo de estados de diagnóstico, desglose de costos, y generación automatizada de reportes PDF para los clientes finales.",
      problem: "El taller enfrentaba desorganización en el seguimiento de reparaciones y tiempos de entrega, además de no tener un portal central para cotizaciones.",
      solution: "Una aplicación dedicada a registrar y transicionar las órdenes de servicio, permitiendo rastrear piezas, costos y exportaciones formales para el usuario.",
      contribution: "Creación del core transaccional usando Spring Boot y JPA, con persistencia segura en PostgreSQL.",
      impact: "Eliminó el uso de papel y centralizó el historial de los vehículos, aumentando la retención de clientes.",
      techStack: ["Java", "Spring Boot", "JPA", "PostgreSQL"],
      screenshots: [
        "/images/projects/taller/Captura desde 2026-04-11 23-05-48.png",
        "/images/projects/taller/Captura desde 2026-04-11 23-06-43.png",
        "/images/projects/taller/Captura desde 2026-04-11 23-06-49.png",
        "/images/projects/taller/Captura desde 2026-04-11 23-06-54.png",
        "/images/projects/taller/Captura desde 2026-04-11 23-06-57.png",
        "/images/projects/taller/Captura desde 2026-04-11 23-07-03.png",
        "/images/projects/taller/Captura desde 2026-04-11 23-07-05.png",
        "/images/projects/taller/Captura desde 2026-04-11 23-07-07.png"
      ],
    },
    {
      title: "Integraciones empresariales SOAP/XML",
      id: "soap-xml",
      type: "Backend / Integraciones",
      coverImage: "/images/projects/soap-diagram.png",
      imagePosition: "center",
      description:
        "Desarrollo de un wrapper seguro para el consumo de servicios SOAP legados. Generación de cadena original, firmado de peticiones XML, procesamiento documental asíncrono y validación criptográfica.",
      problem: "La integración con servicios gubernamentales/legados (ej. VUCEM) era propensa a fallos por complejidad en armado de XML y protocolos SSL antiguos.",
      solution: "Un cliente wrapper robusto y aislado que gestiona de manera transparente el firmado digital, namespaces estructurados y ciphers obligatorios.",
      contribution: "Desarrollo completo usando utilerías de criptografía y XML DOM de PHP.",
      impact: "Automatizó el flujo de miles de transacciones documentales que antes dependían de procesos manuales.",
      techStack: ["PHP", "SOAP", "XML", "OpenSSL"],
      screenshots: [],
    },
    {
      title: "APIs REST Core",
      id: "api-rest",
      type: "Microservicios",
      coverImage: "/images/projects/api-diagram.png",
      imagePosition: "center",
      description:
        "Arquitectura de microservicios con Spring Boot para entornos productivos de alta concurrencia. Implementación de patrones de resiliencia, health-checks y documentación en Swagger/OpenAPI.",
      problem: "Arquitecturas monolíticas que presentaban sobrecarga bajo alta demanda, arriesgando la disponibilidad total del negocio.",
      solution: "Separación por dominios en microservicios independientes, permitiendo escalar procesos de forma desagregada.",
      contribution: "Construcción y empaquetado de microservicios robustos, integrando buenas prácticas de observabilidad.",
      impact: "Estabilidad 99.9% en alta concurrencia logrando aislar fallos de servicios individuales.",
      techStack: ["Java 17", "Spring Boot", "Docker", "GitLab CI"],
      screenshots: [],
    },
  ],
  competencies: [
    "Resolución de incidencias en producción",
    "Comunicación técnica y efectiva",
    "Optimización de consultas SQL complejas",
    "Soporte operativo y continuidad de servicios",
    "Trabajo ágil (Scrum) y equipos multidisciplinares",
  ],
};
