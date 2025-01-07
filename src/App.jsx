import { useState, useCallback, useEffect } from "react";
import reactLogo from "./assets/react.svg";

import "./App.css";
import Projects from "./components/projects.jsx";
import AboutMe from "./components/aboutme.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Contact from "./components/contact.jsx";
import Slide from "./components/3dslider.jsx";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Tools from "./components/tools.jsx";

function App() {
  const [count, setCount] = useState(0);

  const init = useCallback(async (engine) => {
    await loadFull(engine);
  });

  const [currentSection, setCurrentSection] = useState(0); // State to track the current section index

  const sections = ["about", "tools", "projects"]; // Section identifiers

  // Handle scroll wheel events to navigate sections
  const handleWheel = (event) => {
    if (event.deltaY > 0) {
      if (currentSection < sections.length - 1) {
        setCurrentSection(currentSection + 1); // Scroll down
      }
    } else {
      if (currentSection > 0) {
        setCurrentSection(currentSection - 1); // Scroll up
      }
    }
  };

  // Scroll to the specific section on state change
  useEffect(() => {
    const sectionElement = document.getElementById(sections[currentSection]);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentSection]); // Runs when the currentSection state changes

  useEffect(() => {
    window.addEventListener("wheel", handleWheel, { passive: true });

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentSection]);


  return (
    <>
      <Particles
        id="particles"
        options={{
          particles: {
            fullScreen: {
              enable: true,
              zIndex: -10,
            },
            color: {
              value: "#7F00ED",
            },
            number: {
              value: 0,
            },
            opacity: {
              value: { min: 0.3, max: 1 },
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
            move: {
              direction: "bottom",
              enable: true,
              speed: { min: 0, max: 3 },
            },
          },
        }}
        init={init}
      ></Particles>

      <div id="app-container">
      <section id="about" className="section">
          <Header></Header>
          <AboutMe></AboutMe>
        </section>
        <section id="projects" className="section">
          <div id="tools-slide">
            <Slide></Slide>
          </div>
        </section>
        <section id="tools" className="section">
          <div id="octa">
            <Tools></Tools>
          </div>
          <Footer></Footer>
        </section>
      </div>
    </>
  );
}

export default App;
