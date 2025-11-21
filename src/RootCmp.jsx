import { AppHeader } from "./cmps/ApplicationCmps/AppHeader";
import { Hero } from "./cmps/hero";
import { Portfolio } from "./cmps/Portfolio";
import { Services } from "./cmps/Services";

export function RootCmp() {
    return (
        <div className="main-container">
            <AppHeader />
            <main classname="full">
                <Hero />
                <Services />
                <Portfolio />
            </main>
        </div>
    )
}