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
                        <button className="cta-button schedule">
                            תיאום פגישת ייעוץ חינם
                            {heroSectionIcons.phoneIcon}
                        </button>
                        <button className="cta-button whatsapp">
                            שלחו הודעה ב - WhatsApp
                            {heroSectionIcons.whatsappIcon}
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}