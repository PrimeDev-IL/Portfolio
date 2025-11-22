import { appHeaderIcons } from "./svgIcons"

export function AppHeader({ scrollToSection, refs }) {
    const handleNavClick = (e, ref) => {
        e.preventDefault()
        if (ref) {
            scrollToSection(ref)
        } else {
            // For Home, scroll to top
            window.scrollTo({ top: 0, behavior: "smooth" })
        }
    }

    return (
        <header className="app-header full main-layout">
            <section className="header-container">
                <span className="logo align-center">{appHeaderIcons.appLogo}</span>
                <nav className="app-nav flex align-center">
                    <a href="#home" onClick={(e) => handleNavClick(e, null)}>Home</a>
                    <a href="#services" onClick={(e) => handleNavClick(e, refs.servicesRef)}>Services</a>
                    <a href="#portfolio" onClick={(e) => handleNavClick(e, refs.portfolioRef)}>Portfolio</a>
                    <a href="#about" onClick={(e) => handleNavClick(e, refs.aboutRef)}>About</a>
                    <a href="#contact" onClick={(e) => handleNavClick(e, refs.contactRef)}>Contact</a>
                </nav>
            </section>
        </header>
    )
}