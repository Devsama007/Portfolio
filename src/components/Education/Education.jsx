import { useState, useEffect, useRef } from "react";
import "./Education.css";
import { BiCalendar, BiMapPin } from "react-icons/bi";
import { PiGraduationCapLight } from "react-icons/pi";

const EDUCATION = [
  {
    id: 1,
    degree: "Bachelor of Engineering",
    field: "Computer Science",
    institution: "Atharva College of Engineering",
    location: "Mumbai, Maharashtra, India",
    startYear: "2021",
    endYear: "2025",
    cgpa: "9.0",
    maxCgpa: "10",
    achievements: [
      // Add achievements here if needed
    ]
  },
  {
    id: 2,
    degree: "Higher Secondary Education",
    field: "Science (PCMB)",
    institution: "Gokhale College of Science",
    location: "Mumbai, Maharashtra, India",
    startYear: "2018",
    endYear: "2020",
    percentage: "69.23",
    achievements: [
      // Add achievements here if needed
    ]
  }
];


export default function Education() {

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
      { threshold: 0.2 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);


  return (
    <section className={`education ${inView ? "education--visible" : ""}`} id="education" ref={sectionRef}>
      <div className="education__container">

        {/* Header */}
        <div className="education__header">
          <h2 className="education__title">Education</h2>
          <div className="education__title-underline"></div>
          <p className="education__subtitle">
            My academic journey and achievements
          </p>
        </div>

        {/* Education Cards */}
        <div className="education__list">
          {EDUCATION.map((edu, index) => (
            <div
              key={edu.id}
              className={`education-card ${inView ? "education-card--visible" : ""}`}
              style={{ "--edu-index": index }}
            >
              {/* Graduation Cap Icon */}
              <div className="education-card__icon">
                <PiGraduationCapLight />
              </div>

              {/* Content */}
              <div className="education-card__content">
                <div className="education-card__header">
                  <div className="education-card__title-group">
                    <h3 className="education-card__degree">{edu.degree}</h3>
                    <p className="education-card__field">{edu.field}</p>
                  </div>
                </div>

                <p className="education-card__institution">{edu.institution}</p>

                <div className="education-card__meta">
                  <div className="education-card__date">
                    <BiCalendar />
                    <span>{edu.startYear} - {edu.endYear}</span>
                  </div>
                  <div className="education-card__location">
                    <BiMapPin />
                    <span>{edu.location}</span>
                  </div>
                </div>

                {/* CGPA */}
                <div className="education-card__cgpa">
                  {edu.cgpa ? (
                    <div className="cgpa-badge">
                      <span className="cgpa-badge__label">CGPA</span>
                      <div className="cgpa-badge__value">
                        <span className="cgpa-badge__score">{edu.cgpa}</span>
                        <span className="cgpa-badge__max">/ {edu.maxCgpa}</span>
                      </div>
                    </div>
                  ) : edu.percentage ? (
                    <div className="cgpa-badge">
                      <span className="cgpa-badge__label">Percentage</span>
                      <div className="cgpa-badge__value">
                        <span className="cgpa-badge__score">{edu.percentage}</span>
                        <span className="cgpa-badge__max">%</span>
                      </div>
                    </div>
                  ) : null}
                </div>

                {/* Achievements (if any) */}
                {edu.achievements && edu.achievements.length > 0 && (
                  <ul className="education-card__achievements">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}