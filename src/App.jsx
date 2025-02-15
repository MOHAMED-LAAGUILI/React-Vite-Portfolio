import { Routes, Route } from "react-router-dom";
import Hero from "./Pages/Hero";
import Page404 from "./Pages/Page-404";
import Testimonials from "./Pages/Testimonials";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import DevSkills from "./Pages/Skills";

function App() {
  return (
    <Routes>
      {/* Hero | Home*/}
      <Route path="/" element={<Hero />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<DevSkills />} />
      <Route path="/testimonials" element={<Testimonials />} />

      {/* 404 | Not Found Page */}
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default App;
