import React from "react";
import styles from "../styles/footer.module.scss";

const year = new Date().getFullYear()

const Footer = () => {
    return(
        <footer className={styles.footerSmall}>
            <a className={styles.contactSmall} href="mailto:thomas.dahlberg8@gmail.com">Thomas Dahlberg © {year}   |   thomas.dahlberg8(at)gmail(dot)com</a>
        </footer>
    )
}

export default Footer