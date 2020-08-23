import React from "react"
import footerStyles from "./footer.module.scss"

const Footer = () => {
    return(
        <footer className={footerStyles.footerSmall}>
            <a className={footerStyles.contactSmall} href="mailto:thomas.dahlberg8@gmail.com">thomas.dahlberg8(at)gmail(dot)com</a>
            <p className={footerStyles.footerTextSmall}>Thomas Dahlberg © 2020</p>
        </footer>
    )
}

export default Footer