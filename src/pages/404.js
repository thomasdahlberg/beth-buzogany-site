import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from "../components/head";
import styles from '../styles/404.module.scss';

const NotFound = () => {
    return (
        <Layout>
            <Head title="404" />
            <div className={styles.error}>
                <h2>Page Not Found</h2>
                <Link to="/">Return to Home Page</Link>
            </div>
        </Layout>
    )
}

export default NotFound