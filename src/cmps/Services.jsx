import { servicesIcons } from "./ApplicationCmps/svgIcons";

export function Services() {
    return (
        <section className="services-container" aria-labelledby="services-title">
            <h1 id="services-title" className="title">השירותים שלנו</h1>

            <div className="services-cards" role="list">
                <article className="card flex align-center" role="listitem">
                    <div className="card-header">
                        <span className="icon" aria-hidden="true">{servicesIcons.webDevIcon}</span>
                        <h2>פיתוח מערכות Web</h2>
                        <span className="icon" aria-hidden="true">{servicesIcons.webDevIcon}</span>
                    </div>
                    <p> מערכות Web מודרניות שמותאמות לצרכים של עסקים וסטארטאפים, עם דגש על ביצועים, אבטחה וחוויית משתמש.</p>
                    <ul className="package-features">
                        <li>פיתוח ממשק ב - React</li>
                        <li>פיתוח צד שרת ב - Node.js</li>
                        <li>יצירת API מאובטח וחיבור למערכות חיצוניות</li>
                        <li>דשבורדים וממשקי ניהול</li>
                        <li>אופטימיזציה למהירות ויציבות</li>
                        <li>פריסה לענן (Vercel / AWS / Render)</li>
                    </ul>
                    <p className="cta">מתאים לעסקים שצריכים מערכת יציבה, מהירה וקלה להרחבה.</p>
                </article>
                <article className="card flex align-center" role="listitem">
                    <div className="card-header">
                        <span className="icon" aria-hidden="true">{servicesIcons.devOpsIcon}</span>
                        <h2>DevOps ותשתיות ענן</h2>
                        <span className="icon" aria-hidden="true">{servicesIcons.devOpsIcon}</span>
                    </div>
                    <p>הקמה וניהול של תשתיות בקנה מידה גדול עם תהליכי CI/CD, פריסות אוטומטיות וניטור מלא.</p>
                    <ul className="package-features">
                        <li>הקמת CI/CD pipelines</li>
                        <li>Containerization עם Docker</li>
                        <li>פריסה לענן AWS / Render / Vercel</li>
                        <li>	ניטור, לוגים והתראות (Grafana / ELK)</li>
                        <li>שיפור ביצועים וקיצור זמני טעינה</li>
                        <li>תמיכה בפרודקשן ובתקלות שוטפות</li>
                    </ul>
                    <p className="cta">מתאים לסטארטאפים וחברות עם מערכות פעילות שדורשות זמינות וביצועים.</p>
                </article>
                <article className="card flex align-center" role="listitem">
                    <div className="card-header">
                        <span className="icon" aria-hidden="true">{servicesIcons.soarIcon}</span>
                        <h2>SOAR ואוטומציות אבטחה <span>(Cortex XSOAR)</span>
                        </h2>
                        <span className="icon" aria-hidden="true">{servicesIcons.soarIcon}</span>
                    </div>
                    <p class="service-desc">
                        פיתוח Playbooks, אוטומציות ואינטגרציות לארגונים שרוצים לייעל את תהליכי ה-SOC ולקצר את זמן הטיפול באירועים.
                    </p>
                    <ul className="package-features">
                        <li>פיתוח Playbooks מאפס</li>
                        <li>אוטומציות Incident Response</li>
                        <li>בניית אינטגרציות מותאמות (Python / JavaScript)</li>
                        <li>Dashboards ו-Widgets מתקדמים</li>
                        <li>תהליכי Jobs לתחזוקה אוטומטית</li>
                        <li>חיבור ל-EDR / SIEM / Ticketing</li>
                    </ul>
                    <p className="cta">מתאים ל-SOC, ארגוני IT וחברות אבטחת מידע.</p>
                </article>
            </div>
        </section >
    )
}