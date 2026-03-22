import { useState, useEffect, useRef } from "react";
// import { useState } from "react";
import "./Skills.css";
// Import icons from react-icons
import { FaJava, FaJsSquare, FaPython, FaHtml5, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMysql, SiPostgresql, SiExpress, SiTailwindcss, SiMongodb, SiGraphql, SiSpring, SiPostman } from "react-icons/si";
import { TbApi } from "react-icons/tb";

const SKILLS_DATA = {
  all: [
    { name: "Java", category: "Backend Programming", proficiency: 85, color: "#ff8018", icon: "java" },
    { name: "JavaScript", category: "Web Development", proficiency: 80, color: "#F7DF1E", icon: "javascript" },
    { name: "Python", category: "Backend & Data", proficiency: 65, color: "#3776AB", icon: "python" },
    { name: "HTML/CSS", category: "Frontend Markup", proficiency: 90, color: "#E34F26", icon: "html" },
    { name: "MySQL", category: "Relational Database", proficiency: 80, color: "#4479A1", icon: "mysql" },
    { name: "PostgreSQL", category: "Relational Database", proficiency: 85, color: "#336791", icon: "postgresql" },
    { name: "React.js", category: "Frontend Framework", proficiency: 85, color: "#61DAFB", icon: "react" },
    { name: "Node.js", category: "Backend Runtime", proficiency: 80, color: "#339933", icon: "node" },
    { name: "Express.js", category: "Web Framework", proficiency: 80, color: "#000000", icon: "express" },
    { name: "Tailwind CSS", category: "Utility CSS", proficiency: 70, color: "#06B6D4", icon: "tailwind" },
    { name: "MongoDB", category: "NoSQL Database", proficiency: 85, color: "#47A248", icon: "mongodb" },
    { name: "REST API", category: "API Architecture", proficiency: 85, color: "#FF6C37", icon: "api" },
    { name: "GraphQL", category: "Query Language", proficiency: 70, color: "#E10098", icon: "graphql" },
    { name: "Spring Boot", category: "Java Framework", proficiency: 65, color: "#6DB33F", icon: "spring" },
    { name: "Postman", category: "API Testing", proficiency: 85, color: "#FF6C37", icon: "postman" },
  ],
  languages: [
    { name: "Java", category: "Backend Programming", proficiency: 85, color: "#ff8018", icon: "java" },
    { name: "JavaScript", category: "Web Development", proficiency: 80, color: "#F7DF1E", icon: "javascript" },
    { name: "Python", category: "Backend & Data", proficiency: 65, color: "#3776AB", icon: "python" },
    { name: "HTML/CSS", category: "Frontend Markup", proficiency: 90, color: "#E34F26", icon: "html" },
    { name: "MySQL", category: "Relational Database", proficiency: 80, color: "#4479A1", icon: "mysql" },
    { name: "PostgreSQL", category: "Relational Database", proficiency: 85, color: "#336791", icon: "postgresql" },
  ],
  frameworks: [
    { name: "React.js", category: "Frontend Framework", proficiency: 85, color: "#61DAFB", icon: "react" },
    { name: "Node.js", category: "Backend Runtime", proficiency: 80, color: "#339933", icon: "node" },
    { name: "Express.js", category: "Web Framework", proficiency: 80, color: "#000000", icon: "express" },
    { name: "Tailwind CSS", category: "Utility CSS", proficiency: 70, color: "#06B6D4", icon: "tailwind" },
    { name: "MongoDB", category: "NoSQL Database", proficiency: 85, color: "#47A248", icon: "mongodb" },
    { name: "REST API", category: "API Architecture", proficiency: 85, color: "#FF6C37", icon: "api" },
    { name: "GraphQL", category: "Query Language", proficiency: 70, color: "#E10098", icon: "graphql" },
    { name: "Spring Boot", category: "Java Framework", proficiency: 65, color: "#6DB33F", icon: "spring" },
    { name: "Postman", category: "API Testing", proficiency: 85, color: "#FF6C37", icon: "postman" },
  ],
};

// Map skill icons to react-icons
const SKILL_ICONS = {
  java: FaJava,
  javascript: FaJsSquare,
  python: FaPython,
  html: FaHtml5,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  react: FaReact,
  node: FaNodeJs,
  express: SiExpress,
  tailwind: SiTailwindcss,
  mongodb: SiMongodb,
  api: TbApi,
  graphql: SiGraphql,
  spring: SiSpring,
  postman: SiPostman,
};

const TABS = [
  { id: "all", label: "All Skills", icon: "layers" },
  { id: "languages", label: "Languages", icon: "code" },
  { id: "frameworks", label: "Frameworks & Libraries", icon: "box" },
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState("all");
  const [key, setKey] = useState(0);

  const skills = SKILLS_DATA[activeTab] || [];

  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

    // Reset animation when tab changes
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setInView(false); // Reset visibility
    setKey(prev => prev + 1); // Force re-render
    
    // Re-trigger after a tiny delay
    setTimeout(() => {
      setInView(true);
    }, 50);
  };

  return (
    <section className={`skills ${inView ? "skills--visible" : ""}`} id="skills" ref={sectionRef}>
      <div className="skills__container">

        {/* Header */}
        <div className="skills__header">
          <h2 className="skills__title">Technical Skills</h2>
          <div className="skills__title-underline"></div>
          <p className="skills__subtitle">
            A comprehensive overview of my technical expertise across languages, frameworks, and development tools.
          </p>
        </div>

        {/* Tabs */}
        <div className="skills__tabs">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              className={`skills__tab ${activeTab === tab.id ? "skills__tab--active" : ""}`}
              onClick={() => handleTabChange(tab.id)}
            >
              <TabIcon type={tab.icon} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="skills__grid" key={key}>
          {skills.map((skill, index) => {
            const IconComponent = SKILL_ICONS[skill.icon];
            return (
              <div
                key={skill.name}
                className= {`skill-card ${inView ? "skill-card--visible" : ""}`}
                style={{ "--skill-index": index }}
              >
                <div className="skill-card__header">
                  <div
                    className="skill-card__icon"
                    style={{ backgroundColor: skill.color }}
                  >
                    {IconComponent && <IconComponent />}
                  </div>
                  <div className="skill-card__info">
                    <h3 className="skill-card__name">{skill.name}</h3>
                    <p className="skill-card__category">{skill.category}</p>
                  </div>
                </div>

                <div className="skill-card__proficiency">
                  <div className="proficiency__label">
                    <span>Proficiency</span>
                    <span className="proficiency__value">{skill.proficiency}%</span>
                  </div>
                  <div className="proficiency__bar">
                    <div
                      className="proficiency__fill"
                      style={{
                        width: `${skill.proficiency}%`,
                        backgroundColor: skill.color
                      }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

// Tab icons
function TabIcon({ type }) {
  if (type === "layers") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    );
  }
  if (type === "code") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    );
  }
  if (type === "box") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
        <line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    );
  }
  return null;
}