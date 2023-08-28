import { useEffect, useState, Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
// components and pages
import HomePage from "./pages/HomePage";
import Projects from "./components/projects";
import AnimationLoader from "./components/Utilities/AnimationLoader";
import Nav from "./components/nav";
import GetAllData from "./data/projects";
function App() {
  const { t, i18n } = useTranslation();
  const { getProjects, getSocials, getAboutme, getSkills } = GetAllData();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    // to change the direction of the page
    document.documentElement.dir = t("direction");
  }, [t]);

  const getall = async () => {
    try {
      const projects = await getProjects();
      const socials = await getSocials();
      const aboutme = await getAboutme();
      const skills = await getSkills();
      if (
        projects.length > 0 &&
        socials.length > 0 &&
        aboutme.length > 0 &&
        skills.length > 0
      ) {
        setLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getall();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <AnimationLoader />
      ) : (
        <Fragment>
          <Nav />
          <Routes>
            <Route path="projects" element={<Projects />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Fragment>
      )}
    </div>
  );
}

export default App;
