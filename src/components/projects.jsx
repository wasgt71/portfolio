
function Projects() {
    return (
        <>
        <section id="projects">
          <div id="projHeading">
            <img id="projImg" src="./images/projects.png" alt="Projects" />
          </div>
          <div className="project-grid">
            <div className="image-container">
              <img
                className="projImg"
                src="./images/battleship.png"
                alt="Battleship game screenshot"
              />
              <div className="overlay-text">
                BattleShip Game using Breadth-First Search Algorithm
                <br />
                <a
                  href="https://github.com/yourusername/battleship"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="./favicons/github.png"
                    alt="GitHub Logo"
                    className="github-favicon"
                  />
                </a>
                <button className="live-view">View</button>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}

export default Projects;