/**
 * Contenido extraído del sitio original www.geamar.cl
 * (bloques UAGB del slider #ofrecemos, timeline #tecnologia y logos de #Clientes).
 */

export type Service = {
  id: string;
  title: string;
  modalTitle: string;
  bgImage: string;
  /** Contenido HTML del modal (texto con <strong>, <br>, listas) */
  modalHtml: string;
};

export const SERVICES: Service[] = [
  {
    id: "consultorias",
    title: "Consultorías y Asesorías Marítimas Especializadas",
    modalTitle: "Consultorías y Asesorías Marítimas Especializadas",
    bgImage: "/images/motornueva-scaled.jpg",
    modalHtml: `
      <strong>Consultorías y Asesorías Marítimas Especializadas:</strong>
      Servicios de consultoría y asesoría en materias del ámbito marítimo
      portuario, prevención de riesgos, logística y transporte marítimo,
      ayudando a nuestros clientes a mejorar sus procesos y a tomar
      decisiones informadas.<br /><br />
      <strong>Inspecciones en naves menores:</strong> Realizamos Inspecciones
      marítimas que permiten evaluar el estado de las naves y sus equipos,
      con el objetivo de garantizar la seguridad de las tripulaciones y del
      material flotante.<br /><br />
      <strong>Auditorías, Investigación y análisis de incidentes:</strong>
      Efectuamos auditorías para identificar las causas de incidentes o
      accidentes a bordo de naves menores y tomar las medidas para mitigar
      los riesgos con el propósito de evitar accidentes futuros.
    `,
  },
  {
    id: "logistico",
    title: "Enfoque Logístico y Especializado",
    modalTitle: "Enfoque Logístico Especializado",
    bgImage: "/images/camion.png",
    modalHtml: `
      <strong>Gestión de Carga:</strong> Ofrecemos servicios de gestión de
      carga que incluyen la planificación, organización y supervisión de
      todas las operaciones relacionadas con el transporte de mercancías por
      vía marítima y terrestre.<br /><br />
      <strong>Transporte de carga:</strong> Proporcionamos servicios de
      transporte de carga por vía marítima y terrestre con naves y camiones
      adaptados a las necesidades específicas de nuestros clientes,
      asegurando el transporte más adecuado para cada tipo de carga.
    `,
  },
  {
    id: "capacitacion",
    title: "Capacitación en Seguridad y Salud Ocupacional",
    modalTitle: "Capacitación en Seguridad y Salud Ocupacional",
    bgImage: "/images/grupo.jpg",
    modalHtml: `
      <strong>Capacitación:</strong> Proporcionamos servicios de capacitación
      en prevención de riesgos y salud laboral.<br /><br />
      Nuestra capacitación está diseñada para identificar, evaluar y
      controlar los riesgos en el lugar de trabajo. Los programas
      incluyen:<br />
      o <strong>Evaluación de riesgos laborales</strong><br />
      o <strong>Planes de emergencia y evacuación</strong><br />
      o <strong>Uso seguro de equipos y maquinaria</strong><br />
      o <strong>Protocolos para la manipulación de sustancias
      peligrosas</strong>
    `,
  },
  {
    id: "autoridad",
    title: "Representación ante la Autoridad Marítima",
    modalTitle: "Representación ante la Autoridad Marítima",
    bgImage: "/images/autoridad.jpg",
    modalHtml: `
      Servicios marítimos y gestiones integrales antes la Autoridad
      para:<br />
      o <strong>Implementación e inscripción de naves y artefactos
      navales.</strong><br />
      o <strong>Preparación de descargos por procesos
      sancionatorios.</strong><br />
      o <strong>Gestionar de procesos de otorgamientos de concesiones
      marítimas y permisos de escasa importancia.</strong><br />
      o <strong>Gestión de permisos operativos y representación ante la
      Autoridad Marítima.</strong><br />
      o <strong>Gestión de cursos de capacitación, normativos para
      tripulación y personal de apoyo en operaciones acuícolas</strong>.
    `,
  },
  {
    id: "contingencia",
    title: "Planes de Contingencia y Transporte de Sustancias Peligrosas",
    modalTitle: "Planes de Contingencia y Transporte de Sustancias Peligrosas",
    bgImage: "/images/barcaza.jpg",
    modalHtml: `
      • Identificación y evaluación de riesgos marítimos específicos,
      permitiendo anticipar posibles escenarios de emergencia y definir
      estrategias de respuesta adecuadas.<br />
      • Elaboración de procedimientos detallados para la prevención,
      control y mitigación de incidentes marítimos, asegurando la
      protección de personas, bienes y el medio ambiente.<br />
      • Capacitación y entrenamiento del personal involucrado, con
      simulacros y ejercicios prácticos que fortalecen la capacidad de
      reacción ante situaciones de emergencia.<br />
      • Asesoría en el cumplimiento de normativas nacionales e
      internacionales, garantizando que los planes de contingencia y
      emergencias estén alineados con los estándares exigidos por las
      autoridades marítimas.
    `,
  },
  {
    id: "testeo",
    title: "Testeo de Alcohol y Drogas",
    modalTitle: "Testeo de Alcohol y Drogas",
    bgImage: "/images/orawell.png",
    modalHtml: `
      En nuestro servicio de testeo de alcohol y drogas para empresas, nos
      enfocamos en ayudar a las organizaciones a garantizar la seguridad y
      productividad de sus empleados, manteniendo el respeto a las
      garantías constitucionales de los trabajadores, en especial cuando
      pudieran afectar la intimidad, la vida privada o la honra de estos.
    `,
  },
];

