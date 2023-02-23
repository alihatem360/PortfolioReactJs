import React from "react";
import projects from "../../data/projects";
import { useEffect, useState } from "react";
import Projects from "../projects/index";
import PojectItem from "../projects/projectItem";
import { Link } from "react-router-dom";
const HomeProjectsContainer = () => {
  const [projectsDta, setProjectsData] = useState([]);
  useEffect(() => {
    projects.getProjects().then((data) => {
      console.log(" : ======", data[0]);
      setProjectsData(data[0].slice(0, 3));
    });
  }, []);

  if (projectsDta) {
    console.log(" : ====== projectsDta", projectsDta);
  }

  return (
    <div className="projects-container ">
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

      <div className="container pt-5">
        <h2 className="text-center mb-3 project-header z-index-+1">
          Projects ⚡
        </h2>
        <div className="projects row">
          {projectsDta.map((project, index) => {
            return (
              <div className="col-lg-4" key={index}>
                <PojectItem project={project} />
              </div>
            );
          })}
        </div>
        <div className="text-center ">
          <Link to="/projects" className="btn button1">
            View All Projects <i class="fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
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
    </div>
  );
};

export default HomeProjectsContainer;
