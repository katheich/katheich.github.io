import { Header } from './sections/Header.tsx';
import { BorderSection } from './sections/BorderSecion.tsx';
import { Experience } from './sections/Experience.tsx';
import { Education } from './sections/Education.tsx';
import { Tech } from './sections/Tech.tsx';
import { Volunteering } from './sections/Volunteering.tsx';
import { ProjectsTitle } from './sections/ProjectsTitle.tsx';
import { ProjectDefcon } from './sections/ProjectDefcon.tsx';
import { ProjectWNWN } from './sections/ProjectWNWN.tsx';
import { ProjectVacMan } from './sections/ProjectVacMan.tsx';
import { Contact } from './sections/Contact.tsx';

function App() {
  return (
    <>
      {' '}
      <Header />
      <BorderSection left={false} />
      <Experience />
      <Education />
      <Tech />
      <Volunteering />
      <BorderSection left />
      <ProjectsTitle />
      <ProjectDefcon />
      <ProjectWNWN />
      <ProjectVacMan />
      <BorderSection left={false} />
      <Contact />
    </>
  );
}

export default App;
