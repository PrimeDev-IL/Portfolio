import { servicesIcons } from "./ApplicationCmps/svgIcons";

export function Services() {
    return (
        <section className="services-container">
            <h1 className="title">Services</h1>
            <h2 className="subtitle">End-to-end expertise across development, automations and cloud engineering </h2>

            <div className="services-cards">
                <div className="card flex align-center">
                    <div className="card-header">
                        <span className="icon">{servicesIcons.soarIcon}</span>
                        <h1>SOAR Development</h1>
                    </div>
                    <p>Playbooks, enrichment, and automated response for varius security events.</p>
                    <div className="categories flex align-center">
                        <span className="category">Automation</span>
                        <span className="category">Integration</span>
                        <span className="category">Response</span>
                    </div>
                </div>
                <div className="card flex align-center">
                    <div className="card-header">
                        <span className="icon">{servicesIcons.webDevIcon}</span>
                        <h1>Web Development</h1>
                    </div>
                    <p>Responsive, high-performance web applications built with modern technologies. From frontend UI to backend APIs and integrations - fully customized to your business needs.</p>
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
                        <h1>DevOps Engineering</h1>
                    </div>
                    <p>Building automated, reliable, and scalable environments using modern DevOps tooling. From CI/CD pipelines to IaC, monitoring, and container orchestration — full workflow optimization from code to production.</p>
                    <div className="categories flex align-center">
                        <span className="category">CI/CD</span>
                        <span className="category">Docker</span>
                        <span className="category">Kubernetes</span>
                        <span className="category">IaC</span>
                        <span className="category">Monitoring</span>
                    </div>
                </div>
            </div>
        </section>
    )
}