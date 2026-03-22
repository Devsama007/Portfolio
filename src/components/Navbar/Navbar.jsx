import { useState, useEffect, useRef } from "react";
import "./Navbar.css";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, onThemeToggle }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  // Wrapper ref (covers nav + menu)
  const wrapperRef = useRef(null);

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //  Click outside (fixed)
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
  };

  return (
    <div ref={wrapperRef}>
      {/* ================= NAVBAR ================= */}
      <nav
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      >
        <div className="navbar__container">

          {/* Logo */}
          <a href="#" className="navbar__logo" onClick={() => setActiveLink("")} data-text="<Dev/>">
            <span className="navbar__logo-bracket">&lt;</span>
            <span className="navbar__logo-name"> Dev </span>
            <span className="navbar__logo-bracket">/&gt;</span>
          </a>

          {/* Desktop Links */}
          <ul className="navbar__links">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`navbar__link ${activeLink === href ? "navbar__link--active" : ""
                    }`}
                  onClick={() => handleNavClick(href)}
                >
                  {label}
                  <span className="navbar__link-underline" />
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="navbar__actions">

            {/* Theme Toggle */}
            <button
              className="navbar__theme-btn"
              onClick={onThemeToggle}
              aria-label="Toggle theme"
            >
              <span className={`theme-icon ${theme === "dark" ? "theme-icon--sun" : "theme-icon--moon"}`}>
                {theme === "dark" ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </span>
            </button>

            {/* Resume */}
            <a
              href="/resume.pdf"
              download="Dev_Nataskar_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__resume-btn"
            >
              Resume
            </a>

            {/* Hamburger */}
            <button
              className={`navbar__hamburger ${menuOpen ? "navbar__hamburger--open" : ""
                }`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label="Toggle menu"
            >
              <span className="hamburger__bar" />
              <span className="hamburger__bar" />
              <span className="hamburger__bar" />
            </button>
          </div>
        </div>
      </nav>

      {/* ================= BACKDROP ================= */}
      {menuOpen && (
        <div
          className="navbar__backdrop"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`navbar__mobile-menu ${menuOpen ? "navbar__mobile-menu--open" : ""
          }`}
      >
        {/* Close button */}
        <button
          className="mobile-menu__close"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        {/* Links */}
        <ul className="mobile-menu__links">
          {NAV_LINKS.map(({ label, href }, i) => (
            <li key={href} className="mobile-menu__item">
              <a
                href={href}
                className={`mobile-menu__link ${activeLink === href
                    ? "mobile-menu__link--active"
                    : ""
                  }`}
                onClick={() => handleNavClick(href)}
              >
                <span className="mobile-menu__number">{i + 1}.</span>
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Resume */}
        <a
          href="/resume.pdf"
          download="Dev_Nataskar_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-menu__resume-btn"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}