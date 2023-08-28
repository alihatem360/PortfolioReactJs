import React, { useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import HomeProjectsContainer from "../components/Home/HomeProjectsContainer";
import AnimationLoader from "../components/Utilities/AnimationLoader";
import GetAllData from "../data/projects";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <HomeProjectsContainer />
      <Footer />
    </React.Fragment>
  );
};

export default HomePage;
