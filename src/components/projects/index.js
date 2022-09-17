import React from "react";
import projects from "../../data/projects";
import { useEffect, useState } from "react";
import PojectItem from "./projectItem";
const Projects = () => {
  const [projectsDta, setProjectsData] = useState([]);
  useEffect(() => {
    projects.getProjects().then((data) => {
      setProjectsData(data[0]);
    });
  }, []);
  return (
    <>
      <h1>Projects</h1>
      <div className="projects row">
        {projectsDta.map((project) => {
          return (
            <div className="col-lg-4" key={project.id}>
              <PojectItem project={project} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Projects;
