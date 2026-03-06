import {
  mobile,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  RR,
  nuro,
    fullscope,
  threejs,
  uhv,
  firebase,
  sudoku,
  triumph_mockup,
  linkedin,
  github,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "My LinkedIn Profile",
    icon: linkedin,
    link: "https://www.linkedin.com/in/johnny-sierra/",
  },
  {
    title: "My GitHub Profile",
    icon: github,
    link: "https://github.com/J-Sierra",
  },
  {
    title: "My Resume",
    icon: mobile,
    link: "https://docs.google.com/document/d/1kJVuDj_IchXOvzBinZAhvdSerIRMfUiFC_HSEUOkb0U/edit?usp=sharing",
  },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "CSS 3", icon: css },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "Firebase", icon: firebase },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  //
  // { name: "Java", icon: java },
  // { name: "Express.js", icon: expressJs },
];

const experiences = [
  {
    title: "Bachelor of Science in Computer Science",
    company_name: "University of Houston",
    icon: uhv,
    iconBg: "#383E56",
    date: "2016",
    points: [
      "First-generation college graduate in my family.",
      "Minor in Video Game Design.",
      "Final project: built an interactive 3D video game in Unreal Engine 4, showcasing both technical and creative storytelling.",
      "Released a maze generator asset on the Unreal Engine Marketplace, contributing to the game dev community.",
    ],
  },
  {
    title: " Software Developer",
    company_name: "R Kirk Enterprises",
    icon: RR,
    iconBg: "#E6DEDD",
    date: "August 2017 - August 2019",
    points: [
      "Built a real-time employee tracking manager page, integrating regulatory compliance to boost operational efficiency and decision-making.",
      "Developed React and React Native interfaces for mobile mechanics, ensuring compliance while streamlining job execution and communication.",
      "Partnered with cross-functional teams to enhance web tools and UI, improving workflow efficiency and compliance with regulatory standards.",
      "Designed a job management and billing system in Firebase, ensuring transparency, accuracy, and compliance in pricing and financial operations.",
    ],
  },
  {
    title: "Web Systems Engineer",
    company_name: "Nuro",
    icon: nuro,
    iconBg: "#383E56",
    date: "September 2019 - May 2023",
    points: [
      "Led development of advanced monitoring tools for autonomous vehicles, meeting safety and compliance standards while improving reliability.",
      "Created web-based data analysis platforms to align monitoring solutions with regulatory and operational requirements.",
      "Collaborated across teams to refine web tools and interfaces, improving operational efficiency and usability.",
      "Streamlined communication workflows among autonomous vehicle systems through web-based platforms, ensuring regulatory adherence.",
    ],
  },
    {
        title: "Front-End Developer",
        company_name: "Fullscope Insurance",
        icon: fullscope,
        iconBg: "#fff",
        date: "August 2024 – December 2024",
        points: [
            "Rebuilt and optimized the company’s marketing site using React and Tailwind CSS, improving page load performance by 30% and enhancing cross-device responsiveness.",
            "Implemented pixel-perfect Figma designs into scalable front-end components, ensuring design consistency across desktop and mobile platforms.",
            "Developed and integrated dynamic form components to streamline insurance quote submissions, reducing friction in the lead capture process.",

        ],
    },
];

const projects = [
  {
    name: "Sudoku Puzzle",
    description:
      "Built an interactive Sudoku game with React, Tailwind, and Framer Motion, focusing on state management and user experience. Implemented grid logic, animations, and responsive layouts for seamless play on desktop and mobile. Optimized performance and accessibility for a smooth, engaging puzzle-solving experience.",
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
/*  {
    name: "Media Finder",
    description:
      "Using React and OmdbAPI, my movie search project delivers a swift and straightforward one-page search experience, providing detailed information about a movie instantly.",
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
  },*/
  {
    name: "Triumph Ministries",
    description:
        "A mockup website for Triumph Ministries, built with Html, CSS, and JavaScript. This project showcases my ability to create visually appealing and functional web designs.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: triumph_mockup,
    source_code_link: "https://github.com/J-Sierra/Triumph-Mockup",
    demo_link: "https://j-sierra.github.io/Triumph-Mockup/",
  },
];

export { services, technologies, experiences, projects };
