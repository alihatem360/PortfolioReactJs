import React from "react";
import VideoPopup from "./VideoPopup";
import { FaGithub } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";

const ProjectCardButtons = ({ project, noVideo }) => {
  return (
    <div className="card-buttons">
      {project.github === "" || project.github === undefined ? null : (
        <a
          className="btn"
          href={project.codeStatus === "PRIVATE" ? null : project.github}
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
      )}

      {project.demo === "" || project.demo === undefined ? null : (
        <a className="btn" href={project.demo} target="_blank" rel="noreferrer">
          <BiGlobe />
        </a>
      )}

      {project.video === "" ||
      project.loomVideo === "" ||
      project.video === undefined ||
      noVideo ? null : (
        <VideoPopup videoKey={project.videoKey} project={project} />
      )}
      {project.loomVideo === "" ||
      project.loomVideo === undefined ||
      noVideo ? null : (
        <VideoPopup videoKey={project.videoKey} project={project} />
      )}
    </div>
  );
};

export default ProjectCardButtons;
