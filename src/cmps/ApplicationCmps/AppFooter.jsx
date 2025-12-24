import { Link } from 'react-router-dom'

export function AppFooter() {
    return (
        <footer className="app-footer" role="contentinfo">
            <div className="footer-text">
                <p>© 2025 PrimeDev — פתרונות Web, Full-Stack, DevOps ו-SOAR</p>
                <p>נבנה ומפותח ע״י PrimeDev</p>
                <p>
                    <Link to="/accessibility-statement" aria-label="הצהרת נגישות">
                        הצהרת נגישות
                    </Link>
                </p>
            </div>
        </footer>
    )
}
