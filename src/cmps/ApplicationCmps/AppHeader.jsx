import { appHeaderIcons } from "./svgIcons"
import { useState } from "react"

export function AppHeader({ scrollToSection, refs }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const handleNavClick = (e, ref) => {
        e.preventDefault()
        setIsMenuOpen(false) // Close menu on navigation
        if (ref) {
            scrollToSection(ref)
        } else {
            // For Home, scroll to top
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className="app-header full">
            <section className="header-container">
                <span className="logo align-center">{appHeaderIcons.appLogo}</span>

                <button className="burger-menu" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
                    <span className={`burger-line ${isMenuOpen ? 'open' : ''}`}></span>
                </button>

                <nav className={`app-nav flex align-center ${isMenuOpen ? 'mobile-open' : ''}`}>
                    <a href="#home" onClick={(e) => handleNavClick(e, null)}>בית</a>
                    <a href="#services" onClick={(e) => handleNavClick(e, refs.servicesRef)}>שירותים</a>
                    <a href="#services" onClick={(e) => handleNavClick(e, refs.packagesRef)}>החבילות שלנו</a>
                    <a href="#services" onClick={(e) => handleNavClick(e, refs.processRef)}>התהליך שלנו</a>
                    <a href="#portfolio" onClick={(e) => handleNavClick(e, refs.portfolioRef)}>פרוייקטים נבחרים</a>
                    <a href="#about" onClick={(e) => handleNavClick(e, refs.aboutRef)}>הצוות שלנו</a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, refs.contactRef)}>צור קשר</a>
                </nav>
            </section>
        </header>
    )
}