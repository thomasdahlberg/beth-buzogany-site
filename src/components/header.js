import React from "react"
import { Link } from "gatsby"
import headerStyles from './header.module.scss'

const Header = () => {
    return(
        <header>
            <h1>Thomas Dahlberg</h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <a className={headerStyles.navItem} activeClassName ={headerStyles.activeNavItem} to="/">Home</a>
                    </li>
                    <li>
                        <a className={headerStyles.navItem} activeClassName ={headerStyles.activeNavItem} href="#projects">Work</a>
                    </li>
                    <li>
                        <a className={headerStyles.navItem} activeClassName ={headerStyles.activeNavItem} href="../resume/Dahlberg_Resume.pdf" target="_blank" rel="noopener noreferrer">CV</a>
                    </li>
                    <li>
                        <a className={headerStyles.navItem} activeClassName ={headerStyles.activeNavItem} href="#email">Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header