import React from "react";
import Dropdown from "./dropdown";
import styles from '../styles/header.module.scss';

const Header = () => {
    return(
        <div className={styles.container}>
            <h1 className={styles.h1}><a className={styles.a} href="/">Thomas Dahlberg</a></h1>
            <Dropdown />
        </div>
    )
}
export default Header