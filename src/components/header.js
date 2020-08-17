import React from "react"
import { Link } from "gatsby"
import headerStyles from './header.module.scss'

const Header = () => {
    return(
        <header className={headerStyles.container}>
            <h1 className={headerStyles.title}>Thomas Dahlberg</h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <a className={headerStyles.navItem} href="/">Home</a>
                    </li>
                    <li className={headerStyles.dropdown}>
                        <a className={headerStyles.dropbtn} href="/">Work</a>
                            <div className={headerStyles.dropdownContent}>
                                <Link to="/painting">Painting</Link>
                                <Link to="/sculpture">Sculpture</Link>
                                <Link to="/paper">Paper</Link>
                                <Link to="/collage">Collage</Link>
                            </div>
                    </li>
                    <li>
                        <a className={headerStyles.navItem} href="../cv/Dahlberg_CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Header