import { useState, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
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

function App() {
  const [count, setCount] = useState(0);

  const init = useCallback(async (engine) => {
    await loadFull(engine);
  });

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
              value: 30,
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
        <Header></Header>
        <AboutMe></AboutMe>
        <Slide></Slide>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
