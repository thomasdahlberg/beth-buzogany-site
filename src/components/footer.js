import React from "react";
import styles from "../styles/footer.module.scss";

const year = new Date().getFullYear()

const Footer = () => {
    return(
        <footer className={styles.footer}>
            <a 
                className={styles.contact}
                href="mailto:bethbuzogany@gmail.com"
            >
                Beth Buzogany © 2008 - {year} | bethbuzogany@gmail.com
            </a>
        </footer>
    )
}

export default Footer