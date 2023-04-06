import React from "react";
import Header from "./components/header";
import Projects from "./components/projects";
import Footer from "./components/footer";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nav from "./components/nav";
import WhatsappChat from "./components/WhatsappChat/WhatsappChat";
function App() {
  return (
    <div className="App">
      <React.Fragment>
        <BrowserRouter>
          <Routes>
            <Route path="projects" element={<Projects />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
      <WhatsappChat />
    </div>
  );
}

export default App;
