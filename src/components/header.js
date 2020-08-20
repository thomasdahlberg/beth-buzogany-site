import React, { Fragment } from "react";
import Media from 'react-media';
import { Link } from "gatsby"
import headerStyles from './header.module.scss'

const Header = () => {
    return(
        <header>
            <Media queries={{
                small: "(max-width: 599px)",
                large: "(min-width: 600px)",
            }}>
            {matches => (
                <Fragment>
                    {matches.small && 
                    <div className={headerStyles.containerSmall}>
                        <a className={headerStyles.a} href="/"><h1 className={headerStyles.titleSmall}>Thomas Dahlberg</h1></a>
                        <nav>
                            <ul className={headerStyles.navListSmall}>
                                <li>
                                    <Link className={headerStyles.navItemSmall} to="/painting">Painting</Link>
                                </li>
                                <li>
                                    <Link className={headerStyles.navItemSmall} to="/sculpture">Sculpture</Link>
                                </li>
                                <li>
                                    <Link className={headerStyles.navItemSmall} to="/paper">Paper</Link>
                                </li>
                                <li>
                                    <Link className={headerStyles.navItemSmall} to="/collage">Collage</Link>
                                </li>
                                <li>
                                    <a className={headerStyles.navItemSmall} href="../cv/Dahlberg_CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    }
                    {matches.large &&
                    <div className={headerStyles.container}>
                        <a className={headerStyles.a} href="/"><h1 className={headerStyles.title}>Thomas Dahlberg</h1></a>
                        <nav>
                            <ul className={headerStyles.navList}>
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
                    </div>
                    }  
                </Fragment>
            )}
            </Media>
        </header>
    )
}
export default Header