import profileImage from '../assets/img/lior-profile.jpg'

export function OurTeam() {
    return (
        <section className="our-team-container">
            <h1 className="title">הצוות שלנו</h1>
            <h2 className="subtitle">האנשים מאחורי האוטומציות, הפיתוח והאספקה.</h2>

            <div className="team-cards">
                <article className="team-card">
                    {/* Avatar circle */}
                    <div className="avatar">
                        <img src={profileImage} alt="ליאור לזר" className="avatar-image" />
                    </div>

                    {/* Name & role */}
                    <h3 className="member-name">ליאור לזר</h3>
                    <p className="member-role">Full-Stack & Security Automation Engineer</p>

                    {/* Short bio */}
                    <p className="member-bio">
                        בעל ניסיון בבניית תהליכי אבטחה חכמים, פיתוח מערכות Web ואינטגרציות"  ארגוניות מורכבות.
                        מפתח Playbooks, Automations ו-Dashboards ל-Cortex XSOAR, ובונה מערכות React/Node.js המותאמות לצרכים אמיתיים של לקוחות.
                    </p>

                    <p className="member-bio">
                        אני מאמין בפתרונות יעילים, מהירים ומדויקים — שמספקים תוצאות מהר, משפרים תהליכים ומעלים את רמת האבטחה והפרודוקטיביות בארגון.
                    </p>

                    {/* Tags */}
                    <p className="expertise-title">מומחיות:</p>
                    <div className="member-tags">
                        <span className="tag">Full-Stack (React / Node.js)</span>
                        <span className="tag">SOAR & SOC Automation</span>
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
                        <a href="mailto:lior@primedev.co.il">
                            מייל                        </a>
                    </div>
                </article>
            </div>
        </section>
    )
}