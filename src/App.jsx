import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Projects from "./components/projects.jsx";
import AboutMe from "./components/aboutme.jsx";
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      
      <Header></Header>
       <AboutMe></AboutMe>
        <Projects></Projects>
        <Footer></Footer>

    </>
  );
}

export default App;
