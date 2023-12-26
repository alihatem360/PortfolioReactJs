import React from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProjectCardButtons from "./ProjectCardButtons";
import { PiShootingStarBold } from "react-icons/pi";
import { IoRocket } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import YoutubeVideo from "./YoutubeVideo";
import LoomVideo from "./LoomVideo";
const ProjectOffcanvas = ({ show, project, handleClose }) => {
  const { t, i18n } = useTranslation();
  const placement = i18n.language === "en" ? "start" : "end";
  return (
    <React.Fragment>
      <Offcanvas
        show={show}
        onHide={handleClose}
        placement={placement}
        style={{
          backgroundColor: "#1a1a1a",
          color: "white",
        }}
        className="text-capitalize custom-offcanvas"
      >
        <Offcanvas.Header closeButton>
          {" "}
          <h1 className="text-capitalize">
            {project.title ? project.title : ""}
          </h1>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <div className="img-container w-100">
            {project.loomVideo ? (
              <LoomVideo videoUrl={project.loomVideo} />
            ) : null}
            <YoutubeVideo project={project} />
            {project.videoKey || project.loomVideo ? null : (
              <LazyLoadImage
                src={project.imeg ? project.imeg : ""}
                alt={project.title ? project.title : ""}
                effect="blur"
                className="card-img-top w-100"
                placeholderSrc={project.imeg ? project.imeg : ""}
              />
            )}
          </div>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <h2 className="card-title text-capitalize">
              all technology used{" "}
              <PiShootingStarBold className="text-warning" />
            </h2>

            {project.codeStatus === "PRIVATE" ? (
              <span
                className=" rounded text-center"
                style={{
                  fontSize: "1.2rem",
                  backgroundColor: "var(--danger-color)",
                  boxShadow: "0 0 5px var(--danger-color)",
                  color: "white",
                  padding: "5px",
                  borderRadius: "5px",
                }}
              >
                {project.codeStatus === "PRIVATE"
                  ? i18n.language === "en"
                    ? "code is private"
                    : "الكود خاص"
                  : null}

                <FaLock className="ms-2" />
              </span>
            ) : null}
          </div>
          <div className="card-text d-flex justify-content-start flex-wrap gap-2 mt-3">
            {project.technology &&
              project.technology.map((tech) => {
                return (
                  <h5>
                    <span
                      // text large
                      className="badge"
                      style={{
                        color: "white",
                        borderRadius: "5px",
                        outline: "none",
                        padding: "7px",
                        fontSize: "1.2rem",
                        backgroundColor: "var(--primary-color)",
                      }}
                    >
                      # {tech}
                    </span>
                  </h5>
                );
              })}
          </div>

          <h3 className="card-title text-capitalize my-3">
            description <IoRocket className="text-warning" />
          </h3>
          <p
            className="card-text"
            style={{
              color: "white",
              fontSize: "1.2rem",
              fontWeight: "400",
              lineHeight: "1.8",
            }}
          >
            {project.description ? project.description : "no description"}
          </p>
          <ProjectCardButtons project={project} noVideo={true} />
        </Offcanvas.Body>
      </Offcanvas>
    </React.Fragment>
  );
};

export default ProjectOffcanvas;
