import { ContactIcons, heroSectionIcons } from "./ApplicationCmps/svgIcons";

export function Contact() {
    return (
        <section className="contact-container">
            <h1 className="title">יצירת קשר</h1>
            <h2 className="subtitle">
                רוצים לפתח מערכת Web, להטמיע תהליכי SOAR, או לשדרג את תשתיות הענן שלכם?
                אשמח לשוחח וללוות אתכם בתהליך.
            </h2>

            <div className="contact-methods">
                <div className="contact-method">
                    <div className="method-icon">{ContactIcons.mail}</div>
                    <div className="method-details">
                        <h3>Email</h3>
                        <a href="mailto:contact@primedev.co.il">contact@primedev.co.il</a>
                    </div>
                </div>

                <div className="contact-method">
                    <div className="method-icon">{ContactIcons.linkedIn}</div>
                    <div className="method-details">
                        <h3>LinkedIn</h3>
                        <a href="https://www.linkedin.com/in/lior-lazar" target="_blank" rel="noopener noreferrer">
                            linkedin.com/in/lior-lazar
                        </a>
                    </div>
                </div>
            </div>

            <div className="contact-buttons">
                <button className="cta-button schedule">
                    תיאום פגישת ייעוץ חינם
                    {heroSectionIcons.phoneIcon}
                </button>
                <button className="cta-button whatsapp">
                    שלחו הודעה ב - WhatsApp
                    {heroSectionIcons.whatsappIcon}
                </button>
            </div>
        </section>
    )
}
