import {
    mobile,
    RR,
    nuro,
    uhv,
    sudoku,
    mediaFinder,
    linkedin,
    github,
    fullscope,
} from "../assets";

export const navLinks_spanish = [
    {
        id: "about",
        title: "Sobre mí",
    },
    {
        id: "work",
        title: "Experiencia",
    },
    {
        id: "contact",
        title: "Contacto",
    },
];
const services_spanish = [
/*  {
    title: "Mi perfil de LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/johnny-sierra/",
  },*/
  {
    title: "Mi perfil de GitHub",
    icon: github,
    link: "https://github.com/J-Sierra",
  },
  {
    title: "Mi currículum",
    icon: mobile,
    link: "https://drive.google.com/file/d/1v7NrrWB6vb__BnDjUYVHqmFPQSVWbWTv/view?usp=sharing",
  },
];
const experiences_spanish = [
    {
        title: "Licenciatura en Ciencias de la Computación",
        company_name: "Universidad de Houston",
        icon: uhv,
        iconBg: "#383E56",
        date: "2016",
        points: [
            "Primer miembro de mi familia en graduarse de secundaria y universidad, obteniendo el título en Ciencias de la Computación en la Universidad de Houston – Victoria.",
            "Integré mis estudios con la vida en Houston, aprovechando la diversidad cultural y el entorno académico de una de las ciudades más grandes de Estados Unidos.",
            "Con una especialización en diseño de videojuegos, desarrollé un proyecto final en Unreal Engine 4 que combinó habilidades técnicas y narrativas.",
            "Publiqué un generador de laberintos en el Unreal Engine Marketplace, destacando mi espíritu emprendedor y compromiso con la comunidad de desarrollo de juegos."
        ],
    },
    {
        title: "Desarrollador de React",
        company_name: "R Kirk Enterprises",
        icon: RR,
        iconBg: "#E6DEDD",
        date: "Agosto 2017 – Agosto de 2019",
        points: [
            "Diseñé y desarrollé un panel de administración para optimizar operaciones de flota en Houston.",
            "Implementé una interfaz móvil con React y React Native para asignación de trabajos y comunicación en campo.",
            "Integré Firebase para gestionar facturación y procesos de precios, asegurando transparencia y precisión en las operaciones financieras.",
        ],
    },
    {
        title: "Especialista en Operaciones Web",
        company_name: "Nuro",
        icon: nuro,
        iconBg: "#383E56",
        date: "Septiembre 2019 – Mayo de 2023",
        points: [
            "Desarrollé herramientas de monitoreo web para vehículos autónomos, mejorando confiabilidad y cumplimiento regulatorio.",
            "Implementé paneles de análisis de datos en tiempo real, optimizando la toma de decisiones y la eficiencia operativa.",
            "Colaboré en la mejora de interfaces y experiencias de usuario en plataformas internas, simplificando flujos de trabajo y usabilidad.",
        ],
    },
    {
        title: "Desarrollador Front-End",
        company_name: "Fullscope Insurance",
        icon: fullscope,
        iconBg: "#fff",
        date: "Agosto 2024 – Diciembre 2024",
        points: [
            "Reconstruí y optimicé el sitio web de marketing de la empresa usando React y Tailwind CSS, mejorando el rendimiento de carga en un 30% y asegurando la adaptación a diferentes dispositivos.",
            "Implementé diseños de Figma en componentes front-end escalables, garantizando consistencia visual en plataformas de escritorio y móviles.",
            "Desarrollé e integré formularios dinámicos para agilizar las cotizaciones de seguros, reduciendo la fricción en el proceso de captura de clientes potenciales."
        ],
    }
];
const projects_spanish = [
  {
    name: "Rompecabezas Sudoku",
    description:
      "Este proyecto muestra mi destreza en el desarrollo web, haciendo hincapié en una interfaz de usuario intuitiva y una gestión de estado perfecta para una experiencia envolvente en la resolución de rompecabezas.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "framer",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: sudoku,
    source_code_link: "https://github.com/J-Sierra/Sudoku2.0",
    demo_link: "https://sudoku.johnnysierra.com",
  },
  {
    name: "Buscador de Medios",
    description:
      "Utilizando React y OmdbAPI, mi proyecto de búsqueda de películas ofrece una experiencia de búsqueda rápida y sencilla en una sola página, proporcionando información detallada sobre una película al instante.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "axios",
        color: "green-text-gradient",
      },
      {
        name: "framer",
        color: "pink-text-gradient",
      },
    ],
    image: mediaFinder,
    source_code_link: "https://github.com/J-Sierra/movie-search",
    demo_link: "https://j-sierra.github.io/movie-search/",
  },
];
export { services_spanish, experiences_spanish, projects_spanish };
