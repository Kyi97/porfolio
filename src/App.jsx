// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./sections/navbar";
import Home from "./sections/Home";
import About from "./sections/About";

const App = () => {
  return (
    <div>
      <main className="max-w-7xl mx-auto">
        <Navbar />
        <Home />
        <About />
      </main>
    </div>
  );
};

export default App;
