import React from "react";
import { useTranslation } from "react-i18next";
import SocialMedia from "../SocialMedia/index";
import CV from "../../assets/Ali_Hatem_Ramadan_Resume.pdf";
import { handleDownloadCv } from "../../helpers/index.js";
import PreviewCvModal from "../Auth/PreviewCvModal";
const HeaderBio = ({ aboutmeData }) => {
  const { t, i18n } = useTranslation();
  return (
    <div className="header-text ">
      <div className="header-contant">
        <h4>{i18n.language === "en" ? "Hi👋" : "مرحبا 👋"}</h4>
        <h2>
          {i18n.language === "en" ? "I'm" : "أنا"} {aboutmeData.name} 👨‍💻
        </h2>
        <p>
          {aboutmeData.bio?.map((item) => {
            return (
              <span>
                {item}
                <br />
              </span>
            );
          })}
        </p>

        <div className="header-buttons d-flex justify-content-start gap-3">
          <button
            className="btn"
            onClick={() => handleDownloadCv(CV, "Ali_Hatem_Ramadan_Resume")}
          >
            CV <i class="fa-solid fa-file-arrow-down"></i>
          </button>
          <PreviewCvModal />
        </div>
      </div>

      <div className="header-social">
        <SocialMedia />
      </div>
    </div>
  );
};

export default HeaderBio;
