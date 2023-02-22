import React from "react";
import projects from "../../data/projects";
import { useEffect, useState } from "react";
import PojectItem from "./projectItem";
import "./style.css";
import Footer from "../footer";
import { Link } from "react-router-dom";
const Projects = () => {
  const [projectsDta, setProjectsData] = useState([]);
  useEffect(() => {
    projects.getProjects().then((data) => {
      console.log(" : ======" + data[0]);
      setProjectsData(data[0]);
    });
  }, []);

  return (
    <>
      <div className="container pt-5">
        <div className=" d-flex justify-content-between align-items-center">
          <Link to="/" className="btn button1">
            <i class="fa-solid fa-arrow-left"></i> Back to Home
          </Link>
        </div>
        <div className="projects row">
          {projectsDta.map((project, index) => {
            return (
              <div className="col-lg-4" key={index}>
                <PojectItem project={project} />
              </div>
            );
          })}
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

      <Footer />
    </>
  );
};

export default Projects;
