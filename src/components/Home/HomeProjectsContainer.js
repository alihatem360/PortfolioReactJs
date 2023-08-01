import React from "react";
import projects from "../../data/projects";
import { useEffect, useState } from "react";
import Projects from "../projects/index";
import PojectItem from "../projects/components/projectItem";
import GProject from "../Gproject/index";
import { Link } from "react-router-dom";
import SwiperSlideCom from "../Utilities/SwiperSlide/SwiperSlideCom";
const HomeProjectsContainer = () => {
  const [projectsDta, setProjectsData] = useState([]);
  useEffect(() => {
    projects.getProjects().then((data) => {
      console.log(" : ======", data[0]);
      setProjectsData(data[0].slice(0, 3));
    });
  }, []);

  // if (projectsDta) {
  //   console.log(" : ====== projectsDta", projectsDta[0]);
  // }

  const UppeCurve = () => {
    return (
      <div className="upper__Curved position-relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="position-absolute top-0"
          style={{ zIndex: "-5" }}
        >
          <path
            fill="#FFB84C"
            fill-opacity="1"
            d="M0,256L240,224L480,160L720,224L960,192L1200,96L1440,96L1440,0L1200,0L960,0L720,0L480,0L240,0L0,0Z"
          ></path>
        </svg>
      </div>
    );
  };

  const LowerCurve = () => {
    return (
      <div className="lower__Curved position-relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="position-absolute bottom-0"
          style={{ zIndex: "-5" }}
        >
          <path
            fill="#FFB84C"
            fill-opacity="1"
            d="M0,32L288,192L576,128L864,288L1152,64L1440,192L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
          ></path>
        </svg>
      </div>
    );
  };

  return (
    <React.Fragment>
      <div className="projects-container ">
        <UppeCurve />
        <GProject gproject={projectsDta[0]} />

        <div className="container">
          <SwiperSlideCom />
          <div className="text-center ">
            <Link to="/projects" className="btn button1">
              View All Projects <i class="fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </div>
        <LowerCurve />
      </div>
    </React.Fragment>
  );
};

export default HomeProjectsContainer;
