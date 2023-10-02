import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../HOC/index.js";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion.js";
import { styles } from "../styles.js";
import { motion } from "framer-motion";

const Tech = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="pb-3">
        <p className={styles.sectionSubText}>What I have Learned so far</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-32 h-32 flex flex-col" key={technology.name}>
            <BallCanvas icon={technology.icon} />
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
