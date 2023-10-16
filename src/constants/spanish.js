import {
  mobile,
  RR,
  nuro,
  uhv,
  sudoku,
  mediaFinder,
  linkedin,
  github,
} from "../assets";

export const navLinks_spanish = [
  {
    id: "about",
    title: "Acerca de",
  },
  {
    id: "work",
    title: "Trabajo",
  },
  {
    id: "contact",
    title: "Contacto",
  },
];
const services_spanish = [
  {
    title: "Mi perfil de LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/johnny-sierra/",
  },
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
    title: "Licenciatura en Ciencias de Computación",
    company_name: "Universidad de Houston",
    icon: uhv,
    iconBg: "#383E56",
    date: "Febrero de 2011 - Marzo de 2016",
    points: [
      "Innovando como el primero en mi familia en graduarme de la escuela secundaria y la universidad, obtuve mi título en la Universidad de Houston - Victoria, marcando un logro significativo en la trayectoria de nuestra familia.",
      "Buscando una educación superior mientras residía en la vibrante ciudad de Houston, integré sin problemas mis estudios en la Universidad de Houston - Victoria con la dinámica trama cultural de la cuarta ciudad más grande de los Estados Unidos.",
      "Con una especialización en diseño de videojuegos, me sumergí en el emocionante mundo del entretenimiento interactivo. Como testimonio de mi pasión, creé un cautivador videojuego utilizando Unreal Engine 4 para mi proyecto final, mostrando tanto habilidades técnicas como narración creativa.",
      "Demostrando espíritu emprendedor, lancé un generador de laberintos en el Unreal Engine Marketplace. Esta iniciativa no solo contribuyó a la comunidad de desarrollo de juegos, sino que también subrayó mi compromiso de compartir recursos valiosos dentro de la industria.",
    ],
  },
  {
    title: "Desarrollador de React",
    company_name: "R & R Fleet Tech",
    icon: RR,
    iconBg: "#E6DEDD",
    date: "Agosto de 2016 - Julio de 2019",
    points: [
      "Aprovechando la red de conexiones y amigos cultivada durante mi trayectoria académica, aseguré un papel importante en el desarrollo de un programa innovador. Esta aplicación combinaba de manera fluida varias herramientas para facturación, precios, despacho y esquemas, optimizando las operaciones de un servicio de flota en Houston.",
      "Dirigí el proyecto, diseñando una sólida página de administración dentro del programa. Esta página facilitó el seguimiento en tiempo real de los empleados en Houston a través de una aplicación móvil, brindando a los gerentes una vista completa del campo. Esta solución innovadora mejoró la eficiencia operativa y la toma de decisiones estratégicas.",
      "A través de la implementación de React y React Native, empoderé a los mecánicos móviles con una interfaz fácil de usar. La aplicación móvil permitió a los empleados recibir asignaciones de trabajo, ver esquemas y comunicarse de manera fluida. Esto no solo mejoró la ejecución del trabajo, sino que también mejoró la comunicación general dentro del equipo.",
      "Aprovechando las capacidades de Firebase y otras tecnologías de vanguardia, diseñé un sistema que permitía la creación dinámica de trabajos, precios precisos y procesos de facturación eficientes. Esto no solo simplificó las tareas administrativas, sino que también aseguró un alto nivel de precisión y transparencia en las operaciones financieras del servicio.",
    ],
  },
  {
    title: "Especialista en Operaciones Web",
    company_name: "Nuro",
    icon: nuro,
    iconBg: "#383E56",
    date: "Septiembre de 2019 - Mayo de 2023",
    points: [
      "Jugué un papel crucial en la utilización y perfeccionamiento de herramientas de monitoreo basadas en la web de última generación para supervisar el rendimiento de vehículos autónomos.",
      "Utilicé interfaces web para analizar flujos de datos en tiempo real, asegurando la integración sin problemas de soluciones de monitoreo en las operaciones diarias.",
      "Trabajé en estrecha colaboración con equipos multifuncionales para mejorar las interfaces de usuario de las herramientas web, lo que resultó en una mayor eficiencia en las operaciones de vehículos.",
      "Proporcioné ideas valiosas para optimizar la experiencia del usuario, contribuyendo a la mejora continua de las interfaces basadas en la web.",
      "Colaboré con el equipo de desarrollo en la implementación de plataformas innovadoras de análisis de datos accesibles a través de interfaces web.",
      "Participé en la mejora de herramientas que facilitaron la interpretación de datos complejos, ayudando en los procesos de toma de decisiones para las operaciones de vehículos autónomos.",
      "Ayudé en la integración y implementación de soluciones basadas en la web que optimizaron la comunicación y coordinación entre sistemas de vehículos autónomos.",
      "Jugué un papel clave en la adopción de herramientas web diseñadas para mejorar las capacidades operativas de los vehículos autónomos.",
    ],
  },
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
