import "./Footer.css";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { SiLeetcode } from "react-icons/si";
import logoVideo from '../../assets/initial/portfolio-logo.mp4';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">

        {/* Top Section */}
        <div className="footer__top">

          {/* Logo & Tagline */}
          <div className="footer__brand">
            {/* <h3 className="footer__logo">&lt;Dev/&gt;</h3> */}

            {/* Logo - Video */}
            <div className="footer__logo">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="footer__logo-video"
                >
                  <source src={logoVideo} type="video/mp4" />
                </video>
            </div>

            <p className="footer__tagline">Building the web, one component at a time.</p>
          </div>

          {/* Quick Links */}
          <div className="footer__links">
            <h4 className="footer__links-title">Navigation</h4>
            <nav className="footer__nav">
              <button onClick={() => scrollToSection('about')}>About</button>
              <button onClick={() => scrollToSection('skills')}>Skills</button>
              <button onClick={() => scrollToSection('experience')}>Experience</button>
              <button onClick={() => scrollToSection('projects')}>Projects</button>
              <button onClick={() => scrollToSection('education')}>Education</button>
              <button onClick={() => scrollToSection('contact')}>Contact</button>
            </nav>
          </div>

          {/* Connect */}
          <div className="footer__connect">
            <h4 className="footer__connect-title">Connect With Me</h4>
            <div className="footer__social">
              <a
                href="https://github.com/Devsama007"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <FiGithub />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/devnataskar/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <FiLinkedin />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://leetcode.com/u/DevNataskar_7/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <SiLeetcode />
                <span>LeetCode</span>
              </a>
              <a
                href="mailto:devnataskar7@gmail.com"
                className="footer__social-link"
              >
                <FiMail />
                <span>Email</span>
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="footer__divider"></div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            © {currentYear} Dev Nataskar. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}