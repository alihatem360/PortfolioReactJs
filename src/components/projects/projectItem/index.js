import React, { Fragment } from "react";
import "./style.css";
function index({ project, proImag }) {
  return (
    <Fragment>
      <div className="card">
        <div className="img-container">
          <img src={project.imeg} className="card-img-top" alt="vdfgd" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
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
            <div>
              <a className="btn" href={project.github} target="_blank">
                GitHub <i class="fa-brands fa-github"></i>
              </a>
            </div>

            {project.demo ? (
              <a
                className="btn  position-absolute top-0 end-0"
                href={project.demo}
                target="_blank"
              >
                Demo <i class="fa-solid fa-globe"></i>
              </a>
            ) : (
              <a
                className="btn position-absolute top-0 end-0"
                href={project.video}
                target="_blank"
              >
                video <i class="fa-solid fa-play"></i>
              </a>
            )}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default index;
