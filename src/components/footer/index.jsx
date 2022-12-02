import SocialData from "../../data/projects";
import { useEffect, useState } from "react";
import SocialMedia from "../SocialMedia/index";
import "./style.css";
const Footer = () => {
  const [aboutmeData, setAboutmeData] = useState([]);
  useEffect(() => {
    SocialData.getAboutme().then((data) => {
      setAboutmeData(data[0][0]);
    });
  }, []);

  return (
    <div>
      <div className=" text-light footer">
        <div className="row">
          <div className="col-lg-12 ">
            <div className="footer__Sosials">
              <div className="footer__Sosials__content">
                <div className="footer__Sosials__imag">
                  <img src={aboutmeData.footer} alt="social" />
                </div>
                <h2>ali hatem ramada</h2>
                <h6>FRONT END DEVELOPER</h6>
                <div className="footer__Sosials__icons">
                  <SocialMedia />
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
