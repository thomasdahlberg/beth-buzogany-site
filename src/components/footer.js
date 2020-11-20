import React from "react"
import footerStyles from "./footer.module.scss"

const Footer = () => {
    return(
        <footer className={footerStyles.footerSmall}>
            <a className={footerStyles.contactSmall} href="mailto:thomas.dahlberg8@gmail.com">Thomas Dahlberg © 2020   |   thomas.dahlberg8(at)gmail(dot)com</a>
        </footer>
    )
}

export default Footer