import { useState, useEffect } from "react";

import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";

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
      <Header scroll={scroll} />
      <About scroll={scroll} />
      <Skills />
    </div>
  );
}

export default App;
