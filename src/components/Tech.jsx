import { motion } from "framer-motion";
import { SectionWrapper } from "../HOC/index.js";
import { technologies } from "../constants";
import { textVariant } from "../../../FSI.com/src/utils/motion.js";
import { styles } from "../styles.js";
import { useSpanish } from "../Context/SpanishContext.jsx";

const Tech = () => {
  const { spanish } = useSpanish();
  return (
    <>
      <motion.div variants={textVariant()} className="pb-3">
        <p className={styles.sectionSubText}>
          {!spanish
            ? "What I have Learned so far"
            : "Lo que he aprendido hasta ahora"}
        </p>
        <h2 className={styles.sectionHeadText}>
          {!spanish ? "Technologies" : "Tecnologías"}
        </h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology, index) => (
          <div className="w-32 h-32 flex flex-col" key={index}>
            <div className="w-28 h-28" key={technology.name}>
                <img src={technology.icon} alt={technology.name} className="w-full h-full object-contain" />
            </div>
            <span className="text-center font-semibold text-sm">
              {technology.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
