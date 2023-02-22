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
      <Footer />
    </>
  );
};

export default Projects;
