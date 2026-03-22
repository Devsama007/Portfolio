import { useState, useEffect } from "react";
import "./Hero.css";

const TYPING_ROLES = [
    "MERN Stack Developer",
    "Full Stack Developer",
    "Front End Developer",
    "Data Engineer",
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(100);
    const [terminalVisible, setTerminalVisible] = useState(0);

    useEffect(() => {
        const currentRole = TYPING_ROLES[roleIndex];

        const handleTyping = () => {
            if (!isDeleting) {
                // Typing forward
                if (displayText.length < currentRole.length) {
                    setDisplayText(currentRole.substring(0, displayText.length + 1));
                    setTypingSpeed(100);
                } else {
                    // Pause at end before deleting
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                // Deleting
                if (displayText.length > 0) {
                    setDisplayText(currentRole.substring(0, displayText.length - 1));
                    setTypingSpeed(50);
                } else {
                    setIsDeleting(false);
                    setRoleIndex((prev) => (prev + 1) % TYPING_ROLES.length);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, roleIndex, typingSpeed]);

    useEffect(() => {
        const timer = setInterval(() => {
            setTerminalVisible((prev) => {
                if (prev < 8) return prev + 1;
                clearInterval(timer);
                return prev;
            });
        }, 400); //speed

        return () => clearInterval(timer);
    }, []);

    useEffect(() => {
        // Disable on mobile
        if (window.innerWidth < 768) return;

        const hero = document.querySelector('.hero');
        let raf;

        const handleMouseMove = (e) => {
            cancelAnimationFrame(raf);

            raf = requestAnimationFrame(() => {
                const { innerWidth, innerHeight } = window;

                const x = (e.clientX / innerWidth - 0.5) * 20;
                const y = (e.clientY / innerHeight - 0.5) * 20;

                hero.style.setProperty('--move-x', `${x}px`);
                hero.style.setProperty('--move-y', `${y}px`);
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    //Skill wrapper
    // const SKILLS = [
    //     "React",
    //     "Node",
    //     "Express.js",
    //     "MongoDB",
    //     "PostgreSQL",
    //     "MySQL",
    //     "Java",
    //     "Python",
    // ];

    // const groupSkills = (skills, size) => {
    //     const rows = [];
    //     for (let i = 0; i < skills.length; i += size) {
    //         rows.push(skills.slice(i, i + size));
    //     }
    //     return rows;
    // };

    // const skillRows = groupSkills(SKILLS, 3);

    return (
        <section className="hero" id="hero">
            <div className="hero__container">

                {/* Left Content */}
                <div className="hero__content">
                    <div className="hero__greeting">
                        <span className="hero__wave">👋</span>
                        <h1 className="hero__title">
                            Hi, I'm <span className="hero__name">Dev Nataskar</span>
                        </h1>
                    </div>

                    <div className="hero__role-wrapper">
                        <h2 className="hero__role">
                            {displayText}
                            <span className="hero__cursor">|</span>
                        </h2>
                    </div>

                    <p className="hero__description">
                        Building Scalable, High-Performance Web Applications. I build
                        scalable, real-time applications with clean architecture and
                        obsessive attention to performance.
                    </p>

                    <div className="hero__cta">
                        <a href="#projects" className="hero__btn hero__btn--primary">
                            View Projects
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12" />
                                <polyline points="12 5 19 12 12 19" />
                            </svg>
                        </a>
                        <a href="#contact" className="hero__btn hero__btn--secondary">
                            Contact Me
                        </a>
                    </div>

                    <div className="hero__social">
                        <a href="https://github.com/Devsama007" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                        </a>
                        <a href="https://www.linkedin.com/in/devnataskar/" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                        <a href="devnataskar7@gmail.com" className="hero__social-link" aria-label="Email">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                <polyline points="22,6 12,13 2,6" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right Terminal/Code Block */}
                <div className="hero__terminal">
                    <div className="terminal__header">
                        <div className="terminal__dots">
                            <span className="terminal__dot terminal__dot--red"></span>
                            <span className="terminal__dot terminal__dot--yellow"></span>
                            <span className="terminal__dot terminal__dot--green"></span>
                        </div>
                    </div>
                    <div className="terminal__body">
                        <pre className="terminal__code">
                            {terminalVisible >= 1 && (
                                <>
                                    <span className="code-keyword">const</span> <span className="code-variable">developer</span> = {'{'}<br />
                                </>
                            )}
                            {terminalVisible >= 2 && (
                                <>
                                    {"   "}<span className="code-property">name:</span> <span className="code-string">"Dev Nataskar"</span><br />
                                </>
                            )}
                            {terminalVisible >= 3 && (
                                <>
                                    {"   "}<span className="code-property">role:</span> <span className="code-string">"Full-Stack Dev"</span><br />
                                </>
                            )}
                            {terminalVisible >= 4 && (
                                <>
                                    {"   "}
                                    <span className="code-property">skills:</span>{" "}
                                    <span className="skills-line">
                                        [
                                        <span className="code-string">"React"</span>,{" "}
                                        <span className="code-string">"Node"</span>,{" "}
                                        <span className="code-string">"Express.js"</span>,{" "}
                                        <span className="code-string">"MongoDB"</span>,{" "}
                                        <span className="code-string">"PostgreSQL"</span>,{" "}
                                        <span className="code-string">"MySQL"</span>,{" "}
                                        <span className="code-string">"Java"</span>,{" "}
                                        <span className="code-string">"Python"</span>
                                        ]
                                    </span>
                                    <br />
                                </>
                            )}
                            {terminalVisible >= 5 && (
                                <>
                                    {"   "}<span className="code-property">passion:</span> <span className="code-string">"Clean Code"</span><br />
                                </>
                            )}
                            {terminalVisible >= 6 && (
                                <>
                                    {"   "}<span className="code-property">build:</span> {'() => "🚀"'}<br />
                                </>
                            )}
                            {terminalVisible >= 7 && (
                                <>
                                    {'}'}<br /><br />
                                </>
                            )}
                            {terminalVisible >= 8 && (
                                <span className="code-comment">// Let's create something amazing!</span>
                            )}
                        </pre>
                    </div>
                </div>

            </div>

            {/* Floating elements for visual interest */}
            <div className="hero__float hero__float--1"></div>
            <div className="hero__float hero__float--2"></div>
            <div className="hero__float hero__float--3"></div>
        </section>
    );
}