import ProjectsApi from "./projects.json";

const getProjects = () => {
  return Promise.resolve([ProjectsApi.Projects]);
};

const getSocials = () => {
  return Promise.resolve([ProjectsApi.socials]);
};

const getAboutme = () => {
  return Promise.resolve([ProjectsApi.aboutme]);
};

export default { getProjects, getSocials, getAboutme };
