import { NavLink } from "react-router-dom"
import { appHeaderIcons } from "./svgIcons"

export function AppHeader() {
    return (
        <header className="app-header full main-layout">
            <section className="header-container">
                <span className="logo align-center">{appHeaderIcons.appLogo}</span>
                <nav className="app-nav flex align-center">
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/'>Services</NavLink>
                    <NavLink to='/'>Portfolio</NavLink>
                    <NavLink to='/'>About</NavLink>
                    <NavLink to='/'>Contact</NavLink>
                </nav>
            </section>
        </header>
    )
}