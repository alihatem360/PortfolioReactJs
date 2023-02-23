import "./style.css";
import { useEffect, useState } from "react";
import SocialData from "../../data/projects";
import SocialMedia from "../SocialMedia/index";
import ContactUs from "../email/index.js";

const Header = () => {
  const [aboutmeData, setAboutmeData] = useState([]);
  useEffect(() => {
    SocialData.getAboutme().then((data) => {
      setAboutmeData(data[0][0]);
    });
  }, []);

  return (
    <div className="position-relative">
      <div className="header d-flex justify-content-center align-items-center">
        <div
          className="w-50 d-flex justify-content-center align-items-center"
          style={{ flex: "50%" }}
        >
          <div className="header-img ">
            <img src={aboutmeData.heaaderimag} alt="placeholder" />
          </div>
        </div>
        <div className="header-text w-50" style={{ flex: "50%" }}>
          <div className="header-contant">
            <h4>Hi👋</h4>
            <h2>I'm {aboutmeData.name}</h2>
            <p>{aboutmeData.bio}</p>

            <div className="header-buttons">
              <a href="#">
                <ContactUs />
              </a>
              <a href={aboutmeData.cv} target="_blank" className="btn ">
                <span>Preview CV 👀</span>
                {
                  // eye icon font awesome
                }
              </a>
            </div>
          </div>
          <div className="header-social">
            <SocialMedia />
          </div>
        </div>
      </div>
      {
        //  svg wave upper
      }
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="position-absolute bottom-0 "
        style={{ zIndex: "-5" }}
      >
        <path
          fill="#FFB84C"
          fill-opacity="1"
          d="M0,96L240,192L480,256L720,160L960,224L1200,96L1440,224L1440,320L1200,320L960,320L720,320L480,320L240,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Header;
