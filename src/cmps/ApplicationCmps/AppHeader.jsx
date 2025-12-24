import { appHeaderIcons } from "./svgIcons"
import { useState } from "react"

export function AppHeader({ scrollToSection, refs }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleNavClick = (e, ref) => {
        e.preventDefault();
        setIsMenuOpen(false);

        setTimeout(() => {
            if (ref && ref.current) {
                scrollToSection(ref);
            } else {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        }, 100);
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="app-header full" role="banner">
            {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}

            <section className="header-container">
                <a href="/" className="logo align-center" aria-label="PrimeDev - דף הבית" onClick={(e) => handleNavClick(e, null)}>{appHeaderIcons.appLogo}</a>

                <button
                    className="burger-menu"
                    onClick={toggleMenu}
                    aria-label={isMenuOpen ? "סגור תפריט" : "פתח תפריט"}
                    aria-expanded={isMenuOpen}
                    aria-controls="main-navigation"
                >
                    <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
                </button>

                <nav
                    id="main-navigation"
                    className={`app-nav flex align-center ${isMenuOpen ? 'mobile-open' : ''}`}
                    role="navigation"
                    aria-label="תפריט ראשי"
                >
                    <a href="#home" onClick={(e) => handleNavClick(e, null)}>בית</a>
                    <a href="#services" onClick={(e) => handleNavClick(e, refs.servicesRef)}>שירותים</a>
                    <a href="#packages" onClick={(e) => handleNavClick(e, refs.packagesRef)}>החבילות שלנו</a>
                    <a href="#process" onClick={(e) => handleNavClick(e, refs.processRef)}>התהליך שלנו</a>
                    <a href="#portfolio" onClick={(e) => handleNavClick(e, refs.portfolioRef)}>פרוייקטים נבחרים</a>
                    <a href="#about" onClick={(e) => handleNavClick(e, refs.aboutRef)}>הצוות שלנו</a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, refs.contactRef)}>צור קשר</a>
                </nav>
            </section>
        </header>
    )
}