/** Ítems del timeline "Cool Content Timeline" (#tecnologia) */
export type TimelineItem = {
  side: "right" | "left";
  text: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
};

export const TIMELINE: TimelineItem[] = [
  {
    side: "right",
    text: "Reportes en tiempo real, <br /> medición de la huella de carbono",
    image: "/images/movil.png",
    imageWidth: 343,
    imageHeight: 250,
  },
  {
    side: "left",
    text: "Al recibir una solicitud de equipos terrestres ingresamos datos en la plataforma",
    image: "/images/plataforma.png",
    imageWidth: 635,
    imageHeight: 638,
  },
  {
    side: "right",
    text: "Cuenta con un menú y funcionalidades que permite ingresar datos que la empresa requiera",
    image: "/images/menufleet.png",
    imageWidth: 512,
    imageHeight: 705,
  },
];

/** Logos del carrusel #Clientes (GS Logo Area del original) */
export const CLIENT_LOGOS = [
  { src: "/images/cultivos-azules.jpg", alt: "Cultivos Azules", href: null },
  { src: "/images/yaganchile.jpg", alt: "Yagan Chile", href: "https://yaganchile.cl" },
  { src: "/images/marinepatagonioa.jpg", alt: "Marine Patagonia", href: "https://marinepatagonia.cl" },
  { src: "/images/australis.jpg", alt: "Australis Seafoods", href: "https://australis-seafoods.com" },
  { src: "/images/primepatagonia.jpg", alt: "Prime Patagonia", href: "https://primepatagonia.cl/wp/" },
  { src: "/images/multix.jpg", alt: "Multi-X", href: "https://multi-xsalmon.com" },
];

/** Menú principal (idéntico al del original) */
export const NAV_LINKS = [
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#ofrecemos" },
  { label: "Sostenibilidad", href: "#tecnologia" },
];

/** Datos de contacto del bloque equipo (#contacto) */
export const CONTACT = {
  name: "Víctor Flores Saavedra",
  role: "Contacto General",
  email: "contacto@geamar.cl",
  phone: "+56 9 90183819",
  /** Teléfono del widget Joinchat (WhatsApp) del original */
  whatsapp: "56979799006",
  whatsappMessage:
    "Hola, quiero mas información sobre los servicios que ofrece Geamar",
};

