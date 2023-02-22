import Header from "./components/header";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/nav";
function App() {
  return (
    <div className="App">
      {/* <Header />
      <Footer /> */}
      <>
        <BrowserRouter>
          <Routes>
            <Route path="projects" element={<Projects />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
