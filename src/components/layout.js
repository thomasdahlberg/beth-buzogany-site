import React from 'react';
import Head from './head';
import Header from './header';
import Footer from './footer';
import styles from '../styles/layout.module.scss';

const Layout = (props) => {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <Head title={props.title} />
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