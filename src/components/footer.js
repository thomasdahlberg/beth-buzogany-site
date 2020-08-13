import React from "react"
import footerStyles from "./footer.module.scss"

const Footer = () => {
    return(
        <footer className={footerStyles.footer}>
            <p className={footerStyles.contact}>thomas.dahlberg8(at)gmail(dot)com</p>
            <p className={footerStyles.footerText}>Thomas Dahlberg © 2020</p>
        </footer>
    )
}

export default Footer