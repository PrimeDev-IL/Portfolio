import { useState } from "react";
import { heroSectionIcons } from "./ApplicationCmps/svgIcons";

export function LandingPage() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        message: ''
    });

    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form data
        if (!formData.name || !formData.phone) {
            alert('נא למלא שם וטלפון');
            return;
        }

        setIsSubmitting(true);

        try {
            // Send to PrimeDev backend (matching StartForm pattern)
            const response = await fetch('https://api.primedev.co.il/leads', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    message: formData.message,
                    source: 'landing_page',
                    timestamp: new Date().toISOString()
                })
            });

            const data = await response.json().catch(() => ({}));

            if (response.ok && data?.ok) {
                setIsSubmitted(true);

                // Reset form
                setFormData({ name: '', phone: '', message: '' });

                // Hide success message after 5 seconds
                setTimeout(() => {
                    setIsSubmitted(false);
                }, 5000);
            } else {
                throw new Error(data?.error || 'Failed to send');
            }

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('אירעה שגיאה בשליחת הטופס. אנא נסו שוב או צרו קשר בטלפון.');
        } finally {
            setIsSubmitting(false);
        }
    };

    const services = [
        {
            icon: "🛡️",
            title: "שומרים על העסק 24 שעות ביממה",
            description: "מערכת אוטומטית שבודקת את האתר והמערכות שלכם כל הזמן - גם כשאתם ישנים או בחופשה",
            target: "עובד תמיד"
        },
        {
            icon: "🔍",
            title: "מוצאים בעיות לפני שהן הופכות לאסון",
            description: "אלפי בדיקות כל יום כדי למצוא חורי אבטחה, דלתות פתוחות להאקרים, ודליפות מידע",
            target: "מניעה מראש"
        },
        {
            icon: "⚡",
            title: "מתריעים לכם מיד כשיש בעיה",
            description: "קיבלתם התראה למייל או לנייד עם הסבר ברור מה קרה ומה לעשות עם זה",
            target: "תגובה מהירה"
        },
        {
            icon: "📊",
            title: "דוח ברור פעם בחודש",
            description: "דוח פשוט שמראה לכם מה מצאנו, מה תיקנו, ומה צריך לעשות - בשפה של בני אדם",
            target: "הכל שקוף"
        },
        {
            icon: "🌐",
            title: "הגנה על כל מה שיש לכם באינטרנט",
            description: "האתר, הדוא\"ל, השרתים, האחסון בענן - הכל מוגן במקום אחד",
            target: "כיסוי מלא"
        }
    ];

    return (
        <div className="landing-page">
            {/* Hero Section with Form */}
            <section id="hero" className="landing-hero">
                <div className="landing-container">
                    <div className="hero-grid">
                        <div className="hero-content">
                            <h1 className="main-headline">
                                גילינו בעיית אבטחה? אתם יודעים על זה תוך דקה
                            </h1>
                            <p className="sub-headline">
                                מערכת שעובדת 24/7 ומתריעה לכם מיד כשיש משהו חשוד
                            </p>

                            {/* Key Benefits */}
                            <ul className="benefits-list">
                                <li>
                                    <span className="check-icon">✓</span>
                                    מערכת אוטומטית שבודקת הכל כל הזמן - גם בלילה
                                </li>
                                <li>
                                    <span className="check-icon">✓</span>
                                    קיבלתם התראה מיידית אם יש משהו חשוד
                                </li>
                                <li>
                                    <span className="check-icon">✓</span>
                                    דוחות פשוטים עם הסבר מה לעשות
                                </li>
                                <li>
                                    <span className="check-icon">✓</span>
                                    תמיד תדעו מה הולך בעסק שלכם
                                </li>
                            </ul>
                        </div>

                        {/* Lead Form */}
                        <div id="lead-form" className="lead-form-wrapper">
                            <div className="lead-form-card">
                                <h3>רוצים לדעת איך זה עובד?</h3>
                                <p className="form-subtitle">שיחה של 15 דקות - בחינם וללא התחייבות</p>

                                <form onSubmit={handleSubmit} className="lead-form">
                                    <div className="form-group">
                                        <label htmlFor="name">שם מלא *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="הזינו את שמכם"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">טלפון *</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            required
                                            placeholder="050-1234567"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="message">הודעה (אופציונלי)</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows="3"
                                            placeholder="ספרו לנו על הצורך שלכם"
                                        />
                                    </div>

                                    <button type="submit" className="cta-button primary" disabled={isSubmitting}>
                                        {isSubmitting ? '⏳ שולח...' : isSubmitted ? '✓ נשלח בהצלחה' : 'דברו איתי'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="about-section">
                <div className="landing-container">
                    <h2>עלינו</h2>
                    <p className="about-text">
                        <strong>PrimeDev</strong> מתמחה בהגנת עסקים מפני פריצות סייבר ואיומי אבטחה.
                        אנחנו מספקים פתרונות טכנולוגיים פשוטים ומקצועיים שמגנים על האתרים, המערכות והמידע של העסק שלכם -
                        בלי שתצטרכו להיות מומחי מחשבים כדי להבין את זה.
                    </p>
                    <p className="about-text">
                        במהלך השנתיים האחרונות עבדנו עם ארגונים גדולים בתחום הפיננסי ובנינו עבורם מערכות הגנה אוטומטיות
                        שמזהות סכנות ומתריעות עליהן בזמן אמת. עכשיו אנחנו מביאים את אותה טכנולוגיה מתקדמת לעסקים קטנים ובינוניים -
                        כדי שגם אתם תוכלו לישון בשקט בלילה.
                    </p>
                    <p className="about-text">
                        <strong>המטרה שלנו:</strong> להפוך הגנה מתקדמת מפני פריצות מ"מוצר יקר לחברות ענק" לפתרון נגיש, פשוט וחכם
                        שכל בעל עסק יכול להשתמש בו - במחיר הוגן ובלי להיות תלוי במומחים.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <div className="landing-container">
                    <h2>איך אנחנו שומרים על העסק שלכם?</h2>
                    <p className="section-subtitle">
                        ראייה מלאה על כל מה שקורה - בשפה פשוטה וברורה
                    </p>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <div key={index} className="service-card">
                                <div className="service-icon">{service.icon}</div>
                                <h3>{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <span className="service-target">{service.target}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Middle Section */}
            <section className="cta-middle">
                <div className="landing-container">
                    <h2>רוצים לישון בשקט? בואו נדבר</h2>
                    <a href="#lead-form" className="cta-button secondary">
                        יצירת קשר עכשיו
                    </a>
                </div>
            </section>

            {/* Experience & Credentials Section */}
            <section className="testimonials-section">
                <div className="landing-container">
                    <h2>הניסיון שלנו</h2>

                    <div className="credentials-grid">
                        <div className="credential-card">
                            <div className="credential-icon">🏦</div>
                            <h3>עבדנו עם החברות הגדולות</h3>
                            <p className="credential-text">
                                במשך שנתיים בנינו מערכות הגנה אוטומטיות לחברות פיננסיות גדולות -
                                אותן חברות שבנקים וחברות ביטוח סומכים עליהן כדי לשמור על הכסף והמידע שלכם.
                            </p>
                        </div>

                        <div className="credential-card">
                            <div className="credential-icon">🔒</div>
                            <h3>מומחים באבטחת מידע</h3>
                            <p className="credential-text">
                                ניסיון רב שנים בעבודה עם צוותי אבטחה בארגונים גדולים,
                                בניית מערכות שמזהות סכנות ומתריעות עליהן אוטומטית -
                                לפני שהן הופכות לבעיה אמיתית.
                            </p>
                        </div>

                        <div className="credential-card">
                            <div className="credential-icon">⚙️</div>
                            <h3>יודעים לבנות מערכות שעובדות</h3>
                            <p className="credential-text">
                                מומחיות בבניית אתרים ומערכות אינטרנט מורכבות,
                                אוטומציות חכמות שחוסכות זמן וכסף,
                                ופתרונות מותאמים בדיוק לצרכים שלכם.
                            </p>
                        </div>
                    </div>

                    <div className="social-proof">
                        <p>למידע נוסף ולהמלצות מקצועיות:</p>
                        <div className="review-links">
                            <a href="https://www.linkedin.com/in/lior-lazar" target="_blank" rel="noopener noreferrer" className="review-link linkedin">
                                💼 LinkedIn - ליאור לזר
                            </a>
                            <a href="https://github.com/LiorLazar" target="_blank" rel="noopener noreferrer" className="review-link github">
                                👨‍💻 GitHub Portfolio
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Partners/Trust Section */}
            <section className="trust-section">
                <div className="landing-container">
                    <h3>סטטיסטיקות שחשוב לדעת</h3>
                    <div className="partners-logos">
                        <div className="partner-badge">📊 60% מהעסקים הקטנים נסגרים תוך 6 חודשים מפריצה</div>
                        <div className="partner-badge">⏱️ 200 ימים ממוצע לגילוי פריצה</div>
                        <div className="partner-badge">💰 150,000₪ עלות ממוצעת לנזק ראשוני</div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="final-cta">
                <div className="landing-container">
                    <h2>אל תחכו עד שיהיה מאוחר מדי - בואו נבדוק את המצב עכשיו</h2>

                    {/* Second Form */}
                    <div className="final-form-wrapper">
                        <form onSubmit={handleSubmit} className="lead-form compact">
                            <div className="form-row">
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="שם מלא"
                                />
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="טלפון"
                                />
                                <button type="submit" className="cta-button primary" disabled={isSubmitting}>
                                    {isSubmitting ? '⏳ שולח...' : isSubmitted ? '✓ נשלח' : 'שלחו'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>

            {/* Footer Info */}
            <footer className="landing-footer">
                <div className="landing-container">
                    <div className="footer-links">
                        <a href="/privacy">מדיניות פרטיות</a>
                        <span>|</span>
                        <a href="/accessibility-statement">הצהרת נגישות</a>
                        <span>|</span>
                        <a href="/terms">תקנון</a>
                    </div>
                    <p className="copyright">© 2026 כל הזכויות שמורות</p>
                </div>
            </footer>
        </div>
    );
}
