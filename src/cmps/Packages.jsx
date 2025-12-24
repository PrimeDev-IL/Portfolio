import { sharedIcons } from './ApplicationCmps/svgIcons';

export function Packages() {
    return (
        <section className="packages-container" aria-labelledby="packages-title">
            <h1 id="packages-title" className="title">החבילות שלנו</h1>

            <div className="packages-cards" role="list">
                {/* Card 1: Start Package */}
                <article className="card" role="listitem">
                    <div className="card-top">
                        <span aria-hidden="true">{sharedIcons.star}</span>
                        <h3 className="card-eyebrow">חבילת "סטארט"</h3>
                        <span aria-hidden="true">{sharedIcons.star}</span>
                    </div>

                    <div className="card-header">
                        <h2 className="card-title">אתר מקצועי ומהיר שמציג את העסק שלך כמו שצריך וללא הוצאות מיותרות.</h2>
                        <p className="price">החל מ  - <span className="price-value">2,500 ₪ + מע״מ</span></p>
                    </div>

                    <p className="card-sub">מתאים לעסקים שרוצים אתר תדמית מסודר ומקצועי, בלי תהליך ארוך ובלי הוצאות מיותרות.</p>

                    <ul className="package-features">
                        <li>אתר / דף נחיתה עד 3–4 מסכים</li>
                        <li>חיבור לטפסי יצירת קשר (מייל / WhatsApp)</li>
                        <li>התאמה מלאה לניידים</li>
                        <li>שיפור UX/UI בסיסי</li>
                        <li>הדרכה קצרה לתפעול</li>
                    </ul>

                    <p className="cta">מתאים לעצמאים, נותני שירות ולעסקים קטנים.</p>
                </article>

                {/* Card 2: Full Stack Package */}
                <article className="card" role="listitem">
                    <div className="card-top">
                        <span aria-hidden="true">{sharedIcons.reactLogo}</span>
                        <h3 className="card-eyebrow">חבילת "מערכת Web מלאה"</h3>
                        {sharedIcons.reactLogo}
                    </div>

                    <div className="card-header">
                        <h2 className="card-title">Full Stack</h2>
                        <p className="price">החל מ ־<span className="price-value"> 7,500 ₪  + מע״מ</span></p>
                        <p className="price-note">(מחיר משתנה לפי היקף המערכת והאינטגרציות)</p>
                    </div>

                    <p className="card-sub">בניית מערכת Web מלאה שמותאמת לעסק שלך, יציבה וקלה לתפעול שוטף</p>

                    <ul className="package-features">
                        <li>אפיון ותכנון מסכים</li>
                        <li>פיתוח Frontend ב ־ React</li>
                        <li>פיתוח Backend ב ־ Node.js</li>
                        <li>חיבור לממשקים חיצוניים (APIs)</li>
                        <li>ממשק ניהול בסיסי</li>
                        <li>הרשאות משתמשים</li>
                        <li>התאמה מלאה למובייל</li>
                        <li>העלאה לשרת והכנה עד ההשקה</li>
                    </ul>

                    <p className="cta">מתאים לעסקים, סטארטאפים וארגונים הזקוקים לפיתוח מערכות פנימיות</p>
                </article>

                {/* Card 3: SOAR Package */}
                <article className="card" role="listitem">
                    <div className="card-top">
                        <span aria-hidden="true">{sharedIcons.cortexXsoar}</span>
                        <h3 className="card-eyebrow">חבילת "SOAR לארגונים"</h3>
                        {sharedIcons.cortexXsoar}
                    </div>

                    <div className="card-header">
                        <h2 className="card-title">
                            פיתוח פתרון SOAR לארגונים (Cortex XSOAR)
                        </h2>
                        <p className="price">
                            <span className="price-value">₪18,000 – ₪6,500 + מע״מ</span>
                        </p>
                        <p className="price-note">(תלוי בכמות הפלייבוקים, אוטומציות ואינטגרציות)</p>
                    </div>

                    <p className="card-sub">פיתוח, הרחבה והטמעה מלאה של פתרון SOAR בארגון — כולל תכנון, בנייה, אוטומציה, אינטגרציות וליווי לאחר העלייה לאוויר.</p>

                    <ul className="package-features">
                        <li>אפיון ותכנון ארכיטקטורת SOAR</li>
                        <li>פיתוח Playbooks מותאמים</li>
                        <li>כתיבת Automations ו־Jobs (Python/JS)</li>
                        <li>יצירת Dashboards ו־Widgets</li>
                        <li>אינטגרציות מול EDR / SIEM / Email / Ticketing</li>
                        <li>חיבור ל־API של מערכות הארגון</li>
                        <li>ליווי וטיוב תהליכי SOC לאחר ההטמעה</li>
                    </ul>

                    <p className="cta">לארגונים עם מרכז SOC או צוות אבטחה פנימי</p>
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
                        <p className="price">החל מ ־ <span className="price-value">₪3,000 + מע״מ</span></p>
                        <p className="price-note">(או ₪150 לשעה + מע״מ  — Retainer DevOps)</p>
                    </div>

                    <p className="card-sub">ניהול ותחזוקת תשתיות בענן, אוטומציה ו-CI/CD — כדי שהמערכת שלכם תרוץ יציב, מהיר וקל לפריסה.</p>

                    <ul className="package-features">
                        <li>Dockerization לשירותים קיימים</li>
                        <li>הקמת CI/CD pipelines</li>
                        <li>Deployment ל־Cloud (Render / Vercel / AWS)</li>
                        <li>Monitoring והתראות</li>
                        <li>אוטומציה של תהליכי פיתוח ופריסה</li>
                    </ul>

                    <p className="cta">מתאים לסטארטאפים, חברות טכנולוגיה וצוותים שמפעילים תשתיות בענן</p>
                </article>
            </div>
            
            <p className="pricing-disclaimer">* כל המחירים אינם כוללים מע״מ כחוק</p>
        </section>
    )
}