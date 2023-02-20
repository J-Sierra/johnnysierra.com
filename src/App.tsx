import React from "react";
import "./App.css";
import { AiOutlineLinkedin } from "react-icons/all";
function App() {
  return (
    <div className="App">
      <header className="Header">
        <nav className="nav">
          <div className="logo">
            <strong>JS</strong>
          </div>
          <div className="navElements">
            <div>About</div>
            <div>Experience</div>
            <div>Work</div>
            <div>Resume</div>
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
            <div>
              <p>Hi, my name is Johnny Sierra</p>
            </div>
          </section>
          <section className="hero">test 2</section>
          <section className="hero">test3</section>
        </main>
      </div>
    </div>
  );
}

export default App;
