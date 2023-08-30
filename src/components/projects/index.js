import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./style.css";
// components
import PojectItem from "./components/projectItem";
import Footer from "../footer";
import GetAllData from "../../data/projects";
import LoaderCom from "../Utilities/LoaderCom";
import LowerCurve from "../Utilities/LowerCurve";
import { techSkills } from "../../data/index";
const Projects = () => {
  const { t, i18n } = useTranslation();
  const { getProjects } = GetAllData();
  const [filteringItems, setFilteringItems] = useState([]);
  const [projectsDta, setProjectsData] = useState([]);
  const [filteredProjectsData, setFilteredProjectsData] = useState([]);
  const getProjectsFromApi = () => {
    getProjects().then((data) => {
      setProjectsData(data[0]);
      setFilteredProjectsData(data[0]);
    });
  };

  useEffect(() => {
    if (projectsDta.length === 0) {
      getProjectsFromApi();
    }
  }, [i18n.language]);

  const handelFilterClick = (name) => {
    if (filteringItems.includes(name)) {
      setFilteringItems(filteringItems.filter((item) => item !== name));
    } else {
      setFilteringItems([name]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [filteringItems]);

  const filterItems = () => {
    if (filteringItems.length > 0) {
      const filteredProjects = projectsDta.filter((project) =>
        project.technology.some((r) => filteringItems.includes(r))
      );
      setFilteredProjectsData(filteredProjects);
    } else {
      getProjectsFromApi();
    }
  };

  return (
    <React.Fragment>
      <div className="container pt-5">
        <div className="filter-buttons d-flex justify-content-center flex-wrap gap-3">
          {techSkills.map((skill, index) => {
            return (
              <button
                className={`btn btn-outline-warning btn-lg ${
                  filteringItems.includes(skill) ? "active" : ""
                }
                `}
                key={index}
                onClick={() => handelFilterClick(skill)}
              >
                {skill}
              </button>
            );
          })}
          <button
            className="btn btn-outline-warning btn-lg active"
            onClick={() => setFilteringItems([])}
          >
            Clear
          </button>
        </div>
        <div className="projects row pt-5">
          {filteredProjectsData && filteredProjectsData.length > 0 ? (
            filteredProjectsData.map((project, index) => {
              return (
                <div className="col-lg-4" key={index}>
                  <PojectItem project={project} />
                </div>
              );
            })
          ) : (
            <LoaderCom />
          )}
        </div>
      </div>
      <LowerCurve />
      <Footer />
    </React.Fragment>
  );
};

export default Projects;
