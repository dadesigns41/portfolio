import Header from "./features/Header";
import Footer from "./features/Footer";

import Intro from "./features/Intro";
import Skills from "./features/Skills";
import DevToolbelt from "./features/DevToolbelt";
import Projects from "./features/Projects";
import Contact from "./features/Contact";

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
