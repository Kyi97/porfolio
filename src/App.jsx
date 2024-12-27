// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./sections/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import WorkExperience from "./sections/Exprience";

const App = () => {
  return (
    <div>
      <main className="max-w-7xl mx-auto">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <WorkExperience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default App;
