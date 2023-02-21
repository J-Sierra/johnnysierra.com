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
                Hello! My name is Johnny and I make stuff that lives on the
                internet. <br /> My interest in web design started back in 2011
                when I started my college career. I have always been fascinated
                by technology since my childhood, tinkering with everything I
                could get my hands on. I would take apart TV's, VCR's, vacuums,
                toys, just to see how they worked and for the challenge of been
                able to put them back together.
              </p>
            </div>
          </section>
          <section id="experience">
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
              <div></div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
