import { heroSectionIcons } from "./ApplicationCmps/svgIcons";

export function Hero() {
    return (
        <section className="hero-container full">
            <div className="hero-content">
                <div className="hero-illustration">
                    {heroSectionIcons.heroIllustrator}
                </div>
                <div className="hero-text">
                    <h1 className="title"><span>Prime</span>Dev</h1>
                    <p className="subtitle">פיתוח מערכות Web חכמות שמקדמות את העסק שלך קדימה</p>
                    <div className="buttons flex">
                        <a href="https://calendly.com/lior-primedev/30min" target="_blank" rel="noopener noreferrer" className="cta-button schedule">
                            תיאום פגישת ייעוץ חינם
                            {heroSectionIcons.phoneIcon}
                        </a>
                        <a href="https://wa.me/972503302036" target="_blank" rel="noopener noreferrer" className="cta-button whatsapp">
                            שלחו הודעה ב - WhatsApp
                            {heroSectionIcons.whatsappIcon}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}