import React, { Component } from "react";
import Dropdown from "./dropdown";
import styles from '../styles/header.module.scss';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            responsive: true
        } 
    }

    render(){
        return(
            <div className={styles.container}>
                <a className={styles.a} href="/">Thomas Dahlberg</a>
                <Dropdown />
            </div>
        )
    }
}
export default Header