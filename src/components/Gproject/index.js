import React from "react";
import { FaRocket, FaGithub, FaGlobe, FaPlay } from "react-icons/fa";
import "./style.css";

function Gproject({ gproject }) {
  const getVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };

  if (!gproject) return null;

  const { title, video, description, github, demo, codeStatus } = gproject;

  const renderButton = (link, text, icon) => {
    if (!link) return null;

    return (
      <a
        className={
          text === "GitHub" && codeStatus === "PRIVATE" ? "btn disabled" : "btn"
        }
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <span>{text}</span> {icon}
      </a>
    );
  };

  return (
    <div className="gproject_card_container" data-aos="fade-up">
      <div className="gproject_card">
        <h3 data-aos="fade-right" data-aos-delay="200">
          <FaRocket />
          {title || ""}
        </h3>
        <div className="gproject_card_body">
          {video && (
            <div
              className="gproject_card_video"
              data-aos="zoom-in"
              data-aos-delay="400"
            >
              <iframe
                src={`https://www.youtube.com/embed/${getVideoId(video)}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube video player"
                width="100%"
                height="315"
              />
            </div>
          )}
          <div
            className="gproject_card_content"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <p>{description || "No description available"}</p>
            <div
              className="card-buttons w-100 justify-content-start gap-5"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              {renderButton(github, "GitHub", <FaGithub />)}
              {renderButton(demo, "Demo", <FaGlobe />)}
              {renderButton(video, "Video", <FaPlay />)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gproject;
