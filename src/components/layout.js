import React from 'react';
import Head from './head';
import Header from './header';
import Footer from './footer';
import styles from '../styles/layout.module.scss';

const Layout = (props) => {
    return(
        <main className={styles.container}>
            <header className={styles.header}>
                <Head title={props.title} />
                <Header />
            </header>
            <div className={styles.content}>
                {props.children}
            </div>
            <div className={styles.footer}>
                <Footer />
            </div>
        </main>
    )
}

export default Layout;