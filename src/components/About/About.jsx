import { useState, useEffect, useRef } from "react";
import "./About.css";

const STATS = [
  { value: 3, suffix: "+", label: "Projects Shipped" },
  { value: 25, suffix: "%", label: "Performance Gains" },
  { value: 9.0, suffix: "", label: "CGPA" },
];

const EXPERTISE_AREAS = [
  {
    title: "Performance Optimizer",
    icon: "zap",
    description: "Architecting high-performance systems with measurable speed improvements"
  },
  {
    title: "Real-time Systems Architect",
    icon: "activity",
    description: "Building scalable WebSocket solutions and event-driven architectures"
  },
  {
    title: "AI Integration",
    icon: "cpu",
    description: "Implementing intelligent features with modern ML frameworks"
  },
  {
    title: "Clean Code Writer",
    icon: "code",
    description: "Writing maintainable, testable code with best practices"
  },
];

// Icon components
const ZapIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

const ActivityIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
  </svg>
);

const CpuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
    <rect x="9" y="9" width="6" height="6" />
    <line x1="9" y1="1" x2="9" y2="4" />
    <line x1="15" y1="1" x2="15" y2="4" />
    <line x1="9" y1="20" x2="9" y2="23" />
    <line x1="15" y1="20" x2="15" y2="23" />
    <line x1="20" y1="9" x2="23" y2="9" />
    <line x1="20" y1="14" x2="23" y2="14" />
    <line x1="1" y1="9" x2="4" y2="9" />
    <line x1="1" y1="14" x2="4" y2="14" />
  </svg>
);

const CodeIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);

const ICONS = {
  zap: ZapIcon,
  activity: ActivityIcon,
  cpu: CpuIcon,
  code: CodeIcon,
};

export default function About() {
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
    <section className="about" id="about" ref={sectionRef}>
      <div className="about__container">

        {/* Left Content */}
        <div className={`about__content ${inView ? "about__content--visible" : ""}`}>
          <div className="about__header">
            <span className="about__label">About Me</span>
            <h2 className="about__title">
              Building the Future, One Line at a Time
            </h2>
          </div>

          <div className="about__text">
            <p>
              I'm a passionate Full-Stack Developer with deep expertise in React.js and
              the MERN stack. I thrive on building applications that are not just functional,
              but scalable, performant, and maintainable.
            </p>
            <p>
              With a strong foundation in Java and object-oriented programming, I bring
              structured thinking to every project. Whether it's optimizing a dashboard to
              load 25% faster or architecting a real-time gaming platform with WebSockets,
              I focus on delivering measurable impact.
            </p>
            <p>
              My interests span real-time systems, AI-powered applications, and modern
              web architectures. I believe great software is built with clean code,
              thoughtful design, and a relentless focus on user experience.
            </p>
          </div>

          {/* Expertise Cards */}
          <div className="about__expertise">
            {EXPERTISE_AREAS.map((area, index) => {
              const IconComponent = ICONS[area.icon];
              return (
                <div
                  key={area.title}
                  className="expertise-card"
                  style={{ "--card-index": index }}
                >
                  <div className="expertise-card__icon">
                    <IconComponent />
                  </div>
                  <div className="expertise-card__content">
                    <h3 className="expertise-card__title">{area.title}</h3>
                    <p className="expertise-card__description">{area.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Stats */}
        <div className={`about__stats ${inView ? "about__stats--visible" : ""}`}>

          <div className="stats-hexagon">
            <div className="stats-hexagon__inner">
              {STATS.map((stat, index) => (
                <div
                  key={stat.label}
                  className="stat-card"
                  style={{ "--stat-index": index }}
                >
                  <div className="stat-card__value">
                    {inView && <AnimatedNumber value={stat.value} suffix={stat.suffix} />}
                  </div>
                  <div className="stat-card__label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Animated number component
function AnimatedNumber({ value, suffix }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const isDecimal = value % 1 !== 0;
    const increment = isDecimal ? value / 50 : Math.ceil(value / 50);
    const interval = setInterval(() => {
      setCount((prev) => {
        const next = prev + increment;
        if (next >= value) {
          clearInterval(interval);
          return value;
        }
        return next;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [value]);

  const displayValue = value % 1 !== 0 ? count.toFixed(1) : Math.floor(count);

  return (
    <>
      {displayValue}
      {suffix}
    </>
  );
}