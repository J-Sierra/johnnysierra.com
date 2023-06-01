import React from "react";
import "./App.css";
import { AiOutlineLinkedin } from "react-icons/all";
function App() {
  return (
    <div className="App">
      <header className="Header">
        <nav className="nav">
          <div id="logo">
            <strong
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#");
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
                window.location.replace("/#about");
              }}
            >
              About
            </div>
            <div
              className="navLink"
              onClick={(e) => {
                e.preventDefault();
                window.location.replace("/#experience");
              }}
            >
              Experience
            </div>
            <div className="navLink">Work</div>
            <div id="resumeButton">Resume</div>
          </div>
        </nav>
      </header>
      <div className="socials">
        <AiOutlineLinkedin />
        <div className="afterBar" />
      </div>
      <div className="emailTo">
        <div id="email">Johnny.Sierra.Dev@gmail.com</div>
        <div className="afterBar" />
      </div>
      <div id="content">
        <main className="pages">
          <section className="hero">
            <div className="inner" style={{ position: "relative" }}>
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
          <section id="about">
            <div className="inner">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h1 style={{ fontSize: "40px" }}>About Me</h1>
                <div
                  style={{
                    height: "1px",
                    width: "75%",
                    background: "#ffd500",
                  }}
                />
              </div>
              <p>
                Welcome to my personal website! I'm Johnny Sierra, a passionate
                software developer with a drive for creating innovative and
                efficient solutions. With 2 years of experience in the industry,
                I specialize in front-end web development with a focus on React.
                <br />
                <br />I am highly skilled in React, React Native, JavaScript,
                HTML, CSS, and Redux. I actively stay updated with the latest
                industry trends and emerging technologies. Constantly seeking to
                expand my knowledge, I'm always eager to explore new frameworks
                and languages to enhance my skill set.
              </p>
            </div>
          </section>
          <section id="experience-section">
            <div className="inner">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h1 style={{ fontSize: "40px" }}>Work Experience</h1>
                <div
                  style={{
                    height: "1px",
                    width: "75%",
                    background: "#ffd500",
                  }}
                />
              </div>
              <div
                className={"work-experience-block"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "-35px",
                  }}
                >
                  <h1>NURO Inc.</h1>
                  <p>Oct 2019 - May 2023</p>
                </div>
                <h4 style={{ color: "#D3D3D382" }}>
                  Robotic Specialist/Software Development
                </h4>
                <div>
                  <p>
                    Nuro is an up and coming Robotics Delivery Startup aiming to
                    bring self-driving Robots to domestic deliveries.
                  </p>
                  <ul>
                    <li>
                      <strong>Developed -</strong> Worked as part of a team to
                      implement in-house web tools dedicated to improving
                      productivity.
                    </li>
                    <li>
                      <strong>Maintained -</strong> Tested and implemented
                      changes to the autonomous robot platform software.
                    </li>
                    <li>
                      <strong>Documented -</strong> Reported and documented any
                      edge cases in the software to ensure robustness.
                    </li>
                    <li>
                      <strong>Upkeep -</strong> Maintained the highest level of
                      safety for the operation of the autonomous robot platform.
                    </li>
                    <li>
                      <strong>Communication -</strong> Ensured efficient and
                      concise communication among 4 cities of operations.
                    </li>
                  </ul>
                </div>
              </div>

              <div
                className={"work-experience-block"}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "-35px",
                  }}
                >
                  <h1>R Kirk Enterprises</h1>
                  <p>August 2017 - August 2019</p>
                </div>
                <h4 style={{ color: "#D3D3D382" }}>Software Developer</h4>
                <div>
                  <p>
                    Nuro is an up and coming Robotics Delivery Startup aiming to
                    bring self-driving Robots to domestic deliveries.
                  </p>
                  <ul>
                    <li>
                      <strong>Developed -</strong> Worked as part of a team to
                      implement in-house web tools dedicated to improving
                      productivity.
                    </li>
                    <li>
                      <strong>Maintained -</strong> Tested and implemented
                      changes to the autonomous robot platform software.
                    </li>
                    <li>
                      <strong>Documented -</strong> Reported and documented any
                      edge cases in the software to ensure robustness.
                    </li>
                    <li>
                      <strong>Upkeep -</strong> Maintained the highest level of
                      safety for the operation of the autonomous robot platform.
                    </li>
                    <li>
                      <strong>Communication -</strong> Ensured efficient and
                      concise communication among 4 cities of operations.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
