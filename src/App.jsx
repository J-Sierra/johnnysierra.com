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
import { SpanishProvider } from "./Context/SpanishContext.jsx";

const App = () => (
  <BrowserRouter>
    <SpanishProvider>
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
    </SpanishProvider>
  </BrowserRouter>
);

export default App;
