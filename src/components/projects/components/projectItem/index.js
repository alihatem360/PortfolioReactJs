import React, { Fragment } from "react";
import "./style.css";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useTranslation } from "react-i18next";
import { LazyLoadImage } from "react-lazy-load-image-component";
import ProjectOffcanvas from "../ProjectOffcanvas";
import { FaInfoCircle } from "react-icons/fa";
import { FaAnglesRight } from "react-icons/fa6";
import { FaFire } from "react-icons/fa";
// components
import ProjectCardButtons from "../ProjectCardButtons";
const PojectItem = ({ project }) => {
  // console.log(" : project", project);/
  const { t, i18n } = useTranslation();
  const [show, setShow] = React.useState(false);
  const [projectData, setProjectData] = React.useState({});
  const handleClose = () => setShow(false);

  return (
    <Fragment>
      <ProjectOffcanvas
        project={projectData}
        show={show}
        handleClose={handleClose}
      />
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
          <h5
            className="card-title"
            onClick={() => {
              setShow(true);
              setProjectData(project);
            }}
            style={{ cursor: "pointer" }}
          >
            {project.title} <FaAnglesRight className="ms-2" />
          </h5>
          {/* <h5 className="card-title">{project.id}</h5> */}
          {
            //   <div className="card-text">
            //   {project.technology.map((tech) => {
            //     return (
            //       <h5>
            //         <span
            //           class="badge "
            //           style={{
            //             color: "white",
            //             borderRadius: "5px",
            //             outline: "none",
            //             padding: "7px",
            //           }}
            //         >
            //           #{tech}
            //         </span>
            //       </h5>
            //     );
            //   })}
            // </div>
          }

          <ProjectCardButtons project={project} />
        </div>
      </div>
    </Fragment>
  );
};

export default PojectItem;
