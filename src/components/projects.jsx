import { useState, useEffect } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [lock, setLock] = useState("");
  const fetchProjects = async () => {
    const response = await axios.get(
      "https://api.github.com/users/wasgt71/repos"
    );
    console.log(response);
    const data = response.data;

    const projectData = data.map((project) => ({
      name: project.name,
      url: project.html_url,
    }));
    setProjects(projectData);
  };

  const slideForward = () => {
    setLock("slide");
    setTimeout(() => {
      const removeProjects = projects.splice(0, 3);
      console.log(removeProjects);
      const length = projects.length;
      const slide = projects.splice(
        length,
        1,
        removeProjects[0],
        removeProjects[1],
        removeProjects[2]
      );
      setProjects((prevProjects) => [...prevProjects]);
      setLock("");
    }, 5000);

    console.log(projects);
  };

  const slideBackward = () => {
    const length = projects.length;
    const removeProjects = projects.splice(length - 3, 3);
    const slide = projects.splice(
      0,
      0,
      removeProjects[0],
      removeProjects[1],
      removeProjects[2]
    );
    console.log(projects);
    setProjects((prevProject) => [...prevProject]);
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      {" "}
      {/*projects container */}
      <div id="container">
        <div className="carousel-view">
          <button className="slide-btn" onClick={slideBackward}>
            slide
          </button>

     

          {projects.map((project) => {
            return (
              <>
                <div class={lock} id="project-item">
                  {/* id="image-wrap"*/}
                  <div id="item-list" className="item-list">
                    {/*id="chatbot-img"*/}
                    <img id="item" src="/chatbot.png" alt="Ai-Chatbot" />
                    <div id="overlay">
                      <p id="overlay-text">{project.name}</p>
                      <a href={project.url}>
                        <img
                          src="./github.png"
                          alt="GitHub Logo"
                          id="github-favicon"
                        />
                      </a>
                      <button id="live-view">View</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>

        {projects.length > 1 && (
          <div className={lock} id="project-item">
            <div id="image-wrap">
              <img id="chatbot-img" src="/chatbot.png" alt="Ai-Chatbot" />
              <div id="overlay">
                <p id="overlay-text">{projects[1].name}</p>
                <a href={projects[1].url}>
                  <img
                    src="./github.png"
                    alt="GitHub Logo"
                    id="github-favicon"
                  />
                </a>
                <button id="live-view">View</button>
              </div>
            </div>
          </div>
        )}

        {projects.length > 2 && (
          <div class={lock} id="project-item">
            <div id="image-wrap">
              <img id="chatbot-img" src="/chatbot.png" alt="Ai-Chatbot" />
              <div id="overlay">
                <p id="overlay-text">{projects[2].name}</p>
                <a href={projects[2].url}>
                  <img
                    src="./github.png"
                    alt="GitHub Logo"
                    id="github-favicon"
                  />
                </a>
                <button id="live-view">View</button>
              </div>
            </div>
          </div>
        )}
        <button className="slide-btn" onClick={slideForward}>
          Slide
        </button>
      </div>
    </>
  );
}

export default Projects;
