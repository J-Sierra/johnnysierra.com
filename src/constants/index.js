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
    link: "https://drive.google.com/file/d/1F3cE6J27PD5ZBQfXDjaeuy6hf3FhIISD/view?usp=sharing",
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
    title: "React Developer",
    company_name: "R & R Fleet Tech",
    icon: RR,
    iconBg: "#E6DEDD",
    date: "August 2016 - July 2019",
    points: [
      "Leveraging the network of connections and friends cultivated during my academic journey, I secured a significant role in developing a groundbreaking program. This application seamlessly combined various tools for billing, pricing, dispatching, and schematics, streamlining operations for a Houston-based fleet service.",
      "Spearheading the project, I engineered a robust manager page within the program. This page facilitated real-time tracking of employees across Houston through a mobile app, providing managers with a comprehensive view of the field. This innovative solution enhanced operational efficiency and strategic decision-making.",
      "Through the implementation of React and React Native, I empowered mobile mechanics with a user-friendly interface. The mobile app allowed employees to receive job assignments, view schematics, and communicate seamlessly. This not only improved job execution but also enhanced overall communication within the team.",
      "Harnessing the capabilities of Firebase and other cutting-edge technologies, I designed a system that enabled dynamic job creation, accurate pricing, and efficient billing processes. This not only simplified administrative tasks but also ensured a high level of accuracy and transparency in the service's financial operations.",
    ],
  },
  {
    title: "Web Operations Specialist - Autonomous Vehicle Operator",
    company_name: "Nuro",
    icon: nuro,
    iconBg: "#383E56",
    date: "September 2019 - May 2023",
    points: [
      "Played a pivotal role in utilizing and refining cutting-edge web-based monitoring tools to oversee the performance of autonomous vehicles.",
      "Leveraged web interfaces to analyze real-time data streams, ensuring the seamless integration of monitoring solutions into daily operations.",
      "Worked closely with cross-functional teams to enhance the user interfaces of web tools, resulting in improved efficiency in vehicle operations.",
      "Provided valuable insights to optimize the user experience, contributing to the continuous improvement of web-based interfaces.",
      "Collaborated with the development team in implementing innovative data analysis platforms accessible through web interfaces.",
      "Participated in refining tools that facilitated the interpretation of complex data, aiding in decision-making processes for autonomous vehicle operations.",
      "Assisted in the integration and deployment of web-based solutions that streamlined communication and coordination among autonomous vehicle systems.",
      "Played a key role in the adoption of web tools designed to enhance the operational capabilities of autonomous vehicles.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
        name: "redux",
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

export { services, technologies, experiences, testimonials, projects };
