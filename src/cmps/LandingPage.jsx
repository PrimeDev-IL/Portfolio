import { useState } from "react";
import { heroSectionIcons, appHeaderIcons } from "./ApplicationCmps/svgIcons";

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
                    source: 'automation_landing',
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
            icon: "⚙️",
            title: "אוטומציה של תהליכים עסקיים",
            description: "הפכו משימות ידניות חוזרות לתהליכים אוטומטיים שרצים בלי מגע יד — חיסכון של שעות עבודה כל יום",
            target: "יעילות מקסימלית"
        },
        {
            icon: "🔗",
            title: "חיבור בין כל המערכות",
            description: "חיברו את ה-CRM, מערכת החשבוניות, המייל, וואטסאפ וכל כלי שאתם עובדים איתו — הכל מדבר עם הכל",
            target: "אינטגרציות חכמות"
        },
        {
            icon: "🚀",
            title: "CI/CD ופריסות אוטומטיות",
            description: "קוד חדש עולה לאוויר בלחיצת כפתור — בדיקות, בנייה ופריסה אוטומטיים בלי עצירות",
            target: "פריסה מהירה"
        },
        {
            icon: "📊",
            title: "דוחות ודשבורדים אוטומטיים",
            description: "קבלו עדכונים, דוחות וניתוחים ישירות למייל או לדשבורד — בלי להפיק ידנית כלום",
            target: "תובנות בזמן אמת"
        },
        {
            icon: "🤖",
            title: "בוטים וצ'אטבוטים לעסק",
            description: "בוטים שמקבלים פניות, עונים ללקוחות, שולחים תזכורות ומנהלים משימות — 24/7 בלי הפסקה",
            target: "שירות רציף"
        },
        {
            icon: "☁️",
            title: "תשתיות ענן ו-DevOps",
            description: "הקמה וניהול תשתיות בענן עם Docker, Kubernetes, ו-Infrastructure as Code — יציבות ושליטה מלאה",
            target: "תשתיות חכמות"
        }
    ];

    return (
        <div className="landing-page">
            {/* Landing Header with Logo */}
            <header className="landing-header">
                <a href="/" className="landing-logo" aria-label="PrimeDev - דף הבית">
                    {appHeaderIcons.appLogo}
                </a>
            </header>

            {/* Hero Section with Form */}
            <section id="hero" className="landing-hero">
                <div className="landing-container">
                    <div className="hero-grid">
                        <div className="hero-content">
                            <h1 className="main-headline">
                                אוטומציה לעסקים — תנו לטכנולוגיה לעבוד בשבילכם
                            </h1>
                            <p className="sub-headline">
                                חסכו זמן, הפחיתו טעויות והגדילו רווחים עם פתרונות אוטומציה מותאמים לעסק שלכם
                            </p>

                            {/* Key Benefits */}
                            <ul className="benefits-list">
                                <li>
                                    <span className="check-icon">✓</span>
                                    אוטומציה של תהליכים ידניים — מהזמנות ועד דוחות
                                </li>
                                <li>
                                    <span className="check-icon">✓</span>
                                    חיבור בין כל המערכות שלכם למכונה אחת חלקה
                                </li>
                                <li>
                                    <span className="check-icon">✓</span>
                                    פריסות אוטומטיות ותשתיות ענן יציבות
                                </li>
                                <li>
                                    <span className="check-icon">✓</span>
                                    חיסכון של עד 80% מהזמן על משימות חוזרות
                                </li>
                            </ul>
                        </div>

                        {/* Lead Form */}
                        <div id="lead-form" className="lead-form-wrapper">
                            <div className="lead-form-card">
                                <h3>רוצים לייעל את העסק?</h3>
                                <p className="form-subtitle">שיחת ייעוץ של 15 דקות — בחינם וללא התחייבות</p>

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
                                            placeholder="ספרו לנו איזה תהליכים הייתם רוצים לייעל"
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
                        <strong>PrimeDev</strong> מתמחה באוטומציה של תהליכים עסקיים, פיתוח מערכות Web ותשתיות DevOps.
                        אנחנו עוזרים לעסקים לחסוך זמן, להפחית טעויות ולגדול מהר יותר — באמצעות טכנולוגיה שעובדת בשבילכם.
                    </p>
                    <p className="about-text">
                        במהלך השנים עבדנו עם ארגונים גדולים וסטארטאפים, בנינו מערכות אוטומציה מורכבות, חיברנו בין
                        עשרות כלים ומערכות, והקמנו תשתיות ענן יציבות שרצות בצורה אוטומטית. עכשיו אנחנו מביאים את
                        אותו ניסיון לעסקים קטנים ובינוניים שרוצים לעבוד חכם יותר.
                    </p>
                    <p className="about-text">
                        <strong>המטרה שלנו:</strong> להפוך כל תהליך ידני חוזר לתהליך אוטומטי — כדי שתוכלו להתמקד
                        בצמיחת העסק במקום במשימות שחוזרות על עצמן.
                    </p>
                </div>
            </section>

            {/* Services Section */}
            <section className="services-section">
                <div className="landing-container">
                    <h2>איך אנחנו מייעלים את העסק שלכם?</h2>
                    <p className="section-subtitle">
                        פתרונות אוטומציה מותאמים — מתהליכים פשוטים ועד מערכות מורכבות
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
                    <h2>רוצים לחסוך שעות עבודה כל שבוע? בואו נדבר</h2>
                    <a href="#lead-form" className="cta-button secondary">
                        בואו נייעל את העסק שלכם
                    </a>
                </div>
            </section>

            {/* Experience & Credentials Section */}
            <section className="testimonials-section">
                <div className="landing-container">
                    <h2>למה לבחור ב-PrimeDev?</h2>

                    <div className="credentials-grid">
                        <div className="credential-card">
                            <div className="credential-icon">🏢</div>
                            <h3>ניסיון עם ארגונים גדולים</h3>
                            <p className="credential-text">
                                בנינו מערכות אוטומציה מורכבות לארגונים פיננסיים גדולים —
                                כולל Playbooks, תהליכי CI/CD, אינטגרציות בין מערכות ודשבורדים אוטומטיים.
                            </p>
                        </div>

                        <div className="credential-card">
                            <div className="credential-icon">⚡</div>
                            <h3>מומחים באוטומציה ו-DevOps</h3>
                            <p className="credential-text">
                                ניסיון רב שנים בבניית פתרונות אוטומציה — מסקריפטים פשוטים ועד
                                מערכות SOAR מורכבות, תשתיות ענן ותהליכי פריסה אוטומטיים.
                            </p>
                        </div>

                        <div className="credential-card">
                            <div className="credential-icon">🎯</div>
                            <h3>פתרונות מותאמים לעסק שלכם</h3>
                            <p className="credential-text">
                                לא פתרונות גנריים — אנחנו מבינים את התהליכים שלכם ובונים
                                אוטומציות שמתאימות בדיוק לצרכים, לתקציב ולקצב הצמיחה של העסק.
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
                    <h3>המספרים מדברים בעד עצמם</h3>
                    <div className="partners-logos">
                        <div className="partner-badge">⚡ עד 80% חיסכון בזמן על משימות חוזרות</div>
                        <div className="partner-badge">🔗 100+ אינטגרציות בין מערכות</div>
                        <div className="partner-badge">🚀 פריסות אוטומטיות בלחיצת כפתור</div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="final-cta">
                <div className="landing-container">
                    <h2>מוכנים לייעל את העסק? השאירו פרטים ונחזור אליכם היום</h2>

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
