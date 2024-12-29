import React from "react";
import LoaderCom from "../Utilities/LoaderCom";
const HeaderImage = ({ aboutmeData }) => {
  return (
    <div
      className="header-img-contant"
      data-aos="fade-up"
      data-aos-duration="1200"
      data-aos-delay="100"
    >
      <div className="header-img hover-effect">
        {aboutmeData.heaaderimag ? (
          <img
            src={aboutmeData.heaaderimag}
            alt="profile"
            className="profile-image"
          />
        ) : (
          <LoaderCom />
        )}
      </div>
    </div>
  );
};

export default HeaderImage;
