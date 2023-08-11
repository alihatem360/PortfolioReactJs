import React from "react";
import projects from "../../data/projects";
import { useEffect, useState } from "react";
import PojectItem from "./components/projectItem";
import "./style.css";
import Footer from "../footer";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import GetAllData from "../../data/projects";
const Projects = () => {
  const { t, i18n } = useTranslation();

  const { getProjects, getSocials, getAboutme, getSkills } = GetAllData();
  const [projectsDta, setProjectsData] = useState([]);
  useEffect(() => {
    getProjects().then((data) => {
      setProjectsData(data[0]);
    });
  }, [i18n.language]);

  return (
    <React.Fragment>
      <div className="container pt-5">
        <div className="projects row pt-5">
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
    </React.Fragment>
  );
};

export default Projects;
