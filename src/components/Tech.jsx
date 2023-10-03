import { motion } from "framer-motion";
import { SectionWrapper } from "../HOC/index.js";
import { technologies } from "../constants";
import { textVariant } from "../utils/motion.js";
import { styles } from "../styles.js";
import { BallCanvas } from "./canvas/index.js";
import { useEffect, useState } from "react";

const Tech = () => {
  const [loadingQueue, setLoadingQueue] = useState([...technologies]);
  const [loadedComponents, setLoadedComponents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadNextBall = async () => {
      if (loadingQueue.length > 0 && !isLoading) {
        await new Promise((resolve) => setTimeout(resolve, 800));
        setIsLoading(true);
        const icon = loadingQueue[0].icon;

        setLoadedComponents((prev) => [
          ...prev,
          <BallCanvas key={icon} icon={icon} />,
        ]);

        setLoadingQueue((prevQueue) => prevQueue.slice(1));

        setIsLoading(false);
      }
    };

    loadNextBall();
  }, [loadingQueue, isLoading, loadedComponents]);

  return (
    <>
      <motion.div variants={textVariant()} className="pb-3">
        <p className={styles.sectionSubText}>What I have Learned so far</p>
        <h2 className={styles.sectionHeadText}>Technologies</h2>
      </motion.div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {loadedComponents.map((component, index) => (
          <div className="w-32 h-32 flex flex-col" key={index}>
            {component}
            <span className="text-center font-semibold text-sm">
              {technologies[index].name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
