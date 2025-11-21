import { ContactIcons } from "./ApplicationCmps/svgIcons";

export function Contact() {
    return (
        <section className="contact-container">
            <h1 className="title">Get In Touch</h1>
            <h2 className="subtitle">
                Looking to build secure automation workflows, modernize your cloud infrastructure,
                or develop full-stack applications? Let's discuss your project.
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
        </section>
    )
}
