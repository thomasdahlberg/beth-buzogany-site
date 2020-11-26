import React from 'react';
import Header from './header';
import Footer from './footer';
import styles from '../styles/layout.module.scss';
import '../styles/index.scss';

const Layout = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.content}>
                {props.children}
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </div>
    )
}

export default Layout;