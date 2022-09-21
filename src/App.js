import Header from "./components/header";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/nav";
function App() {
  return (
    <div className="App">
      {/* <Header />
      <Footer /> */}
      <>
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route path="/" element={<Header />} />

            <Route path="projects" element={<Projects />} />
          </Routes>
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
