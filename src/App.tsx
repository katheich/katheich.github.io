import { Header } from './sections/Header.tsx';
import { About } from './sections/About.tsx';
import { Skills } from './sections/Skills.tsx';
import { ProjectHeader } from './sections/ProjectHeader.tsx';
import { Projects } from './sections/Projects.tsx';
import { BorderSection } from './sections/BorderSecion.tsx';

function App() {
  return (
    <>
      {' '}
      <Header />
      <BorderSection left={false} />
      <About />
      <BorderSection left />
      <Skills />
      <BorderSection left={false} />
      <ProjectHeader />
      <Projects />
      <BorderSection left />
    </>
  );
}

export default App;
