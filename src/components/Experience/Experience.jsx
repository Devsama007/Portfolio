import { useState, useEffect, useRef } from "react";
import "./Experience.css";
import { BiCalendar, BiMapPin } from "react-icons/bi";

const EXPERIENCES = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "BankFincon",
    location: "Remote",
    startDate: "Nov 2024",
    endDate: "Jan 2025",
    description: "Focused on performance optimization and building reusable UI components for fintech dashboards.",
    achievements: [
      {
        metric: "25%",
        description: "Improved dashboard load time by simplifying React components and optimizing state management"
      },
      {
        metric: "30%",
        description: "Faster feature development enabled by building reusable UI component library"
      },
      {
        metric: "API",
        description: "Optimized API integration and data handling using Axios with caching strategies"
      }
    ],
    technologies: ["React.js", "JavaScript", "Axios", "REST APIs"]
  },
  // Add more experiences here
];

export default function Experience() {

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
    <section className={`experience ${inView ? "experience--visible" : ""}`} id="experience" ref={sectionRef}>
      <div className="experience__container">

        {/* Header */}
        <div className="experience__header">
          <h2 className="experience__title">Experience</h2>
          <div className="experience__title-underline"></div>
          <p className="experience__subtitle">
            Where I've contributed and made an impact
          </p>
        </div>

        {/* Experience Cards */}
        <div className="experience__timeline">
          {EXPERIENCES.map((exp, index) => (
            <div
              key={exp.id}
              className={`experience-card ${inView ? "experience-card--visible" : ""}`}
              style={{ "--exp-index": index }}
            >
              {/* Card Header */}
              <div className="experience-card__header">
                <div className="experience-card__title-group">
                  <h3 className="experience-card__title">{exp.title}</h3>
                  <p className="experience-card__company">{exp.company}</p>
                </div>
                <div className="experience-card__meta">
                  <div className="experience-card__date">
                    <BiCalendar />
                    <span>{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <div className="experience-card__location">
                    <BiMapPin />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="experience-card__description">
                {exp.description}
              </p>

              {/* Achievements */}
              <div className="experience-card__achievements">
                {exp.achievements.map((achievement, idx) => (
                  <div
                    key={idx}
                    className="achievement-badge"
                    style={{ "--achievement-index": idx }}
                  >
                    <div className="achievement-badge__metric">
                      {achievement.metric}
                    </div>
                    <p className="achievement-badge__description">
                      {achievement.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Technologies */}
              <div className="experience-card__technologies">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}