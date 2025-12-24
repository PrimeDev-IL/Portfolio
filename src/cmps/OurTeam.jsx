import profileImage from '../assets/img/lior-profile.jpg'

export function OurTeam() {
    return (
        <section className="our-team-container" aria-labelledby="team-title">
            <h1 id="team-title" className="title">הצוות שלנו</h1>
            <h2 className="subtitle">האנשים מאחורי האוטומציות, הפיתוח והאספקה.</h2>

            <div className="team-cards">
                <article className="team-card">
                    {/* Avatar circle */}
                    <div className="avatar">
                        <img src={profileImage} alt="תמונת פרופיל של ליאור לזר, Full-Stack ו-Security Automation Engineer" className="avatar-image" />
                    </div>

                    {/* Name & role */}
                    <h3 className="member-name">ליאור לזר</h3>
                    <p className="member-role">Full-Stack & Security Automation Engineer</p>

                    {/* Short bio */}
                    <p className="member-bio">
                        מפתח מערכות Web, פתרונות אוטומציה (SOAR) ותשתיות ענן.
                    </p>

                    <p className="member-bio">
                        במהלך השנתיים האחרונות עבדתי על פיתוח והטמעה של פתרונות SOAR בארגון פיננסי גדול, כולל בניית Playbooks, Automations, Dashboards וחיבורי אינטגרציה. בנוסף, אני מפתח צד לקוח ושרת ב-React ו-Node.js ויוצר מערכות Web מותאמות לצרכים של לקוחות.
                        אני משלב ניסיון מעולמות הסייבר וה-SOC יחד עם פיתוח מערכות מודרניות – כדי לספק פתרונות יציבים, יעילים וקלים לתפעול.
                    </p>

                    {/* Tags */}
                    <p className="expertise-title">מומחיות:</p>
                    <div className="member-tags">
                        <span className="tag">Full-Stack (React / Node.js)</span>
                        <span className="tag">SOAR & SOC Automation</span>
                        <span className="tag">DevOps & CI/CD</span>
                    </div>

                    {/* Social links */}
                    <nav className="social-links" aria-label="קישורים חברתיים">
                        <a href="https://www.linkedin.com/in/lior-lazar" target="_blank" rel="noopener noreferrer" aria-label="פרופיל LinkedIn של ליאור לזר">
                            LinkedIn
                        </a>
                        <span className="separator" aria-hidden="true">•</span>
                        <a href="https://github.com/LiorLazar" target="_blank" rel="noopener noreferrer" aria-label="פרופיל GitHub של ליאור לזר">
                            GitHub
                        </a>
                        <span className="separator" aria-hidden="true">•</span>
                        <a href="mailto:lior@primedev.co.il" aria-label="שלח מייל לליאור לזר">
                            מייל                        </a>
                    </nav>
                </article>
            </div>
        </section>
    )
}