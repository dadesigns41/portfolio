import Header from "../components/Header";
import Footer from "../components/Footer";

import Intro from "./Intro";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";

function App() {
  return (
    <>
      <Header />

      <main>
        <Intro />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
