// src/App.jsx

import { Header, Footer, DevToolbelt, Intro, Skills, Projects, Contact } from './features';

function App() {
  return (
    <>
      <Header />

      <main>
        <Intro />
        <Skills />
        <DevToolbelt />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
