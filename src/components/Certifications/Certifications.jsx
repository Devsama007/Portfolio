import { useState, useEffect, useRef } from "react";
import "./Certifications.css";
import { FiExternalLink } from "react-icons/fi";
import { FaTrophy, FaFileAlt, FaCloud, FaReact, FaChartBar } from "react-icons/fa";
import OracleIcon from "../../assets/icons/oracle.svg";
import Hacker from "../../assets/icons/hackerrank.svg";
import Deloitte from "../../assets/icons/deloitte.svg";
import Mckinsey from "../../assets/icons/mckinsey.svg";
import RD from "../../assets/icons/research-and-development.png";
import Research from "../../assets/icons/research.png";
// import { SiDeloitte } from "react-icons/si";

const CERTIFICATIONS = [
  {
    id: 1,
    title: "Smart Virtual Surveillance System",
    organization: "",
    description: "Led backend development for R&D project that secured funding",
    icon: "trophy",
    color: "#F59E0B"
  },
  {
    id: 2,
    title: "Research Publications",
    organization: "",
    description: "Published papers on Dark Matter Analysis and StockXpert Trading Platform",
    icon: "document",
    color: "#8B5CF6"
  },
  {
    id: 3,
    title: "Oracle Cloud AI Certification",
    organization: "OCI 2025 Certified AI Foundations Associate",
    description: "",
    icon: "cloud",
    color: "#ffffff"
  },
  {
    id: 4,
    title: "HackerRank React",
    organization: "React Development Certification",
    description: "",
    icon: "react",
    color: "#000000"
  },
  {
    id: 5,
    title: "Deloitte Analytics",
    organization: "Data Analytics Job Simulation - Deloitte Australia",
    description: "",
    icon: "deloitte",
    color: "#86BC25"
  },
  {
    id: 6,
    title: "McKinsey Forward Program",
    organization: "McKinsey Forward Program 2025 Certified",
    description: "",
    icon: "mckinsey",
    color: "#2580bc"
  }
];

const ICONS = {
  trophy: RD,
  document: Research,
  cloud: OracleIcon,
  react: Hacker,
  deloitte: Deloitte,
  mckinsey: Mckinsey
};

export default function Certifications() {

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
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`certifications ${inView ? "certifications--visible" : ""}`} id="certifications" ref={sectionRef}>
      <div className="certifications__container">

        {/* Header */}
        <div className="certifications__header">
          <h2 className="certifications__title">Certifications & Achievements</h2>
          <div className="certifications__title-underline"></div>
          <p className="certifications__subtitle">
            Recognition and credentials that showcase my dedication
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="certifications__grid">
          {CERTIFICATIONS.map((cert, index) => {
            const IconComponent = ICONS[cert.icon];
            return (
              <div
                key={cert.id}
                className={`cert-card ${inView ? "cert-card--visible" : ""}`}
                style={{ "--cert-index": index }}
              >
                {/* Icon */}
                <div
                  className="cert-card__icon"
                  style={{ backgroundColor: cert.color }}
                >
                  <img src={IconComponent} alt={cert.title} />
                </div>

                {/* Content */}
                <div className="cert-card__content">
                  <h3 className="cert-card__title">{cert.title}</h3>
                  {cert.organization && (
                    <p className="cert-card__organization">{cert.organization}</p>
                  )}
                  {cert.description && (
                    <p className="cert-card__description">{cert.description}</p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="certifications__action">
          <a
            href="https://drive.google.com/drive/folders/1psK6Mzsewg-dAT9_OBrfqDrmCh7ZVoco"
            target="_blank"
            rel="noopener noreferrer"
            className="view-all-btn"
          >
            <span>View All Certificates</span>
            <FiExternalLink />
          </a>
        </div>

      </div>
    </section>
  );
}