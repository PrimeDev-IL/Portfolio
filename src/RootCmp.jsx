import { AppHeader } from "./cmps/ApplicationCmps/AppHeader";
import { Hero } from "./cmps/hero";

export function RootCmp() {
    return (
        <div className="main-container">
            <AppHeader />
            <main classname="full">
                <Hero />
            </main>
        </div>
    )
}