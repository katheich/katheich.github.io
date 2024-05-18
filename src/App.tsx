import { Header } from './sections/Header.tsx';
import { BorderSection } from './sections/BorderSecion.tsx';
import { Experience } from './sections/Experience.tsx';
import { Education } from './sections/Education.tsx';
import { Tech } from './sections/Tech.tsx';
import { Volunteering } from './sections/Volunteering.tsx';
import { ProjectsTitle } from './sections/ProjectsTitle.tsx';
import { ProjectWNWN } from './sections/ProjectWNWN.tsx';
import { ProjectVacMan } from './sections/ProjectVacMan.tsx';
import { Links } from './sections/Links.tsx';

function App() {
  return (
    <>
      <Header />
      <BorderSection left />
      <Experience />
      <Education />
      <Tech />
      <Volunteering />
      <BorderSection left={false} />
      <ProjectsTitle />
      <ProjectWNWN />
      <ProjectVacMan />
      <BorderSection left />
      <Links />
    </>
  );
}

export default App;
