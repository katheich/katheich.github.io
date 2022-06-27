import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Sections from "./components/Sections";
import { isHomePage } from "./helpers/isHomePage";

const MAX_PAGE_NUMBER = 3;

function App() {
  const [page, setPage] = useState(0);

  function onPageRight() {
    const new_page = page + 1;
    if (new_page <= MAX_PAGE_NUMBER) {
      setPage(new_page);
    }
  }

  function onPageLeft() {
    const new_page = page - 1;
    if (new_page >= 0) {
      setPage(new_page);
    }
  }

  return (
    <div className={isHomePage(page) ? "App home" : "App sections"}>
      <Header page={page} />
      <Sections page={page} onPageLeft={onPageLeft} onPageRight={onPageRight} />
    </div>
  );
}

export default App;
