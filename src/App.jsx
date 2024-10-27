import React from "react";
import Navbar from "./sections/navbar";
import Hero from "./sections/Hero";

const App = () => {
  return (
    <div>
      <main className="max-w-7xl mx-auto">
       <Navbar/>
       <Hero/>
      </main>
    </div>
  );
};

export default App;