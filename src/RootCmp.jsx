import { AppHeader } from "./cmps/ApplicationCmps/AppHeader";
import { AppFooter } from "./cmps/ApplicationCmps/AppFooter";
import { Hero } from "./cmps/hero";
import { OurTeam } from "./cmps/OurTeam";
import { Portfolio } from "./cmps/Portfolio";
import { Services } from "./cmps/Services";
import { Contact } from "./cmps/Contact";
import { useRef } from "react";

export function RootCmp() {
    const heroRef = useRef(null)
    const servicesRef = useRef(null)
    const portfolioRef = useRef(null)
    const aboutRef = useRef(null)
    const contactRef = useRef(null)

    const scrollToSection = (sectionRef) => {
        const headerOffset = 80;
        const elementPosition = sectionRef.current?.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    return (
        <div className="main-container">
            <AppHeader scrollToSection={scrollToSection} refs={{ heroRef, servicesRef, portfolioRef, aboutRef, contactRef }} />
            <main className="full">
                <Hero />
                <div ref={servicesRef}>
                    <Services />
                </div>
                <div ref={portfolioRef}>
                    <Portfolio />
                </div>
                <div ref={aboutRef}>
                    <OurTeam />
                </div>
                <div ref={contactRef}>
                    <Contact />
                </div>
            </main>
            <AppFooter />
        </div>
    )
}