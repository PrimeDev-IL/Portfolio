import taskRail_Thumbnail from '../assets/img/taskRail-thumbnail.png'

export function Portfolio() {
    return (
        <section className="portfolio-container">
            <h1 className="title">פרויקטים נבחרים</h1>
            <h2 className="subtitle">פתרונות אמיתיים שפיתחתי ללקוחות — Full Stack, אוטומציות ו־Cloud.</h2>

            <div className="portfolio-cards">
                <div className="card">
                    <div className="card-visual">
                        <img src={taskRail_Thumbnail} alt='taskRail-thumbnail' />
                    </div>
                    <div className="card-content">
                        <h3 className="card-title">TaskRail — מערכת לניהול משימות וצוותים</h3>
                        <p className="card-description">מערכת ווב שפותחה ב־React ו־Node.js לניהול משימות בזמן אמת. כוללת <span className="nowrap">Drag & Drop</span> מתקדם, שיתופי פעולה בין משתמשים, לוחות עבודה צבעוניים וסנכרון מלא בענן.</p>
                        <div className="tags">
                            <span className="tag">Redux</span>
                            <span className="tag">MongoDB</span>
                            <span className="tag">Node.js</span>
                            <span className="tag">React</span>
                        </div>
                        <div className="card-actions">
                            <a href="https://taskrail-backend.onrender.com" target="_blank" rel="noopener noreferrer" className="demo-btn">
                                לצפייה במערכת (Demo חי)
                            </a>
                            <p className="demo-note">המערכת מאוחסנת בשרת חינמי — ייתכן עיכוב קצר בטעינה הראשונית.</p>
                        </div>
                    </div>
                </div>

                {/* <div className="card">
                    <div className="card-visual chart"> */}
                {/* Chart placeholder */}
                {/* <svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
                            <polyline
                                points="10,80 30,70 50,75 70,60 90,55 110,65 130,50 150,40 170,45 190,30"
                                fill="none"
                                stroke="#fbbf24"
                                strokeWidth="3"
                            />
                        </svg>
                    </div>
                    <div className="card-content">
                        <h3 className="card-title">PrimeNotes AI</h3>
                        <p className="card-description">A smart note-taking app that uses AI to generate instant summaries and auto-tag notes for fast searching and better organization. Built with a full-stack architecture using React and Node.js.</p>
                        <div className="tags">
                            <span className="tag">React</span>
                            <span className="tag">Node.JS</span>
                            <span className="tag">MongoDB</span>
                            <span className="tag">AI Integration</span>
                            <span className="tag">Redux</span>
                        </div>
                    </div>
                </div> */}

                {/* <div className="card">
                    <div className="card-visual"> */}
                {/* Visual placeholder */}
                {/* <div className="placeholder-lines alternate">
                            <div className="line line-1"></div>
                            <div className="line line-2"></div>
                            <div className="line line-3"></div>
                        </div>
                    </div>
                    <div className="card-content">
                        <h3 className="card-title">Habit Sync</h3>
                        <p className="card-description">A clean and motivating habit-tracking app featuring daily check-ins, streak calculation, and a visual progress calendar powered by a custom API backend.</p>
                        <div className="tags">
                            <span className="tag">React</span>
                            <span className="tag">Node.JS</span>
                            <span className="tag">MongoDB</span>
                            <span className="tag">Redux</span>
                            <span className="tag">REST API</span>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}