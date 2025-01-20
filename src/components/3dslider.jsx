import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Slide() {
  const [projects, setProjects] = useState([]);

  const fetchProjects = async () => {
    const urls = [
      { url: "https://nuuserochatbot.netlify.app", name: "ai-chatbox" },
      {
        url: "https://github.com/wasgt71/socialmedia-app",
        name: "socialmedia-app",
      },
      {
        url: "https://github.com/wasgt71/realtor-data-app",
        name: "realtor-data-app",
      },
      {
        url: "https://github.com/wasgt71/realtor-data-app",
        name: "realtor-data-app",
      },
      {
        url: "https://github.com/wasgt71/realtor-data-app",
        name: "realtor-data-app",
      },
    ];

    setProjects(urls);
  };

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };

  const [ImageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    focusOnSelect: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <>
      <div className="Container">
        <div className="App">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div
                className={index === ImageIndex ? "slide activeSlide" : "slide"}
              >
                <a href={project.url}>
                  <img src={`./${project.name}.png`}></img>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Slide;
