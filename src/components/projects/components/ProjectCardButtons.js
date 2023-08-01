import React from "react";

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
          <a
            className="btn"
            href={project.video}
            target="_blank"
            rel="noreferrer"
          >
            <span>video</span> <i class="fa-solid fa-play"></i>
          </a>
        )}
      </div>
    </React.Fragment>
  );
};

export default ProjectCardButtons;
