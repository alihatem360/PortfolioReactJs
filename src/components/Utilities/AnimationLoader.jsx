import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/animation.json";
const AnimationLoader = () => {
  return (
    <div className="d-flex justify-content-center align-items-center">
      <Lottie animationData={animationData} />
    </div>
  );
};

export default AnimationLoader;
