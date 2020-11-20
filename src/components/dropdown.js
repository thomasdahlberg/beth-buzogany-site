import React, { Fragment, Component } from 'react';
import { Link } from 'gatsby';
import styles from './Dropdown.module.scss';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.dropdown = React.createRef();
    }
    state = this.getInitialState();

    getInitialState() {
        return {
            user: this.props.user,
            listOpen: false
        }
    }

    handleDropdown = (e) => {
        e.preventDefault();
        let listNode = this.dropdown.current;
        if (listNode.style.display === 'none') {
            listNode.style.display = 'flex';
        } else {
            listNode.style.display = 'none';
        }
    }

    handleDropdownClick = (e) => {
        e.preventDefault();
        if(e.target.id === "logout") {
            this.props.handleLogout();
        }
        let listNode = this.dropdown.current;
        listNode.style.display = 'none';
    }

    render() {
        return(
            <div className={styles.wrapper}>
                <div className={styles.container}>
                    <button href="#" onClick={this.handleDropdown}><i class="fa fa-arrow-right" aria-hidden="true"></i>&nbsp;&nbsp;<i class="fa fa-bars"></i></button>
                </div>
                <div className={styles.list} ref={this.dropdown} >
                    <Link className={styles.navItemSmall} activeClassName ={styles.activeNavItem} to="/painting">Painting</Link>
                    <Link className={styles.navItemSmall} activeClassName ={styles.activeNavItem} to="/sculpture">Sculpture</Link>
                    <Link className={styles.navItemSmall} activeClassName ={styles.activeNavItem} to="/paper">Paper</Link>
                    <Link className={styles.navItemSmall} activeClassName ={styles.activeNavItem} to="/collage">Collage</Link>
                    <a className={styles.navItemSmall} href="../cv/Dahlberg_CV.pdf" target="_blank" rel="noopener noreferrer">CV</a>
                </div>
            </div>
        )
    }
}

export default Dropdown;