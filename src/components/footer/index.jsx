import { useEffect, useState } from "react";
import SocialMedia from "../SocialMedia/index";
import "./style.css";
import GetAllData from "../../data/projects";
import { useTranslation } from "react-i18next";
const Footer = () => {
  const { t, i18n } = useTranslation();
  const { getProjects, getSocials, getAboutme, getSkills } = GetAllData();
  const [aboutmeData, setAboutmeData] = useState([]);

  useEffect(() => {
    getAboutme().then((data) => {
      setAboutmeData(data[0][0]);
    });
  }, i18n.language);

  return (
    <div className="position-relative">
      <div>
        <div className=" text-light footer">
          <div className="row">
            <div className="col-lg-12 ">
              <div className="footer__Sosials">
                <div className="footer__Sosials__content">
                  <div className="footer__Sosials__imag">
                    <img src={aboutmeData.footer} alt="social" />
                  </div>
                  <h2>{t("footer.footerName")} </h2>
                  <h6>{t("footer.footerTitle")}</h6>
                  <div className="footer__Sosials__icons">
                    <SocialMedia />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="position-absolute top-0 "
        style={{ zIndex: "-5" }}
      >
        <path
          fill="#FFB84C"
          fill-opacity="1"
          d="M0,32L288,192L576,128L864,288L1152,64L1440,192L1440,0L1152,0L864,0L576,0L288,0L0,0Z"
        ></path>
      </svg>
    </div>
  );
};

export default Footer;
