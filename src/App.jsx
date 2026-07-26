import { Suspense, lazy } from "react";
import Nav from "./common/Nav";
import CommandPalette from "./common/CommandPalette";
import Hero from "./sections/Hero/Hero";

const Experience = lazy(() => import("./sections/Experience/Experience"));
const Projects = lazy(() => import("./sections/Projects/Projects"));
const Skills = lazy(() => import("./sections/Skills/Skills"));
const Contact = lazy(() => import("./sections/Contact/Contact"));
const Footer = lazy(() => import("./sections/Footer/Footer"));

function App() {
  return (
    <>
      <Nav />
      <CommandPalette />
      <main className="mx-auto flex max-w-5xl flex-col gap-24 px-5 py-12 sm:gap-32 sm:px-8 sm:py-20">
        <Hero />
        <Suspense fallback={null}>
          <Experience />
          <Projects />
          <Skills />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
