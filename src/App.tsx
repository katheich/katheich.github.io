import { Header } from './sections/Header.tsx';
import { About } from './sections/About.tsx';
import { Skills } from './sections/Skills.tsx';
import { Projects } from './sections/Projects.tsx';

function App() {
  return (
    <>
      {' '}
      <Header />
      <About />
      <Skills />
      <Projects />
    </>
  );
}

export default App;
