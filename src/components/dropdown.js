import React, { Component } from 'react';
import { Link } from 'gatsby';
import styles from '../styles/dropdown.module.scss';

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
                    <button onClick={this.handleDropdown} aria-label="site navigation dropdown menu">
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
                <div 
                    className={styles.list}
                    ref={this.dropdown}
                >
                    <Link
                        className={styles.navItemSmall}
                        to="/painting"
                    >
                        Painting
                    </Link>
                    <Link
                        className={styles.navItemSmall}
                        to="/sculpture"
                    >
                        Sculpture
                    </Link>
                    <Link
                        className={styles.navItemSmall}
                        to="/paper"
                    >
                        Paper
                    </Link>
                    <Link
                        className={styles.navItemSmall}
                        to="/collage"
                    >
                        Collage
                    </Link>
                    <a
                        className={styles.navItemSmall}
                        href="../cv/Dahlberg_CV.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        CV
                    </a>
                </div>
            </div>
        )
    }
}

export default Dropdown;