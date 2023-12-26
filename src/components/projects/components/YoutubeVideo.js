import React from "react";

const YoutubeVideo = ({ project }) => {
  return (
    <React.Fragment>
      {project.videoKey ? (
        <iframe
          width="100%"
          height="500px"
          src={`https://www.youtube.com/embed/${project.videoKey}?mute=1&autoplay=1`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          className=""
        ></iframe>
      ) : null}
    </React.Fragment>
  );
};

export default YoutubeVideo;
