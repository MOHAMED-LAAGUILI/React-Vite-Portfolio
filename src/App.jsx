import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Page404 from './components/Page-404';
import About from "./components/About";
import Services from './components/Services';
import Contact from './components/Contact';
import Projects from './components/Projects';
function App() {
 
  return (
    <Routes>
    {/* Hero | Home*/}
    <Route path="/Home" element={<Hero />} />
     {/* About me */}
    <Route path="/About-me" element={<About />} />
     {/* Services */}
    <Route path="/Services" element={<Services />} />
     {/* Projects */}
    <Route path="/Projects" element={<Projects />} />
     {/* Contact me */}
    <Route path="/Contact-me" element={<Contact />} />
   
    {/* 404 | Not Found Page */}
    <Route path="*" element={<Page404 />} />
  </Routes>
  )
}

export default App
