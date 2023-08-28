import React, { Fragment } from "react";
import "./style.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";
// components
import ProjectCardButtons from "../ProjectCardButtons";
const PojectItem = ({ project }) => {
  // console.log(" : project", project);/
  const { t, i18n } = useTranslation();
  return (
    <Fragment>
      <div className="card" data-aos="fade-up">
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
              className="text-danger fw-bold bg-light p-2 rounded text-center"
              style={{ fontSize: "1.2rem", width: "40%" }}
            >
              {project.codeStatus === "PRIVATE"
                ? i18n.language === "en"
                  ? "code is private"
                  : "الكود خاص"
                : null}
            </span>
          ) : null}
          <ProjectCardButtons project={project} />
        </div>
      </div>
    </Fragment>
  );
};

export default PojectItem;
