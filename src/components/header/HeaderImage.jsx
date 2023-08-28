import React from "react";
import LoaderCom from "../Utilities/LoaderCom";
const HeaderImage = ({ aboutmeData }) => {
  return (
    <div className="header-img-contant " data-aos="fade-up">
      <div className="header-img ">
        {aboutmeData.heaaderimag ? (
          <img src={aboutmeData.heaaderimag} alt="placeholder" />
        ) : (
          <LoaderCom />
        )}
      </div>
    </div>
  );
};

export default HeaderImage;
