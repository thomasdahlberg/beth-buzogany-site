import React, { Component } from "react";
import Dropdown from "./dropdown";
import headerStyles from './header.module.scss';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            responsive: true
        } 
    }

    render(){
        return(
            <div className={headerStyles.containerSmall}>
                <a className={headerStyles.a} href="/">Thomas Dahlberg</a>
                <Dropdown />
            </div>
        )
    }
}
export default Header