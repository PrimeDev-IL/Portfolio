import { AppHeader } from "./cmps/ApplicationCmps/AppHeader";

export function RootCmp() {
    return (
        <div className="main-container">
            <AppHeader />
            <main classname="full"></main>
        </div>
    )
}