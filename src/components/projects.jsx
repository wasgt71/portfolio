import { useState, useEffect } from "react";
import axios from "axios";

function Projects() {
  const [projects, setProjects] = useState([]);
  const [lock, setLock] = useState(true);

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
      <div id="projects-container">
        <button onClick={slideBackward}>slide</button>
        {projects.length > 0 && (
          <div className="project-item">
            <div id="image-wrap">
              <img id="chatbot-img" src="/chatbot.png" alt="Ai-Chatbot" />
              <div id="overlay">
                <p id="overlay-text">{projects[0].name}</p>
                <a href={projects[0].url}>
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

        {projects.length > 1 && (
          <div className="project-item">
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
          <div className="project-item">
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
        <button onClick={slideForward}>Slide</button>
      </div>
    </>
  );
}

export default Projects;
