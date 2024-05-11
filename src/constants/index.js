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
  threejs,
  uhv,
  firebase,
  java,
  expressJs,
  sudoku,
  mediaFinder,
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
    link: "https://docs.google.com/document/d/1nn1BR1svhIK1PH8k9OLsSVyYRH0gxl33rYLFtu8ccUo/edit?usp=sharing",
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
    date: "February 2011 - March 2016",
    points: [
      "Breaking new ground as the first in my family to graduate high school and college, I earned my degree at the University of Houston - Victoria, marking a significant achievement in our family's journey.",
      "Pursuing higher education while residing in the vibrant city of Houston, I seamlessly integrated my studies at the University of Houston - Victoria with the dynamic cultural tapestry of the fourth-largest city in the United States.",
      "With a minor in video game design, I delved into the exciting world of interactive entertainment. As a testament to my passion, I crafted a captivating video game using Unreal Engine 4 for my final project, showcasing both technical proficiency and creative storytelling.",
      " Demonstrating entrepreneurial spirit, I released a maze generator asset on the Unreal Engine Marketplace. This venture not only contributed to the game development community but also underscored my commitment to sharing valuable resources within the industry.",
    ],
  },
  {
    title: " Software Developer",
    company_name: "R Kirk Enterprises",
    icon: RR,
    iconBg: "#E6DEDD",
    date: "August 2016 - August 2019",
    points: [
      "Initiated and delivered a manager page for real-time employee tracking, integrating regulatory compliance into the design to enhance operational efficiency and strategic decision-making.",
      "Engineered a React and React Native-based interface for mobile mechanics, ensuring the system met industry compliance standards while improving job execution and team communication.",
      "Collaborated with cross-functional teams to upgrade user interfaces and web tools, improving operational efficiency and compliance with regulatory standards in vehicle operations.",
      "Designed a job management and billing system using Firebase, prioritizing regulatory compliance in job assignment, pricing, and financial operations to maintain transparency and accuracy.",
    ],
  },
  {
    title: "Web Systems Engineer",
    company_name: "Nuro",
    icon: nuro,
    iconBg: "#383E56",
    date: "September 2019 - May 2023",
    points: [
      "Led the development of advanced web-based monitoring tools for autonomous vehicles, ensuring adherence to industry safety and regulatory standards, enhancing system reliability and operational efficiency.",
      "Conducted comprehensive data analysis through web interfaces, aligning monitoring solutions with regulatory compliance requirements and operational goals.",
      "Collaborated with cross-functional teams to upgrade user interfaces and web tools, improving operational efficiency and compliance with regulatory standards in vehicle operations.",
      "Developed and integrated data analysis platforms via web interfaces, facilitating robust decision-making processes compliant with industry regulations.",
      "Streamlined communication and coordination among autonomous vehicle systems through web-based solutions, ensuring regulatory and operational efficacy.",
    ],
  },
];

const projects = [
  {
    name: "Sudoku Puzzle",
    description:
      "This project showcases my adeptness in web development, emphasizing intuitive UI and seamless state management for an engaging puzzle-solving journey.",
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
  },
];

export { services, technologies, experiences, projects };
