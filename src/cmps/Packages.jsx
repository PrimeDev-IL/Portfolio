import { sharedIcons } from './ApplicationCmps/svgIcons';

export function Packages() {
    return (
        <section className="packages-container">
            <h1 className="title">החבילות שלנו</h1>

            <div className="packages-cards">
                {/* Card 1: Start Package */}
                <article className="card">
                    <div className="card-top">
                        {sharedIcons.star}
                        <h3 className="card-eyebrow">חבילת "סטארט"</h3>
                        {sharedIcons.star}
                    </div>

                    <div className="card-header">
                        <h2 className="card-title">אתר מתקדם / מיני מערכת</h2>
                        <p className="price">החל מ  - <span className="price-value">2,500 ₪</span></p>
                    </div>

                    <p className="card-sub">פתרון מהיר לעסקים שרוצים נוכחות מקצועית או אתר יעיל בלי מערכת מורכבת</p>

                    <ul className="package-features">
                        <li>אתר / דף נחיתה עד 3-4 מסכים</li>
                        <li>חיבור לטופס יצירת קשר (מייל / WhatsApp)</li>
                        <li>התאמה מלאה למובייל</li>
                        <li>שיפור UX/UI בסיסי</li>
                        <li>הדרכה קצרה לתפעול</li>
                    </ul>

                    <p className="cta">מתאים ל: עצמאים, עסקים קטנים, נותני שירות</p>
                </article>

                {/* Card 2: Full Stack Package */}
                <article className="card">
                    <div className="card-top">
                        {sharedIcons.reactLogo}
                        <h3 className="card-eyebrow">חבילת "מערכת Web מלאה"</h3>
                        {sharedIcons.reactLogo}
                    </div>

                    <div className="card-header">
                        <h2 className="card-title">Full Stack</h2>
                        <p className="price">החל מ ־<span className="price-value"> 7,500 ₪</span></p>
                        <p className="price-note">(מחיר משתנה לפי היקף המערכת והאינטגרציות)</p>
                    </div>

                    <p className="card-sub">פיתוח מערכת Web אמיתית, מודרנית ומותאמת לצרכים שלך.</p>

                    <ul className="package-features">
                        <li>אפיון תהליכים ומסכים</li>
                        <li>פיתוח Frontend ב־React</li>
                        <li>פיתוח Backend ב־Node.js</li>
                        <li>API מלא + תיעוד</li>
                        <li>דשבורד ניהול</li>
                        <li>הרשאות משתמשים</li>
                        <li>אינטגרציות חיצוניות (לפי צורך)</li>
                        <li>העלאה לשרת + תמיכה לאחר ההשקה</li>
                    </ul>

                    <p className="cta">מתאים ל: עסקים, סטארטאפים, מערכות פנימיות</p>
                </article>

                {/* Card 3: SOAR Package */}
                <article className="card">
                    <div className="card-top">
                        {sharedIcons.cortexXsoar}
                        <h3 className="card-eyebrow">חבילת "SOAR לארגונים"</h3>
                        {sharedIcons.cortexXsoar}
                    </div>

                    <div className="card-header">
                        <h2 className="card-title">
                            פיתוח פתרון SOAR לארגונים (Cortex XSOAR)
                        </h2>
                        <p className="price">
                            <span className="price-value">₪18,000 – ₪6,500</span>
                        </p>
                        <p className="price-note">(תלוי בכמות הפלייבוקים, אוטומציות ואינטגרציות)</p>
                    </div>

                    <p className="card-sub">פיתוח והטמעה מלאה של פתרון SOAR בארגון.</p>

                    <ul className="package-features">
                        <li>תכנון ארכיטקטורה</li>
                        <li>פיתוח Playbooks מורכבים</li>
                        <li>כתיבת Automations ו־Jobs (Python/JS)</li>
                        <li>יצירת Dashboards ו־Widgets</li>
                        <li>אינטגרציות מול EDR / SIEM / Email / Ticketing</li>
                        <li>חיבור ל־API של מערכות הארגון</li>
                        <li>ליווי וטיוב תהליכי SOC לאחר ההטמעה</li>
                    </ul>

                    <p className="cta">מתאים ל: ארגונים, SOC, חברות סייבר, צוותי IT</p>
                </article>

                {/* Card 4: DevOps Package */}
                <article className="card">
                    <div className="card-top">
                        {sharedIcons.infinity}
                        <h3 className="card-eyebrow">חבילת "DevOps ותשתיות"</h3>
                        {sharedIcons.infinity}
                    </div>

                    <div className="card-header">
                        <h2 className="card-title">DevOps</h2>
                        <p className="price">החל מ ־ <span className="price-value">₪3,000</span></p>
                        <p className="price-note">(או ₪150 לשעה)</p>
                        <p className="price-note">(Retainer DevOps)</p>
                    </div>

                    <p className="card-sub">דואגים שהמערכת שלך תרוץ יציב, מהר ובאופן שניתן לפרוס גרסאות בלי כאבי ראש.</p>

                    <ul className="package-features">
                        <li>Dockerization לשירותים קיימים</li>
                        <li>הקמת CI/CD pipelines</li>
                        <li>Deployment ל־Cloud (Render / Vercel / AWS)</li>
                        <li>Monitoring והתראות</li>
                        <li>אוטומציה של תהליכי פיתוח ופריסה</li>
                    </ul>

                    <p className="cta">מתאים ל: חברות טכנולוגיה, סטארטאפים, מערכות קיימות</p>
                </article>
            </div>
        </section>
    )
}