import { Job } from "@/types/job";

export const jobs: Job[] = [
  {
    slug: "desarrollador-full-stack-senior",
    title: "Desarrollador Full Stack Senior",
    company: {
      name: "TechnoCaribe",
      logo: "/images/companies/technocaribe.svg",
      description:
        "TechnoCaribe es una empresa líder en soluciones tecnológicas del Caribe, especializada en desarrollo de software a medida y consultoría digital para empresas de la región.",
    },
    location: "Santo Domingo",
    locationType: "remoto",
    category: "Tecnología",
    categoryIcon: "💻",
    type: "tiempo-completo",
    salaryMin: 80000,
    salaryMax: 120000,
    currency: "DOP",
    description:
      "Buscamos un desarrollador Full Stack con experiencia sólida en React y Node.js para liderar el desarrollo de nuestra plataforma de comercio electrónico. Trabajarás directamente con el equipo de producto para diseñar e implementar nuevas funcionalidades que impacten a miles de usuarios en todo el Caribe.",
    requirements: [
      "3+ años de experiencia en React/Next.js",
      "Experiencia con Node.js y bases de datos SQL/NoSQL",
      "Conocimiento de arquitecturas cloud (AWS o GCP)",
      "Habilidades de liderazgo técnico",
      "Inglés intermedio-avanzado",
    ],
    benefits: [
      "Trabajo 100% remoto",
      "Seguro médico complementario",
      "Bonificación por desempeño trimestral",
      "Presupuesto para capacitación",
      "Horario flexible",
    ],
    publishedAt: "2026-04-01",
    featured: true,
  },
  {
    slug: "gerente-marketing-digital",
    title: "Gerente de Marketing Digital",
    company: {
      name: "Grupo Ramos",
      logo: "/images/companies/grupo-ramos.svg",
      description:
        "Grupo Ramos es una de las cadenas de tiendas más grandes de República Dominicana, con presencia en todo el territorio nacional ofreciendo productos de calidad a precios accesibles.",
    },
    location: "Santiago de los Caballeros",
    locationType: "presencial",
    category: "Marketing",
    categoryIcon: "📢",
    type: "tiempo-completo",
    salaryMin: 65000,
    salaryMax: 95000,
    currency: "DOP",
    description:
      "Dirigirás la estrategia de marketing digital de todo el grupo, incluyendo campañas en redes sociales, email marketing, SEO/SEM y análisis de métricas. Reportarás directamente al Director Comercial y liderarás un equipo de 5 personas.",
    requirements: [
      "5+ años en marketing digital",
      "Experiencia liderando equipos de al menos 3 personas",
      "Dominio de Google Analytics, Meta Ads y Google Ads",
      "Conocimiento de SEO técnico y estrategia de contenido",
      "Portafolio de campañas exitosas",
    ],
    benefits: [
      "Descuentos en tiendas del grupo",
      "Seguro médico y dental",
      "Bono navideño adicional",
      "Plan de carrera definido",
      "Estacionamiento",
    ],
    publishedAt: "2026-04-03",
    featured: true,
  },
  {
    slug: "analista-financiero",
    title: "Analista Financiero",
    company: {
      name: "Banco Continental",
      logo: "/images/companies/banco-continental.svg",
      description:
        "Banco Continental es una institución financiera dominicana comprometida con la innovación y el servicio personalizado para individuos y empresas.",
    },
    location: "Santo Domingo",
    locationType: "híbrido",
    category: "Finanzas",
    categoryIcon: "📊",
    type: "tiempo-completo",
    salaryMin: 55000,
    salaryMax: 75000,
    currency: "DOP",
    description:
      "Te unirás al equipo de análisis financiero para evaluar portafolios de inversión, preparar reportes ejecutivos y apoyar en la toma de decisiones estratégicas del banco. Ambiente dinámico con oportunidades de crecimiento.",
    requirements: [
      "Licenciatura en Finanzas, Economía o afín",
      "2+ años de experiencia en análisis financiero",
      "Excel avanzado y conocimiento de Power BI",
      "Conocimiento de regulaciones de la SIB",
      "Capacidad analítica y atención al detalle",
    ],
    benefits: [
      "Modelo híbrido (3 días oficina, 2 remoto)",
      "Seguro médico premium",
      "Bonificación anual",
      "Capacitaciones en finanzas corporativas",
      "Cafetería subsidiada",
    ],
    publishedAt: "2026-03-28",
    featured: false,
  },
  {
    slug: "disenador-ux-ui",
    title: "Diseñador UX/UI",
    company: {
      name: "Pixel Dominicana",
      logo: "/images/companies/pixel-dominicana.svg",
      description:
        "Pixel Dominicana es un estudio de diseño y desarrollo digital que crea experiencias memorables para marcas del Caribe y Latinoamérica.",
    },
    location: "Remoto",
    locationType: "remoto",
    category: "Tecnología",
    categoryIcon: "💻",
    type: "tiempo-completo",
    salaryMin: 50000,
    salaryMax: 80000,
    currency: "DOP",
    description:
      "Crearás interfaces intuitivas y visualmente atractivas para aplicaciones web y móviles. Participarás en todo el proceso de diseño: investigación de usuarios, wireframes, prototipos y diseño final en Figma.",
    requirements: [
      "2+ años de experiencia en diseño UX/UI",
      "Dominio avanzado de Figma",
      "Portafolio con casos de estudio detallados",
      "Conocimiento de sistemas de diseño",
      "Comprensión básica de HTML/CSS",
    ],
    benefits: [
      "100% remoto desde cualquier lugar",
      "Licencia de Figma y herramientas de diseño",
      "Viernes de medio día",
      "Presupuesto anual para conferencias",
      "Equipo Apple provisto por la empresa",
    ],
    publishedAt: "2026-04-02",
    featured: false,
  },
  {
    slug: "coordinador-recursos-humanos",
    title: "Coordinador de Recursos Humanos",
    company: {
      name: "Industrias San Miguel",
      logo: "/images/companies/industrias-sm.svg",
      description:
        "Industrias San Miguel es un conglomerado industrial dominicano con operaciones en manufactura, distribución y servicios, empleando a más de 2,000 personas.",
    },
    location: "La Romana",
    locationType: "presencial",
    category: "Recursos Humanos",
    categoryIcon: "👥",
    type: "tiempo-completo",
    salaryMin: 45000,
    salaryMax: 60000,
    currency: "DOP",
    description:
      "Serás responsable de coordinar los procesos de reclutamiento, onboarding y desarrollo del talento para nuestras operaciones en la zona este. Trabajarás en estrecha colaboración con gerentes de planta para asegurar las mejores contrataciones.",
    requirements: [
      "Licenciatura en Psicología Industrial o Administración",
      "3+ años en gestión de RRHH",
      "Experiencia en reclutamiento masivo",
      "Conocimiento del Código de Trabajo dominicano",
      "Manejo de nómina y beneficios",
    ],
    benefits: [
      "Transporte corporativo",
      "Seguro médico familiar",
      "Almuerzo en planta",
      "Bono por productividad",
      "Programa de bienestar",
    ],
    publishedAt: "2026-03-30",
    featured: false,
  },
  {
    slug: "enfermera-clinica",
    title: "Enfermera Clínica",
    company: {
      name: "Centro Médico Dominicano",
      logo: "/images/companies/centro-medico.svg",
      description:
        "Centro Médico Dominicano es una red de clínicas privadas con más de 15 años brindando atención médica de calidad en Santo Domingo y Santiago.",
    },
    location: "Santo Domingo",
    locationType: "presencial",
    category: "Salud",
    categoryIcon: "🏥",
    type: "tiempo-completo",
    salaryMin: 35000,
    salaryMax: 50000,
    currency: "DOP",
    description:
      "Buscamos enfermeras con vocación de servicio para unirse a nuestro equipo en el área de urgencias. Turnos rotativos con compensación adicional por turnos nocturnos y fines de semana.",
    requirements: [
      "Licenciatura en Enfermería",
      "Registro vigente en SESPAS",
      "1+ año de experiencia clínica",
      "Certificación en RCP/BLS",
      "Disponibilidad para turnos rotativos",
    ],
    benefits: [
      "Seguro médico sin copago",
      "Pago adicional por turnos nocturnos",
      "Uniformes proporcionados",
      "Oportunidades de especialización",
      "Estabilidad laboral",
    ],
    publishedAt: "2026-04-04",
    featured: false,
  },
  {
    slug: "profesor-matematicas",
    title: "Profesor de Matemáticas",
    company: {
      name: "Colegio Bilingüe del Caribe",
      logo: "/images/companies/colegio-bilingue.svg",
      description:
        "Institución educativa privada con 20 años formando estudiantes bilingües con valores y excelencia académica en Punta Cana.",
    },
    location: "Punta Cana",
    locationType: "presencial",
    category: "Educación",
    categoryIcon: "📚",
    type: "tiempo-completo",
    salaryMin: 30000,
    salaryMax: 45000,
    currency: "DOP",
    description:
      "Impartirás clases de matemáticas a nivel secundario en español e inglés. Buscamos un profesor apasionado que utilice metodologías innovadoras para hacer las matemáticas accesibles y divertidas.",
    requirements: [
      "Licenciatura en Educación Matemática o afín",
      "Inglés avanzado (C1 o superior)",
      "Experiencia docente de 2+ años",
      "Conocimiento de metodologías activas",
      "Manejo de plataformas educativas digitales",
    ],
    benefits: [
      "Vacaciones escolares completas",
      "Descuento en matrícula para hijos",
      "Seguro médico",
      "Capacitación continua",
      "Ambiente de trabajo colaborativo",
    ],
    publishedAt: "2026-03-25",
    featured: false,
  },
  {
    slug: "ejecutivo-ventas-b2b",
    title: "Ejecutivo de Ventas B2B",
    company: {
      name: "SolTech Solutions",
      logo: "/images/companies/soltech.svg",
      description:
        "SolTech Solutions provee soluciones empresariales de software y hardware a empresas medianas y grandes en el Caribe.",
    },
    location: "Santo Domingo",
    locationType: "híbrido",
    category: "Ventas",
    categoryIcon: "🤝",
    type: "tiempo-completo",
    salaryMin: 40000,
    salaryMax: 70000,
    currency: "DOP",
    description:
      "Serás responsable de abrir y desarrollar cuentas corporativas para nuestra línea de soluciones tecnológicas. El salario base se complementa con un atractivo esquema de comisiones sin techo.",
    requirements: [
      "3+ años en ventas B2B (preferiblemente tecnología)",
      "Cartera de contactos corporativos activa",
      "Experiencia con CRM (Salesforce o HubSpot)",
      "Habilidades de negociación y presentación",
      "Vehículo propio",
    ],
    benefits: [
      "Comisiones sin techo (hasta 30% del deal)",
      "Vehículo de empresa después de 6 meses",
      "Teléfono y laptop corporativo",
      "Flexibilidad de horario",
      "Viajes a ferias internacionales",
    ],
    publishedAt: "2026-04-01",
    featured: true,
  },
  {
    slug: "contador-publico-autorizado",
    title: "Contador Público Autorizado",
    company: {
      name: "Asesoría Fiscal Dominicana",
      logo: "/images/companies/asesoria-fiscal.svg",
      description:
        "Firma de contabilidad y asesoría fiscal con 10 años de experiencia sirviendo a PYMEs y empresas medianas en República Dominicana.",
    },
    location: "Santiago de los Caballeros",
    locationType: "presencial",
    category: "Finanzas",
    categoryIcon: "📊",
    type: "tiempo-completo",
    salaryMin: 40000,
    salaryMax: 60000,
    currency: "DOP",
    description:
      "Manejarás la contabilidad de un portafolio de clientes PYME, incluyendo declaraciones de impuestos, estados financieros y asesoría fiscal. Experiencia con DGII y normativas locales es indispensable.",
    requirements: [
      "CPA certificado por el ICPARD",
      "3+ años de experiencia contable",
      "Dominio de sistemas contables (SAP, QuickBooks)",
      "Conocimiento profundo de normativas DGII",
      "Excel avanzado",
    ],
    benefits: [
      "Horario de oficina (L-V 8am-5pm)",
      "Seguro médico",
      "Bono por cumplimiento de plazos fiscales",
      "Capacitación en normas NIIF",
      "Ambiente profesional estable",
    ],
    publishedAt: "2026-03-29",
    featured: false,
  },
  {
    slug: "community-manager",
    title: "Community Manager",
    company: {
      name: "Agencia Creativa Isla",
      logo: "/images/companies/agencia-isla.svg",
      description:
        "Agencia digital boutique especializada en branding, redes sociales y estrategia de contenido para marcas locales e internacionales con presencia en RD.",
    },
    location: "Santo Domingo",
    locationType: "híbrido",
    category: "Marketing",
    categoryIcon: "📢",
    type: "medio-tiempo",
    salaryMin: 20000,
    salaryMax: 35000,
    currency: "DOP",
    description:
      "Gestionarás las redes sociales de 3-4 marcas clientes, creando contenido atractivo, respondiendo a la comunidad y reportando métricas semanales. Posición ideal para creativos con pasión por las tendencias digitales.",
    requirements: [
      "1+ año manejando redes sociales profesionales",
      "Conocimiento de Canva y herramientas de diseño básico",
      "Redacción creativa impecable en español",
      "Disponibilidad de 4 horas diarias",
      "Portafolio de contenido previo",
    ],
    benefits: [
      "Horario flexible (20 horas/semana)",
      "Trabajo híbrido (2 días presencial)",
      "Acceso a herramientas premium de diseño",
      "Oportunidad de pasar a tiempo completo",
      "Ambiente creativo y joven",
    ],
    publishedAt: "2026-04-05",
    featured: false,
  },
  {
    slug: "ingeniero-civil-proyectos",
    title: "Ingeniero Civil de Proyectos",
    company: {
      name: "Constructora del Este",
      logo: "/images/companies/constructora-este.svg",
      description:
        "Constructora del Este desarrolla proyectos residenciales y comerciales de alta calidad en la zona este de República Dominicana.",
    },
    location: "Punta Cana",
    locationType: "presencial",
    category: "Ingeniería",
    categoryIcon: "🏗️",
    type: "contrato",
    salaryMin: 70000,
    salaryMax: 100000,
    currency: "DOP",
    description:
      "Supervisarás la ejecución de un proyecto residencial de 120 unidades en Bávaro. Contrato por 18 meses con posibilidad de extensión. Responsable de cronogramas, calidad y coordinación con subcontratistas.",
    requirements: [
      "Ingeniería Civil (CODIA habilitado)",
      "5+ años en supervisión de proyectos de construcción",
      "Manejo de AutoCAD, Revit y MS Project",
      "Experiencia en proyectos residenciales de >50 unidades",
      "Disponibilidad para trabajo en campo",
    ],
    benefits: [
      "Alojamiento en zona del proyecto",
      "Vehículo asignado",
      "Bono de finalización de proyecto",
      "Seguro contra accidentes",
      "Alimentación incluida",
    ],
    publishedAt: "2026-03-27",
    featured: true,
  },
  {
    slug: "asistente-administrativo",
    title: "Asistente Administrativo/a",
    company: {
      name: "Legal Partners RD",
      logo: "/images/companies/legal-partners.svg",
      description:
        "Firma de abogados especializada en derecho corporativo, inmobiliario y migratorio con oficinas en Santo Domingo y Nueva York.",
    },
    location: "Santo Domingo",
    locationType: "presencial",
    category: "Administración",
    categoryIcon: "📋",
    type: "tiempo-completo",
    salaryMin: 25000,
    salaryMax: 35000,
    currency: "DOP",
    description:
      "Apoyarás al equipo de abogados con la gestión documental, agenda de reuniones, correspondencia y atención a clientes. Se valora discreción, organización y excelente presentación personal.",
    requirements: [
      "Técnico o licenciatura en Administración o Secretariado",
      "1+ año de experiencia en posición similar",
      "Manejo avanzado de Microsoft Office",
      "Excelente ortografía y redacción",
      "Inglés intermedio (deseable)",
    ],
    benefits: [
      "Horario fijo (L-V 8:30am-5:30pm)",
      "Seguro médico básico",
      "Almuerzo subsidiado",
      "Posibilidad de apoyo para estudios",
      "Ubicación céntrica (Naco)",
    ],
    publishedAt: "2026-04-04",
    featured: false,
  },
];

export const categories = [...new Set(jobs.map((j) => j.category))];

export function getJobsByCategory(category: string): Job[] {
  return jobs.filter((j) => j.category === category);
}

export function getCategoryIcons(): { category: string; icon: string }[] {
  const seen = new Set<string>();
  return jobs
    .filter((j) => {
      if (seen.has(j.category)) return false;
      seen.add(j.category);
      return true;
    })
    .map((j) => ({ category: j.category, icon: j.categoryIcon }));
}
