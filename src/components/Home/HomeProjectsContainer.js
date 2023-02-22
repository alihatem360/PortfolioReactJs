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
    <div className="container pt-5">
      <h2 className="text-center mb-3 project-header">Projects ⚡</h2>
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
  );
};

export default HomeProjectsContainer;
