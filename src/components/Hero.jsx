import { styles } from "../styles.js";
import TechCube from "./TechCube.jsx";
import videoBackground from "../assets/herobg.mp4";
import { useSpanish } from "../Context/SpanishContext.jsx";

const Hero = () => {
  const { spanish } = useSpanish();
  return (
    <section className="relative flex flex-col gap-20 justify-start items-center w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5}`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div className="pl-3">
          <h1 className={`${styles.heroHeadText} text-white`}>
            {!spanish ? "Hi, I'm" : "Hola, soy"}{" "}
            <span className="text-[#915eff]">Johnny Sierra</span>
          </h1>
          <p className={` ${styles.heroSubText} mt-2 text-white-100 `}>
            {!spanish
              ? "I make cool things for the internet"
              : "Creo cosas geniales para el internet"}{" "}
            <br className="sm:block hidden" />{" "}
            {!spanish
              ? "and the people that use it."
              : "y las personas que lo utiliza."}
          </p>
        </div>
      </div>

      <div className="absolute top-0  w-full h-full flex flex-col justify-center items-center">
        <video
          src={videoBackground}
          className="w-full h-full absolute left-0 object-cover z-[-4]"
          preload="auto"
          playsInline
          loop
          muted
          autoPlay
          style={{ WebkitTransform: "translate3d(0,0,0)" }}
        />
        <TechCube classname="" />
      </div>
      <div
        className={`${styles.paddingX} absolute bottom-24 right-0 left-0 max-w-7xl mx-auto flex flex-row items-start justify-end gap-5}`}
      >
        <div className="pr-3 self-end">
          <p className={` ${styles.heroSubText} mt-2 text-white-100 text-end `}>
            {!spanish
              ? "Discover a collection of innovative projects"
              : "Descubre una colección de proyectos innovadores"}
            <br className="sm:block hidden" />{" "}
            {!spanish
              ? "and solutions I've crafted for the digital world."
              : "y soluciones que he creado para el mundo digital."}
          </p>
          <h1 className={`${styles.heroHeadText} text-white`}>
            {!spanish ? "Explore my" : "Explora mis"}{" "}
            <span className="text-[#915eff]">
              {!spanish ? "Projects" : "Proyectos"}
            </span>
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-1 sm:h-80 h-40 violet-gradient rotate-180" />
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
