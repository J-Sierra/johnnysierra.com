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
            <div className="navLink">Experience</div>
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
                Hello! My name is Johnny and make stuff that lives on the
                internet. My interest in web design started back in
              </p>
            </div>
          </section>
          <section id="experience">
            <div className="inner">test3</div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
