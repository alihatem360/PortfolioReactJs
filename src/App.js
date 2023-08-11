import { Fragment } from "react";
import Projects from "./components/projects";
import { useEffect } from "react";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/nav";
import { useTranslation } from "react-i18next";
function App() {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    // to change the direction of the page
    document.documentElement.dir = t("direction");
  }, [t]);

  return (
    <div className="App">
      <Fragment>
        <Nav />
        <Routes>
          <Route path="projects" element={<Projects />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Fragment>
    </div>
  );
}

export default App;
