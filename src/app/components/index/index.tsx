import Hero from "./hero";
import Projects from "./projects";
import Skills from "./skills";
import Experience from "./experience";
import Hackathon from "./hackathon";
import Education from "./education";
import Contact from "./contact";

export default function Index() {
  return (
    <>
      <Hero />
      <Hackathon />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
