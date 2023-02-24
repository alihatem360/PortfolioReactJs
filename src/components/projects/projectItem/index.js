import React, { Fragment } from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const PojectItem = ({ project }) => {
  console.log(" : ====== project", project.video);
  return (
    <Fragment>
      <div className="card">
        <div className="img-container">
          <LazyLoadImage
            src={project.imeg}
            alt={project.title}
            effect="blur"
            className="card-img-top"
            placeholderSrc={project.imeg}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">{project.title}</h5>
          {/* <h5 className="card-title">{project.id}</h5> */}
          <div className="card-text">
            {project.technology.map((tech) => {
              return (
                <h5>
                  <span
                    class="badge "
                    style={{
                      backgroundColor: "#F5F5F5",
                      color: "black",
                    }}
                  >
                    {tech}
                  </span>
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
