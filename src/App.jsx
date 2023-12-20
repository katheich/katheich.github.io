import { useEffect, useRef } from "react";

import "./App.css";
import { Header } from "./components/Header";
import { About } from "./components/About";
import { Skills } from "./components/Skills/Skills";
import { Projects } from "./components/Projects";

function scrollHorizontally(e) {
  e.preventDefault();
  document.documentElement.scrollLeft += e.deltaY + e.deltaX;
}

export function App() {
  const ref = useRef();

  useEffect(() => {
    const div = ref.current;
    div.addEventListener("wheel", scrollHorizontally, false);

    return () => {
      div.removeEventListener("wheel", scrollHorizontally, false);
    };
  }, []);

  return (
    <div className="App" ref={ref}>
      <Header />
      <About />
      <Skills />
      <Projects />
    </div>
  );
}
