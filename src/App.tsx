import React, { useState } from "react";
import "./App.css";
import { AiOutlineLinkedin, AiFillGithub } from "react-icons/ai";
import { BiCopy } from "react-icons/bi";
import { FaDownload } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";
import JobCardTitle from "./jobCardTitle";
import JobCard from "./jobCard";
import Sudoku_Screenshot from "./Screenshot 2023-08-01 233726.png";

function App() {
  const [resumeHover, setResumeHover] = useState(false);
  const [downloaded, setDownloaded] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showCopied, setShowCopied] = useState(false);
  const [selectedJobCard, setSelectedJobCard] = useState(0);
  const [burgerMenuToggle, setBurgerMenuToggle] = useState(false);
  const resumePDFURL = "/Johnny Sierra - Resume.pdf";
  const emailAddress = "Johnny.Sierra.Dev@gmail.com";

  const handleJobCardTitleClick = (index: React.SetStateAction<number>) => {
    setSelectedJobCard(index);
  };
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = resumePDFURL;
    link.download = "Johnny_Sierra_Resume.pdf"; // Provide the desired filename for the downloaded PDF
    link.click();
    setDownloaded(true); // Update the state to indicate that the resume has been downloaded
  };

  const handleEmailCopy = () => {
    navigator.clipboard
      .writeText(emailAddress)
      .then(() => {
        setShowTooltip(true);
      })
      .catch((error) => {
        console.error("Failed to copy email address:", error);
      });
    setShowCopied(true);

    // After 1.5 seconds, reset the showCopied state to hide the message
    setTimeout(() => {
      setShowCopied(false);
    }, 1000);
  };

  return (
    <div className="App">
      <header className="Header">
        <nav className="nav">
          <div id="logo">
            <strong
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#home");
              }}
            >
              JS
            </strong>
          </div>
          <div className="navElements">
            <div
              className="navLink"
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#about-section");
              }}
            >
              About
            </div>
            <div
              className="navLink"
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#experience-section");
              }}
            >
              Experience
            </div>
            <div
              className="navLink"
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#projects-section");
              }}
            >
              Projects
            </div>
            <div
              onMouseEnter={() => setResumeHover(true)}
              onMouseLeave={() => {
                setResumeHover(false);
                setDownloaded(false);
              }}
              id="resumeButton"
              style={{ cursor: "pointer" }}
              onClick={handleDownloadResume}
            >
              {resumeHover && !downloaded ? (
                <FaDownload />
              ) : downloaded ? (
                "Downloaded"
              ) : (
                "Resume"
              )}
            </div>
          </div>
          <div id="burger-menu">
            <div
              id="bars"
              onClick={() => {
                setBurgerMenuToggle(!burgerMenuToggle);
                setDownloaded(false);
              }}
              className={burgerMenuToggle ? "change" : ""}
            >
              <div id="bar1" className="bar"></div>
              <div id="bar2" className="bar"></div>
              <div id="bar3" className="bar"></div>
            </div>
            <nav
              id="burger-nav"
              className={burgerMenuToggle ? "burger-nav change" : "burger-nav"}
            >
              <ul>
                <li>
                  <a href="/#home">Home</a>
                </li>
                <li>
                  <a href="/#about-section">About</a>
                </li>
                <li>
                  <a href="/#experience-section"> Experience</a>
                </li>
                <li>
                  <a href="/#projects-section">Projects</a>
                </li>
                <li>
                  <div onClick={handleDownloadResume}>
                    {!downloaded ? (
                      <>
                        Resume <FaDownload />
                      </>
                    ) : downloaded ? (
                      "Downloaded"
                    ) : (
                      "Resume"
                    )}
                  </div>
                </li>
              </ul>
            </nav>
          </div>
          <div
            id="menu-bg"
            className={burgerMenuToggle ? "menu-bg change-bg" : "menu-bg"}
          ></div>
        </nav>
      </header>
      <div className="socials">
        <a
          href={"https://www.linkedin.com/in/johnny-sierra/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiOutlineLinkedin />
        </a>
        <a
          href={"https://github.com/J-Sierra/johnnysierra.com"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <div className="afterBar" />
      </div>

      <div
        className="emailTo"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div id="email" style={{ cursor: "pointer" }} onClick={handleEmailCopy}>
          {emailAddress}
          {showTooltip && (
            <div onClick={handleEmailCopy} className="tooltip">
              <BiCopy />
            </div>
          )}
          {showCopied && <div className="bubbleMessage">Copied!</div>}
        </div>
        <div className="afterBar" />
      </div>
      <div id="content">
        <main className={`scroll-container pages`}>
          <section className="scroll-section" id="hero">
            <div className="inner" id="home" style={{ position: "relative" }}>
              <div id="background-1" />
              <div style={{ zIndex: "100", position: "relative" }}>
                <h1>Hi, my name is</h1>
                <h2>Johnny Sierra.</h2>
                <h3>I build things for the web.</h3>
                <p>
                  I am a software engineer with a passion in designing
                  interactive and responsive designs made for humans.
                </p>
              </div>
            </div>
          </section>
          <section className="scroll-section" id="about-section">
            <div className="inner">
              <div className="section-title">
                <h1>About Me</h1>
                <div />
              </div>
              <p>
                Hello! I'm a React JS Developer with a unique background in the
                autonomous vehicle industry. Over three years, I've been deeply
                involved in optimizing algorithms, decoding real-time data, and
                thriving in collaborative environments.
                <br />
                <br /> My React JS journey has led me to craft some pretty cool
                projects that showcase my creative thinking. Engaging with the
                tech community through GitHub allows me to share my insights and
                stay up-to-date. Bringing my knack for problem-solving and a
                fresh outlook, I'm genuinely thrilled to merge my experiences
                into the world of coding!
                <br />
                <br />I am highly skilled in React, React Native, JavaScript,
                HTML, CSS, and Redux. I actively stay updated with the latest
                industry trends and emerging technologies. Constantly seeking to
                expand my knowledge, I'm always eager to explore new frameworks
                and languages to enhance my skill set.
              </p>
            </div>
          </section>
          <section className="scroll-section" id="experience-section">
            <div className="inner">
              <div className="section-title">
                <h1>Work Experience</h1>
                <div />
              </div>

              <div id="#experience" className="job-card-container">
                <div className="job-card-title-container">
                  <JobCardTitle
                    CompanyName={"NURO Inc."}
                    JobDates={"Oct 2019 - May 2023"}
                    onClick={() => handleJobCardTitleClick(0)}
                    active={selectedJobCard === 0}
                  />
                  <JobCardTitle
                    CompanyName={"R Kirk Enterprises"}
                    JobDates={"August 2017 - August 2019"}
                    onClick={() => handleJobCardTitleClick(1)}
                    active={selectedJobCard === 1}
                  />
                </div>
                <div
                  style={{
                    borderLeft: "2px solid #3d3d3d",
                    paddingLeft: "5px",
                  }}
                >
                  {selectedJobCard === 0 && (
                    <JobCard
                      companyName={"NURO Inc."}
                      dates={"Oct 2019 - May 2023"}
                      jobTitle={"Robitics Operator | Houston, Tx"}
                      className={
                        selectedJobCard === 0
                          ? "work-experience-block fade-in"
                          : "work-experience-block"
                      }
                    >
                      <p>
                        Nuro is an up and coming Robotics Delivery Startup
                        aiming to bring self-driving Robots to domestic
                        deliveries.
                      </p>
                      <ul>
                        <li>
                          <strong>Operated</strong> and navigated autonomous
                          vehicle systems, maintaining a high degree of
                          attention to detail and situational awareness.
                          -Analyzed real-time data streams from sensors and
                          cameras to ensure accurate vehicle operations and
                          decision-making.
                        </li>
                        <br />
                        <li>
                          <strong>Collaborated</strong> closely with
                          cross-functional teams of engineers, designers, and
                          researchers to troubleshoot and optimize vehicle
                          performance.
                        </li>
                        <br />
                        <li>
                          <strong>Developed</strong> and executed testing
                          procedures, iterating on software and hardware
                          configurations to improve autonomous driving
                          capabilities.
                        </li>
                        <br />
                        <li>
                          <strong>Applied</strong> problem-solving skills to
                          address unexpected scenarios, contributing to the
                          refinement of algorithms and control systems.
                        </li>
                        <br />
                        <li>
                          <strong>Adapted</strong> quickly to dynamic
                          environments, learning new technologies and protocols
                          to ensure safe and efficient vehicle operations.
                        </li>
                        <br />
                        <li>
                          <strong>Delivered</strong> captivating and informative
                          demos to investors, effectively conveying complex
                          technical concepts and the potential of autonomous
                          technology.
                        </li>
                        <br />
                        <li>
                          <strong>Provided</strong> valuable feedback on system
                          performance and usability, contributing to iterative
                          improvements.
                        </li>
                        <br />
                        <li>
                          <strong>Conducted</strong> thorough quality assurance
                          checks, ensuring the reliability and safety of
                          autonomous systems.
                        </li>
                      </ul>
                    </JobCard>
                  )}
                  {selectedJobCard === 1 && (
                    <JobCard
                      companyName={"R Kirk Enterprises"}
                      dates={"August 2017 - August 2019"}
                      jobTitle={"Software Developer | Houston, Tx"}
                    >
                      <p>
                        R Kirk Enterprises was a local fleet service company
                        that serviced the greater houston area.
                      </p>
                      <ul>
                        <li>
                          <strong>Spearheaded</strong> the creation,
                          development, and successful deployment of a
                          cutting-edge Fleet Management web application.
                        </li>
                        <br />
                        <li>
                          <strong>Designed</strong> and implemented real-time
                          GPS tracking functionality through a paired mobile
                          application, enabling dynamic task assignment and
                          employee tracking in the field.
                        </li>
                        <br />
                        <li>
                          <strong>Led</strong> a distributed team of developers
                          across three cities, fostering seamless collaboration
                          and efficient project development.
                        </li>
                        <br />
                        <li>
                          <strong>Developed</strong> a proprietary
                          fleet/employee management web program from the ground
                          up, ensuring a user-friendly interface and optimal
                          performance.
                        </li>
                        <br />
                        <li>
                          <strong>Demonstrated</strong> exceptional autonomy,
                          maintaining effective communication while working
                          remotely to ensure project milestones were met.
                        </li>
                        <br />
                        <li>
                          <strong>Engineered</strong> the application with
                          scalability in mind, ensuring seamless expansion to
                          accommodate teams of varying sizes.
                        </li>
                        <br />
                        <li>
                          <strong>Employed</strong> Firebase for deployment,
                          enabling the management team to access and utilize the
                          application effectively.
                        </li>
                        <br />
                        <li>
                          <strong>Collaborated</strong> with stakeholders to
                          gather requirements, refine features, and provide
                          technical insights, ensuring the application aligned
                          with business needs.
                        </li>
                      </ul>
                    </JobCard>
                  )}
                </div>
              </div>
            </div>
          </section>
          <section className="scroll-section" id="projects-section">
            {/* Title with yellow line **START** */}{" "}
            <div className="inner">
              <div className="section-title">
                <h1>Projects</h1>
                <div />
              </div>
              {/* Title with yellow line **END** */}

              <div id="project-cards">
                <div className="container">
                  <div className="card">
                    <div
                      style={{ cursor: "pointer" }}
                      onClick={() =>
                        window.open(
                          "https://j-sierra.github.io/React_Sudoku_Puzzle/",
                          "_blank"
                        )
                      }
                      className="image"
                    >
                      <img src={Sudoku_Screenshot} alt="Placeholder" />
                      <div className="overlay"></div>{" "}
                      {/* This will be the overlay */}
                      <div className="link-icon">
                        <a
                          href="https://j-sierra.github.io/React_Sudoku_Puzzle/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <AiOutlineLink />
                        </a>
                      </div>
                    </div>
                    <div className="content">
                      <h3>
                        Demo:{" "}
                        <span
                          id="sudokuLink"
                          onClick={() =>
                            window.open(
                              "https://j-sierra.github.io/React_Sudoku_Puzzle/",
                              "_blank"
                            )
                          }
                        >
                          Sudoku Puzzle
                        </span>
                      </h3>
                      <p>
                        I made a Sudoku puzzle using React as a way to better
                        learn React Redux.
                        <br />
                        <br />
                        Source code:{" "}
                        <a
                          href="https://github.com/J-Sierra/React_Sudoku_Puzzle"
                          target="_blank"
                          rel="noopener noreferrer"
                          id="sudoku-link"
                        >
                          GitHub Repository
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer
              style={{
                fontSize: "10px",
                textAlign: "right",
                marginRight: "40px",
                marginBottom: "10px",
                color: "white",
              }}
            >
              Created by Johnny Sierra &nbsp;|&nbsp; Source:{" "}
              <a
                href="https://github.com/J-Sierra/johnnysierra.com"
                target="_blank"
                rel="noopener noreferrer"
                id="footer-link"
              >
                GitHub
              </a>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
