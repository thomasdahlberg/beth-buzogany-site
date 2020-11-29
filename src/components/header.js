import React from "react";
import Dropdown from "./dropdown";
import styles from '../styles/header.module.scss';

const Header = () => {
    return(
        <div className={styles.container}>
            <a className={styles.a} href="/">Thomas Dahlberg</a>
            <Dropdown />
        </div>
    )
}
export default Header