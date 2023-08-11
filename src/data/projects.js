import ProjectsApi from "./projects.json";
import ProjectsApiAR from "./projectsAR.json";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
const GetAllData = () => {
  const { t, i18n } = useTranslation();

  const getProjects = () => {
    return Promise.resolve(
      i18n.language === "en" ? [ProjectsApi.Projects] : [ProjectsApiAR.Projects]
    );
  };

  const getSocials = () => {
    return Promise.resolve(
      i18n.language === "en" ? [ProjectsApi.socials] : [ProjectsApiAR.socials]
    );
  };

  const getAboutme = () => {
    return Promise.resolve(
      i18n.language === "en" ? [ProjectsApi.aboutme] : [ProjectsApiAR.aboutme]
    );
  };

  const getSkills = () => {
    return Promise.resolve(
      i18n.language === "en" ? [ProjectsApi.skills] : [ProjectsApiAR.skills]
    );
  };

  return { getProjects, getSocials, getAboutme, getSkills };
};

export default GetAllData;
