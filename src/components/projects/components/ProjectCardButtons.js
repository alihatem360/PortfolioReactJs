import React from "react";
import VideoPopup from "./VideoPopup";

const ProjectCardButtons = ({ project, noVideo }) => {
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

        {project.video === "" ||
        project.loomVideo === "" ||
        project.video === undefined ||
        noVideo ? null : (
          <VideoPopup videoKey={project.videoKey} project={project} />
        )}
        {project.loomVideo === "" || project.loomVideo === undefined ? null : (
          <VideoPopup videoKey={project.videoKey} project={project} />
        )}
      </div>
    </React.Fragment>
  );
};

export default ProjectCardButtons;
