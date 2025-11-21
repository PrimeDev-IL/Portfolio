import { heroSectionIcons } from "./ApplicationCmps/svgIcons";

import personImage from '../assets/img/person_clean.png'

export function Hero() {
    return (
        <section className="hero-container full">
            <div className="hero-content">
                <div className="hero-text">
                    <h1 className="title">Full Stack & DevOps Expert</h1>
                    <p className="subtitle">
                        I design secure cloud architectures, build automation-driven security workflows,
                        and ship modern web applications to production.
                    </p>
                    <p className="tags">Full Stack Development · SOAR Automation · DevSecOps</p>
                    <button className="cta-button">Get in Touch</button>
                </div>
                <div className="hero-illustration">
                    {heroSectionIcons.heroIllustrator}
                </div>
            </div>
        </section>
    )
}