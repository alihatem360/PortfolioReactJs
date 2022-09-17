import ProjectsApi from "./projects.json";

const getProjects = () => {
  return Promise.resolve([ProjectsApi]);
};

export default { getProjects };
