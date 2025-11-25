import { servicesIcons } from "./ApplicationCmps/svgIcons";

export function Services() {
    return (
        <section className="services-container">
            <h1 className="title">השירותים שלנו</h1>

            <div className="services-cards">
                <div className="card flex align-center">
                    <div className="card-header">
                        <span className="icon">{servicesIcons.soarIcon}</span>
                        <h1>פיתוח והטמעה של מערכות <span>(Cortex XSOAR) SOAR</span></h1>
                    </div>
                    <p>פיתוח והטמעה של מערכות SOAR שמטפלות באירועי אבטחה בצורה אוטומטית.
                        אנחנו מתכננים את הארכיטקטורה (כולל סביבת SaaS), מפתחים Playbooks, Automations, Dashboards ו-Jobs, ומחברים את המערכת לכלי האבטחה וה-IT הקיימים בארגון.
                        התוצאה: פחות עבודה ידנית לצוות, תגובה מהירה יותר לאיומים והפחתת טעויות אנוש.
                    </p>
                    <div className="categories flex align-center">
                        <span className="category">אוטומציות</span>
                        <span className="category">אינטגרציות</span>
                        <span className="category">תגובה לאירועי אבטחת מידע</span>
                    </div>
                </div>
                <div className="card flex align-center">
                    <div className="card-header">
                        <span className="icon">{servicesIcons.webDevIcon}</span>
                        <h1>פיתוח מערכות Web</h1>
                    </div>
                    <p>דואגים שהתשתית שעליה רצה המערכת תהיה יציבה, מאובטחת וקלה להרחבה.
                        הקמה ושיפור של CI/CD pipelines, Docker, Kubernetes, IaC ו-Monitoring – כדי שתוכלו לשחרר גרסאות מהר, בביטחון ובלי כאבי ראש.
                    </p>
                    <div className="categories flex align-center">
                        <span className="category">Frontend</span>
                        <span className="category">Backend</span>
                        <span className="category">React</span>
                        <span className="category">Node.JS</span>
                        <span className="category">API Integration</span>
                    </div>
                </div>
                <div className="card flex align-center">
                    <div className="card-header">
                        <span className="icon">{servicesIcons.devOpsIcon}</span>
                        <h1>DevOps</h1>
                    </div>
                    <p>הקמת תשתיות פרודקשן יציבות ויעילות:
                        CI/CD pipelines, Docker, ניהול סביבות, אוטומציות פריסה ו-Monitoring.
                    </p>
                    <div className="categories flex align-center">
                        <span className="category">CI/CD</span>
                        <span className="category">Docker</span>
                        <span className="category">Kubernetes</span>
                        <span className="category">IaC</span>
                        <span className="category">Monitoring</span>
                    </div>
                </div>
            </div>
        </section >
    )
}