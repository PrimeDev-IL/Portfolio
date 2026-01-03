import { ContactIcons, heroSectionIcons } from "./ApplicationCmps/svgIcons";
import { useState } from 'react';

export function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [notification, setNotification] = useState({ show: false, message: '', type: '' });

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        const payload = {
            name: e.target.name.value.trim(),
            phone: e.target.phone.value.trim(),
            email: e.target.email.value.trim(),
            message: e.target.message.value.trim()
        }

        try {
            const res = await fetch('https://p5amuw6pwl.execute-api.il-central-1.amazonaws.com/prod/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(payload)
            })

            const data = await res.json().catch(() => ({}))

            if (res.ok && data?.ok) {
                setNotification({
                    show: true,
                    message: 'ההודעה נשלחה בהצלחה! נחזור אליך בהקדם!',
                    type: 'success'
                })
                e.target.reset()
            } else {
                throw new Error(data?.error || 'Failed to send')
            }
        } catch (err) {
            console.error('Error sending contact: ', err)
            setNotification({
                show: true,
                message: 'שגיאה בשליחת ההודעה. אנא נסה שוב או צור קשר ישירות.',
                type: 'error'
            })
        } finally {
            setIsSubmitting(false)
            setTimeout(() => setNotification({ show: false, message: '', type: '' }), 5000)
        }
    }


    return (
        <section className="contact-container" aria-labelledby="contact-title">
            <h1 id="contact-title" className="title">יצירת קשר</h1>
            <h2 className="subtitle">
                רוצים להתחיל פרויקט Web, Full-Stack, DevOps או SOAR?
                השאירו פרטים ואחזור אליכם בהקדם.
            </h2>

            <div className="contact-content">
                <div className="contact-info">
                    <div className="contact-method">
                        <div className="method-icon" aria-hidden="true">{ContactIcons.mail}</div>
                        <div className="method-details">
                            <h3>Email</h3>
                            <a href="mailto:contact@primedev.co.il" aria-label="שלח אימייל לכתובת contact@primedev.co.il">contact@primedev.co.il</a>
                        </div>
                    </div>

                    <div className="contact-method">
                        <div className="method-icon" aria-hidden="true">{ContactIcons.linkedIn}</div>
                        <div className="method-details">
                            <h3>LinkedIn</h3>
                            <a href="https://www.linkedin.com/company/primedev-studio" target="_blank" rel="noopener noreferrer" aria-label="פרופיל LinkedIn של ליאור לזר - נפתח בחלון חדש">
                                linkedin.com/in/lior-lazar
                            </a>
                        </div>
                    </div>

                    <div className="contact-buttons">
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
                    </div>
                </div>

                <div className="contact-form">
                    {notification.show && (
                        <div
                            className={`notification ${notification.type}`}
                            role="alert"
                            aria-live="polite"
                        >
                            {notification.message}
                        </div>
                    )}
                    <form onSubmit={handleSubmit} aria-label="טופס יצירת קשר">
                        <div className="form-group">
                            <label htmlFor="name" className="visually-hidden">שם מלא</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="שם"
                                required
                                aria-required="true"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone" className="visually-hidden">מספר טלפון</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="טלפון"
                                aria-label="מספר טלפון (אופציונלי)"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email" className="visually-hidden">כתובת אימייל</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="אימייל"
                                required
                                aria-required="true"
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message" className="visually-hidden">תוכן ההודעה</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="תוכן ההודעה"
                                required
                                aria-required="true"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="submit-button"
                            disabled={isSubmitting}
                            aria-label={isSubmitting ? 'שולח הודעה...' : 'שלח הודעה'}
                        >
                            {isSubmitting ? 'שולח...' : 'שליחה'}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
