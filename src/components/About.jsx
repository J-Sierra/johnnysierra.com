import ReactParallaxTilt from "react-parallax-tilt";
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles.js";
import { services } from "../constants/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";
import { SectionWrapper } from "../HOC";
import { useSpanish } from "../Context/SpanishContext.jsx";
import { services_spanish } from "../constants/spanish.js";

const ServiceCard = ({ index, title, icon, link }) => {
  return (
    <ReactParallaxTilt className="xs:w-[250px] w-full cursor-pointer">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        onClick={() => {
          window.open(link, "_blank");
        }}
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex flex-col items-center justify-center"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </ReactParallaxTilt>
  );
};

const About = () => {
  const { spanish } = useSpanish();
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          {!spanish ? "Who I am so far" : "Quién soy hasta ahora"}
        </p>
        <h2 className={styles.sectionHeadText}>
          {!spanish ? "Overview" : "Resumen"}
        </h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {spanish
            ? "¡Bienvenido a mi espacio digital! Soy Johnny Sierra, un apasionado ingeniero de aplicaciónes digitales con talento para crear experiencias de internet inmersivas y receptivas. Mi trayectoria en el paisaje tecnológico en constante evolución me ha dotado de experiencia en React, React Native, JavaScript, HTML y CSS. Más allá de programar, mi entusiasmo se encuentra en la intersección de la tecnología y el diseño, asegurando que cada proyecto que emprendo no solo sea funcional sino también centrado en el usuario y visualmente atractivo. Únete a mí en este emocionante viaje digital, donde cada línea de código cuenta una historia y cada proyecto es un testimonio de mi compromiso de construir una mejor red."
            : "Welcome to my digital space! I'm Johnny Sierra, a passionate software engineer with a knack for crafting immersive and responsive web experiences. My journey in the ever-evolving tech landscape has equipped me with expertise in React, React Native, JavaScript, HTML, and CSS. Beyond coding, my enthusiasm lies in the intersection of technology and design, ensuring every project I undertake is not just functional but also user-centric and visually engaging. Join me on this exciting digital journey, where each line of code tells a story and every project is a testament to my commitment to building a better web."}
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-10">
        {!spanish
          ? services.map((service, index) => (
              <ServiceCard key={index} index={index} {...service} />
            ))
          : services_spanish.map((service, index) => (
              <ServiceCard key={index} index={index} {...service} />
            ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
