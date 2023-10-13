import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";

const App = () => (
  <BrowserRouter>
    <div className="relative">
      <Navbar />
      <Hero />
      <div className="bg-semiTransperant ">
        <About />
        <Works />
        <Experience />
        <Tech />
      </div>
      <Contact />
      <StarsCanvas />
    </div>
  </BrowserRouter>
);

export default App;
