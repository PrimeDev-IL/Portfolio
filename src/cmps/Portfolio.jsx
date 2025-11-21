export function Portfolio() {
    return (
        <section className="portfolio-container">
            <h1 className="title">Portfolio</h1>
            <h2 className="subtitle">Selected projects across cloud security, automation, and full stack development.</h2>

            <div className="portfolio-cards">
                <div className="card">
                    <div className="card-visual">
                        {/* Visual placeholder - can be replaced with actual chart/image */}
                        <div className="placeholder-lines">
                            <div className="line line-1"></div>
                            <div className="line line-2"></div>
                            <div className="line line-3"></div>
                        </div>
                    </div>
                    <div className="card-content">
                        <h3 className="card-title">Project Title 1</h3>
                        <p className="card-description">Brief project description goes here</p>
                        <div className="tags">
                            <span className="tag">CloudTrail</span>
                            <span className="tag">SIEM</span>
                            <span className="tag">Detection</span>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-visual chart">
                        {/* Chart placeholder */}
                        <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                            <polyline
                                points="10,80 30,70 50,75 70,60 90,55 110,65 130,50 150,40 170,45 190,30"
                                fill="none"
                                stroke="#fbbf24"
                                strokeWidth="3"
                            />
                        </svg>
                    </div>
                    <div className="card-content">
                        <h3 className="card-title">Project Title 2</h3>
                        <p className="card-description">Brief project description goes here</p>
                        <div className="tags">
                            <span className="tag">DevSecOps</span>
                            <span className="tag">CI/CD</span>
                            <span className="tag">Terraform</span>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className="card-visual">
                        {/* Visual placeholder */}
                        <div className="placeholder-lines alternate">
                            <div className="line line-1"></div>
                            <div className="line line-2"></div>
                            <div className="line line-3"></div>
                        </div>
                    </div>
                    <div className="card-content">
                        <h3 className="card-title">Project Title 3</h3>
                        <p className="card-description">Brief project description goes here</p>
                        <div className="tags">
                            <span className="tag">MERN</span>
                            <span className="tag">Secure UI</span>
                            <span className="tag">AWS Deploy</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}