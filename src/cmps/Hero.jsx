import { heroSectionIcons } from "./ApplicationCmps/svgIcons";

export function Hero() {
    return (
        <section id="main-content" className="hero-container full" aria-labelledby="hero-title">
            <div className="hero-content">
                {/* Right column: SVG and buttons */}
                <div className="hero-visual" role="img" aria-label="איור דיגיטלי של פיתוח תוכנה">
                    <div className="hero-illustration">
                        {heroSectionIcons.heroIllustrator}
                    </div>
                    <div className="buttons flex">
                        <div className="button-row">
                            <a
                                href="https://wa.me/972522613894"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button whatsapp"
                                aria-label="שלחו הודעה ב-WhatsApp - נפתח בחלון חדש"
                            >
                                שלחו הודעה ב - WhatsApp
                                {heroSectionIcons.whatsappIcon}
                            </a>
                            <a
                                href="https://calendly.com/lior-primedev/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button schedule"
                                aria-label="תיאום פגישת ייעוץ חינם - נפתח בחלון חדש"
                            >
                                תיאום פגישת ייעוץ חינם
                                {heroSectionIcons.phoneIcon}
                            </a>
                        </div>
                        <a
                            href="/forms/start"
                            className="cta-button primary full-width"
                            aria-label="התחל פרויקט חדש"
                        >
                            התחל פרויקט חדש
                            {heroSectionIcons.rocketIcon}
                        </a>
                    </div>
                </div>
                {/* Left column: Title, subtitle, checklist */}
                <div className="hero-text">
                    <h1 id="hero-title" className="title">שירותי Web, DevOps ותשתיות ענן במהירות ובאיכות ארגונית</h1>
                    <p className="subtitle">פיתוח Full-Stack, הקמת CI/CD, אוטומציות ואבטחת ענן – מותאמים לעסקים ולסטארטאפים שצריכים מערכות יציבות ומהירות.</p>
                    <ul className="hero-checklist">
                        <li>תהליך פיתוח מקצועי ושקוף משלב התכנון ועד העלייה לאוויר</li>
                        <li>קוד נקי, מאובטח וקל לתחזוקה לאורך זמן</li>
                        <li>תשתיות DevOps יציבות ומהירות שמתאימות לפרודקשן</li>
                        <li>עלייה לאוויר בצורה חלקה ובטוחה בלי הפתעות מיותרות</li>
                        <li>פתרונות מותאמים לסטארטאפים ולעסקים שגדלים מהר</li>
                        <li>ליווי אישי וצמוד עד שהמערכת מתייצבת ועובדת חלק</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}