import React from "react"
import footerStyles from "./footer.module.scss"

const Footer = () => {
    return(
        <footer className={footerStyles.footer}>
            <p className={footerStyles.footerText}>Created by Thomas Dahlberg © 2020</p>
        </footer>
    )
}

export default Footer