import SocialData from "../../data/projects";
import { useEffect, useState } from "react";
import socialImage from "../../images/footer.jpeg";
import "./style.css";
const Footer = () => {
  const [socialsData, setSocialsData] = useState([]);
  useEffect(() => {
    SocialData.getSocials().then((data) => {
      setSocialsData(data[0]);
    });
  }, []);

  const mySocials = ["github", "linkedin", "twitter", "facebook", "youtube"];

  return (
    <div>
      <div className=" text-light footer">
        <div className="row">
          <div className="col-lg-12 ">
            <div className="footer__Sosials">
              <div className="footer__Sosials__content">
                <div className="footer__Sosials__imag">
                  <img src={socialImage} alt="social" />
                </div>
                <h2>ali hatem ramada</h2>
                <h6>FRONT END DEVELOPER</h6>
                <div className="footer__Sosials__icons">
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
      </div>
    </div>
  );
};

export default Footer;
