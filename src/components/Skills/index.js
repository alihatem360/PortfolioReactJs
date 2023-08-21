import React, { useState, useEffect } from "react";
import "./style.css";
import projects from "../../data/projects";
import Marquee from "react-fast-marquee";
const SkillComponent = () => {
  const [skillsData, setSkillsData] = useState([]);
  useEffect(() => {
    projects.getSkills().then((data) => {
      // console.log(data[0], "data from skill component");
      setSkillsData(data[0]);
    });
  }, []);

  //   example of how to use the data
  // Array(7)[
  //   ({ title: "HTML", image: "images/skill (2).png" },
  //   { title: "CSS", image: "images/skill (1).png" },
  //   { title: "JavaScript", image: "images/skill (3).png" },
  //   { title: "ReactJs", image: "images/skill (5).png" },
  //   { title: "Redux", image: "images/skill (6).png" },
  //   { title: "Bootstrap", image: "images/skill (10).webp" },
  //   { title: "NextJs", image: "images/skill (4).png" })
  // ],
  //   "data from skill component";

  return (
    <div className="container skill__container">
      <h1>Skills</h1>
      <Marquee delay={0}>
        {skillsData.map((item, index) => {
          return (
            <div className="skill__item" key={index}>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100px",
                  height: "100px",
                  background: "transparent",
                  objectFit: "contain",
                }}
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default SkillComponent;
