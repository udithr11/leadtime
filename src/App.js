import { useState, useEffect } from "react";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import ChooseUs from "./components/ChooseUs";
import Footer from "./components/Footer";
import Faq from "./components/Faq";
import Testimonial from "./components/Testimonial";
import Services from "./components/Services";
import NavBar from "./components/NavBar";
import Design from "./components/Design";
import Works from './components/Works'

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <>
      <NavBar currentSection={currentSection} />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="chooseus">
        <ChooseUs />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="design">
        <Design />
      </section>
      <section id="testimonial">
        <Testimonial />
      </section>
      <section id="works">
        <Works />
      </section>
      <section id="faq">
        <Faq />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
}

export default App;
