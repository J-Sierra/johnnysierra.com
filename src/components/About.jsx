import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles.js";
import { services } from "../constants/index.js";
import { fadeIn, textVariant } from "../utils/motion.js";
import * as PropTypes from "prop-types";
import ReactParallaxTilt from "react-parallax-tilt";
import { SectionWrapper } from "../HOC";

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

ServiceCard.propTypes = {
  icon: PropTypes.any,
  index: PropTypes.number,
  title: PropTypes.any,
  link: PropTypes.any,
};
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Who I am so far</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Welcome to my digital space! I{"'"}m Johnny Sierra, a passionate
        software engineer with a knack for crafting immersive and responsive web
        experiences. My journey in the ever-evolving tech landscape has equipped
        me with expertise in React, React Native, JavaScript, HTML, and CSS.
        Beyond coding, my enthusiasm lies in the intersection of technology and
        design, ensuring every project I undertake is not just functional but
        also user-centric and visually engaging. Join me on this exciting
        digital journey, where each line of code tells a story and every project
        is a testament to my commitment to building a better web.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
