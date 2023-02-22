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
    <>
      <div className="header d-flex justify-content-center align-items-center">
        <div className="w-50 d-flex justify-content-center align-items-center">
          <div className="header-img ">
            <img src={aboutmeData.heaaderimag} alt="placeholder" />
          </div>
        </div>
        <div className="header-text w-50">
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
    </>
  );
};

export default Header;
