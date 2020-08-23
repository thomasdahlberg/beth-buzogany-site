import React from "react";
import { Link } from "gatsby"
import headerStyles from './header.module.scss'

const Header = () => {
    return(
        <div className={headerStyles.containerSmall}>
            <a className={headerStyles.a} href="/"><h1 className={headerStyles.titleSmall}>Thomas Dahlberg</h1></a>
                <ul className={headerStyles.navListSmall}>
                    <li>
                        <Link className={headerStyles.navItemSmall} activeClassName ={headerStyles.activeNavItem} to="/painting">Painting</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItemSmall} activeClassName ={headerStyles.activeNavItem} to="/sculpture">Sculpture</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItemSmall} activeClassName ={headerStyles.activeNavItem} to="/paper">Paper</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItemSmall} activeClassName ={headerStyles.activeNavItem} to="/collage">Collage</Link>
                    </li>
                    <li>
                        <a className={headerStyles.navItemSmall} href="../cv/Dahlberg_CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
                    </li>
                </ul>
        </div>
    )
}
export default Header