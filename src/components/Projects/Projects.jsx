import { useState, useEffect, useRef } from "react";
import "./Projects.css";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { BsImage } from "react-icons/bs";
import Esports from "../../assets/projects/e-sports-community.png";
import Crypto from "../../assets/projects/crypto-tracker.mp4";
import AiCompanion from "../../assets/projects/AI-Companion.mp4";
import Stockxpert from "../../assets/projects/stockxpert.png";
import Aniverse from "../../assets/projects/aniverse.mp4";

const PROJECTS = [
  {
    id: 1,
    title: "E-Sports Community Platform",
    category: "Full Stack",
    description: "A full-stack platform for competitive gaming communities with real-time features and social connectivity.",
    highlights: [
      {
        metric: "40%",
        label: "Load Time",
        description: "User profiles & team management"
      },
      {
        metric: "WebSocket",
        label: "Real-time",
        description: "Tournament brackets & scheduling"
      }
    ],
    features: [
      "User profiles & team management",
      "Tournament brackets & scheduling",
      "Real time chat & notifications"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets"],
    github: "https://github.com/Devsama007/Esports-Community",
    demo: null,
    media: {
      type: "image",
      src: Esports
    }
  },
  {
    id: 2,
    title: "Cryptocurrency Tracker",
    category: "Featured",
    description: "Real-time crypto dashboard with blockchain integration for transparent transaction metadata storage.",
    highlights: [
      {
        metric: "Multiple",
        label: "APIs",
        description: "Real-time price tracking & charts"
      },
      {
        metric: "Sepolia",
        label: "Ethereum Blockchain",
        description: "Portfolio insights & analytics"
      }
    ],
    features: [
      "Real-time price tracking & charts",
      "Portfolio insights & analytics",
      "Blockchain-based transaction logs"
    ],
    technologies: ["React.js", "Blockchain", "Solidity", "Sepolia Testnet", "CoinGecko API"],
    github: "https://github.com/Devsama007/crypto-dashboard-jan-1",
    demo: null,
    media: {
      type: "video",
      src: Crypto
    }
  },
  {
    id: 3,
    title: "AI Companion",
    category: "Featured",
    description: "Interactive AI assistant with animated Live2D character and RAG-based contextual memory.",
    highlights: [
      {
        metric: "35%",
        label: "Accuracy",
        description: "Animated Live2D character"
      },
      {
        metric: "RAG",
        label: "Memory",
        description: "RAG-based memory system"
      }
    ],
    features: [
      "Animated Live2D character",
      "RAG-based memory system",
      "Modular API architecture"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "Gdrant-Vector-DB", "LLAMA Gemma-2B", "Pixtral"],
    github: "https://github.com/Devsama007/Live-2D-Model-v2",
    demo: null,
      media: {
      type: "video",
      src: AiCompanion
    }
  },
  {
    id: 4,
    title: "StockXpert",
    category: "Full Stack",
    description: "ML powered Stock prediction platform provide insights of market trends by analyzing Historical data and Market sentiments",
    highlights: [
      {
        metric: "90%",
        label: "Prediction Accuracy",
        description: "User profiles & team management"
      },
      {
        metric: "XGBoost",
        label: "ML Algorithm",
        description: "Tournament brackets & scheduling"
      }
    ],
    features: [
      "Accurate Stock Prediction",
      "XGBoost ML Algorithm",
      "Portfolio insights & analytics"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets", "XGBoost Framework", "Flask"],
    github: "https://github.com/Devsama007/StockXpert",
    demo: null,
    media: {
      type: "image",
      src: Stockxpert
    }
  },
  {
    id: 5,
    title: "AniVerse",
    category: "MERN Stack",
    description: "An Anime Streaming and Manga Reading platform for weebs providing both Anime and Manga at one place",
    highlights: [
      {
        metric: "Multiple",
        label: "APIs",
        description: "User profiles & team management"
      },
      {
        metric: "Interactive",
        label: "User Interface",
        description: "Tournament brackets & scheduling"
      }
    ],
    features: [
      "Interactive User profiles",
      "Multiple APIs for both Anime and Manga",
      "Subscription based newsletter"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "WebSockets"],
    github: "https://github.com/Devsama007/AniVerse",
    demo: null,
    media: {
      type: "video",
      src: Aniverse
    }
  },
];

export default function Projects() {

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
    <section className="projects" id="projects" ref={sectionRef}>
      <div className="projects__container">

        {/* Header */}
        <div className="projects__header">
          <h2 className="projects__title">Projects</h2>
          <div className="projects__title-underline"></div>
          <p className="projects__subtitle">
            A selection of projects that showcase my skills and passion
          </p>
        </div>

        {/* Projects Grid */}
        <div className="projects__grid">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className={`project-card ${inView ? "project-card--visible" : ""}`}
              style={{ "--project-index": index }}
            >
              {/* Category Badge */}
              <div className="project-card__badge">{project.category}</div>

              {/* Image Placeholder */}
              {/* <div className="project-card__image">
                <BsImage />
              </div> */}

              {/* Media - Image or Video */}
              <div className="project-card__media">
                {project.media ? (
                  project.media.type === "video" ? (
                    <video
                     autoPlay
                     loop
                     muted
                     playsInline
                     className="project-card__video"
                     >
                      <source src={project.media.src} type="video/mp4" />
                     </video>
                  ) : (
                    <img 
                     src={project.media.src}
                     alt={project.title}
                     className="project-card__image"
                    />
                  )
                ) : (
                  <div className="project-card__placeholder">
                    <BsImage />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">{project.description}</p>

                {/* Highlights */}
                <div className="project-card__highlights">
                  {project.highlights.map((highlight, idx) => (
                    <div key={idx} className="highlight-box">
                      <div className="highlight-box__metric">{highlight.metric}</div>
                      <div className="highlight-box__label">{highlight.label}</div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <ul className="project-card__features">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="project-card__technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="project-card__links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                    >
                      <FaGithub />
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link project-link--demo"
                    >
                      <FiExternalLink />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}