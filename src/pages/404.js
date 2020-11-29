import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import Head from "../components/head";


const NotFound = () => {
    return (
        <Layout>
            <Head title="404" />
            <h1>Page Not Found</h1>
            <Link to="/">Return to Home Page</Link>
        </Layout>
    )
}

export default NotFound