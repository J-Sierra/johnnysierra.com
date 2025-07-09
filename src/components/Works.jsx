import ReactParallaxTilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../HOC";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../../../FSI.com/src/utils/motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { projects_spanish } from "../constants/spanish.js";
import { useSpanish } from "../Context/SpanishContext.jsx";

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  demo_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <ReactParallaxTilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl w-full sm:w-[360px] "
      >
        <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover gap-1">
            <motion.div
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => window.open(demo_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <FaExternalLinkAlt className="w-1/2 h-1/2 object-contain" />
            </motion.div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </ReactParallaxTilt>
    </motion.div>
  );
};

const Works = () => {
  const { spanish } = useSpanish();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>
          {spanish
            ? "Cosas que he creado hasta ahora"
            : "Things I've made so far"}
        </p>
        <h2 className={`${styles.sectionHeadText}`}>
          {spanish ? "Proyectos" : "Projects"}
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {spanish
            ? "Explora mi trabajo a través de los proyectos mostrados, ejemplos tangibles que reflejan mis habilidades y mi trayectoria. Cada proyecto se presenta con simplicidad, ofreciendo enlaces a repositorios de código y demos en vivo. Estas instancias del mundo real hablan de mi capacidad para abordar desafíos, navegar por diversas tecnologías y gestionar proyectos de manera efectiva, proporcionando una vista auténtica de mi experiencia."
            : "Explore my work through the showcased projects, tangible examples reflecting my skills and journey. Each project is introduced with simplicity, offering links to code repositories and live demos. These real-world instances speak to my ability to tackle challenges, navigate diverse technologies, and effectively manage projects, providing an authentic view of my experience."}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {!spanish
          ? projects.map((project, index) => (
              <ProjectCard key={index} index={index} {...project} />
            ))
          : projects_spanish.map((project, index) => (
              <ProjectCard key={index} index={index} {...project} />
            ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
