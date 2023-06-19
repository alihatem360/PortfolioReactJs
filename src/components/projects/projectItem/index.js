import React, { Fragment } from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const PojectItem = ({ project }) => {
  return (
    <Fragment>
      <div className="card">
        <div className="img-container w-100">
          <LazyLoadImage
            src={project.imeg}
            alt={project.title}
            effect="blur"
            className="card-img-top w-100"
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
                      color: "white",
                      borderRadius: "5px",
                      outline: "none",
                      padding: "7px",
                    }}
                  >
                    #{tech}
                  </span>
                </h5>
              );
            })}
          </div>

          {project.codeStatus === "PRIVATE" ? (
            <span
              className="text-danger fw-bold bg-light p-2 rounded w-25 text-center"
              style={{ fontSize: "1.2rem" }}
            >
              {project.codeStatus === "PRIVATE" ? "Code is Private" : null}
            </span>
          ) : null}
          <div className="card-buttons">
            {project.github === "" || project.github === undefined ? null : (
              <a
                className="btn"
                href={project.codeStatus === "PRIVATE" ? null : project.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <i class="fa-brands fa-github"></i>
              </a>
            )}

            {project.demo === "" || project.demo === undefined ? null : (
              <a
                className="btn"
                href={project.demo}
                target="_blank"
                rel="noreferrer"
              >
                Demo <i class="fa-solid fa-globe"></i>
              </a>
            )}

            {project.video === "" || project.video === undefined ? null : (
              <a
                className="btn"
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
