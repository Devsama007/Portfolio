import { useState, useEffect, useRef } from "react";
import "./CodingJourney.css";
import { FiExternalLink } from "react-icons/fi";
import { SiGithub, SiLeetcode, SiHackerrank } from "react-icons/si";

export default function CodingJourney() {

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

    const GITHUB_USERNAME = "Devsama007"; // ← Update this
    const LEETCODE_USERNAME = "DevNataskar_7"; // ← Update this
    const HACKERRANK_PROFILE = "https://www.hackerrank.com/profile/devnataskar7"; // ← Update this

    return (
        <section className="coding-journey" id="coding-journey" ref={sectionRef}>
            <div className={`coding-journey__container ${inView ? "coding-journey__container--visible" : ""}`}>

                {/* Header */}
                <div className="coding-journey__header">
                    <h2 className="coding-journey__title">My Coding Journey</h2>
                    <div className="coding-journey__title-underline"></div>
                    <p className="coding-journey__subtitle">
                        Consistent coding and open-source contributions
                    </p>
                </div>

                {/* GitHub Heatmap */}
                <div className="github-heatmap">
                    <div className="github-heatmap__header">
                        <div className="github-heatmap__title">
                            <SiGithub />
                            <span>GitHub Heatmap</span>
                        </div>
                        <a
                            href={`https://github.com/${GITHUB_USERNAME}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="github-heatmap__link"
                        >
                            github.com/{GITHUB_USERNAME}
                        </a>
                    </div>

                    <div className="github-heatmap__content">
                        <img
                            src={`https://ghchart.rshah.org/${GITHUB_USERNAME}`}
                            alt="GitHub Contribution Graph"
                            className="github-heatmap__image"
                        />
                    </div>
                </div>

                {/* Coding Profiles */}
                <div className="coding-profiles">

                    {/* LeetCode */}
                    <div className="profile-card profile-card--leetcode">
                        <div className="profile-card__header">
                            <SiLeetcode />
                            <h3>LeetCode Profile</h3>
                        </div>

                        <div className="profile-card__content">
                            <img
                                src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Ubuntu&ext=heatmap`}
                                alt="LeetCode Stats"
                                className="profile-card__image"
                            />
                        </div>

                        <a
                            href={`https://leetcode.com/${LEETCODE_USERNAME}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-card__link"
                        >
                            <span>leetcode.com/{LEETCODE_USERNAME}</span>
                            <FiExternalLink />
                        </a>
                    </div>

                    {/* HackerRank */}
                    <div className="profile-card profile-card--hackerrank">
                        <div className="profile-card__header">
                            <SiHackerrank />
                            <h3>HackerRank Profile</h3>
                        </div>

                        <div className="profile-card__content profile-card__content--placeholder">
                            <div className="hackerrank-placeholder">
                                <SiHackerrank className="hackerrank-placeholder__icon" />
                                <p className="hackerrank-placeholder__text">
                                    View my HackerRank achievements and certifications
                                </p>
                            </div>
                        </div>

                        <a
                            href={HACKERRANK_PROFILE}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="profile-card__link"
                        >
                            <span>View HackerRank Profile</span>
                            <FiExternalLink />
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}