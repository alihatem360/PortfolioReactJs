import React from "react";
import "./style.css";
function index({ gproject }) {
  const getVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    return match && match[2].length === 11 ? match[2] : null;
  };
  console.log(gproject, "gproject in gproject card");
  return (
    <React.Fragment>
      <div class="gproject_card_container">
        <div class="gproject_card">
          <h3>
            <i class="fa-solid fa-rocket"></i>{" "}
            {gproject === undefined || gproject.title === ""
              ? null
              : gproject.title}
          </h3>
          <div class="gproject_card_body">
            <div class="gproject_card_video">
              <iframe
                src={
                  gproject === undefined || gproject.video === ""
                    ? null
                    : `https://www.youtube.com/embed/${getVideoId(
                        gproject.video
                      )}`
                }
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="true"
                title="YouTube video player"
                width="100%"
              ></iframe>
            </div>
            <div class="gproject_card_content">
              {
                <p>
                  {gproject === undefined || gproject.description === "" ? (
                    <p>no description</p>
                  ) : (
                    gproject.description
                  )}
                </p>
              }
              <div className="card-buttons w-100">
                {gproject === undefined ||
                gproject.github === undefined ? null : (
                  <a
                    className={
                      gproject.codeStatus === "PRIVATE" ? "btn disabled" : "btn"
                    }
                    href={gproject.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>GitHub</span> <i class="fa-brands fa-github"></i>
                  </a>
                )}

                {gproject === undefined ||
                gproject.demo === undefined ? null : (
                  <a
                    className="btn"
                    href={gproject.demo}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>Demo</span> <i class="fa-solid fa-globe"></i>
                  </a>
                )}

                {gproject === undefined ||
                gproject.video === undefined ? null : (
                  <a
                    className="btn"
                    href={gproject.video}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>video</span> <i class="fa-solid fa-play"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default index;
