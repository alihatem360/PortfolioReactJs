import React, { useState, useEffect, Fragment } from "react";
import "./style.css";
import GetAllData from "../../data/projects";
const SkillComponent = () => {
  const { getProjects, getSocials, getAboutme, getSkills } = GetAllData();
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    try {
      getSkills().then((data) => {
        setSkills(data[0]);
      });
    } catch (error) {
      console.log(" : error", error);
    }
  }, []);
  console.log(" : skills", skills);

  return (
    <Fragment>
      <h1>Skills</h1>
      <div className="slider">
        <div className="slide-track">
          {skills.length > 0 &&
            skills.map((skill, index) => {
              return (
                <div className="slide" key={index}>
                  <img src={skill.image} height="100" width="250" alt="" />
                </div>
              );
            })}
        </div>
      </div>
    </Fragment>
  );
};

export default SkillComponent;
