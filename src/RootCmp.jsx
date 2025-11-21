import { AppHeader } from "./cmps/ApplicationCmps/AppHeader";
import { AppFooter } from "./cmps/ApplicationCmps/AppFooter";
import { Hero } from "./cmps/hero";
import { OurTeam } from "./cmps/OurTeam";
import { Portfolio } from "./cmps/Portfolio";
import { Services } from "./cmps/Services";
import { Contact } from "./cmps/Contact";

export function RootCmp() {
    return (
        <div className="main-container">
            <AppHeader />
            <main classname="full">
                <Hero />
                <Services />
                <Portfolio />
                <OurTeam />
                <Contact />
            </main>
            <AppFooter />
        </div>
    )
}