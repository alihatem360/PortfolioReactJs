import React from "react";
import "./Styles.css";
import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaNodeJs,
  FaSass,
} from "react-icons/fa";
import { TbBrandJavascript, TbBrandRedux, TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiMui } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
const SkillsComponent = () => {
  const skills = [
    {
      icon: FaReact,
      name: "React",
    },
    {
      icon: TbBrandNextjs,
      name: "Nextjs",
    },
    {
      icon: TbBrandRedux,
      name: "Redux",
    },

    {
      icon: TbBrandJavascript,
      name: "Javascript",
    },
    {
      icon: SiTypescript,
      name: "Typescript",
    },
    {
      icon: FaNodeJs,
      name: "Nodejs",
    },
    {
      icon: DiMongodb,
      name: "MongoDB",
    },
    {
      icon: IoLogoFirebase,
      name: "Firebase",
    },
    {
      icon: SiMui,
      name: "Material UI",
    },
    {
      icon: FaHtml5,
      name: "HTML",
    },
    {
      icon: FaCss3,
      name: "CSS",
    },
    {
      icon: FaSass,
      name: "SASS",
    },
    {
      icon: FaBootstrap,
      name: "Bootstrap",
    },
    {
      icon: SiTailwindcss,
      name: "Tailwindcss",
    },

    {
      icon: FaGithub,
      name: "Github",
    },
  ];
  return (
    <div className="skills-container" data-aos="fade-up">
      <div className="skills-header">
        <h2>Skills</h2>
        <p>My technical level</p>
      </div>
      <div className="skills">
        <div className="skills-track">
          {[...skills, ...skills].map((skill, index) => {
            return (
              <div className="iconbox" key={index}>
                <div className="skill-icon">
                  <skill.icon />
                </div>
                <p>{skill.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SkillsComponent;
