import React from "react";
import Dropdown from "./dropdown";
import styles from '../styles/header.module.scss';

const Header = () => {
    return(
        <div className={styles.container}>
            <div>
                <h1 className={styles.h1} aria-describedby="job-title"><a className={styles.a} href="/">Beth Buzogany</a></h1>
                <div className={styles.wrapper}><h2 className={styles.h2} id="job-title">Food Stylist</h2></div>
            </div>
            <Dropdown />
        </div>
    )
}
export default Header