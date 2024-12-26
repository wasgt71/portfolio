import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <header>
          <h1>Hi, I'm Tristan Wassilyn.</h1>
          <h3 id="proTitle">Full Stack JavaScript Developer</h3>
        </header>

        <section id="about">
          <div id="profile-container">
            <div id="profile-image">
              <img
                id="pp"
                src="photo.png"
                alt="Tristan Wassilyn's profile picture"
              />
            </div>
            <div id="profile">
              <h2>About Me</h2>
              <p>
                Hello! My name is Tristan, and I am a developer who specializes
                in JavaScript. I started programming as a hobby that turned into
                an addiction. I've been writing software almost every day since.
                I am passionate about creating applications that either automate
                or make other people's lives easier. I also love a good
                challenge and enjoy tackling seemingly impossible projects to
                learn and grow.
              </p>
            </div>
          </div>
        </section>

        <section id="section-skills">
          <div id="container-skills">
            <h1 id="skillH">Skills</h1>
            <h3 id="skillH3">
              React, Git, Webpack, Jest, and more. Currently learning Node.js.
            </h3>
            <img
              id="laptop"
              src="laptop.png"
              alt="Laptop with code on screen"
            />
            <div id="skills">
              <span id="f1">
                <img
                  className="favicon"
                  src="./favicons/eslint.png"
                  alt="ESLint"
                />
              </span>
              <span id="f2">
                <img className="favicon" src="./favicons/git.png" alt="Git" />
              </span>
              <span id="f3">
                <a href="https://github.com/yourusername">
                  <img
                    className="favicon"
                    src="./favicons/github.png"
                    alt="GitHub"
                  />
                </a>
              </span>
              <span id="f4">
                <img className="favicon" src="./favicons/jest.png" alt="Jest" />
              </span>
              <span id="f5">
                <img
                  className="favicon"
                  src="./favicons/prettier.png"
                  alt="Prettier"
                />
              </span>
              <span id="f6">
                <img
                  className="favicon"
                  src="./favicons/react.png"
                  alt="React"
                />
              </span>
              <span id="f7">
                <img
                  className="favicon"
                  src="./favicons/vscode.png"
                  alt="VSCode"
                />
              </span>
              <span id="f8">
                <img
                  className="favicon"
                  src="./favicons/webpack.png"
                  alt="Webpack"
                />
              </span>
            </div>
          </div>
        </section>

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

        <footer>
          <div>
            <p>&copy; 2024 By Tristan Wassilyn. Made with tenacity.</p>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
