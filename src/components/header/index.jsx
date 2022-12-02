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
      <div className="header">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="header-img ">
              <img src={aboutmeData.heaaderimag} alt="placeholder" />
            </div>
          </div>

          <div class=" col-lg-6 col-md-6 col-sm-12">
            <div className="header-text">
              <h4>Hi👋</h4>
              <h2>I'm {aboutmeData.name}</h2>
              <p>{aboutmeData.bio}</p>

              <div className="header-buttons">
                <a href="#">
                  <ContactUs />
                </a>
                <a href={aboutmeData.cv} target="_blank" className="btn">
                  Download CV
                </a>
              </div>

              <div className="header-social">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
