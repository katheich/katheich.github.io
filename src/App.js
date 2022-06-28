import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

function App() {
  const [scroll, setScroll] = useState(0);

  function handleScroll() {
    setScroll(window.scrollX);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <About scroll={scroll} />
      <Skills />
      <Projects />
    </div>
  );
}

export default App;
