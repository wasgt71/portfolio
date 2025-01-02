import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

function Slide() {
  const [projects, setProjects] = useState([]);
  

  const fetchProjects = async () => {
    const response = await axios.get(
      "https://api.github.com/users/wasgt71/repos"
    );
    const data = response.data;

    const projectData = data.map((project) => ({
      name: project.name,
      url: project.html_url,
    }));
    setProjects(projectData);
  };

   const NextArrow = ({onClick}) => {
    return (
        <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
        </div>
    )
   }

   const PrevArrow = ({onClick}) => {
    return (
        <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
        </div>
    )
   }

   const [ImageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next)
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
            <div className={index === ImageIndex ? "slide activeSlide" : "slide"}>
              <img src="/chatbot.png"></img>
            </div>
          ))}
        </Slider>
      </div>
      </div>
    </>
  );
}

export default Slide;
