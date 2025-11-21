import profileImage from '../assets/img/lior-profile.jpg'

export function OurTeam() {
    return (
        <section className="our-team-container">
            <h1 className="title">Our Team</h1>
            <h2 className="subtitle">The people behind the automation, development, and delivery.</h2>

            <div className="team-cards">
                <article className="team-card">
                    {/* Avatar circle */}
                    <div className="avatar">
                        <img src={profileImage} alt="Lior Lazar" className="avatar-image" />
                    </div>

                    {/* Name & role */}
                    <h3 className="member-name">Lior Lazar</h3>
                    <p className="member-role">Founder & Lead Engineer</p>

                    {/* Short bio */}
                    <p className="member-bio">
                        Security Automation & Full-Stack engineer, building
                        reliable SOAR playbooks, cloud security workflows, and
                        modern web applications end-to-end.
                    </p>

                    {/* Tags */}
                    <div className="member-tags">
                        <span className="tag">SOAR & SOC Automation</span>
                        <span className="tag">Full-Stack (React / Node.js)</span>
                        <span className="tag">DevOps & CI/CD</span>
                    </div>

                    {/* Social links */}
                    <div className="social-links">
                        <a href="https://www.linkedin.com/in/lior-lazar">
                            LinkedIn
                        </a>
                        <span className="separator">•</span>
                        <a href="https://github.com/LiorLazar">
                            GitHub
                        </a>
                        <span className="separator">•</span>
                        <a href="mailto:lior@example.com">
                            Contact
                        </a>
                    </div>
                </article>
            </div>
        </section>
    )
}