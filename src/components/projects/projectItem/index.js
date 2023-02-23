import React, { Fragment } from "react";
import "./style.css";

const PojectItem = ({ project }) => {
  console.log(" : ====== project", project.video);
  return (
    <Fragment>
      <div className="card">
        <div className="img-container">
          <img src={project.imeg} className="card-img-top" alt="vdfgd" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          {/* <h5 className="card-title">{project.id}</h5> */}
          <div className="card-text">
            {project.technology.map((tech) => {
              return (
                <h5>
                  <span class="badge ">{tech}</span>
                </h5>
              );
            })}
          </div>
          <div className="card-buttons position-relative">
            <div className="d-flex justify-content-between">
              <a
                className="btn"
                href={project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <i class="fa-brands fa-github"></i>
              </a>
            </div>

            {project.demo.length > 0 && (
              <a
                className="btn  position-absolute top-0 end-0"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Demo <i class="fa-solid fa-globe"></i>
              </a>
            )}
            {project.video && (
              <a
                className="btn position-absolute top-0 end-0"
                href={project.video}
                target="_blank"
                rel="noreferrer"
              >
                video <i class="fa-solid fa-play"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default PojectItem;
