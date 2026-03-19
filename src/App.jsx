import "./styles/global.css";
import "./styles/hero.css";
import "./styles/about.css";
import "./styles/skills.css";
import "./styles/experience.css";
import "./styles/projects.css";
import "./styles/education.css";
import "./styles/certifications.css";
import "./styles/codingjourney.css";
import "./styles/languages.css"
import "./styles/contact.css"
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Certifications from "./components/Certifications/Certifications";
import CodingJourney from "./components/Condingjourney/Codingjourney";
import Languages from "./components/Languages/Languages";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useTheme } from "./hooks/useTheme";

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <Navbar theme={theme} onThemeToggle={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Certifications />
        <CodingJourney />
        <Languages />
        <Contact />
        {/* 
          ┌─────────────────────────────┐
          │  Sections will go here:     │
          │  Hero, About, Skills,       │
          │  Experience, Projects,      │
          │  Education, Contact         │
          └─────────────────────────────┘
        */}
        {/* <section id="about" style={{ minHeight: "100vh", padding: "4rem 2rem" }} />
        <section id="skills" style={{ minHeight: "100vh", padding: "4rem 2rem" }} />
        <section id="experience" style={{ minHeight: "100vh", padding: "4rem 2rem" }} />
        <section id="projects" style={{ minHeight: "100vh", padding: "4rem 2rem" }} />
        <section id="education" style={{ minHeight: "100vh", padding: "4rem 2rem" }} />
        <section id="contact" style={{ minHeight: "100vh", padding: "4rem 2rem" }} /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;