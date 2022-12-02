import "./style.css";
import { useEffect, useState } from "react";
import SocialData from "../../data/projects";

import ContactUs from "../email/index.js";

const Header = () => {
  const [socialsData, setSocialsData] = useState([]);
  const [aboutmeData, setAboutmeData] = useState([]);
  useEffect(() => {
    SocialData.getSocials().then((data) => {
      setSocialsData(data[0]);
    });

    SocialData.getAboutme().then((data) => {
      setAboutmeData(data[0][0]);
    });
  }, []);

  const mySocials = [
    "github",
    "linkedin",
    "twitter",
    "facebook",
    "youtube",
    "whatsapp",
    "email",
  ];
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
                <ul className="list-unstyled">
                  {socialsData.map((social) => {
                    if (mySocials.includes(social.name)) {
                      return (
                        <li key={social.id}>
                          <a
                            href={social.link}
                            target="_blank"
                            rel="noreferrer"
                          >
                            <i class={`fa-brands fa-${social.name}`}></i>
                          </a>
                        </li>
                      );
                    }
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
