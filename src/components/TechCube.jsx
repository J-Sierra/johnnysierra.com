import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { SiTailwindcss } from "react-icons/si";

const TechCube = () => {
  return (
    <div className="">
      <div className="cubespinner">
        <div className="face1">
          <SiTailwindcss color="#DD0031" />
        </div>
        <div className="face2">
          <FontAwesomeIcon icon={faHtml5} color="#F06529" />
        </div>
        <div className="face3">
          <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
        </div>
        <div className="face4">
          <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
        </div>
        <div className="face5">
          <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
        </div>
        <div className="face6">
          <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
        </div>
      </div>
    </div>
  );
};
export default TechCube;
