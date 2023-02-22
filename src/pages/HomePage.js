import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HomeProjectsContainer from "../components/Home/HomeProjectsContainer";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />

      <div className="upper__Curved position-relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="position-absolute"
          style={{ zIndex: "-5" }}
        >
          <path
            fill="#FFB84C"
            fill-opacity="1"
            d="M0,256L240,224L480,160L720,224L960,192L1200,96L1440,96L1440,0L1200,0L960,0L720,0L480,0L240,0L0,0Z"
          ></path>
        </svg>
      </div>

      <HomeProjectsContainer />
      <div className="lower__Curved position-relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="position-absolute bottom-0"
          style={{ zIndex: "-5" }}
        >
          <path
            fill="#FFB84C"
            fill-opacity="1"
            d="M0,32L288,192L576,128L864,288L1152,64L1440,192L1440,320L1152,320L864,320L576,320L288,320L0,320Z"
          ></path>
        </svg>
      </div>

      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
