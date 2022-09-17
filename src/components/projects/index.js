import React from "react";
import projects from "../../data/projects";
import { useEffect, useState } from "react";
import PojectItem from "./projectItem";
import "./style.css";

const Projects = () => {
  const [projectsDta, setProjectsData] = useState([]);
  useEffect(() => {
    projects.getProjects().then((data) => {
      setProjectsData(data[0]);
    });
  }, []);

  return (
    <>
      <div className="container">
        <div className="project-header">
          <h2>Projects 🚀</h2>
        </div>
        <div className="projects row">
          {projectsDta.map((project, index) => {
            return (
              <div className="col-lg-4" key={project.id}>
                <PojectItem project={project} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
