import ProjectsApi from "./projects.json";

const getProjects = () => {
  return Promise.resolve([ProjectsApi.Projects]);
};

const getSocials = () => {
  return Promise.resolve([ProjectsApi.socials]);
};

export default { getProjects, getSocials };
