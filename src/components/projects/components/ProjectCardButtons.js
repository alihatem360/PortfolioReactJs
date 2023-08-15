import React from "react";
import VideoPopup from "./VideoPopup";

const ProjectCardButtons = ({ project }) => {
  return (
    <React.Fragment>
      {" "}
      <div className="card-buttons">
        {project.github === "" || project.github === undefined ? null : (
          <a
            className="btn"
            href={project.codeStatus === "PRIVATE" ? null : project.github}
            target="_blank"
            rel="noreferrer"
          >
            <span>GitHub</span> <i class="fa-brands fa-github"></i>
          </a>
        )}

        {project.demo === "" || project.demo === undefined ? null : (
          <a
            className="btn"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            <span>Demo</span> <i class="fa-solid fa-globe"></i>
          </a>
        )}

        {project.video === "" || project.video === undefined ? null : (
          <VideoPopup videoKey={project.videoKey} />
        )}
      </div>
    </React.Fragment>
  );
};

export default ProjectCardButtons;