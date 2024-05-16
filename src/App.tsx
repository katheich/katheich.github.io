import { Header } from './sections/Header.tsx';
import { About } from './sections/About.tsx';
import { Skills } from './sections/Skills.tsx';
import { Projects1 } from './sections/Projects1.tsx';
import { Projects2 } from './sections/Projects2.tsx';
import { BorderSection } from './sections/BorderSecion.tsx';
import { Contact } from './sections/Contact.tsx';

function App() {
  return (
    <>
      {' '}
      <Header />
      <BorderSection left={false} />
      <About />
      <Skills />
      <BorderSection left />
      <Projects1 />
      <Projects2 />
      <BorderSection left={false} />
      <Contact />
    </>
  );
}

export default App;
