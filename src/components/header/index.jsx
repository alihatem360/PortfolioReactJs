import "./style.css";
import logo from "../../images/header-background2.jpeg";
import { useEffect, useState } from "react";
import SocialData from "../../data/projects";
const Header = () => {
  const [socialsData, setSocialsData] = useState([]);
  useEffect(() => {
    SocialData.getSocials().then((data) => {
      setSocialsData(data[0]);
    });
  }, []);

  const mySocials = ["github", "linkedin", "twitter", "facebook", "youtube"];

  return (
    <>
      <div className="header">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div className="header-img ">
              <img src={logo} alt="placeholder" />
            </div>
          </div>

          <div class=" col-lg-6 col-md-6 col-sm-12">
            <div className="header-text">
              <h4>Hi👋</h4>
              <h2>I'm Ali Hatem</h2>
              <p>
                I'm a Computer Science Student, interested in some CS branches
                like programming and web development. I aim to Be a software
                engineer. I have a good knowledge of HTML & CSS, JavaScript, and
                React.js.
              </p>

              <div className="header-buttons">
                <a href="#" className="btn">
                  Hir me
                </a>
                <a href="#" className="btn">
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
                            {console.log(`fa-brands fa-${social.name}`)}
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
