import { AppHeader } from "./cmps/ApplicationCmps/AppHeader";
import { AppFooter } from "./cmps/ApplicationCmps/AppFooter";
import { OurTeam } from "./cmps/OurTeam";
import { Portfolio } from "./cmps/Portfolio";
import { Services } from "./cmps/Services";
import { Contact } from "./cmps/Contact";
import { useRef } from "react";
import { Packages } from "./cmps/Packages";
import { Hero } from "./cmps/Hero";
import { Process } from "./cmps/Process";
import { AccessibilityStatement } from "./cmps/AccessibilityStatement";
import { Routes, Route } from "react-router-dom";

export function RootCmp() {
    const heroRef = useRef(null)
    const servicesRef = useRef(null)
    const portfolioRef = useRef(null)
    const aboutRef = useRef(null)
    const contactRef = useRef(null)
    const packagesRef = useRef(null)
    const processRef = useRef(null)

    const scrollToSection = (sectionRef) => {
        if (!sectionRef || !sectionRef.current) {
            console.warn('Section ref is not available');
            return;
        }

        const headerOffset = 80;
        const elementPosition = sectionRef.current.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
        });
    }

    return (
        <>
            <Routes>
                <Route path="/accessibility-statement" element={<AccessibilityStatement />} />
                <Route path="/" element={
                    <>
                        <AppHeader scrollToSection={scrollToSection} refs={{ heroRef, servicesRef, portfolioRef, aboutRef, contactRef, packagesRef, processRef }} />
                        <div className="main-container">
                            <main className="full">
                                <Hero />
                                <div ref={servicesRef}>
                                    <Services />
                                </div>
                                <div ref={packagesRef}>
                                    <Packages />
                                </div>
                                <div ref={processRef}>
                                    <Process />
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
                            </main >
                            <AppFooter />
                        </div >
                    </>
                } />
            </Routes>
        </>
    )
}