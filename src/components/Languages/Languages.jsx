import { useState, useEffect, useRef } from "react";
import "./Languages.css";
import UKFlag from "../../assets/flags/uk.jpg";
import IndiaFlag from "../../assets/flags/india.jpg";
import GermanyFlag from "../../assets/flags/germany.jpg";
import JapanFlag from "../../assets/flags/japan.jpg";

const LANGUAGES = [
  {
    id: 1,
    name: "English",
    proficiency: "Fluent",
    flag: UKFlag // UK flag
  },
  {
    id: 2,
    name: "Hindi",
    proficiency: "Native",
    flag: IndiaFlag // India flag
  },
  {
    id: 3,
    name: "Marathi",
    proficiency: "Native",
    flag: IndiaFlag // India flag
  },
  {
    id: 4,
    name: "Sanskrit",
    proficiency: "Conversational",
    flag: IndiaFlag // India flag 
  },
  {
    id: 5,
    name: "Japanese",
    proficiency: "JLPT N3 (In Progress)",
    flag: JapanFlag // Japan flag
  },
  {
    id: 6,
    name: "German",
    proficiency: "Goethe-Zertifikat A1 (In Progress)",
    flag: GermanyFlag // Germany flag
  }
];

export default function Languages() {

  //Animation state
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.4 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`languages ${inView ? "languages--visible" : ""}`} id="languages" ref={sectionRef}>
      <div className="languages__container">

        {/* Header */}
        <div className="languages__header">
          <h2 className="languages__title">Languages</h2>
          <div className="languages__title-underline"></div>
          <p className="languages__subtitle">
            Communicating across cultures
          </p>
        </div>

        {/* Languages Grid */}
        <div className="languages__grid">
          {LANGUAGES.map((language, index) => (
            <div
              key={language.id}
              className={`language-card ${inView ? "language-card--visible" : ""}`}
              style={{ "--lang-index": index }}
            >
              {/* Flag */}
              <div className="language-card__flag">
                <img src={language.flag} alt={language.name} />
              </div>

              {/* Content */}
              <div className="language-card__content">
                <h3 className="language-card__name">{language.name}</h3>
                <p className="language-card__proficiency">{language.proficiency}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}